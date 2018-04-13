<template>
  <div id="app">


<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item><router-link>日期</router-link></el-menu-item>
  <el-menu-item index="1"><router-link to="/about/1">星期一</router-link></el-menu-item>
  <el-menu-item index="1"><router-link to="/about/2">星期二</router-link></el-menu-item>
  <el-menu-item index="1"><router-link to="/about/3">星期三</router-link></el-menu-item>
  <el-menu-item index="1"><router-link to="/about/4">星期四</router-link></el-menu-item>
  <el-menu-item index="1"><router-link to="/about/5">星期五</router-link></el-menu-item>
</el-menu >
    <router-view/>
  </div> 
</template>
<script>
export default {
  data() {
      return {
        activeIndex2: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    }

</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.el-menu-item{
  padding:0;
  
}
a{
  display: block;
  padding: 0 20px;
  text-decoration: none;
}
.el-input{
  width: 600px;
  height: 4px;
  margin-top: 30px;
  margin-left: 240px;
}
.el-button{
  margin-top: 50px;
  margin-left: 300px;
}
</style>
