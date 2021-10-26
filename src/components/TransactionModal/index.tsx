import Modal from 'react-modal'
import { Container, TransactionType, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

interface TransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function TransactionModal({isOpen, onRequestClose}:TransactionModalProps) {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)
    const [transactionType, setTransactionType] = useState('deposit')

    function handleCreateTransaction(event: FormEvent) {
        event.preventDefault()
        
        const data = {
            title,
            amount,
            transactionType,
            category
        }

        api.post('/transactions', data)
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button"
                onClick={onRequestClose}    
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleCreateTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    type="text" 
                    placeholder="Título" 
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input 
                    type="number"
                    placeholder="Valor" 
                    value={amount}
                    onChange={(event) => setAmount(Number(event.target.value))}
                />
                <TransactionType>
                    <RadioBox
                        type="button"
                        onClick={() => {setTransactionType('deposit')}}
                        isActive={transactionType === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="Entrada" />
                        Entrada
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => {setTransactionType('withdraw')}}
                        isActive={transactionType === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="Saída" />
                        Saída
                    </RadioBox>
                </TransactionType>
                <input 
                    type="text" 
                    placeholder="Categoria"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}