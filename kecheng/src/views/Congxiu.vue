<template>
  <div class="congxiu">
     <el-table
      :data="arr"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="学号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
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
        this.$http.post("http://localhost:8000",{},{emulateJSON:true}).then(e=>{
          this.arr=e.body;
        })
      }
    }
  </script>