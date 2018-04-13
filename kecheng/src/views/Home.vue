<template>
  <div class="home">
     <el-table
      :data="arr"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="课程"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="节数">
      </el-table-column>
      
    </el-table>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          arr:[]
        }
      },
      created(){
        this.$http.post("http://localhost:8000",{id:this.$route.params.id},{emulateJSON:true}).then(e=>this.arr=e.body)
      },
      watch:{
        '$route'(){
           this.$http.post("http://localhost:8000",{id:this.$route.params.id},{emulateJSON:true}).then(e=>this.arr=e.body)
        }
      }
    }
  </script>
