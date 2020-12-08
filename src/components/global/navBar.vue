<template>
  <div>
    <header class="header">
      <nav class="navbar">
        <h4 class="logo m-0">
          <router-link to="/">Logo</router-link>
        </h4>
        <ul class="nav-links m-0">
          <li><a href="#about">About</a></li>
          <li><a href="#api">Api</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="hamburger-menu">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    navAction: function () {
      const navLinks = document.querySelector(".nav-links");
      const burger = document.querySelector(".hamburger-menu");
      const navbar = document.querySelector(".navbar");

      // Event listeners
      burger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
        burger.classList.toggle("bar-change");
      });

      // Sticky navbar
      window.addEventListener("scroll", () => {
        navbar.classList.toggle("sticky", scrollY > 0);
      });
    },
  },
  mounted: function () {
    this.navAction();
  },
};
</script>

<style lang="scss" scoped>
header {
  .navbar {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;

    z-index: 99;
    background-color: #2c3e50;
    line-height: 1;
    color: #fff;

    transition: all 0.5s ease-in-out;

    .logo {
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #fff;
      a{
        color: #fff;;
        text-decoration: none;
        &:hover{
          color: #fff;
          text-decoration: none;
        }
      }
    }

    .nav-links {
      display: flex;
      transition: 0.3s ease all;

      li {
        list-style-type: none;

        a {
          text-decoration: none;
          color: #fff;
          font-size: 20px;
          margin: 0 1.2rem;
          position: relative;
          padding-bottom: 4px;
        }

        a::after {
          position: absolute;
          content: "";
          bottom: -4px;
          left: 0;
          height: 2px;
          width: 0%;
          background-color: #fff;
          display: block;
        }

        a:hover::after {
          width: 100%;
          transition: 0.3s ease all;
        }
      }
    }

    .nav-links.nav-active {
      transform: translateX(0%);
    }
  }

  .hamburger-menu {
    cursor: pointer;
    display: none;

    div {
      width: 30px;
      height: 4px;
      background-color: #fff;
      margin: 6px;
      border-radius: 10px;
      transition: 0.3s ease all;
    }
  }

  .navbar.sticky {
    transition: 0.3s ease all;

    .logo {
      padding-left: 0.8rem;
      transition: 0.3s ease all;
    }

    .nav-links {
      padding-right: 0.8rem;
      transition: 0.3s ease all;
    }

    .hamburger-menu {
      padding-right: 1rem;
      transition: 0.3s ease all;
    }
  }
  .showcase {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 2rem;

    button {
      margin-top: 3rem;
      border: none;
      outline: none;
      background-color: transparent;
      border: 2px solid #eee;
      padding: 0.8rem 2rem;
      font-size: 1rem;
      font-family: inherit;
      color: #fff;
      border-radius: 3px;
      cursor: pointer;

      &:hover {
        background-color: #eee;
        color: #2c3e50;
        transition: 0.3s ease all;
      }
    }
  }
}

.services {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 2rem;
    word-spacing: 4px;
    position: relative;
    padding-top: 2rem;
    margin-bottom: 4rem;
    z-index: -1;

    &::after {
      position: absolute;
      content: "";
      height: 3px;
      width: 100%;
      display: block;
      bottom: -5px;
      left: 0;
      background-color: #000;
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;

    .service {
      text-align: center;
      margin: 2.5rem 0;
      padding: 0 1rem;
      z-index: -1;

      h2 {
        margin: 1rem 0;
      }

      p {
        opacity: 0.8;
      }
    }
  }
}

@media (max-width: 725px) {
  .navbar {
    .nav-links {
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 225px;
      background: #2c3e50;
      margin: 0;
      padding: 0;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      transform: translateX(-100%);
      z-index: 10;
    }

    .hamburger-menu {
      display: block;
    }

    .bar-change .bar1 {
      transform: rotate(-45deg) translate(-9px, 6px);
    }

    .bar-change .bar2 {
      opacity: 0;
    }

    .bar-change .bar3 {
      transform: rotate(45deg) translate(-9px, -5px);
    }
  }

  .services {
    .container {
      flex-wrap: wrap;
    }
  }
}
</style>
