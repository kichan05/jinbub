import styled, {keyframes} from "styled-components";
import {useUiDispatch, useUiState} from "../context/UiReducer";
import Button from "../component/Button";
import {PageBasicStyle} from "../style/BasicStyle";
import {useCallback, useEffect, useState} from "react";
import Input from "../component/Input";
import {CgArrowRight} from "react-icons/cg";
import {Sub} from "../component/Sub";

const ErrorMessageAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }

  20%, 60% {
    transform: translateX(30px);
  }

  40%, 80% {
    transform: translateX(-30px);
  }
`

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
    
    transition: 200ms;
  }
  
  .message {
    color: ${p => p.theme.color.Gray6};
    text-align: center;

    margin-top: 20px;
  }
  
  .answer {
    color: ${p => p.theme.color.Blue4};
  }

  .error-message-wrap {
    color: ${p => p.theme.color.Red7};
    font-size: 1.2em;
    font-weight: 600;

    text-align: center;

    margin-top: 8px;

    opacity: 0;
    transition: 100ms;
  }

  .error-animation {
    animation-name: ${ErrorMessageAnimation};
    animation-duration: 900ms;
  }
  
  .error-show {
    opacity: 1;
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

  const [errorAnimation, setErrorAnimation] = useState({
    isAnimation: false,
    isShow: false
  })

  const [isAnswer, setAnswer] = useState(false)

  const [answerInput, setAnswerInput] = useState("")
  const onAnswerInput = useCallback((e) => {
    setAnswerInput(e.target.value)
  }, [])


  const onCheckAnswer = e => {
    e.preventDefault()

    if (answerInput.length <= 0) {
      return
    }

    if (answerInput.toUpperCase() === data.answerNum) {
      setAnswer(true)
      setErrorAnimation({
        isAnimation: false,
        isShow: false
      })

      setTimeout(() => {
        init()
      }, 1000)
    } else {
      setErrorAnimation({
        isAnimation: true,
        isShow: true
      })

      setTimeout(() => {
        setErrorAnimation({
          isAnimation: false,
          isShow: true
        })
      }, 900)
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

    setErrorAnimation({
      isAnimation: false,
      isShow: false
    })
    setAnswerInput("")
    setAnswer(false)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <PageStyle>
      <div className="content">
        <div className={`problem-wrap ${isAnswer && 'answer'}`}>
          {!isAnswer ? (
            <>
              <b>{data.problemNum}</b> <Sub>{data.problemNumSystem}</Sub>

              <CgArrowRight/>

              <b>???</b> <Sub>{data.answerNumSystem}</Sub>
            </>
          ) : <h1>정답</h1>}
        </div>

        <div className={`message ${isAnswer && 'answer'}`}>
          다음 수를 주어진 진법에 맞게 변환하세요.
        </div>

        <div className={`error-message-wrap ${(errorAnimation.isAnimation) && 'error-animation'} ${(errorAnimation.isShow) && 'error-show'}`}>
          <span>틀렸습니다.</span>
        </div>

        <form className="input-form" onSubmit={onCheckAnswer}>
          <Input
            value={answerInput} onChange={onAnswerInput}
            placeholder={"정답"}
          />
          <Button type={"submit"}>입력</Button>
        </form>
      </div>
    </PageStyle>
  )
}

export default Page