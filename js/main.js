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
        // aggiunta nuovo todo alla lista
        addTodo () {
            if (this.newTodo !== '') {
                this.todos.unshift({
                    text: this.newTodo,
                    completed: false,
                });
                // pulisco l input per inserine uno nuovo
                this.newTodo = ''

                // creo il focus per poter continuare ad inserire TODO velocemnete senza dover sempre andare a sciacciare l input
                this.$refs.InputFocus.focus();
            }
        },

        // rimozione todo dalla lista
        removeTodo(indexToDo) {
            console.log(indexToDo);

            // creo una costante per definire quale precisamente eliminare dalla lista
            // splice mi da l opportunita di togliere un elemento e definre quanti elementi eliminare
            const deleted = this.todos.splice(indexToDo, 1);
            console.log(deleted);
        },

        // definte uno status di un todo: true o false
        statusToDo(indexToDo) {
            console.log(indexToDo);

            // creo una deciosne per dirfli se e vero o falsa
            // utilizzo questo metodo perche mi e piu facile con il ragionamento
            if (this.todos[indexToDo].completed) {
                this.todos[indexToDo].completed = false;
            } else {
                this.todos[indexToDo].completed = true;
            }
        },
    }
});