import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
    models: {
        transaction: Model
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Freelance no mercadinho',
                    type: 'deposit',
                    category: 'Dev',
                    amount: 6000,
                    createdAt: new Date()
                },
                {
                    id: 2,
                    title: 'Aluguel',
                    type: 'withdraw',
                    category: 'Casa',
                    amount: 600,
                    createdAt: new Date()
                },
                {
                    id: 3,
                    title: 'Burgão',
                    type: 'withdraw',
                    category: 'Alimentação',
                    amount: 60,
                    createdAt: new Date()
                }
            ]
        })
    },

    routes() {
        this.namespace = 'api'

        this.get('/transactions', () => {
            return this.schema.all('transaction')
        })

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody)
            return schema.create('transaction', data)
        })
    }
})

ReactDOM.render(<App />, document.getElementById('root')
);
