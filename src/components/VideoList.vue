<template>
  <ul>
    <VideoListItem v-for="video in videos">
    </VideoListItem>
  </ul>  
</template>

<script>
  import VideoListItem from './VideoListItem';
  export default {
    name: 'VideoList',
    props: ['videos'],
    // props can be rewritten as object shown below for type checking
    // props: {
    //   videos: Array
    // }
    components: {
      VideoListItem
    }
  };
</script>

<style scoped>

</style>