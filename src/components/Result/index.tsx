import React from 'react'

type Props = { result: string; value: string }
export default function Result({ result, value }: Props) {
  const value = value
  return <div className="resultValue">{result}</div>
}
