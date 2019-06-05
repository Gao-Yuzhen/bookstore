<template>
  <div class="order"> 
    <TopNav></TopNav>
    <HeaderNav></HeaderNav>
    <br/><br/>
    
    <el-row>
        <el-col span="19" offset="2">
          <el-tabs v-model="activeName" @tab-click="handleClick" class="lefttab">
            <el-tab-pane label="全部订单" name="first">
              <OrderHeader></OrderHeader>
              <br/>
              <div v-for="o in 3" :key="o">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>订单号</span>
                  
                </div>
                <div>
                  <router-link to="/detail"><img src="../../../static/item.jpg" class="img"/></router-link>
                </div>
              </el-card> 
              <br/>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待付款" name="second">
              <OrderHeader></OrderHeader>
              <br/>
              <div v-for="o in 3" :key="o">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>订单号</span>
                  
                </div>
                <div>
                  <router-link to="/detail"><img src="../../../static/item.jpg" class="img"/></router-link>
                </div>
              </el-card>
              <br/>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待发货" name="third">
              <OrderHeader></OrderHeader>
              <br/>
              <div v-for="o in 3" :key="o">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>订单号</span>
                  
                </div>
                <div>
                  <router-link to="/detail"><img src="../../../static/item.jpg" class="img"/></router-link>
                </div>
              </el-card>
              <br/>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待收货" name="fourth">
              <OrderHeader></OrderHeader>
              <br/>
              <div v-for="o in 3" :key="o">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>订单号</span>
                  
                </div>
                <div>
                  <router-link to="/detail"><img src="../../../static/item.jpg" class="img"/></router-link>
                </div>
              </el-card>
              <br/>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待评价" name="fifth">
              <OrderHeader></OrderHeader>
              <br/>
              <div v-for="o in 3" :key="o">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>订单号</span>
                  
                </div>
                <div>
                  <router-link to="/detail"><img src="../../../static/item.jpg" class="img"/></router-link>
                </div>
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
import OrderHeader from '../OrderHeader'

export default {
  name: 'Order',
  components:{
    TopNav,HeaderNav,OrderHeader
  },
  data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
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
.lefttab{
    margin-left: 30px;
}
.img{
  float:left;
  margin-right: 20px;
  margin-bottom: 20px;
}


</style>