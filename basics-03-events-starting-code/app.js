const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  computed: {
    fullName(){
      console.log("line 11")
      if ( this.name === " "){
        return "";
      }
      return this.name + ' ' + 'Oshea'
    }
  },

  methods: {
    outputFullName(){
      console.log("running agin")
      if ( this.name === " "){
        return "";
      }
      return this.name + ' ' + 'Oshea'
    }
    ,
    resetInput(){
      this.name = "";
    },
    confirmedInput(){
      this.confirmedName = this.name
    },
    submitForm() {
      alert("Submitted!!")
    },
    inputName(event, lastname) {
      this.name = event.target.value;
    },

    // dynamic
    addBtn(num) {
      this.counter += num
    },
    remBtn(num) {
      this.counter -= num
    },

    // addBtn() {
    //   this.counter += 5
    // },
    // remBtn() {
    //   this.counter -= 5
    // }
  }
});

app.mount('#events');
