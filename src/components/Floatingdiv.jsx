import React from 'react'

const Floatingdiv = ({amplitude = 20, duration = 2, className ='', children}) => {
  return (
    <motion.div 
    className={`absolute ${className}`}
      style={style}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}>
        {children}
      </motion.div>
  )
}

export default Floatingdiv