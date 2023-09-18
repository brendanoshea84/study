const app = Vue.createApp({
    data(){
        return {
            name: "Your name here",
            age: 39,
            catPic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCat&psig=AOvVaw3yb0qojzHC8CdX0YJalpqL&ust=1694677296982000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKj_jYKLp4EDFQAAAAAdAAAAABAE"
        };
    },
    methods: {
        myFavouriteNumber : function(){
            const randomNumber = Math.random()
            return randomNumber.toFixed(2)
        },
    }
});

app.mount("#assignment")

