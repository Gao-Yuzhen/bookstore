<template>
  <div class="shopcart"> 
    <TopNav></TopNav>
    <HeaderNav></HeaderNav>
    <br/>
    <el-row>
      <el-col offset="19">
        <el-button type="primary countbtn" plain>结算</el-button>
      </el-col>
    </el-row>
    <br/>
    <el-row>
      <el-col span="19" offset="2">
        <el-card class="box-card leftcard">
          <div> 
            <el-row>
              <el-col span="5" offset="3"> 
                <span>商品信息</span>
              </el-col>
              <el-col span="2" offset="4">
                <span>单价</span>
              </el-col>
              <el-col span="2" offset="1">
                <span>数量</span>
              </el-col>
              <el-col span="2" offset="1">
                <span>金额</span>
              </el-col>
            </el-row>         
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row v-for="o in quantity" :key="o">
      <el-col span="19" offset="2">
        <br/><br/>
        <el-card class="box-card leftcard">
          <div slot="header" class="clearfix">
            <span>{{storename}}</span>
            <el-checkbox v-model="checked[o]" class="checkbox"></el-checkbox>
          </div>
          <div>
            <router-link to="/detail"><img :src="img" class="img"/></router-link>
            <span><router-link to="/detail">{{title}}</router-link></span>
            <el-checkbox v-model="checked[o]" class="checkbox_item"></el-checkbox>
          </div>
        </el-card>
      </el-col>
    </el-row>
    

  </div>

</template>

<script>
import TopNav from '../TopNav'
import HeaderNav from '../HeaderNav'


export default {
  name: 'ShopCart',
  components:{
    TopNav,HeaderNav
  },
  data() {
    return {
      checked:[false],
      quantity: 4,
      storename:'店铺名称',
      img:'../../../static/item.jpg',
      title:'标题',
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
.leftcard{
  margin-left: 30px;
}
.countbtn{
  margin-left: 35px;
}
.checkbox{
  float:right;
}
.checkbox_item{
  float:right;
  margin-top: 30px;
}
.img{
  float:left;
  margin-right: 20px;
  margin-bottom: 20px;
}

</style>