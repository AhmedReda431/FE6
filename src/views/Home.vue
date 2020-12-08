<template>
  <div class="home">
    <button class="scrollButton">
      <i class="fa fa-chevron-up"></i>
    </button>

    <section class="about curved" id="about">
      <div class="container">
        <h1 class="section-title">about us</h1>
        <p class="description text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci
          lorem, porttitor nec vulputate sit amet, fermentum a purus. Curabitur
          ullamcorper tellus orci, vel mattis sapien pretium eget. Sed iaculis
          sit amet elit non molestie. Vestibulum sit amet massa nunc. Donec ante
          tortor, molestie in augue vitae, vestibulum posuere est. Phasellus sed
          maximus purus. Praesent justo massa, porta sit amet lacinia non,
          tincidunt vitae nunc. Praesent sagittis elit at lacus condimentum
          ullamcorper. Mauris eu leo nec dolor molestie fermentum.
        </p>
      </div>
    </section>

    <section class="dynamic" id="api">
      <div class="dynamic-holder">
        <div class="container">
          <h2 class="section-desc">how to dealing with api</h2>
          <chanel />
          <random />
        </div>
      </div>
    </section>

    <section class="contact curved-top" id="contact">
      <div class="contact-holder">
        <div class="container">
          <h2 class="h1">Contact Us</h2>
          <contact></contact>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import $ from "jquery";
import chanel from "../components/apiCaling/localApi/chanel";
import random from "../components/apiCaling/freeOne";
import contact from "../components/contact/contact";

export default {
  name: "Home",
  components: {
    chanel,
    random,
    contact,
  },
  mounted: function () {
    $(window).scroll(function () {
      var sc = $(window).scrollTop();
      if (sc > 500) {
        $(".scrollButton").fadeIn();
      } else {
        $(".scrollButton").fadeOut();
      }
      if (sc > 100) {
        $("nav").css({ mixBlendMode: "hard-light" });
      } else {
        $("nav").css({ mixBlendMode: "normal" });
      }
    });
    $(".scrollButton").click(function () {
      $("html,body").animate({ scrollTop: 0 }, 1000, function () {
        $(".scrollButton").fadeOut();
        $("nav").css({ mixBlendMode: "normal" });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.dynamic {
  padding: 7% 0;
  .section-desc {
    font-size: 40px;
    margin-bottom: 30px;
    text-transform: capitalize;
  }
}
.contact {
  padding: 7% 0 4%;
}
.curved {
  position: relative;
  background: #2c3e50;
  padding: 10% 0;
  min-height: 55vh;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  .section-title {
    font-size: 6rem;
    font-family: "Do Hyeon", sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu,
      Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin-top: 4rem;
    margin-bottom: 20px;
    text-transform: capitalize;
  }
  .description {
    font-size: 1rem;
    margin: 0 5rem 0rem 5rem;
  }
  color: #fff;
}
.scrollButton {
  position: fixed;
  right: 10px;
  bottom: 15px;
  padding: 15px;
  line-height: 1;
  border: 2px solid #2c3e50;
  box-shadow: none;
  background-color: #fff;
  color: #2c3e50;
  font-size: 25px;
  display: none;
  z-index: 9;
  &:focus {
    box-shadow: none;
    outline: none;
  }
  @media (max-width: 767px) {
    padding: 15px;
    font-size: 20px;
  }
}
.curved-top {
  position: relative;
  background: #2c3e50;
  border-top-left-radius: 6% 4%;
  border-top-right-radius: 6% 4%;
  color: #fff;
}
@media (max-width: 767px) {
  .about .curved-div p,
  .curved p {
    margin: 0 20px !important;
  }
  .about .curved-div .section-title,
  .curved .section-title {
    font-size: 4rem;
  }
  .curved {
    padding: 5% 0 10%;
    margin-bottom: 10%;
    border-bottom-left-radius: 100% 7%;
    border-bottom-right-radius: 100% 7%;
  }
  .dynamic {
    padding: 20% 0;
  }
  .curved-top {
    border-top-left-radius: 6% 4%;
    border-top-right-radius: 6% 4%;
    padding: 20% 0;
  }
}
</style>




