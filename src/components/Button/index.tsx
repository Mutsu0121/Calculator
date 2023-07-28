import React from 'react'

type Props = {
  n: number | string
  onClick: () => void
}

export default function CalButton({ n, onClick }: Props) {
  return <button onClick={onClick}>{n}</button>
}
