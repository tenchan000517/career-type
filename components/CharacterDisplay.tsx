'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CareerType } from '@/data/types'

interface CharacterDisplayProps {
  type: CareerType
  size?: 'small' | 'medium' | 'large'
}

export default function CharacterDisplay({ type, size = 'medium' }: CharacterDisplayProps) {
  const sizes = {
    small: { width: 80, height: 80 },
    medium: { width: 160, height: 160 },
    large: { width: 240, height: 240 },
  }

  const { width, height } = sizes[size]

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      }}
      className="mx-auto"
    >
      <Image
        src={type.image}
        alt={type.name}
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </motion.div>
  )
}
