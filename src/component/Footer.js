import styled from "styled-components";
import {useEffect, useRef} from "react";

const FooterStyle = styled.footer`
  background-color: ${p => p.theme.color.Gray4};

  & > div {
    width: 100%;
    height: 100%;
    max-width: ${p => p.theme.size.mobileMaxWidth}px;

    padding: 12px;
    margin: 0 auto;
  }
`

const Footer = () => {
  const footerElement = useRef()

  useEffect(() => {
    const height = footerElement.current.clientHeight
    document.documentElement.style.setProperty("--footer-height", `${height}px`)
  }, [])

  return (
    <FooterStyle>
      <div ref={footerElement}>
        <div>
          <b>개발</b> : <a href={"https://kichan.dev"} target={"_blank"}>박희찬 (인천대학교 정보통신공학과 24학번)</a>
        </div>
        <div>
          <b>오픈소스 프로젝트</b> : <a href="https://github.com/kichan05/jinbub" target={"_blank"}>깃허브</a>
        </div>
      </div>
    </FooterStyle>
  )
}

export default Footer