import React from 'react'

interface Props {
  quote: string
}

export default function Quote({ quote }: Props) {
  return (
    <>
      <blockquote
        data-testid="quote"
        aria-label="quote"
        className="text-center p-8 w-fit text-white bg-gray-900 font-bld mt-36 mx-auto border-radius-medium xl:font-lg"
      >
        &quot;
        {quote}
        &quot;
      </blockquote>
      <p aria-label="quote by" className="text-center p-8 xl:font-lg">
        <i>- Kanye West</i>
      </p>
    </>
  )
}
