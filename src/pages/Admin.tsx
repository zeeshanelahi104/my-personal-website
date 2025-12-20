import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Upload, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Admin() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [projectId, setProjectId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile || !projectId) {
      toast({
        title: 'Error',
        description: 'Please select a file and enter a project ID',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    // Read file as base64 or send as FormData
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = async () => {
      const base64data = reader.result;

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL || ''}/api/media/upload`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              file: base64data,
              projectId: projectId,
            }),
          }
        );

        const data = await response.json();

        if (response.ok && data.url) {
          setUploadedFiles([...uploadedFiles, data]);
          setSelectedFile(null);
          setProjectId('');

          toast({
            title: 'Success',
            description: 'File uploaded successfully via backend',
          });

          // Reset file input
          const input = document.querySelector('input[type="file"]') as HTMLInputElement;
          if (input) input.value = '';
        } else {
          throw new Error(data.message || 'Upload failed');
        }
      } catch (error: any) {
        console.error('Upload error:', error);
        toast({
          title: 'Error',
          description: error.message || 'Failed to upload file',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };
  };

  const deleteFile = async (publicId: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/media/delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ public_id: publicId }),
      });

      if (response.ok) {
        setUploadedFiles(uploadedFiles.filter(f => f.public_id !== publicId));
        toast({
          title: 'Success',
          description: 'File deleted successfully',
        });
      }
    } catch (error) {
      console.error('Delete error:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete file',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Upload Media</CardTitle>
            <CardDescription>Upload images/videos to Cloudinary</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Project ID</label>
                <Input
                  type="text"
                  placeholder="e.g., yarnwise, portfolio"
                  value={projectId}
                  onChange={(e) => setProjectId(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Select File</label>
                <Input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileSelect}
                />
                {selectedFile && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Selected: {selectedFile.name}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading || !selectedFile || !projectId}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload to Cloudinary
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {uploadedFiles.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Uploaded Files ({uploadedFiles.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {uploadedFiles.map((file) => (
                  <div
                    key={file.public_id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium break-all">{file.public_id}</p>
                      <p className="text-sm text-muted-foreground">
                        {(file.bytes / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteFile(file.public_id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
