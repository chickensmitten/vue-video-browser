<template>
  <ul class="list-group col-md-4">
    <VideoListItem 
      v-for="video in videos"
      :video="video"
      :key="video.etag"
      @videoSelect="onVideoSelect"
    >
      <!-- Anytime we use this v-for directive, we need to add :key property -->
      <!-- key property is used whenever our list is updated. It is used to update our list to perform -->
      <!-- normally we use the id as the key property. in this case, the video has etag property as id -->
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
    },
    methods: {
      onVideoSelect(video) {
        this.$emit('videoSelect', video);
      }
    }
  };
</script>

<style scoped>

</style>