import styled from "styled-components";
import {useUiDispatch, useUiState} from "../context/UiReducer";
import Button from "../component/Button";
import {PageBasicStyle} from "../style/BasicStyle";
import {useCallback, useEffect, useState} from "react";
import Input from "../component/Input";
import {CgArrowRight} from "react-icons/cg";
import {Sub} from "../component/Sub";

const PageStyle = styled.div`
  ${PageBasicStyle};

  & > .content {
    padding: 20px 0;
    min-height: calc(100 * var(--vh) - var(--header-height) - var(--footer-height));
  }

  .problem-wrap {
    font-size: 2rem;

    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .message {
    color: ${p => p.theme.color.Gray6};
    text-align: center;

    margin-top: 20px;
  }

  .input-form {
    margin-top: 20px;

    display: flex;
    gap: 12px;

    input {
      flex: 1;
    }
  }
`

function random(start, until) {
  return Math.floor(Math.random() * 100000) % (until - start) + start
}

function randomChoice(array) {
  return array[random(0, array.length)]
}

const Page = () => {
  const [data, setData] = useState({
    problemNum: null,
    problemNumSystem: null,
    answerNum: null,
    answerNumSystem: null,
  })

  const [answerInput, setAnswerInput] = useState("")
  const onAnswerInput = useCallback((e) => {
    setAnswerInput(e.target.value)
  }, [])


  const onCheckAnswer = e => {
    if (answerInput.length <= 0) {
      return
    }

    if (answerInput.toUpperCase() === data.answerNum) {
      alert("정답")
      init()
    } else {
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
    let problemNum = problemNum_10.toString(problemNumSystem).toUpperCase()
    const answerNum = problemNum_10.toString(answerNumSystem).toUpperCase()

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
        <div className="problem-wrap">
          <b>{data.problemNum}</b> <Sub>{data.problemNumSystem}</Sub>

          <CgArrowRight/>

          <b>???</b> <Sub>{data.answerNumSystem}</Sub>
        </div>

        <div className="message">
          다음 주를 주어진 진법에 맞게 변환하세요.
        </div>

        <div className="input-form">
          <Input
            value={answerInput} onChange={onAnswerInput}
            placeholder={"정답"}
          />
          <Button onClick={onCheckAnswer}>입력</Button>
        </div>
      </div>
    </PageStyle>
  )
}

export default Page