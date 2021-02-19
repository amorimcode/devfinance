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
    incomes() {
        // sum entries
    },
    expenses() {
        // sum exits
    },
    total() {
        // entries - exits
    }
}

const DOM = {

    innerHTMLTransaction() {

        const html = `
        <tr>
            <td class='description'>Luz</td>
            <td class='expense'>- R$ 500,00</td>
            <td class='date'>23/01/2021</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
    </tr>
        `

    }
}
