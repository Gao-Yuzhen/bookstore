<template>
  <div class="bookpage"> 
    <TopNav></TopNav>
    <HeaderNav></HeaderNav>
    <br/><br/><br/>
    <el-row v-for="o in (quantity-quantity%4)/4" :key="o" >
      <el-col span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1 : 2">
        <el-card :body-style="{ padding: '0px 11px' }" class="card">
          <router-link to="/detail"><img :src="img" class="image"></router-link>
          <div style="padding: 14px;">           
            <span><router-link to="/detail">{{title}}</router-link></span>
          </div>
          <span class="price">{{price}}</span>
          <br/><br/>
        </el-card> 
        <br/><br/> 
      </el-col>           
    </el-row>

  </div>

</template>

<script>
import TopNav from '../TopNav'
import HeaderNav from '../HeaderNav'


export default {
  name: 'BookPage',
  components:{
    TopNav,HeaderNav
  },
  data() {
    return {
      img:'..//../../static/book.jpg',
      quantity: 12,
      title:'标题',
      price:'价格'
    };
  },
  methods: {
      
    }
}
</script>

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
.page{
    margin-left: 11%;
    margin-right: 11%;
}
.card{
    width:210px;
    margin-left: 30px;
}
  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
.price{
  margin-left:13px;
}
</style>