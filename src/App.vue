<template>
  <div>
    <SearchBar v-on:termChange="onTermChange"></SearchBar>
    <VideoList></VideoList>
    <p>{{ videos.length }} videos</p>
  </div>
</template>

<script>
  import axios from 'axios';
  import SearchBar from './components/SearchBar';
  import VideoList from './components/VideoList';

  export default {
    name: 'App',
    // option one: data: function() {
    data() {      
      return {
        videos: []  
      };
    },
    components: {
      SearchBar,
      VideoList
    },
    methods: {
      // onTermChange() {} //ES6 way
      onTermChange: function(searchTerm) {
        axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: process.env.VUE_APP_API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm
          }
        }).then(response => {
          this.videos = response.data.items;
        });
      }
    }
  };
</script>


