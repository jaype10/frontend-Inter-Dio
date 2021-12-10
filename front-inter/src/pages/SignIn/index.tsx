import {Wrapper, Background, InputContainer, ButtonContainer} from './style'
import background from '../../assets/img/background-login.jpg';
import Card from '../../components/Card';
import logoInter from '../../assets/img/Inter-orange.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Link, useNavigate} from 'react-router-dom';

const SignIn = () =>{
    const navigate = useNavigate();

    const handleToSignIn = () => {
        navigate('/dashboard');
    }
    return(
        <Wrapper>
            <Background image={background}/>
            <Card width='403px'>
                <img src={logoInter} width={172} height={61} alt='logo inter' />

                <InputContainer>
                    <Input placeholder='EMAIL'/>
                    <Input placeholder='SENHA' type="password"/>
                </InputContainer>

                <ButtonContainer>
                    <Button type='button' onClick={handleToSignIn}>Entrar</Button>
                    <p>Ainda não é cadastrado?<Link to="/singup">Cadastre-se já</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignIn