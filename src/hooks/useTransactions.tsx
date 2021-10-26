import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { api } from '../services/api'

interface Transaction {
    id: number
    title: string
    type: 'deposit' | 'withdraw'
    amount: number
    category: string
    createdAt: Date
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'> 

interface GetReponse {
    transactions: Transaction[]
}

interface PostReponse {
    transaction: Transaction
}

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[]
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTansactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get<GetReponse>('/transactions')
        .then(response => setTansactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post<PostReponse>('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })

        const {transaction} = response.data

        setTansactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionsContext.Provider 
            value={{
                transactions, 
                createTransaction
            }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context
}