import React from 'react'

interface Props {
  title: string
}

export default function Title({ title }: Props) {
  return (
    <h1
      data-testid="title"
      aria-label="app title"
      className="text-center py-6 text-green-200 bg-red-200 font-3xl xl:font-4xl"
    >
      {title}
    </h1>
  )
}
