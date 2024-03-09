import styled from "styled-components";
import {UI_ACTION_TYPE, useUiDispatch, useUiState} from "../context/UiReducer";
import Button from "../component/Button";
import {PageBasicStyle} from "../style/BasicStyle";
import {useEffect, useState} from "react";
import {LuImagePlus} from "react-icons/lu";
import {IconButton} from "../component/IconButton";

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
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <PageStyle>
      <div className="content">
        {data.problemNum}({data.problemNumSystem}) -> {data.answerNum}({data.answerNumSystem})

        <br/>
        {data.problemNum_10}

        <Button onClick={() => init()}>클릭</Button>
      </div>
    </PageStyle>
  )
}

export default Page