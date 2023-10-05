import { motion } from 'framer-motion';

const animations = {
  initial: {opacity: 0, x: 100},
  animate: {opacity: 1, x: 0},
  exit: {opacity: 0, x: -100}
}

const Transition = () => {
  return () => {
    <>
      {/* <OgComponent/>
      <motion.div
          className='slide-in'
          initial={{ scaleY: 0}}
          animate={{ scaleY: 0}}
          exit={{ scaleY: 1}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
          className='slide-out'
          initial={{ scaleY: 1}}
          animate={{ scaleY: 1}}
          exit={{ scaleY: 0}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      /> */}
      <motion.div 
      variants={animations} 
      initial='initial' 
      animate='animate' 
      exit='exit'
      >
        
      </motion.div>

    </>
  }
}

export default Transition;