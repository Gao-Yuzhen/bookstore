<template>
  <div class="login">
    <div class="headtop"> 
      <h1 class="logo"><router-link to="/home">logo</router-link></h1>
    </div>
    <el-row>
      <el-col :span="6" :offset="14">
        <div class="logindiv">
          
          <h3 class="title">密码登录</h3>
          <el-input class="usr" v-model="userName" placeholder="请输入用户名" prefix-icon="el-icon-edit"></el-input>
          <el-input class="psw" v-model="password" placeholder="请输入密码" prefix-icon="el-icon-edit" show-password></el-input>
          <el-button type="primary" class="loginbtn">登录</el-button>
          <div>
            <span class="bottomtxt">忘记密码</span>
            <span class="bottomtxt"><router-link to="/register">立即注册</router-link></span>
          </div>  
        </div>
        <div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password: '',
      loginState: false      
    }
  },
  methods:{
    loginbtn: function(){
      this.loginState=true;
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration:none;
  color: #949494;
}
.logo{
  line-height: 100px;
}
.headtop{
  height:100px;
 
}
.el-row{
  background-color: #79C8F7;
  height:400px;
}
.logindiv{
  background-color: #fff;
  height:300px;
  margin-top:50px;
}
.usr{
  margin-left: 30px;
  width: 80%;
}
.psw{
  margin-left: 30px;
  width: 80%;
  margin-top: 20px;
}
.title{
  line-height: 70px;
  margin-left: 30px;
}
.loginbtn{
  margin-left: 30px;
  margin-top: 20px;
  width: 80%;
}
.bottomtxt{
  margin-left: 70px;
  color: #949494;
  font-size: 13px;
  line-height: 40px;
}
</style>
