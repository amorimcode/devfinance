//create toggle function
const Modal = {
    open() {
        // Abrir modal
        // Adicionar a class no modal
        document
            .querySelector('.modal-overlay')
            .classList.add('active')
    },
    close() {
        // fechar modal
        //remover a class active do modal
        document
            .querySelector('.modal-overlay')
            .classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',

    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',

    },
    {
        id: 1,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',

    },
]

const Transaction = {
    // sum incomes
    incomes() {
        let income = 0;
        transactions.forEach(transaction => {
            if (transaction.amount > 0) {
                income += transaction.amount;

            } 
        })
        return income;
    },

    expenses() {
        // sum expenses
            let expenses = 0;
            transactions.forEach(transaction => {
                if (transaction.amount < 0) {
                    expenses += transaction.amount;
                } 
            })
            return expenses;
    },
    
    total() {
        // entries - exits
        return Transaction.incomes() + Transaction.expenses();
    }
}

const DOM = {

    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrecy(transaction.amount)

        const html = `        
        <td class='description'>${transaction.description}</td>
        <td class='${CSSclass}'>${amount}</td>
        <td class='date'>${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover Transação">
        </td>
        `
        return html
    },
    updateBalance() {
        document
            .getElementById('incomeDisplay')
            .innerHTML = Utils.formatCurrecy(Transaction.incomes())
        document
            .getElementById('expenseDisplay')
            .innerHTML = Utils.formatCurrecy(Transaction.expenses())
        document
            .getElementById('totalDisplay')
            .innerHTML = Utils.formatCurrecy(Transaction.total())
    }
}

const Utils = {
    formatCurrecy(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value / 100)

        value = value.toLocaleString("pt-Br", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}

// forEach = para cada elemento do array ele ira executar uma function
transactions.forEach(function (transaction) {
    DOM.addTransaction(transaction)
})

DOM.updateBalance()