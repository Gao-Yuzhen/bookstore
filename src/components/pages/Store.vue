<template>
  <div class="store">
    <TopNav></TopNav>
    <HeaderNav></HeaderNav>
        
   
    
  </div>
</template>

<script>

import TopNav from '../TopNav'
import HeaderNav from '../HeaderNav'

export default {
  name: 'Store',
  components:{
    TopNav,HeaderNav
  },
  data () {
    return {
      
    }
  }


}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a{
  text-decoration:none;
  color: #949494;
}
</style>
