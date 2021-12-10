import { StatementContainer, StatementItemContainer, StatementItemImage, StatementItemInfo } from "./Style";
import { format } from 'date-fns';
import { FiDollarSign } from "react-icons/fi";

interface StatementItem {
    user: {
        firstName: string,
        lastName: string,
    },
    value: number,
    type: 'pay' | 'received',
    updatedAt: Date
}

const StatementItem = ({user, value, type, updatedAt}: StatementItem) => {
    return(
        <StatementItemContainer>
            <StatementItemImage type={type}>
                <FiDollarSign size={24}/>
            </StatementItemImage>
            <StatementItemInfo>
                <p className="primary-color">{value.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                })}</p>
                <p>{type === 'pay' ? 'Pago a' : 'Recebido de'} <strong>{user.firstName} {user.lastName}</strong></p>
                <p>{format(updatedAt, "dd/MM/yyyy 'às' HH:mm:'h'" )}</p>
            </StatementItemInfo>
        </StatementItemContainer>
    )
}

const Statement = () => {
    const statements: StatementItem [] = [
        {
            user: {
                firstName: 'João',
                lastName: 'Paulo',
            },
            value: 250.50,
            type: 'pay',
            updatedAt: new Date()
        },
        {
            user: {
                firstName: 'Ronaldo',
                lastName: 'Antonio',
            },
            value: 270.00,
            type: 'received',
            updatedAt: new Date()
        }
    ]

    return(
        <StatementContainer>
            {statements.map(statements => <StatementItem {...statements}/>)}
        </StatementContainer>
    )
}

export default Statement