<template>
  
    <h1>学生信息</h1>
    <el-button type="danger" @click="getStudentList">获取学生信息</el-button>
    <el-button type="danger" @click="addStudent">新增</el-button>

    <el-table :data="students_page" stripe style="width: 100%">

      <el-table-column prop="id" label="学号">
        <template #default="scope">
          <el-input
            v-if="scope.row.isEdit"
            v-model="scope.row.id"
            type="text"
            placeholder="请填写"
          />
          <span v-else>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名">
        <template #default="scope">
          <el-input
            v-if="scope.row.isEdit"
            v-model="scope.row.name"
            type="text"
            placeholder="请填写"
          />
          <span v-else>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="gender" label="性别">
        <template #default="scope">
          <el-input
            v-if="scope.row.isEdit"
            v-model="scope.row.gender"
            type="text"
            placeholder="请填写"
          />
          <span v-else>{{ scope.row.gender }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄">
        <template #default="scope">
          <el-input
            v-if="scope.row.isEdit"
            v-model="scope.row.age"
            type="number"
            placeholder="请填写"
          />
          <span v-else>{{ scope.row.age }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right">
        <template #default="scope">
          <div v-if="scope.row.isEdit">
            <el-button type="primary" @click="handleRowSave(scope.row)">保存</el-button>
            <el-button type="danger" @click="handleRowCancel(scope.row, scope.$index)">取消</el-button>
          </div>
          <div v-else>
            <el-button type="primary" @click="handleRowEdit(scope.row)"> 编辑</el-button>
            <el-button type="danger" @click="handleRowDelete(scope.$index)">删除</el-button>
          </div>
          

        </template>
      </el-table-column>
    </el-table>
    
    <div>
          <el-pagination 
              @size-change="handleSizeChange" 
              @current-change="handleCurrentChange" 
              :page-size="pageSize" 
              :current-page="currentPage" 
              :page-sizes="[5, 10, 20, 40, 100]" 
              layout="total, sizes, prev, pager, next, jumper"
              :total="studentList.length">
          </el-pagination>
        </div>
    

    

       
</template>

<script>
import axios from "axios"
//import AddStudent from "./AddStudent.vue"
import { set } from 'lodash-es'


export default {
    
 
    data() {
        return {
            studentList : [],
            addStu:false,
            currentPage : 1,
            pageSize : 5

        }
    },
    methods : {
        getStudentList() {
            //alert("OK")
            axios({
                url: "http://localhost:8180/student",
                method : "GET",
            }).then(res => {
                    this.studentList = res.data
            })    
        },
        handleRowDelete(index)  {      
            let item = this.studentList[index]
            axios({
                url: "http://localhost:8180/delstudent",
                method : "DELETE",
                data : {
                    id: item.id,
                    name : "",
                    gender: "",
                    gpa : 0
                }
            }).then(res => {//eslint-disable-line no-unused-vars
                    this.studentList.splice(index, 1)
            }) 
        },
                // 新增联络人
                addStudent() {
            this.studentList.push({
                id : '',
                name: '',
                gender: '',
                age: '',
                isEdit: true, // 当这个值为true时表示可以编辑
                isNew: true
            })
        },
        handleRowUpdate(row)  {
            console.log(row)
            axios({
                url: "http://localhost:8180/updatestudent",
                method : "PUT",
                data : {
                        id: row.id,
                        name : row.name,
                        gender: row.gender,
                        age : row.age
                }
            }).then(res => {
                    console.log(res.data)
                    row.isEdit = false
                    
            }) 
        },

        handleRowInsert(row)  {
            //this.students.splice(index, 1)
            // 如何区分是新数据还是旧数据 ?
            console.log(row)
            axios({
                url: "http://localhost:8180/addstudent",
                method : "POST",
                data : {
                        id: row.id,
                        name : row.name,
                        gender: row.gender,
                        age : row.age
                }
            }).then(res => {
                    console.log(res.data)
                    row.isEdit = false
                    row.isNew = false
            }) 
        },

        handleRowSave(row)  {
            //this.students.splice(index, 1)
            // 如何区分是新数据还是旧数据 ?
            console.log(row)
            if (row.isNew) {
                this.handleRowInsert(row)
            } else {
                this.handleRowUpdate(row);
            }
        },
        
        handleRowEdit (row){
          set(row, 'isEdit', true)
        },

        handleRowCancel(row, index){
            if (row.isNew)
                this.students.splice(index, 1)
            else {
                // 恢复单个学生数据
                set(row, 'isEdit', false)
            }
            
        },
        
        handleCurrentChange(currentPage) {
          this.currentPage = currentPage;
        },

        handleSizeChange(val) {
          this.pageSize = val;
        }



        },
         computed : {
      students_page() {
        return this.studentList.slice((this.currentPage - 1) * this.pageSize, 
                                    this.currentPage * this.pageSize);
      },
      
    }


    }
 

</script>



<style>
.el-pagination {
  justify-content : center
}
</style>

