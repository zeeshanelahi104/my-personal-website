// "use client";
// import { AnimatePresence, motion } from "motion/react";
// import { usePathname } from "next/navigation";

// interface Props {
//   children: React.ReactNode;
//   className?: string;
// }

// const PageTransition = ({ children}: Props) => {
//   const pathname = usePathname();
//   return (
//     <AnimatePresence>
//       <div key={pathname}>
//         <motion.div 
//         initial={{opacity:1}}
//         animate={{opacity:0}}
//         transition={{
//             delay:1,
//             duration:0.4,
//             ease: "easeInOut",    
//         }
//     }
//         className="h-screen w-screen fixed bg-bodyColor top pointer-events-none">
//         </motion.div>
//           {children}
//       </div>
//     </AnimatePresence>
//   );
// };

// export default PageTransition;




"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const PageTransition = ({ children }: Props) => {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1]
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
          },
          exitState: {
            opacity: 0,
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
          }
        }}
      >
        {children}
        
        <motion.div
          className="fixed inset-0 bg-bodyColor z-[9999]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ 
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1]
          }}
        />
        
        <motion.div
          className="fixed inset-0 bg-indigo-600 z-[9998]"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ 
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;