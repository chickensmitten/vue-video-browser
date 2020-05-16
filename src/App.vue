<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoDetail :video="selectedVideo"></VideoDetail>
    <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
  </div>
</template>

<script>
  import axios from 'axios';
  import SearchBar from './components/SearchBar';
  import VideoList from './components/VideoList';
  import VideoDetail from './components/VideoDetail';

  export default {
    name: 'App',
    // option one: data: function() {
    data() {      
      return {
        videos: [],
        selectedVideo: null  
      };
    },
    components: {
      SearchBar,
      VideoList,
      VideoDetail
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
          console.log(response);
        })
      },
      onVideoSelect(video) {
        return this.selectedVideo = video;
      }
    }
  };
</script>


