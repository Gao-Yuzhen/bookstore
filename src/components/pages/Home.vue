<template>
  <div class="home"> 
    <TopNav></TopNav>
    <HeaderNav></HeaderNav>
    <el-row>
      <el-col span="5" offset="2">
        <div class="leftnav"><span><router-link to="/book">少儿童书</router-link></span></div>
        <div class="leftnav"><span><router-link to="/book">小说/文学/文艺</router-link></span></div>
        <div class="leftnav"><span><router-link to="/book">经管/励志/社科</router-link></span></div>
        <div class="leftnav"><span><router-link to="/book">考试教辅</router-link></span></div>
        <div class="leftnav"><span><router-link to="/book">进口/原版书/杂志</router-link></span></div>
      </el-col>
      <el-col span="14">
        <div class="block">
          <el-carousel trigger="click" height="360px" autoplay=false>
            <el-carousel-item>
              <img src="../../../static/show1.jpg"/>
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../../static/show2.jpg"/>
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../../static/show3.jpg"/>
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../../static/show4.jpg"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
    <br/><br/><br/>

    <el-row>
      <el-col span="20" offset="2"><div class="hr_line1">少儿童书</div></el-col>
    </el-row>

    <el-row>
      <el-col :span="4" offset="2">
        <img src="..//../../static/type1.jpg" class="image">
      </el-col>
      <el-col :span="5" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 0 : 1">
        <el-card :body-style="{ padding:'0px 11px' }">
          <router-link to="/detail"><img :src="img" class="image"></router-link>
          <div style="padding: 14px">
            <span><router-link to="/detail">{{title}}</router-link></span>
          </div>
          <span class="price">{{price}}</span>
          <br/><br/>
        </el-card>
      </el-col>
    </el-row>

  <br/><br/>
  <el-row>
      <el-col span="20" offset="2"><div class="hr_line2">小说/文学/文艺</div></el-col>
    </el-row>

    <el-row>
      <el-col :span="4" offset="2">
        <img src="..//../../static/type2.jpg" class="image">
      </el-col>
      <el-col :span="5" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 0 : 1">
        <el-card :body-style="{ padding:'0px 11px' }">
          <router-link to="/detail"><img :src="img" class="image"></router-link>
          <div style="padding: 14px">
            <span><router-link to="/detail">{{title}}</router-link></span>
          </div>
          <span class="price">{{price}}</span>
          <br/><br/>
        </el-card>
      </el-col>
    </el-row>

    <br/><br/>
    <el-row>
      <el-col span="20" offset="2"><div class="hr_line3">经管/励志/社科</div></el-col>
    </el-row>

    <el-row>
      <el-col :span="4" offset="2">
        <img src="..//../../static/type3.jpg" class="image">
      </el-col>
      <el-col :span="5" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 0 : 1">
        <el-card :body-style="{ padding:'0px 11px' }">
          <router-link to="/detail"><img :src="img" class="image"></router-link>
          <div style="padding: 14px">
            <span><router-link to="/detail">{{title}}</router-link></span>
          </div>
          <span class="price">{{price}}</span>
          <br/><br/>
        </el-card>
      </el-col>
    </el-row>


    <br/><br/>
    <el-row>
      <el-col span="20" offset="2"><div class="hr_line4">考试教辅</div></el-col>
    </el-row>

    <el-row>
      <el-col :span="4" offset="2">
        <img src="..//../../static/type4.jpg" class="image">
      </el-col>
      <el-col :span="5" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 0 : 1">
        <el-card :body-style="{ padding:'0px 11px' }">
          <router-link to="/detail"><img :src="img" class="image"></router-link>
          <div style="padding: 14px">
            <span><router-link to="/detail">{{title}}</router-link></span>
          </div>
          <span class="price">{{price}}</span>
          <br/><br/>
        </el-card>
      </el-col>
    </el-row>

    <br/><br/>
    <el-row>
      <el-col span="20" offset="2"><div class="hr_line5">进口/原版书/杂志</div></el-col>
    </el-row>

    <el-row>
      <el-col :span="4" offset="2">
        <img src="..//../../static/type5.jpg" class="image">
      </el-col>
            <el-col :span="5" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 0 : 1">
        <el-card :body-style="{ padding:'0px 11px' }">
          <router-link to="/detail"><img :src="img" class="image"></router-link>
          <div style="padding: 14px">
            <span><router-link to="/detail">{{title}}</router-link></span>
          </div>
          <span class="price">{{price}}</span>
          <br/><br/>
        </el-card>
      </el-col>
    </el-row>

  </div>

</template>

<script>
import TopNav from '../TopNav'
import HeaderNav from '../HeaderNav'


export default {
  name: 'Home',
  components:{
    TopNav,HeaderNav
  },
  data() {
    return {
      img: '..//../../static/book.jpg',
      title: '标题',
      price: '价格',
    };
  },

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
.leftnav{
  background-color: #f2f2f2;
  height:72px;
  margin-left: 30px;
  line-height: 50px;
}
.leftnav span{
  margin-left: 15px;
  line-height: 50px;
}
.hr_line1{
  padding: 0 20px 0;
  margin: 20px 0;
  line-height: 1px;
  border-left: 30px solid #ddd;
  border-right: 900px solid #ddd;
  text-align: left;
}
.hr_line2{
  padding: 0 20px 0;
  margin: 20px 0;
  line-height: 1px;
  border-left: 30px solid #ddd;
  border-right: 860px solid #ddd;
  text-align: left;
}
.hr_line3{
  padding: 0 20px 0;
  margin: 20px 0;
  line-height: 1px;
  border-left: 30px solid #ddd;
  border-right: 860px solid #ddd;
  text-align: left;
}
.hr_line4{
  padding: 0 20px 0;
  margin: 20px 0;
  line-height: 1px;
  border-left: 30px solid #ddd;
  border-right: 900px solid #ddd;
  text-align: left;
}
.hr_line5{
  padding: 0 20px 0;
  margin: 20px 0;
  line-height: 1px;
  border-left: 30px solid #ddd;
  border-right: 840px solid #ddd;
  text-align: left;
}
.price{
  margin-left:13px;
}
a{
  text-decoration:none;
  color: #949494;
}
.time {
  font-size: 13px;
  color: #999;
}
  
.bottom {
  margin-bottom: 13px;
  line-height: 12px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
  
.clearfix:after {
  clear: both
}

</style>
