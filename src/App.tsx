import React from 'react'
import './App.css'
import Result from './components/Result'
import Button from './components/Button'
//TODO 数字を押したとき表示部分に表示できる
//TODO 数字を押したとき桁数が増える
//TODO 小数点以下も入力できる
//TODO 四則演算ボタンを押したとき入力した数値と四則演算をuseStateで保存
//TODO 2つ目の数値を保存
//TODO ＝が押されたら計算を行う
//TODO 計算結果を表示
//TODO ACが押されたら全ての保存されたデータを破棄
//TODO Cが押されたら2つ目の数値入力前（一つ目の数値と四則演算は保持）に戻る
function App() {
  return (
    <React.Fragment>
      <div className="result">
        <Result result={'結果'} />
      </div>
      <div className="wrapper">
        <div className="ope">
          <Button n={'AC'} onClick={() => console.log('clicked AC')} />
          <Button n={'C'} onClick={() => console.log('clicked C')} />
        </div>
        <div className="Button">
          <div className="button">
            <Button n={7} onClick={() => console.log('clicked 7')} />
            <Button n={8} onClick={() => console.log('clicked 8')} />
            <Button n={9} onClick={() => console.log('clicked 9')} />
          </div>
          <div className="button">
            <Button n={4} onClick={() => console.log('clicked 4')} />
            <Button n={5} onClick={() => console.log('clicked 5')} />
            <Button n={6} onClick={() => console.log('clicked 6')} />
          </div>
          <div className="button">
            <Button n={1} onClick={() => console.log('clicked 1')} />
            <Button n={2} onClick={() => console.log('clicked 2')} />
            <Button n={3} onClick={() => console.log('clicked 3')} />
          </div>
          <div className="button">
            <Button n={0} onClick={() => console.log('clicked 0')} />
            <Button n={'.'} onClick={() => console.log('clicked .')} />
            <Button n={'='} onClick={() => console.log('clicked =')} />
          </div>
        </div>
        <div className="ope">
          <Button n={'+'} onClick={() => console.log('clicked +')} />
          <Button n={'-'} onClick={() => console.log('clicked -')} />
          <Button n={'×'} onClick={() => console.log('clicked ×')} />
          <Button n={'÷'} onClick={() => console.log('clicked ÷')} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
