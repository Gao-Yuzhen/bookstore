<template>
  <div class="bookdetail"> 
    <TopNav></TopNav>
    <HeaderNav></HeaderNav>
    <el-row>
        <el-col span="7" offset="3">
            <img :src="img" class="img"/>
        </el-col>
        <el-col span="10" offset="1">
            <div class="info">
                {{bookinfo}}                 
            </div>          
            <el-button type="primary" class="buybtn">立即购买</el-button>
            <el-button type="primary" class="buybtn">加入购物车</el-button>
        </el-col>
    </el-row>
    <br/>
    <br/>
    <br/>
    <el-row>
        <el-col span="16" offset="3">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="商品详情" name="first">
            <div class="details"> 
                {{detail}}
            </div>
        </el-tab-pane>
        <el-tab-pane label="商品评价" name="second">
            <div class="comments"> 
              <el-card class="box-card" v-for="o in quantity" :key="o">
                <div>
                  <div class="usr">{{user}}</div>
                  <br/>
                  {{comment}}
                </div>
              </el-card>

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
  name: 'BookDetail',
  components:{
    TopNav,HeaderNav
  },
  data() {
    return {
       activeName: 'first',
       quantity:5,
       img: '../../../static/book.jpg',
       bookinfo: '标题、价格、数量',
       detail:'商品详情',
       comment: '评价',
       user:'用户'
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
.img{
    margin-top: 60px;
    background-color: blanchedalmond;
    color:blanchedalmond;
    height:350px;
}
.info{
    margin-top: 60px;
    margin-left: 20px;
    height:320px;
}
.buybtn{
    margin-left: 20px;
    width: 150px;
}
.details{
    height:350px;
}

.usr{
    font-size: 80%;
}
</style>