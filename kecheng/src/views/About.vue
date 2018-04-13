<template>
  <div class="home">
     <el-table
      :data="arr"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="......"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="课程"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="科目"
         width="180">
      </el-table-column>
      <el-table-column label="操作"> 
      <template slot-scope="scope">  
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)" round>删除课程</el-button>
          <el-button
          size="mini"
          type="danger"
          @click="yi(scope.row)" round>星期一</el-button>
          <el-button
          size="mini"
          type="danger"
          @click="er(scope.row)" round>星期二</el-button>
           <el-button
          size="mini"
          type="danger"
          @click="san(scope.row)" round>星期三</el-button>
           <el-button
          size="mini"
          type="danger"
          @click="si(scope.row)" round>星期四</el-button>
           <el-button
          size="mini"
          type="danger"
          @click="wu(scope.row)" round>星期五</el-button>
      </template>
    </el-table-column>
    </el-table>
<el-dialog title="提示" :visible.sync="dialogVisible"  width="30%">
  第几节   :   <input type="text" v-model="ui.name"><br />
  课程   :   <input type="text" v-model="ui.sex"><br />
  类型   :   <input type="text" v-model="ui.state">
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="add">确 定</el-button>
  </span>
</el-dialog>
<div id="www"><el-button type="danger" @click="dialogVisible = true" round>新增课程</el-button></div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          arr:[],
           dialogVisible: false ,
           ui:{},
        }
      },
      created(){       
          this.wy()
      }, methods:{ 
        
        handleDelete(q,w){
          this.$http.post('http://localhost:8000/del',{id:w.id},{emulateJSON:true}).then()
          var _index=this.arr.indexOf(w)
          this.arr.splice(_index,1)
          console.log(w.id)
        },
          wy(){
          this.$http.post("http://localhost:8000/list",{id:this.$route.params.id},{emulateJSON:true}).then(e=>this.arr=e.body)
          
        },
        add(){
          
          this.dialogVisible = false
          this.$http.post('http://localhost:8000/add',this.ui,{emulateJSON:true}).then(e=>{
             this.wy()
             this.ui={}
          })
   
      },
      yi(w){
          this.$http.post('http://localhost:8000/up',{state:1,id:w.id},{emulateJSON:true}).then(()=>{
            this.wy()
            var _index=this.arr.indexOf(w)
            this.arr.splice(_index,1)
          })
          
      },
     er(w){
          this.$http.post('http://localhost:8000/up',{state:2,id:w.id},{emulateJSON:true}).then(()=>{
            this.wy()
            var _index=this.arr.indexOf(w)
            this.arr.splice(_index,1)
          })
      },
       san(w){
          this.$http.post('http://localhost:8000/up',{state:3,id:w.id},{emulateJSON:true}).then(()=>{
            this.wy()
            var _index=this.arr.indexOf(w)
            this.arr.splice(_index,1)
          })
      },
       si(w){
          this.$http.post('http://localhost:8000/up',{state:4,id:w.id},{emulateJSON:true}).then(()=>{
            this.wy()
            var _index=this.arr.indexOf(w)
            this.arr.splice(_index,1)
          })
      },
       wu(w){
          this.$http.post('http://localhost:8000/up',{state:5,id:w.id},{emulateJSON:true}).then(()=>{
            this.wy()
            var _index=this.arr.indexOf(w)
            this.arr.splice(_index,1)
          })
      },
    }
      ,
      watch:{
        '$route'(){
          this.wy() 
        }
      },
    }
  </script>

<style scoped>
input{
  margin-bottom: 15px;
}
#www{
  margin: 20px 0 20px 960px;
}

</style>
