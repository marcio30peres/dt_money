import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs'

createServer({
    routes() {
        this.namespace = 'api'

        this.get('/transactions', () => {
            return [
                {
                    id: 1,
                    title: 'Transaction',
                    amount: 400,
                    type: 'deposit',
                    category: 'food',
                    createdAt: new Date()
                }
            ]
        })
    }
})

ReactDOM.render(<App />, document.getElementById('root')
);
