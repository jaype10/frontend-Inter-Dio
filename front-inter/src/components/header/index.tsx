import { HeaderContainer, HeaderWrapper, UserInfo } from "./style";
import logoInter from '../../assets/img/Inter-orange.png';
import UserCircle from '../UserCirlcle'
import { useNavigate} from 'react-router-dom';

const Header =()=>{
    const navigate = useNavigate();

    const handleLogOff = () =>{
        navigate('/')
    }
    return(
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logoInter} width={172} height={61} alt="logo inter"/>
                <UserInfo>
                    <UserCircle initials="JP"/>
                    <div>
                        <p>Olá <span className="primary-color font-bold">João Paulo</span></p>
                        <strong>12345678-9</strong><br></br>
                        <a href="#" onClick={handleLogOff}>Sair</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header