<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/post">Create</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Categories</h3>
        <ul>
          <li><a href="#">Technology</a></li>
          <li><a href="#">Lifestyle</a></li>
          <li><a href="#">Travel</a></li>
          <li><a href="#">Food</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a target="_blank" href="https://twitter.com" aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-twitter"
            >
              <path
                d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
              />
            </svg>
          </a>
          <a target="_blank" href="https://facebook.com" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-facebook"
            >
              <path
                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://instagram.com"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a target="_blank" href="https://linkedin.com" aria-label="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Blog. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.footer {
  background-color: black;
  color: #ecf0f1;
  padding: 2rem 0;
  margin-top: 48px;
  font-family: Arial, sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin-bottom: 1rem;
}

.footer-section h3 {
  font-size: 1.7rem;
  margin-bottom: 1rem;
  color: white;
}

.footer-section ul {
  list-style-type: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.7rem;
}

.footer-section ul li a {
  color: #ecf0f1;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #3498db;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  color: #ecf0f1;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #3498db;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #34495e;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    text-align: center;
    margin-bottom: 2rem;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>
