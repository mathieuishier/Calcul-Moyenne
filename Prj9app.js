var vm = new Vue({
    el: "#app",
    data: {
        nom: "",
        not: 0,
        cal: 0,
        total: 0,
        nb_notes: 0,
        moyenne: 0,
        eleves: [
            { nom: "", not: "", completed: false }
        ],
    },
    methods: {
        del: function () {
            this.todos.splice(index, 1);
        },
        ajouteleve() {
            this.eleves.push({ nom: this.nom, not: this.not, completed: false }
            );
        },
        ajoutnot() {
            this.calculs.push({ cal: this.not }
            );
        },
        calmoyenne: function () {
            this.total = 0;
            this.nb_eleves = this.eleves.length - 1;
            for (let i = 1; i <= this.nb_eleves; i++) {
                this.total = this.total + this.eleves[i].not
            }
            this.moyenne = this.total / this.nb_eleves;
            alert(this.moyenne)
        },
    },
    computed: {

    }

});
