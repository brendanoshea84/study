const app = Vue.createApp({
    data() {
        return {
            
            counter: 0,
        }
    },

    methods: {
        addOne() {
            this.counter += 1
        },
        addFive() {
            this.counter += 5
            console.log(this.result)
        }
    },

    computed: {
        result(){
            if(this.counter < 37) {
                return "Not there yet!";
            } else if (this.counter > 37) {
                return  "Too much!";
            } else {
                return  "NICE! :";
            }
        }
    },
    watch: {
        result(){
            const that = this
            setTimeout(function () {
                that.counter = 0;
            }, 5000)
        }
    }
})

app.mount("#assignment")