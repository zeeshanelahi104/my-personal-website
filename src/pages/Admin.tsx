import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Upload, Trash2, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { projects } from '@/lib/projects';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
});

export default function Admin() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [allMedia, setAllMedia] = useState<any[]>([]);
  const { toast } = useToast();

  const fetchAllMedia = async () => {
    setIsFetching(true);
    try {
      const response = await api.get('/api/media/all');
      setAllMedia(response.data);
    } catch (error: any) {
      console.error('Fetch error:', error);
      toast({
        title: 'Error',
        description: error.response?.data?.message || 'Failed to fetch media',
        variant: 'destructive'
      });
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchAllMedia();
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile || !activeProjectId) {
      toast({ title: 'Error', description: 'Please select a file and project', variant: 'destructive' });
      return;
    }

    setIsLoading(true);
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = async () => {
      try {
        await api.post('/api/media/upload', {
          file: reader.result,
          projectId: activeProjectId,
        });
        toast({ title: 'Success', description: 'File uploaded successfully' });
        setSelectedFile(null);
        setPreviewUrl(null);
        fetchAllMedia();
        const input = document.querySelector('input[type="file"]') as HTMLInputElement;
        if (input) input.value = '';
      } catch (error: any) {
        toast({
          title: 'Upload Error',
          description: error.response?.data?.message || 'Upload failed',
          variant: 'destructive'
        });
      } finally {
        setIsLoading(false);
      }
    };
  };

  const deleteFile = async (publicId: string, resourceType: string) => {
    try {
      console.log(`Deleting ${publicId} with type ${resourceType}`);
      const response = await api.post('/api/media/delete', {
        public_id: publicId,
        resource_type: resourceType
      });

      if (response.status === 200) {
        setAllMedia(prev => prev.filter(m => m.public_id !== publicId));
        toast({ title: 'Success', description: 'File deleted successfully' });
      }
    } catch (error: any) {
      console.error('Delete error:', error.response?.data);
      toast({
        title: 'Delete Failed',
        description: error.response?.data?.message || 'Check server logs',
        variant: 'destructive'
      });
    }
  };

  const mediaByProject = useMemo(() => {
    const grouped: any = { all: allMedia, others: [] };
    allMedia.forEach(m => {
      const projectTag = m.tags?.find((t: string) => projects.some(p => p.id === t));
      if (projectTag) {
        if (!grouped[projectTag]) grouped[projectTag] = [];
        grouped[projectTag].push(m);
      } else {
        grouped.others.push(m);
      }
    });
    return grouped;
  }, [allMedia]);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#030014]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Admin Dashboard
            </h1>
            <p className="text-gray-400 mt-2">Manage your portfolio media assets</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="bg-white/[0.03] border-white/10 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">Upload Media</CardTitle>
                <CardDescription className="text-gray-400">Add new images or videos to projects</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpload} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Target Project</label>
                    <select
                      value={activeProjectId}
                      onChange={(e) => setActiveProjectId(e.target.value)}
                      className="w-full bg-white/10 border-white/20 rounded-md p-2 text-white text-sm outline-none focus:ring-2 focus:ring-blue-500/50"
                    >
                      {projects.map(p => (
                        <option key={p.id} value={p.id} className="bg-[#1a1a2e] text-white">{p.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">File</label>
                    <Input
                      type="file"
                      onChange={handleFileSelect}
                      accept="image/*,video/*"
                      className="bg-white/10 border-white/20 text-white cursor-pointer file:bg-blue-600 file:text-white file:border-0 file:rounded-md file:px-4 file:py-1 file:mr-4 file:hover:bg-blue-700"
                    />
                  </div>

                  {previewUrl && (
                    <div className="aspect-video rounded-lg overflow-hidden border border-white/10 bg-black/40">
                      {selectedFile?.type.startsWith('image') ? (
                        <img src={previewUrl} className="w-full h-full object-contain" alt="Preview" />
                      ) : (
                        <video src={previewUrl} className="w-full h-full object-contain" controls />
                      )}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading || !selectedFile}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-6"
                  >
                    {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Upload className="mr-2 h-5 w-5" />}
                    Upload Media
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-white/[0.03] border-white/10 backdrop-blur-xl min-h-[600px] flex flex-col">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Media Library</CardTitle>
                    <CardDescription className="text-gray-400">Recursive search in /portfolio folder</CardDescription>
                  </div>
                  <Button variant="ghost" size="icon" onClick={fetchAllMedia} className="text-gray-400 hover:text-white">
                    <Loader2 className={isFetching ? "animate-spin" : ""} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col">
                <Tabs defaultValue="all" onValueChange={setActiveProjectId} className="flex-1 flex flex-col">
                  <div className="px-6 py-2 border-b border-white/10">
                    <div className="overflow-x-auto scrollbar-hide">
                      <TabsList className="bg-transparent gap-2 h-12 inline-flex min-w-full">
                        <TabsTrigger value="all" className="text-gray-400 data-[state=active]:text-blue-400 data-[state=active]:bg-blue-400/10 rounded-full px-4">
                          All <Badge className="ml-2 bg-white/10 text-[10px]">{allMedia.length}</Badge>
                        </TabsTrigger>
                        {projects.map(p => (
                          <TabsTrigger key={p.id} value={p.id} className="text-gray-400 data-[state=active]:text-blue-400 data-[state=active]:bg-blue-400/10 rounded-full px-4 whitespace-nowrap">
                            {p.title} <Badge className="ml-2 bg-white/10 text-[10px]">{mediaByProject[p.id]?.length || 0}</Badge>
                          </TabsTrigger>
                        ))}
                        <TabsTrigger value="others" className="text-gray-400 data-[state=active]:text-blue-400 data-[state=active]:bg-blue-400/10 rounded-full px-4">
                          Others <Badge className="ml-2 bg-white/10 text-[10px]">{mediaByProject.others?.length || 0}</Badge>
                        </TabsTrigger>
                      </TabsList>
                    </div>
                  </div>

                  <div className="p-6 flex-1 overflow-y-auto max-h-[600px]">
                    {isFetching ? (
                      <div className="flex flex-col items-center justify-center h-[400px] space-y-4 opacity-50">
                        <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
                        <p>Syncing Library...</p>
                      </div>
                    ) : (
                      <>
                        <TabsContent value="all" className="mt-0">
                          <MediaGrid media={allMedia} onDelete={deleteFile} />
                        </TabsContent>
                        {projects.map(p => (
                          <TabsContent key={p.id} value={p.id} className="mt-0">
                            <MediaGrid media={mediaByProject[p.id] || []} onDelete={deleteFile} />
                          </TabsContent>
                        ))}
                        <TabsContent value="others" className="mt-0">
                          <MediaGrid media={mediaByProject.others || []} onDelete={deleteFile} />
                        </TabsContent>
                      </>
                    )}
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function MediaGrid({ media, onDelete }: { media: any[], onDelete: (id: string, rType: string) => void }) {
  if (!media || media.length === 0) {
    return (
      <div className="col-span-full py-20 text-center space-y-4 opacity-30">
        <Upload className="w-12 h-12 mx-auto" />
        <p>No media found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {media.map((m: any) => (
        <div key={m.public_id} className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/40">
          {m.type === 'video' ? (
            <video src={m.url} className="w-full h-full object-cover" />
          ) : (
            <img src={m.url} className="w-full h-full object-cover" alt="" />
          )}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4">
            <a href={m.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-500 rounded-full hover:scale-110">
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
            <button
              onClick={() => onDelete(m.public_id, m.resource_type)}
              className="p-2 bg-red-500 rounded-full hover:scale-110"
            >
              <Trash2 className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="absolute bottom-2 left-2 right-2">
            <p className="text-[10px] text-gray-400 truncate bg-black/40 px-1 rounded">{m.public_id.split('/').pop()}</p>
          </div>
          {m.type === 'video' && (
            <div className="absolute top-2 left-2 p-1 bg-black/50 rounded text-[10px] font-bold">VIDEO</div>
          )}
        </div>
      ))}
    </div>
  );
}
