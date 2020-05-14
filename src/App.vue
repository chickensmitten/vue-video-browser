<template>
  <div>
    <SearchBar v-on:termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
  import SearchBar from './components/SearchBar';
  const API_KEY = process.env.API_KEY;

  export default {
    name: 'App',
    components: {
      SearchBar
    },
    methods: {
      // onTermChange() {} //ES6 way
      onTermChange: function(searchTerm) {
        console.log(searchTerm);
      }
    }
  };
</script>


