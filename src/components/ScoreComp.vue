<template>
  
    <h1>学生成绩列表</h1>
    <el-button type="danger" @click="getScoreList">获取学生成绩</el-button>
    
    <table class="table">
        <thead>
            <tr>
                <th>sid</th>
                <th>name</th>
                <th>java</th>
                <th>english</th>
                <th>mathematics</th>
                <th>game</th>
                <th>algebra</th>
                <th>military</th>
                <th>modeling</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="stu in ScoreList" :key="stu.sid">
                <th> {{ stu.sid }}</th>
                <th> {{ stu.name }}</th>
                <th> {{ stu.java }}</th>
                <th> {{ stu.english }}</th>
                <th> {{ stu.mathematics}}</th>
                <th> {{ stu.game }}</th>
                <th> {{ stu.algebra }}</th>
                <th> {{ stu.military }}</th>
                <th> {{ stu.modeling }}</th>

            </tr>
        </tbody>
    </table>

</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            ScoreList : []
        }
    },
    methods : {
        getScoreList() {
            //alert("OK")
            axios({
                url: "http://localhost:8180/scores",
                method : "GET",
            }).then(res => {
                    this.ScoreList = res.data
            })    
        }
    }
 
}
</script>

<style>

</style>
