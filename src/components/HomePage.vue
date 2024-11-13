<template>
  <div class="wrapper">
    <div class="hero">
      <div class="hero-content">
        <h1>Effective Office Culture Building a Strong Corporate Foundation</h1>
        <button class="btn btn-learn">Learn More</button>
      </div>
    </div>
    <div class="blog-card">
      <div class="recent-blogs">
        <BlogCard />
      </div>
      <div class="recent-blogs">
        <BlogCard />
      </div>
      <div class="recent-blogs">
        <BlogCard />
      </div>
      <div class="recent-blogs">
        <BlogCard />
      </div>
      <div class="recent-blogs">
        <BlogCard />
      </div>
      <div class="recent-blogs">
        <BlogCard />
      </div>
      <div class="recent-blogs">
        <BlogCard />
      </div>
      <div class="recent-blogs">
        <BlogCard />
      </div>
    </div>
  </div>
</template>
<script setup>
import BlogCard from "./BlogCard.vue";
</script>
<style scoped>
.wrapper {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
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
  width: 100%;
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
