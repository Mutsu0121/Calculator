import React from 'react'
import './App.css'
import Result from './components/Result'
import CalButton from './components/Button'

function App() {
  return (
    <React.Fragment>
      <div className="result">
        <Result result={'結果'} />
      </div>
      <div className="wrapper">
        <div className="ope">
          <CalButton n={'AC'} />
          <CalButton n={'C'} />
        </div>
        <div className="Button">
          <div className="button">
            <CalButton n={7} />
            <CalButton n={8} />
            <CalButton n={9} />
          </div>
          <div className="button">
            <CalButton n={4} />
            <CalButton n={5} />
            <CalButton n={6} />
          </div>
          <div className="button">
            <CalButton n={1} />
            <CalButton n={2} />
            <CalButton n={3} />
          </div>
          <div className="button">
            <CalButton n={0} />
            <CalButton n={'.'} />
            <CalButton n={'='} />
          </div>
        </div>
        <div className="ope">
          <CalButton n={'+'} />
          <CalButton n={'-'} />
          <CalButton n={'×'} />
          <CalButton n={'÷'} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
