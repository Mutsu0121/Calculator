import React, { useCallback, useEffect, useRef } from 'react'
import noOperation from '../../../utils/noOperation'
//string型を足し算していくと"後ろに"桁数が増えていく 例：最初に1,次に2を入力した場合、1 -> 12 となる
//電卓を作るならこの挙動を使いたい…
type Props = {
  char: string | number
  onClick: () => void
  value?: string
}

export default function Button({
  char,
  value = undefined,
  onClick = noOperation,
}: Props) {
  const refValue = useRef({ value, onClick })
  useEffect(() => {
    refValue.current = { value, onClick }
  }, [value, onClick])

  const handleClick = useCallback(() => {
    refValue.current.onClick()
  }, [])
  return <button onClick={handleClick}>{char}</button>
}
