<template>
  <div>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            alt: ''
        }
    },
    mounted() {
       console.log(this.$route.params.alt) 
       this.alt = this.$route.params.alt
      
    },
    methods: {

    }
}
</script>

<style>

</style>