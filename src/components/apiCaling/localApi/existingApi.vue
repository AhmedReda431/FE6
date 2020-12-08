<template>
  <div class="posts-box text-left">
    <span class="post-views">{{ views }} <i class="far fa-eye ml-2"></i> </span>
    <h3 class="post-title">{{ title }}</h3>
    <span>Date: </span><span class="post-date">{{ date }}</span>
    <p class="post-content">
      {{ content }}
    </p>
    <div class="row">
      <div class="col">
        <span>Author:</span
        ><span class="post-author"
          >{{ author }} <i class="fas fa-user ml-2"></i
        ></span>
      </div>
      <div class="col text-right category">
        <span>Category:</span
        ><span class="post-category"
          >{{ category }} <i class="far fa-folder-open"></i
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["views", "title", "date", "content", "author", "category"],
  name: "Post",
};
</script>

<style lang="scss" scoped>
.posts-box {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  margin: 20px auto;
  width: 75%;
  @media (max-width: 767px) {
    width: 100%;
  }
  .post-views {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #004580a3;
    border-radius: 4px;
    padding: 1px 5px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }
  .post-date {
    color: #818080;
    padding: 0 0 5px;
    color: #888;
    font-size: 14px;
  }
  .post-content {
    line-height: 2;
    color: #666;
  }
  .post-author {
    padding: 6px 10px;
    border-radius: 4px;
    color: #a4a4a4;
  }
  .post-category {
    padding: 6px 10px;
    border-radius: 4px;
    color: #a4a4a4;
  }
  .category {
    @media (max-width: 767px) {
      text-align: left !important;
      margin-top: 10px;
    }
  }
}
</style>