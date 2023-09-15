<template>
  
    <h1>课程列表</h1>
    <el-button type="danger" @click="getCourseList">获取学生课程</el-button>
    
    <table class="table">
        <thead>
            <tr>
                <th>cid</th>
                <th>cname</th>
                <th>credit</th>
                
            </tr>
        </thead>
        <tbody>
            <tr v-for="stu in courseList" :key="stu.cid">
                <th> {{ stu.cid }}</th>
                <th> {{ stu.cname }}</th>
                <th> {{ stu.credit }}</th>
                
            </tr>
        </tbody>
    </table>

</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            courseList : []
        }
    },
    methods : {
        getCourseList() {
            //alert("OK")
            axios({
                url: "http://localhost:8180/course",
                method : "GET",
            }).then(res => {
                    this.courseList = res.data
            })    
        }
    }
 
}
</script>

<style>

</style>
