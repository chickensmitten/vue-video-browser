<template>
  <div>
    <input @input="onInput" type="text" name="" id="" />
  </div>  
</template>

<script>
  export default {
    name: 'SearchBar',
    methods: {
      onInput: function(event) {
        console.log(event.target.value);
        // event.target.value = "";
      }
    }
  };
</script>

<style scoped>

</style>