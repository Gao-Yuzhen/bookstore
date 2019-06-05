<template>
  <div class="headernav">
    
        <el-row>
          <el-col :span="3" :offset="2">
            <router-link to="/home">logo</router-link>
          </el-col>
          <el-col :span="9" :offset="7">
            <el-input class="search" v-model="searchTxt" placeholder="搜索图书/作者" suffix-icon="el-icon-search"></el-input>
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

a{
  text-decoration:none;
  color: #949494;
}
</style>
