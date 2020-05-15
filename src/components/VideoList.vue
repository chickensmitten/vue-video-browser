<template>
  <ul>
    Video List
    {{ videos }}
  </ul>  
</template>

<script>
  export default {
    name: 'VideoList',
    props: ['videos']
    // props can be rewritten as object shown below for type checking
    // props: {
    //   videos: Array
    // }
  };
</script>

<style scoped>

</style>