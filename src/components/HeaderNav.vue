<template>
  <div class="headernav">  
        <el-row>
          <el-col span="3" offset="2">
            <div class="logo">
              <router-link to="/home"><img src="../../static/logo.png"></router-link>
            </div>
          </el-col>
          <el-col span="7" offset="7">
            <el-input class="search left" v-model="searchTxt" placeholder="搜索图书/作者"></el-input>
          </el-col>  
          <el-col span="1">
            <router-link to="/book"><el-button plain class="left">搜索</el-button></router-link>
          </el-col>      
        </el-row>
    <div class="headerbottom">hh</div>
    
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  data () {
    return {
      searchTxt: ''
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

.el-row{
  background-color:#79C8F7;
  color: #fff;
  text-align: center;
  line-height: 120px;
}
.headerbottom{
  background-color:#6699CC;
  color: #6699CC;
  text-align: center;
  line-height: 30px;
}
.logo{
  margin-left: 30px;
  margin-top:23px;
  height:105px;
}
a{
  text-decoration:none;
  color: #949494;
}
.left{
  margin-left: 25px;
}
</style>
