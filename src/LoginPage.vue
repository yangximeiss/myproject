<template>
    <div :xl="6" :lg="7" class="bg-login">
      <!--标题-->
      <el-row type="flex" class="row-bg row-two" justify="center" align="top">
        <el-col :span="6"></el-col>
        <el-col :span="4">
        <!--标题-->
        <h1 class="title">学生管理系统</h1>
      </el-col>
        
        <el-col :span="6"></el-col>
      </el-row>
      <!--logo-->
    <el-image :src="require('@/assets/logo.png')" class="logo"/>
      <!--form表单-->
      <el-row type="flex" class="row-bg card" justify="center" align="middle">
        <el-col :span="7" class="login-card">
          <!--loginForm-->
          <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="21%" class="loginForm">
            <el-form-item label="账户" prop="username" style="width: 380px">
              <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" style="width: 380px">
              <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item label="记住密码" prop="remember">
              <el-switch v-model="loginForm.remember"></el-switch>
            </el-form-item>
            <el-form-item class="btn-ground">
              <el-button type="primary" @click="submitForm('loginForm')">立即登陆</el-button>
              <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
 import router from './router'
  export default {
    name: "LoginPage",
    data() {
      return {
        
        // 表单信息
        loginForm: {
          // 账户数据
          username: '',
          // 密码数据
          password: '',
          // 记住密码
          remember: false,
          
          
        },
        // 表单验证
        rules: {
          // 设置账户效验规则
          username: [
            {required: true, message: '请输入账户', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 10 个字符的账户', trigger: 'blur'}
          ],
          // 设置密码效验规则
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 15, message: '长度在 6 到 15 个字符的密码', trigger: 'blur'}
          ],
        },
      };
    },
    methods: {

      // 提交表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.loginForm.username =="admin" && this.loginForm.password=="123456"){
              alert('submit')
              router.push('/')}          
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // 重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  }
  </script>
  
  <style scoped>
  
  
  .btn-ground {
    text-align: center;
  }

  .title {
    text-shadow: 3px 3px 1px #5f565e;
    text-align: center;
    margin-top: 60%;
    color: #41b9a6;
    font-size: 40px;
  }
  
  .login-card {
    background-color: #ffffff;
    opacity: 0.9;
    box-shadow: 0 0 20px #ffffff;
    border-radius: 10px;
    padding: 40px 40px 30px 15px;
    width: auto;
    text-align: center;
  }
  .logo {
  margin: 30px;
  height: 70px;
  width: 70px;
  position: fixed;
}

  </style>
