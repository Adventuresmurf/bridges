<template>
  <div>
    <div>
        <img width="100%" :src="require('@/assets/Trafficcon.jpg')"/>
        <svg @click="closeInfo" id="test" class="svg-inline--fa fa-times-circle fa-w-16" role="img" cursor="pointer" color="#E42513" width="30px" height="100%" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg>
      <h3 class="ml-4 mr-4 mt-3">{{selectedNewsItem.title}}</h3>
      <p class="ml-4 mr-4 mb-0">{{selectedNewsItem.date}}</p>
      <p class="ml-4 mr-4 mt-0">{{selectedNewsItem.ModDate}}</p>
      <p class="ml-4 mr-4 text-justify">{{selectedNewsItem.intro}}</p>
      <p class="ml-4 mr-4 text-justify">{{selectedNewsItem.text}}</p>

    </div>
  </div>
</template>

<script>

export default {
  name: "InfoFeed",
  props:{
    selectedNewsItem:Object
  },
  methods:{
    closeInfo(){
      this.$emit('close-info' )
    },
  }



}
</script>

<style scoped>
svg{
  float: right;
  position: absolute;
  top: 40px;
  right: 50px;
  display: inline-block;
}
#test:hover{
  width: 40px;
  heigth: 100%;
}

</style>