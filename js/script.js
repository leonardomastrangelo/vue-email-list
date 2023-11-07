const { createApp } = Vue

  createApp({
    //* DATA
    data() {
      return {
        emailList : []
      }
    },
    //* METHODS
    methods : {
        getEmail(){
            // cycle 12 random emials
            for (let i = 0; i < 12; i++) {
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