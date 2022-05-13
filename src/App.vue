<template>
  <div id="app" class="background">
    <!-- top row with logo-->
   <div class="container-fluid">
     <div class="row">
       <div class="col-md-2 mt-4 mb-4 d-flex" ><img :src="require('@/assets/logo.png')" width="100%" height="auto" ></div>
       <div class="col-md-10"></div>
     </div>
   </div>
    <!--container with news feed-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-3 "><News :NewsItems="NewsItems"/></div>
   <!--Container for google maps-->
        <div class="col-sm-12 col-md-9 "><GoogleMap/></div>
      </div>
    </div>
  </div>

</template>

<script>

import News from "./components/News"
import GoogleMap from "./components/GoogleMap";

export default {
  name: 'App',
  components: {
    GoogleMap,
    News
  },
  data(){
    return{
      NewsItems:[]
    }
  },
  methods:{
    async fetchNewsItems(){
      const res = await fetch('http://localhost:5000/NewsItems')
      const data = await res.json()
      return data
    }
  },

  async created(){
    this.NewsItems = await this.fetchNewsItems()
  },
}
</script>

<style>
background{

}
</style>
