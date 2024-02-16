const app = Vue.createApp({
  data() {
    return {
      myName: 'Asparuh',
      myAge: 30,
      picLink:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXDiDtwm_fK1V-p54ctnUqE6qsnYxBUDp098IN9Hfkw&s',
    };
  },
  methods: {
    ageInFiveYears() {
      const age = this.myAge + 5;
      return age;
    },
    favoriteNumber() {
      const favNumber = Math.random();
      return favNumber;
    },
  },
});

app.mount('#assignment');
