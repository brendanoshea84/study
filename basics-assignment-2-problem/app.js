const app = Vue.createApp({
    data(){
        return {
            output: '',
            outputTwo: ''
        };
    },
    methods: {
        alertBtn() {
            alert("The button has been pressed")
        },
        writePara(event) {
            this.output = event.target.value
        },
        writeParaWithEnter(event) {
            this.outputTwo = event.target.value
        }
    }

})

app.mount('#assignment');
