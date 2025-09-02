'use client'

import Image from 'next/image'

export default function ImageSeparator() {
  return (
    <section className="w-full">
      <div className="relative w-full h-32 md:h-48 lg:h-64">
        <Image
          src="/sultana-separator.jpeg"
          alt="Sultana Silk Separator"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
