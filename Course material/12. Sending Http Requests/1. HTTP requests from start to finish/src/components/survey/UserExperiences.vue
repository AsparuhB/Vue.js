<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found. Start adding some survey results first!
      </p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';

export default {
  components: {
    SurveyResult,
  },
  // adding another learning experience real time - Not a good idea. Infinite loop
  // watch: {
  //   results() {
  // this.loadExperiences();
  //   },
  // },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      //// get request with fetch()
      // fetch(
      //   'https://vue-httprequests-demo-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
      // )
      //   .then((response) => {
      //     if (response.ok) {
      //       return response.json();
      //     }
      //   })
      //   .then((data) => {
      //     setTimeout(() => {
      //       this.isLoading = false;
      //     }, 2000);
      //     const results = [];
      //     for (const id in data) {
      //       results.push({
      //         id: id,
      //         name: data[id].name,
      //         rating: data[id].rating,
      //       });
      //     }
      //     this.results = results;
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     this.isLoading = false;
      //     this.error = 'Failed to fetch data - please try again later.';
      //   });

      ////Get request with axios - might be better in the long run.
      axios
        .get(
          'https://vue-httprequests-demo-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
        )
        .then((response) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 2000);
          const data = response.data
          console.log(data);
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        .catch((error) => {
          console.log(error.message);
          this.isLoading = false;
          this.error = error.message;
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
