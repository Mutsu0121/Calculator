import React from 'react'
//string型を足し算していくと"後ろに"桁数が増えていく 例：最初に1,次に2を入力した場合、1 -> 12 となる
//電卓を作るならこの挙動を使いたい…
type Props = {
  char: string | number
  onClick: () => void
}

export default function Button({ char, onClick }: Props) {
  return <button onClick={onClick}>{char}</button>
}
