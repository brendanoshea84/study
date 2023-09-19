const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      // fullName: '',
      lastName: ''
    }
  },
  watch:{
    counter(value){
      if (value > 50){
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000)
        
      }
    }

    // name(value) {
    //   if(value === ""){
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if(value === ''){
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' '+ value
    //   }

    // }
  },
  computed: {
    fullName(){
      console.log("line 11")
      if ( this.name === " " || this.lastName === ""){
        return "";
      }
      return this.name + ' ' + this.lastName;
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
