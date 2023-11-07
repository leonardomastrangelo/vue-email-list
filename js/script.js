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
            //* axios
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email)=> {
                console.log(email.data.response);
            })
        }
    },
    //* HOOKS
    mounted(){
        this.getEmail()
    }
  }).mount('#app')