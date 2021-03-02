<template>
  <div class="index" @click="$router.push('/list')">
     <img :src="img" alt="">
  </div>
</template>
<script>
export default {
   name: "Index",
   data () {
      return {
         img: null,
      }
   },
   created () {
      this.getData();
   },
   methods: {
      getData () {
         this.$axios("/api/index").then(res => {
            // console.log(res)
            this.img = res.data.img;
            // console.log(this.img);
       });
      },
      
   },
};
</script>
<style scoped>
.index {
   width: 300px;
   height: 200px;
   margin: auto;
}
.index img {
   width: 100%;
   height: 100%;
}
</style>