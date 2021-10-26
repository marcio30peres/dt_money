import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number
    title: string
    type: 'deposit' | 'withdraw'
    amount: number
    category: string
    createdAt: Date
}

interface TransactionReponse {
    transactions: Transaction[]
}

export function Transactions() {
    const [transaction, setTansactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get<TransactionReponse>('/transactions')
        .then(response => setTansactions(response.data.transactions))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transaction.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-br')
                                    .format(new Date(transaction.createdAt))
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}