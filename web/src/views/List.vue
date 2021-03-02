<template>
  <div class="list" :style="{backgroundImage:'url('+bg+')'}">
      <div class="contain">
          <div class="left" @click="leftClick">
            <img :src="leftbg" alt="">
          </div>
          <div class="contain2" >
              <p v-text="weather[index].name"></p>
              <img :src="weather[index].poto" alt="" @click="change">
          </div>
          <div class="right" @click="rightClick">
              <img :src="rightbg" alt="">
          </div>
      </div>  
  </div>
</template>
<script>
export default {
   name: "List",
   data () {
      return {
          bg: null,
          leftbg: null,
          rightbg: null,
          weather: [],
          index: 0
      }
   }, 
   created () {
       this.getData();
   },
   methods: {
       getData(){
           this.$axios({
               url: "/api/list",
               method: "post",
           }).then(res => {
            // console.log(res)
            this.bg = res.data.bg;
            this.leftbg = res.data.leftbg;
            this.rightbg = res.data.rightbg;
            this.weather = res.data.weather;
            // console.log(this.weather);
            // console.log(this.leftbg);
            // console.log(this.rightbg);

       });
       },
       leftClick () {
           if (this.index == 0) {
            this.index = 3;
           }
           this.index = this.index-1;
       },
       rightClick () {
            if (this.index == 2) {
            this.index = -1;
           }
           this.index = this.index+1;
       },
       change () {
          this.$axios('api/weather/'+this.index).then(res => {
            //   console.log(res.data);
            this.weather[this.index].poto = res.data;
          });

       },
   },
};
</script>
<style scoped>
.list {
    width: 600px;
    height: 500px;
    margin: auto;
    position: absolute;
}
.contain {
    width: 600px;
    height: 300px;
    /* background-color: black; */
    position: relative;
    top: 100px;
}
.contain2  {
    width: 400px;
    height: 300px;
    float: left;
    /* background-color: black;  */
}
.contain2 p {
    text-align: center;
    width: 400px;
    height: 80px;
    line-height: 80px;
}
.contain2 img {
    width: 200px;
    height: 150px;
    margin-left: 100px;
}
.left,.right {
    width: 100px;
    height: 300px;
    float: left;
    /* background-color: green;  */
}
.left img,.right img {
    width: 80px;
    margin-left: 10px;
    height: 100px;
    margin-top: 100px;
}
</style>