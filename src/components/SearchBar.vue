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
        this.$emit('termChange', event.target.value);
        // this means send the value using the termChange function to App Vue
      }
    }
  };
</script>

<style scoped>

</style>