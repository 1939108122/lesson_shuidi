<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <div>
      按标题查询：
      <el-input v-model="listQuery.title" placeholder="Title"
      style="width:200px" class="filter-item"
      @keyup.enter.native="getList"
      ></el-input>
      按作者查询：
      <el-input v-model="listQuery.author" style="width:200px;" class="filter-item" placeholder="author" 
       @keyup.enter.native="getAuthor">
      </el-input>
     <el-button type="primary" @click="reverse">id倒序排序</el-button>
    </div>
    
    <el-table :data="list">
      <el-table-column label="ID" prop="id" 
      align="center" width="80">

      </el-table-column>
      <el-table-column label="Title" prop="title" 
      align="center" width="300">
        <template slot-scope="{row}">
          <span class="link-type">{{row.title}}</span>
        </template>
      </el-table-column>
       <el-table-column label="author" prop="author" 
      align="center" width="300">
        <template slot-scope="{row}">
          <span class="link-type">{{row.author}}</span>
        </template>
      </el-table-column>
        <el-table-column label="reviewer" prop="reviewer" 
      align="center" width="300">
        <template slot-scope="{row}">
          <span class="link-type">{{row.reviewer}}</span>
        </template>
      </el-table-column>
        <el-table-column label="content_short" prop="content_short" 
      align="center" width="300">
        <template slot-scope="{row}">
          <span class="link-type">{{row.content_short}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination  
      @current-change="getList" 
      :total="total" 
      :page-size="listQuery.limit"
      layout="total, prev, pager, next"
      :current-page.sync="listQuery.page"
    />
  </div>
</template>

<style>
</style>

<script>
import Axios from 'axios';
export default {
  data() {
    return {
      list: [],
      total: 0,
      listLoading: false,
      // ?
      listQuery: {
        limit: 20,
        page:1,
        title: '',
        author:''
      }
    }
  },
  created() {
    this.getList(),
    this.getAuthor()
  },
  methods: {
    getList() {
      Axios.get('/vue-element-admin/article/list', {
        params: this.listQuery // 查询对象  发过去
      })
      .then(response => {
        console.log(response);
        this.list = response.data.list
        this.total = response.data.total
      })
    },
    getAuthor() {
      Axios.get('/vue-element-admin/article/list', {
        params: this.listQuery // 查询对象  发过去
      })
      .then(response => {
        console.log(response);
        this.list = response.data.list
        this.total = response.data.total
      })
    },
    reverse() {
      this.list.reverse()
    }

  }
}
</script>