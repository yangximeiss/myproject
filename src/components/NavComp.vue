<template>
          <div class="aside">
      <el-menu
        theme="dark" :default-active="this.$route.path"
        class="el-menu-vertical" 
        router
      >
        <el-menu-item index ="/student">Student</el-menu-item>
        <el-menu-item index="/course">Course</el-menu-item>
        <el-menu-item index="/scores">Score</el-menu-item>
          
        
      </el-menu>
    </div>
</template>

<script>
export default{
    name :'NavComp'
}
</script>

<style>

</style>
