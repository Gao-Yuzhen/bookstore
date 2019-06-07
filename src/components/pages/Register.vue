<template>
  <div class="register">
    <TopNav></TopNav>
    <el-row>
      <el-col :span="16" :offset="2">
        <router-link to="/home"><img src="../../../static/logo.png" class="logo"></router-link>
      </el-col>
    </el-row>
    <el-row>
        <el-col :span="16" :offset="3">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户注册" name="first">
          <div class="usr"> 
            <el-row>
              <el-col :span="5">
                <span>用户名</span>
              </el-col>
              <el-col :span="19">
                <el-input class="usrname" v-model="userName" placeholder="请输入用户名" prefix-icon="el-icon-edit"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <span>绑定邮箱</span>
              </el-col>
              <el-col :span="19">
                <el-input class="usremail" v-model="userEmail" placeholder="请输入邮箱" prefix-icon="el-icon-edit"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <span>登录密码</span>
              </el-col>
              <el-col :span="19">
                <el-input class="psw" v-model="password" placeholder="请输入密码" prefix-icon="el-icon-edit" show-password></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <span>确认密码</span>
              </el-col>
              <el-col :span="19">
                <el-input class="psw" v-model="password_2" placeholder="请再次输入密码" prefix-icon="el-icon-edit" show-password></el-input>
              </el-col>
            </el-row>
            <el-button type="primary" class="regbtn">立即注册</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="企业注册" name="second">
          <div class="company"> 
            <el-row>
              <el-col :span="5">
                <span>企业名称</span>
              </el-col>
              <el-col :span="19">
                <el-input class="cpyname" v-model="cpyName" placeholder="请输入企业名称" prefix-icon="el-icon-edit"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <span>绑定邮箱</span>
              </el-col>
              <el-col :span="19">
                <el-input class="cpyemail" v-model="cpyEmail" placeholder="请输入邮箱" prefix-icon="el-icon-edit"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <span>登录密码</span>
              </el-col>
              <el-col :span="19">
                <el-input class="psw" v-model="cpypassword" placeholder="请输入密码" prefix-icon="el-icon-edit" show-password></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <span>确认密码</span>
              </el-col>
              <el-col :span="19">
                <el-input class="psw" v-model="cpypassword_2" placeholder="请再次输入密码" prefix-icon="el-icon-edit" show-password></el-input>
              </el-col>
            </el-row>
            <el-button type="primary" class="regbtn">立即注册</el-button>
          </div>    
          
        </el-tab-pane>
        
        </el-tabs>
        </el-col>

        
    </el-row>
  </div>
</template>

<script>
import TopNav from '../TopNav'

export default {
  name: 'Register',
  components:{
    TopNav
  },
  data () {
    return {
      activeName: 'first',
      userName: '',
      userEmail: '',
      password: '',
      password_2: '',
      cpyName: '',
      cpyEmail: '',
      cpypassword: '',
      cpypassword_2: '',
      regState: false  
    }
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      regbtn: function(){
      this.regState=true;
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
a {
  text-decoration:none;
  color: #949494;
}
.logo{
  line-height: 100px;
}
.usr{
  width: 50%;
  margin:20px auto;
  line-height: 70px;
}
.company{
  width: 50%;
  margin:20px auto;
  line-height: 70px;
}
.regbtn{
  width: 70%;
  margin-left: 15%;
}
.logo{
  margin-top: 23px;
  margin-bottom: 20px;
  margin-left: 36px;
}
</style>
