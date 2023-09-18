const app = Vue.createApp({
    data(){
        return {
            courseGoalA: "Finish the course and learn Vue.",
            // binding html output
            // see <h3> tags
            courseGoalB: "<h3>Master Vue and build apps</h3>",
            vueLink: "https://vuejs.org"
        };
    },
    methods: {
        outputGoal: function(){
            const randomNumber = Math.random()

            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');