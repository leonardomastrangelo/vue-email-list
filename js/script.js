const { createApp } = Vue

  createApp({
    //* DATA
    data() {
      return {
        emailList : [],
        max : 12
      }
    },
    //* METHODS
    methods : {
        getEmail(){
            // refresh
            this.emailList = []
            // cycle 12 random emials
            for (let i = 0; i < this.max; i++) {
                //* axios
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email)=> {
                    // push emial to list
                    this.emailList.push(email.data.response)      
                })
            }
        }
    },
    //* HOOKS
    mounted(){
    }
  }).mount('#app')