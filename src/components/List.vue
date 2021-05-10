<template>
  <div>
    <div class="search-wrapper">
      <b-form-input v-model="search" placeholder="Search .... "></b-form-input>
      <b-button
        size="md"
        class="custom-btn"
        text="Search"
        variant="primary"
        @click="fetchList"
        >Search</b-button
      >
      <b-button
        size="md"
        class="custom-btn"
        text="Clear"
        variant="outline-primary"
        @click="clearSearch"
        >Clear</b-button
      >
    </div>
    <b-table
      id="list-table"
      striped
      hover
      :items="list"
      :per-page="perPage"
      :current-page="currentPage"
      fixed
    >
      <template #table-colgroup="scope">
        <col
          v-for="field in scope.fields"
          :key="field.key"
          :style="{ width: field.key === 'name' ? '30%' : '14%' }"
        />
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="list-table"
      last-number
      first-number
      align="center"
      page-class="active-item"
    >
    </b-pagination>
    <Loader :is-visible="isLoading"></Loader>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "./Loader.vue";

export default {
  name: "List",
  components: {
    Loader,
  },
  data() {
    return {
      search: "",
      isLoading: false,
      list: [],
      perPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    rows() {
      return this.list.length;
    },
  },
  methods: {
    clearSearch() {
      if (this.search) {
        this.search = "";
        this.fetchList();
      }
    },
    async fetchList() {
      this.isLoading = true;
      try {
        // let url = `${process.env.BASE_APP_URL}/list`
        let url = `https://zerodha-api.herokuapp.com/list`;
        if (this.search) {
          url = `${url}?key=${this.search}`;
        }
        const response = await axios.get(url);
        const results = response.data;
        this.list = results.map((post) => ({
          code: post.SC_CODE,
          name: post.SC_NAME,
          open: post.OPEN,
          high: post.HIGH,
          low: post.LOW,
          close: post.CLOSE,
        }));
        this.isLoading = false;
      } catch (err) {
        if (err.response) {
          console.log("Server Error:", err);
        } else if (err.request) {
          console.log("Network Error:", err);
        } else {
          console.log("Client Error:", err);
        }
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchList();
  },
};
</script>

<style scoped>
.search-wrapper {
  display: flex;
  padding: 30px 0;
}
.custom-btn {
  margin-left: 10px;
  padding: 0 30px;
}
.pagination {
}
.active-item {
  border: 2px solid red;
}
.page-link {
  color: #28a745;
  background-color: #fff;
  border: 1px solid #dee2e6;
}
.page-item.active .page-link {
  background-color: #28a745;
  border-color: #28a745;
}
</style>
