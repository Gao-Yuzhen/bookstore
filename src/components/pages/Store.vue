<template>
  <div class="store">
    <TopNav></TopNav>
    <HeaderNav></HeaderNav>
    <br/><br/><br/>
    <el-row>
      <el-col :span="19" :offset="2">
        <el-tabs :tab-position="tabPosition" style="height: 600px;" class="lefttab">
          <el-tab-pane label="上架图书">
            <div class="formdiv">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="图书名称">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="图书价格">
                  <el-col :span="5">
                  <el-input v-model="form.price"></el-input>
                  </el-col>
                  <el-col :span="9" :offset="2">
                    <el-form-item label="库存数量">
                    <el-input v-model="form.quantity"></el-input>
                    </el-form-item>
                  </el-col>            
                </el-form-item>
                <el-form-item label="图书分类">
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox label="少儿童书" name="type"></el-checkbox>
                    <el-checkbox label="小说/文学/文艺" name="type"></el-checkbox>
                    <el-checkbox label="经管/励志/社科" name="type"></el-checkbox>
                    <el-checkbox label="考试教辅" name="type"></el-checkbox>
                    <el-checkbox label="进口/原版书/杂志" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="图书详情">
                  <el-input type="textarea" v-model="form.desc" rows="10"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">立即上架</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="图书管理">
            <el-table :data="tableData" style="margin-left:70px;width: 80%">
              <el-table-column
                prop="name"
                label="图书名称"
                width="290px">
              </el-table-column>
              <el-table-column
                prop="price"
                label="价格"
                width="130px">
              </el-table-column>
              <el-table-column
                prop="quantity"
                label="库存"
                width="130px">
              </el-table-column>
              <el-table-column
                prop="operate"
                label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                  <el-button type="text" size="small">下架</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="订单管理">
            <el-table :data="orderData" style="margin-left:70px;width: 80%">
              <el-table-column
                prop="order_num"
                label="订单号"
                width="100px">
              </el-table-column>
              <el-table-column
                prop="order_name"
                label="图书名称"
                width="200px">
              </el-table-column>
              <el-table-column
                prop="order_quantity"
                label="数量"
                width="120px">
              </el-table-column>
              <el-table-column
                prop="order_status"
                label="状态"
                width="120px">
              </el-table-column>
              <el-table-column
                prop="order_operate"
                label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small" v-if="scope.row.order_status=='待发货'">发货</el-button>
                  <el-button @click="handleClick(scope.row)" type="text" size="small" v-if="scope.row.order_status=='已发货'">完成</el-button>
                  <el-button @click="handleClick(scope.row)" type="text" size="small" v-if="scope.row.order_status=='已完成'" disabled>完成</el-button>
                  <el-button type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="店铺管理">
            <div class="formdiv">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="店铺名称">
                  <el-input v-model="store_form.name"></el-input>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <el-input v-model="store_form.address"></el-input>
                </el-form-item>
                <el-form-item label="店铺介绍">
                  <el-input type="textarea" v-model="store_form.desc" rows="10"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">保存修改</el-button>
                </el-form-item>
              </el-form>
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
  name: 'Store',
  components:{
    TopNav,HeaderNav
  },
  method:{
    handleClick(row) {
      status=row.order_status;
      console.log(row);
    }
  },
  data () {
    return {
      tabPosition: 'left',
      form: {
          name: '',
          price: '',
          quantity: '',
          type: [],
          desc: ''
        },
        store_form: {
          name: '广州新华书店',
          address: '广东省广州市北京路336号',
          desc: `广州市新华书店发行图书、音像制品为主，多种经营并举发展的经营战略。`
        },
        tableData: [{
            name: '追风筝的人',
            quantity:　'30',
            price: '39'
          }, {
            name: '百年孤独',
            quantity:　'9',
            price: '45'
          }, {
            name: '机器学习',
            quantity:　'78',
            price: '69'
          }, {
            name: '四六级英语题库',
            quantity:　'26',
            price: '23'
          }],
          orderData: [{
            order_num: '69887',
            order_name: '追风筝的人',
            order_quantity: '2',
            order_status:　'待发货',
          }, {
            order_num: '69888',
            order_name: '四六级英语题库',
            order_quantity: '1',
            order_status:　'待发货',
          }, {
            order_num: '69889',
            order_name: '四六级英语题库',
            order_quantity: '2',
            order_status:　'已发货',
          }, {
            order_num: '69890',
            order_name: '百年孤独',
            order_quantity: '3',
            order_status:　'已发货',
          }, {
            order_num: '69891',
            order_name: '追风筝的人',
            order_quantity: '1',
            order_status:　'已发货',
          }, {
            order_num: '69892',
            order_name: '机器学习',
            order_quantity: '2',
            order_status:　'已完成',
          }]

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
.lefttab{
  margin-left: 10px;
}
.formdiv{
  margin-left:70px;
  width:70%;
}

</style>
