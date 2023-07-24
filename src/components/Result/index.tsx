import React from 'react'

const Result = ({ result }: Props) => (
  <div className="resultValue">{result}</div>
)

type Props = { result: string }

export default Result
