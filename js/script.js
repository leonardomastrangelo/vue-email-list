const { createApp } = Vue;

createApp({
  //* DATA
  data() {
    return {
      emailList: [],
      max: 12,
      photos: [],
      activeIndex: 0
    };
  },
  //* METHODS
  methods: {
    getEmail() {
      // refresh
      this.emailList = [];
      // cycle 12 random emials
      for (let i = 0; i < this.max; i++) {
        //* axios
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((email) => {
            // push emial to list
            this.emailList.push(email.data.response);
          });
      }
    },
    getPhotos() {
        axios.get("https://api.pexels.com/v1/search?query=people", {
        headers: {
            authorization: 'arjVaGJ7Oe6B1aZNeDtXPjq5NQdC4tZvyRwDteSytoCwfe6qq3rSdOUJ'
        }
        }).then((prova) => {
        // refresh
        this.photos = [];
        for (let i = 0; i < this.max; i++) {
            this.photos.push(prova.data.photos[i].src.large)
        }
        });
    }
  },
  //* HOOKS
  mounted() {
  },
}).mount("#app");

// arjVaGJ7Oe6B1aZNeDtXPjq5NQdC4tZvyRwDteSytoCwfe6qq3rSdOUJ