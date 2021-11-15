// Partire dalla definizione di un array con 3 oggetti ( i todo).
// Ogni oggetto todo avrà le seguenti proprietà:
// - text, una stringa che indica il testo del todo
// - completed, un booleano (true/false) che indica se il todo è stato completato oppure no
// MILESTONE 1
// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà completed è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco di ogni todo una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


// mi collego per creare la mia logica
const app = new Vue ({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Terminare esercizio di oggi',
                completed: false,
            },
            {
                text: 'Portare fuori il cane',
                completed: false,
            },
            {
                text: 'Lavare i piatti',
                completed: true,
            },
        ],
        // devo collegare il mio input al tasto aggiungi per creare ed inserire nuovi todo
        newTodo: '',
    },
    methods: {
        addTodo () {
            if (this.newTodo !== '') {
                this.todos.unshift({
                    text: this.newTodo,
                    completed: true,
                });
                this.newTodo = ''
            }
        }
    }
});