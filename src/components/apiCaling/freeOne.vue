<template>
  <div class="holder">
    <div class="container">
      <h4 class="p-4 example">other example using axios</h4>
      <!-- <table class="table table-bordered border-primary">
        <tr>
          <td class="name">id</td>
          <td class="userId">userId</td>
          <td class="title">title</td>
          <td class="body">body</td>
        </tr>
        <tr v-for="post in posts" :key="post.id">
          <td class="id">
            {{ post.id }}
          </td>
          <td class="userId">
            {{ post.userId }}
          </td>
          <td class="title text-left">
            {{ post.title | shorten(20) }}
          </td>
          <td class="text-left">
            {{ post.body | shorten(20) }}
          </td>
        </tr>
      </table> -->
      <table class="table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col id">Id</th>
            <th scope="col userId">UserId</th>
            <th scope="col title">Title</th>
            <th scope="col body">Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td scope="row" data-label="id ">{{ post.id }}</td>
            <td data-label="userId ">{{ post.userId }}</td>
            <td data-label="Title " class="text-left">{{ post.title }}</td>
            <td data-label="Body " class="text-left">{{ post.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  data: function () {
    return {
      list: [],
      posts: [],
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((resp) => {
        this.posts = resp.data;
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });

    // axios
    //   .all([
    //     axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
    //     axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
    //   ])
    //   .then(
    //     axios.spread((todos, posts) => {
    //       console.log(todos);
    //       console.log(posts);
    //     })
    //   )
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};
</script>

<style lang="scss" scoped>
.example {
  text-transform: capitalize;
}
// table {
//   border-collapse: collapse;
//   border-spacing: 0;
//   width: 100%;
//   tr:nth-child(even) {
//     background-color: #f2f2f2;
//   }
// }
.holder {
  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
    caption {
      font-size: 1.5em;
      margin: 0.5em 0 0.75em;
    }
    tr {
      border: 1px solid #ddd;
      padding: 0.35em;
      &:nth-child(even) {
        background-color: #f2f2f2;
      }
    }
    th {
      padding: 0.625em;
      text-align: center;
      font-size: 0.85em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    td {
      padding: 0.625em;
      text-align: center;
    }
  }
  @media screen and (max-width: 600px) {
    table {
      border: 0;
      caption {
        font-size: 1.3em;
      }
      thead {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }
      tr {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: 0.625em;
      }
      td {
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: 0.8em;
        text-align: right;
        &::before {
          content: attr(data-label);
          float: left;
          font-weight: bold;
          text-transform: uppercase;
          margin-right: 20px;
        }
        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
}
</style>