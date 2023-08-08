import React, { useState } from 'react'
import './App.css'
import Result from './components/parts/Result'
import Button from './components/parts/Button'
//ok 数字を押したとき表示部分に表示できる
//ok 数字を押したとき桁数(文字列)が増える
//TODO ACが押されたら全ての保存されたデータを破棄
//ok Cが押されたら現在入力していた数値入力前に戻る（一つ目の数値と四則演算が入力されていたら保持）
//ok 四則演算ボタンを押したとき、入力した数値と四則演算をuseStateで保存
//ok 2つ目の数値を保存
//
//TODO ＝が押されたら計算を行う
//TODO 計算結果を表示
//
//TODO小数点は一個だけ表示
//TODO 最初に小数点を押したとき先頭に0がつく
function App() {
  const initialValue = ''
  const initialView = ''
  const Confirm = 0
  const [inputValue, setInputValue] = useState(initialValue)
  const [resultValue, setResultValue] = useState(initialValue)
  const [viewValue, setViewValue] = useState(initialView)
  console.log(inputValue, 'inputValue')
  console.log(resultValue, 'resultValue')
  console.log(`${Confirm}`, 'Confirm')

  return (
    <>
      <div className="result">
        <Result formula={viewValue} result={inputValue} />
      </div>
      <div className="wrapper">
        <div className="ope">
          <Button
            char={'AC'}
            onClick={() => {
              setInputValue(initialValue)
              setResultValue(initialValue)
              setViewValue(initialView)
            }}
          />
          <Button char={'C'} onClick={() => setInputValue(initialValue)} />
        </div>
        <div className="Button">
          <div className="button">
            <Button char={7} onClick={() => setInputValue(inputValue + '7')} />
            <Button char={8} onClick={() => setInputValue(inputValue + '8')} />
            <Button char={9} onClick={() => setInputValue(inputValue + '9')} />
          </div>
          <div className="button">
            <Button char={4} onClick={() => setInputValue(inputValue + '4')} />
            <Button char={5} onClick={() => setInputValue(inputValue + '5')} />
            <Button char={6} onClick={() => setInputValue(inputValue + '6')} />
          </div>
          <div className="button">
            <Button char={1} onClick={() => setInputValue(inputValue + '1')} />
            <Button char={2} onClick={() => setInputValue(inputValue + '2')} />
            <Button char={3} onClick={() => setInputValue(inputValue + '3')} />
          </div>
          <div className="button">
            <Button char={0} onClick={() => setInputValue(inputValue + '0')} />
            <Button char={'.'} onClick={() => console.log('clicked .')} />
            <Button char={'='} onClick={() => console.log('clicked =')} />
          </div>
        </div>
        <div className="ope">
          <Button
            char={'+'}
            onClick={() => {
              setViewValue(inputValue + '+')
              setResultValue(inputValue)
              setInputValue(initialValue)
            }}
          />
          <Button char={'-'} onClick={() => console.log('clicked -')} />
          <Button char={'×'} onClick={() => console.log('clicked *')} />
          <Button char={'÷'} onClick={() => console.log('clicked ÷')} />
        </div>
      </div>
    </>
  )
}

export default App
