<template>
  <div class="topnav">
    
      
        <el-row>
          <el-col :span="5" :offset="1">
            <span class="top_1">欢迎来到xxx网上书店！</span>
          </el-col>
          <el-col :span="1">
            <span class="top"><router-link to="/login">登录</router-link></span>
          </el-col>
          <el-col :span="1">
            <span class="top"><router-link to="/register">注册</router-link></span>
          </el-col>
          <el-col :span="2" :offset="5">
            <i class="el-icon-tickets"></i>

              <span class="top"><router-link to="/myOrder">我的订单</router-link></span>
          </el-col>
          <el-col :span="2">
            <i class="el-icon-star-off"></i>

              <span class="top"><router-link to="/myFavorite">收藏夹</router-link></span>
          </el-col>
          <el-col :span="2">
            <i class="el-icon-goods"></i>

              <span class="top"><router-link to="/shoppingCart">购物车</router-link></span>
          </el-col>
          <el-col :span="2">
            <i class="el-icon-news"></i>

              <span class="top"><router-link to="/store">卖家中心</router-link></span>
          </el-col>
        </el-row>
      
    

    
  </div>
</template>

<script>
export default {
  name: 'TopNav',
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
.top{
  font-size: 14px;
}
.top_1{
  font-size: 14px;
  margin-left: 55px;
}
.el-row {
  background-color:#F2F2F2;
  color: #949494;
  text-align: center;
  line-height: 25px;
}
a{
  text-decoration:none;
  color: #949494;
}
</style>
