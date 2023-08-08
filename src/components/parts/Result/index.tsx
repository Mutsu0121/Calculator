import React from 'react'

type Props = {
  formula: string
  result: string
}
export default function Result({ formula, result }: Props) {
  return (
    <>
      <div className="inputValue">{formula}</div>
      <div className="resultValue">{result}</div>
    </>
  )
}
