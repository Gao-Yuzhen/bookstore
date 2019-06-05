<template>
  <div class="bookdetail"> 
    <TopNav></TopNav>
    <HeaderNav></HeaderNav>
    <el-row>
        <el-col :span="7" :offset="3">
            <div class="img">m</div>
        </el-col>
        <el-col :span="10" :offset="1">
            <div class="info">
                <h1>标题</h1>
                <h4>描述</h4>
                <h4>价格</h4>
                <h4>数量</h4>
                <h4>地址</h4>
                <br/>
                <br/>
                <br/>
                <br/>
                <el-button type="primary" class="buybtn">立即购买</el-button>
                <el-button type="primary" class="buybtn">加入购物车</el-button>
            </div>
        </el-col>
    </el-row>
    <br/>
    <br/>
    <br/>
    <el-row>
        <el-col :span="16" :offset="3">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="商品详情" name="first">
            <div class="details"> 
                商品详情
            </div>
        </el-tab-pane>
        <el-tab-pane label="商品评价" name="second">
            <div class="comments"> 
                商品评价
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
.img{
    margin-top: 60px;
    background-color: blanchedalmond;
    color:blanchedalmond;
    height:350px;
}
.info{
    margin-top: 60px;
    margin-left: 20px;
    height:350px;
}
.buybtn{
    margin-left: 20px;
    width: 150px;
}
.details{
    background-color: blanchedalmond;
    color:blanchedalmond;
    height:350px;
}
.comments{
    background-color: blanchedalmond;
    color:blanchedalmond;
    height:350px;
}
</style>