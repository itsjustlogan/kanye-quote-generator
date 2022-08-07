import React from 'react'

interface Props {
  label: string
  handleClick: () => void
}

export default function Button({ label, handleClick }: Props) {
  return (
    <div className="grid md:pt-40">
      <button
        data-testid="button"
        type="button"
        className="mx-auto border-none border-radius-medium bg-red-200 text-white font-bld py-3 px-2 font-lg xl:font-xl cursor-pointer hover:scale-90 transition-1"
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  )
}
