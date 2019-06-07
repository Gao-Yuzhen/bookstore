<template>
  <div class="collect"> 
    <TopNav></TopNav>
    <HeaderNav></HeaderNav>
    <br/><br/>
    <el-row>
      <el-col span="19" offset="2" >
        <el-tabs v-model="activeName" @tab-click="handleClick" class="left">
          <el-tab-pane label="商品收藏" name="first">
            <br/>
            <el-row v-for="o in (item_quantity-item_quantity%5)/5" :key="o" >
              <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
                <el-card :body-style="{ padding: '20px 11px' }" class="card">
                  <router-link to="/detail"><img :src="img" class="image"></router-link>
                  <div style="padding: 14px;">           
                    <span><router-link to="/detail">{{title}}</router-link></span>
                  </div>
                  <span class="price">{{price}}</span>
                  <br/>
                </el-card> 
                <br/><br/> 
              </el-col>           
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="店铺收藏" name="second">
            <br/>
            <div  v-for="o in store_quantity" :key="o">
              <el-card class="box-card">
                <div>  
                  <img :src="img" class="image">
                </div>
                <br/>
              </el-card>
              <br/>
            </div>
          </el-tab-pane>

        </el-tabs>

      </el-col>
    </el-row>

  </div>

</template>

<script>
import TopNav from '../TopNav'
import HeaderNav from '../HeaderNav'


export default {
  name: 'Collect',
  components:{
    TopNav,HeaderNav
  },
  data() {
    return {
     activeName: 'first',
     img: '..//../../static/item.jpg',
     item_quantity: 17,
     store_quantity: 4,
     title: '标题',
     price: '价格',
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
.left{
  margin-left: 30px;
}
.card{
  width:155px;
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
.image{
  margin-left: 20px;
}
</style>