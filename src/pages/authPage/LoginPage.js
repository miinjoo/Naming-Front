import styled from "styled-components";
import { useState, useEffect } from "react";
import { vw } from "../../components/SizeConvert";
//components
import Footer from "../../components/Footer";
import Title from "../../components/authPage/Title";
//images
import background from "../../images/background.svg";

const LoginPage = () =>{
    // 회원가입 정보관리
    const [id, setID] = useState("");
    const [password, setPW] = useState("");
    const Login =()=>{
    }
    function scrollto(e){
        e.target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return(
        <>
            <Background>
                <Title/>
                <LoginForm>
                            <input 
                                className="id"
                                // value={id}
                                placeholder="아이디"
                                onChange={e => setID(e.target.value)}
                                onClick={e=> scrollto(e)}
                                />
                            <input
                                className="pw"
                                type="password"
                                placeholder="비밀번호"
                                onChange={e => setPW(e.target.value)}
                                onClick={e=> scrollto(e)}
                                />
                            <LoginBtn type="submit" 
                                className={ id!=""&&password!="" ? 'active' : ''}
                               >로그인 하기</LoginBtn>
                </LoginForm>
                <FooterWrapper>
                    <Footer/>
                </FooterWrapper>
            </Background>
        </>
    )
}
export default LoginPage;

const Background = styled.div`
    width: 100%;
    height: 100vh;
    overflow: scroll;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
`
const LoginForm = styled.form`
    width: ${vw(250)};
    margin-top: 45px;

    display: flex;
    flex-direction: column;
    .pw{
        margin: 16px 0 20px 0;
    }
    @media only screen  and (max-width: 300px){
        margin-top: 30px;
    }
    @media only screen  and (min-width: 700px) and (max-width: 850px){
        .pw{
            margin: 30px 0 40px 0;
        }
    }
    input{
        aspect-ratio: 5.8 / 1;
        padding-left: 16px;

        font-size: ${vw(14)};
        font-family: 'SF_HambakSnow';

        border-style: none;
        border-radius: 5px;
        outline: none;
    }
`
const LoginBtn = styled.button`
    aspect-ratio: 6 / 1;

    border-style: none;
    border-radius: 5px;

    font-family: 'SF_HambakSnow';
    font-size: ${vw(14)};

    color: var(--white);
    background-color: var(--gray1);
    &.active {
		background-color: var(--green);
	}
`
const FooterWrapper = styled.div`
    height: 100vh;
    margin-top: 30px;
    padding-bottom: 30px;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`