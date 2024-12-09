import React from 'react'
import { motion as m } from 'framer-motion';

const Loading = () => {
  return (
    <div className="flex justify-center items-center gap-2 h-screen bg-[#050922]">
      
      <m.div initial={{y: -1000}} animate={{y :0}} className="text-4xl font-bold text-white" transition={{delay:0, stiffness: 50, type: "spring"}}>
        L
      </m.div>
      <m.h1 initial={{y: -1000}} animate={{y:0}} className="text-4xl font-bold text-white" transition={{delay:0.2, stiffness: 50, type: "spring"}}>
        O
      </m.h1>
      <m.div initial={{y: -1000}} animate={{y: 0}} className="text-4xl font-bold text-white" transition={{delay:0.4, stiffness: 50, type: "spring"}}>
        A
      </m.div>
      <m.div initial={{y: -1000}} animate={{y: 0}} className="text-4xl font-bold text-white" transition={{delay:0.6, stiffness: 50, type: "spring"}}>
        D
      </m.div>
      <m.div initial={{y: -1000}} animate={{y: 0}} className="text-4xl font-bold text-white" transition={{delay:0.8, stiffness: 50, type: "spring"}}>
        I
      </m.div>
      <m.div initial={{y: -1000}} animate={{y: 0}} className="text-4xl font-bold text-white" transition={{delay:1.0, stiffness: 50, type: "spring"}}>
        N
      </m.div>
      <m.div initial={{y: -1000}} animate={{y: 0}} className="text-4xl font-bold text-white" transition={{delay:1.2, stiffness: 50, type: "spring"}}>
        G
      </m.div>
    </div>
  )
}

export default Loading
