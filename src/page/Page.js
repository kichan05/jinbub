import styled from "styled-components";
import {UI_ACTION_TYPE, useUiDispatch, useUiState} from "../context/UiReducer";
import Button from "../component/Button";
import {PageBasicStyle} from "../style/BasicStyle";
import {useEffect, useState} from "react";
import Input from "../component/Input";

const PageStyle = styled.div`
  ${PageBasicStyle};

  & > .content {

  }
`

function random(start, until) {
  return Math.floor(Math.random() * 100000) % (until - start) + start
}

function randomChoice(array) {
  return array[random(0, array.length)]
}

const Page = () => {
  const uiState = useUiState()
  const uiDispatch = useUiDispatch()

  const [data, setData] = useState({
    problemNum: null,
    problemNumSystem: null,
    answerNum: null,
    answerNumSystem: null,
  })

  const [answerInput, setAnswerInput] = useState("")
  const onAnswerInput = (e) => {
    setAnswerInput(e.target.value)
  }
  const onCheckAnswer = (e) => {
    if(answerInput === data.answerNum) {
      alert("정답")
      init()
    }
    else {
      alert("오답")
    }
  }

  function init() {
    let problemNumSystem, answerNumSystem
    while (problemNumSystem === answerNumSystem) {
      problemNumSystem = randomChoice([2, 8, 10, 16])
      answerNumSystem = randomChoice([2, 8, 10, 16])
    }

    const problemNum_10 = random(2, 50)
    let problemNum = problemNum_10.toString(problemNumSystem)
    const answerNum = problemNum_10.toString(answerNumSystem)

    setData({
      problemNum,
      problemNum_10,
      problemNumSystem,
      answerNum,
      answerNumSystem,
    })

    setAnswerInput("")
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <PageStyle>
      <div className="content">
        {data.problemNum}({data.problemNumSystem}) -> ???({data.answerNumSystem})

        <br/>
        {data.problemNum_10}
        <br/>
        <Input value={answerInput} onChange={onAnswerInput}/>

        <Button onClick={onCheckAnswer}>클릭</Button>
      </div>
    </PageStyle>
  )
}

export default Page