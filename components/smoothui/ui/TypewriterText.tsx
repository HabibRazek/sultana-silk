'use client'

import { useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface TypewriterTextProps {
  /** The text content to be typed out */
  children: string
  /** Typing speed in milliseconds between characters */
  typingSpeed?: number
  /** Whether to loop the animation */
  shouldLoop?: boolean
  /** Additional CSS classes */
  className?: string
  /** Delay before starting animation in milliseconds */
  startDelay?: number
  /** Whether to show blinking cursor */
  showCursor?: boolean
}

export default function TypewriterText({
  children,
  typingSpeed = 50,
  shouldLoop = false,
  className,
  startDelay = 0,
  showCursor = false
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const startTypingAnimation = useCallback(() => {
    setIsTyping(true)
    setCurrentIndex(0)
    setDisplayedText('')
  }, [])

  const resetAnimation = useCallback(() => {
    setDisplayedText('')
    setCurrentIndex(0)
    setIsTyping(true)
  }, [])

  // Initialize typing animation with optional delay
  useEffect(() => {
    if (startDelay > 0) {
      const delayTimer = setTimeout(startTypingAnimation, startDelay)
      return () => clearTimeout(delayTimer)
    } else {
      startTypingAnimation()
    }
  }, [startDelay, startTypingAnimation])

  // Handle character-by-character typing
  useEffect(() => {
    if (!isTyping || currentIndex >= children.length) {
      if (currentIndex >= children.length) {
        setIsTyping(false)

        if (shouldLoop) {
          const resetTimer = setTimeout(resetAnimation, 2000)
          return () => clearTimeout(resetTimer)
        }
      }
      return
    }

    const typingTimer = setTimeout(() => {
      setDisplayedText(prev => prev + children[currentIndex])
      setCurrentIndex(prev => prev + 1)
    }, typingSpeed)

    return () => clearTimeout(typingTimer)
  }, [currentIndex, children, typingSpeed, isTyping, shouldLoop, resetAnimation])

  return (
    <span className={cn('inline-block', className)}>
      {displayedText}
      {showCursor && (
        <span className="inline-block w-0.5 h-[1em] bg-current ml-1 animate-pulse" />
      )}
    </span>
  )
}
