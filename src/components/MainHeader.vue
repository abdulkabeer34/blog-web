<template>
  <div class="wrapper">
    <nav class="navbar">
      <div class="navbar-content">
        <div class="logo">Blog</div>

        <div class="menu-icon" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div class="nav-content" :class="{ active: isMenuOpen }">
          <ul class="nav-links">
            <li><a href="/" class="active">Home</a></li>
            <li><a href="/post">Create</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <div class="auth-buttons">
            <button class="btn btn-signin">Sign in</button>
            <button class="btn btn-signup">Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { ref } from "vue";
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<style scoped>
.wrapper {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}
.navbar {
  background: white;
  border-bottom: 1px solid #eee;
  /* max-width: 1200px; */
  margin: 0 auto;
}
.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
}
.nav-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-grow: 1;
  justify-content: space-between;
  margin-left: 4rem;
}
.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}
.nav-links a {
  text-decoration: none;
  color: #666;
  font-size: 1rem;
  transition: color 0.3s ease;
}
.nav-links a:hover,
.nav-links a.active {
  color: #000;
}
.auth-buttons {
  display: flex;
  gap: 1rem;
}
.btn {
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-signin {
  background: transparent;
  border: none;
  color: #000;
}
.btn-signup {
  background: #000;
  border: none;
  color: white;
  border-radius: 8px;
}
.btn:hover {
  opacity: 0.8;
}
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("@/assets/herosection.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* margin: 0 auto; */
  /* max-width: 1200px; */
  width: 100%;
  /* padding: 0; */
}
.hero-content {
  max-width: 800px;
  padding: 4rem 2rem;
}
.hero h1 {
  color: white;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  line-height: 1.2;
}
.blog-card {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}
.btn-learn {
  background: white;
  color: #000;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  border-radius: 4px;
}
.recent-blogs {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}
.recent-blogs h2 {
  font-size: 2.5rem;
  color: #000;
  margin: 0;
}
.menu-icon {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  padding: 4px;
}
.bar {
  width: 25px;
  height: 3px;
  background-color: #000;
  transition: 0.3s;
}
@media (max-width: 1200px) {
  .navbar,
  .hero,
  .recent-blogs {
    margin: 0 2rem;
  }
}
@media (max-width: 768px) {
  .navbar,
  .hero,
  .recent-blogs {
    margin: 0;
  }
  .navbar-content {
    padding: 1rem;
  }
  .menu-icon {
    display: flex;
    z-index: 100;
  }
  .nav-content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }
  .nav-content.active {
    transform: translateX(0);
  }
  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  .auth-buttons {
    margin-top: 2rem;
    flex-direction: column;
    width: 200px;
  }
  .hero-content {
    padding: 3rem 1rem;
  }
  .hero h1 {
    font-size: 2rem;
  }
  .recent-blogs {
    padding: 2rem 1rem;
  }
  .recent-blogs h2 {
    font-size: 2rem;
  }
}
</style>
