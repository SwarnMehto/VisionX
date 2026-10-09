import { motion } from 'framer-motion'

interface RobotProps {
  size?: number
  className?: string
}

function Robot({ size = 56, className = '' }: RobotProps) {
  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -3, 0],
      }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute rounded-full bg-cyan-400/20 blur-xl"
        style={{
          width: size * 0.85,
          height: size * 0.85,
        }}
      />

      {/* Vision X Logo */}
      <img
        src="/logos/visionx-logo.png"
        alt="Vision X"
        className="relative z-10 h-full w-full object-contain"
        draggable={false}
      />

      {/* Digital status light */}
      <span
        className="absolute right-[8%] top-[8%] z-20 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
        style={{
          width: Math.max(4, size * 0.08),
          height: Math.max(4, size * 0.08),
        }}
      />
    </motion.div>
  )
}

export default Robot