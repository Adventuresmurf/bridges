<template>
  <div>
    <div :key="NewsItem.id" v-for="NewsItem in NewsItems">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <img :src="require('@/assets/trafc.jpeg')" class="img-fluid">
          </div>
          <div class="col-md-7">
            <h3>{{NewsItem.title}}</h3>
            <p class="mt-0">{{NewsItem.date}} </p>
            <p>{{NewsItem.intro}}</p>
          </div>
          <div class="col-md-2 mt-5">
           <h4> <svg @click="showInfo(NewsItem)" cursor="pointer" width="10px" height="100%"  data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></h4>
          </div>
        </div>
      </div>
      <hr>
    </div>
    <InfoFeed v-if="selectedNewsItem" :selectedNewsItem="selectedNewsItem" @close-info="closeInfo" />
  </div>
</template>

<script>

import InfoFeed from "./InfoFeed";
export default {
name: "News",
  components: {InfoFeed},
  props:{
  NewsItems: Array,
  },
  data(){
   return{
     showPanel: false,
     selectedNewsItem: null
   }
  },
  methods:{
    showInfo(NewsItem){
      this.selectedNewsItem=NewsItem
    },
    closeInfo() {
      this.selectedNewsItem=null
    }
  }

}

</script>

<style>
h3{
  color: #3ec7ff;
  text-align: left;
  font-size: 18px;
}
p{
  color: white;
  font-size: 12px;
  text-align: left;
}
hr{
  border-color: white;

}
h4{
  font-size: 10px;
  vertical-align: center;
  color: #3ec7ff;

}

</style>