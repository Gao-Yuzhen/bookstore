<template>
  <div class="orderheader">
    <el-row>
        <el-col>
            <el-card class="box-card" >
                <div>
                    <el-row>
                        <el-col span="7" offset="4">
                            <span>订单详情</span>
                        </el-col>
                        <el-col span="3">
                            <span>实付款</span>
                        </el-col>
                        <el-col span="2" offset="2">
                            <span>订单状态</span>
                        </el-col>
                        <el-col span="2" offset="4">
                            <span>操作</span>
                        </el-col>
                    </el-row>
                </div>
            </el-card>

        </el-col>
    </el-row>

    
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
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
a{
  text-decoration:none;
  color: #949494;
}
.leftcard{
    margin-left: 30px;
}
</style>
