<template>
    <div class="container">
      <div class="testimonial">
        <div class="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 8L21 12M21 12L17 16M21 12H3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
           Sign Up 
        </div>
        <div class="quote">
          <p>"This blog has completely changed the way I approach web development! The tutorials are straightforward, and I've learned more in a few weeks here than I did from months of online courses"</p>
          <span>Jon Jones</span>
        </div>
      </div>
      <div class="form-container">
        <div class="form-header">
          <h1>Create an account</h1>
          <p>Enter your email below to create your account</p>
        </div>
        <form @submit.prevent="submitForm">
          <input type="email" v-model="email" placeholder="name@example.com" required>
          <button type="submit">Sign In with Email</button>
        </form>
        <div class="divider">OR CONTINUE WITH</div>
        <button class="github-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017C0 14.442 2.865 18.197 6.839 19.521C7.339 19.613 7.521 19.304 7.521 19.038C7.521 18.801 7.513 18.17 7.508 17.335C4.726 17.94 4.139 15.992 4.139 15.992C3.685 14.834 3.029 14.526 3.029 14.526C2.121 13.906 3.098 13.918 3.098 13.918C4.101 13.988 4.629 14.95 4.629 14.95C5.521 16.48 6.97 16.038 7.539 15.782C7.631 15.135 7.889 14.694 8.175 14.444C5.955 14.191 3.62 13.331 3.62 9.493C3.62 8.4 4.01 7.505 4.649 6.805C4.546 6.552 4.203 5.533 4.747 4.155C4.747 4.155 5.587 3.885 7.497 5.181C8.31 4.959 9.15 4.849 9.99 4.845C10.83 4.849 11.67 4.959 12.483 5.181C14.393 3.885 15.233 4.155 15.233 4.155C15.777 5.533 15.434 6.552 15.331 6.805C15.97 7.505 16.36 8.4 16.36 9.493C16.36 13.341 14.025 14.188 11.805 14.436C12.145 14.74 12.465 15.348 12.465 16.276C12.465 17.604 12.453 18.712 12.453 19.038C12.453 19.306 12.633 19.618 13.139 19.52C17.137 18.197 20 14.442 20 10.017C20 4.484 15.522 0 10 0Z" fill="currentColor"/>
          </svg>
          GitHub
        </button>
        <p class="terms">By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  
  const submitForm = () => {
    // Handle form submission
    console.log('Form submitted with email:', email.value);
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    min-height: 100vh;
    font-family: Arial, sans-serif;
  }
  
  .testimonial {
    flex: 1;
    background-color: #000;
    color: #fff;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 42%;
  }
  
  .logo {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .logo svg {
    margin-right: 0.5rem;
  }
  
  .quote {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  
  .quote span {
    display: block;
    margin-top: 1rem;
    font-size: 1rem;
    opacity: 0.7;
  }
  
  .form-container {
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .form-header h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .form-header p {
    color: #666;
    margin-bottom: 1.5rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  input, button {
    padding: 0.75rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    font-size: 1rem;
  }
  
  button {
    background-color: #000;
    color: #fff;
    cursor: pointer;
    border: none;
  }
  
  button:hover {
    opacity: 0.9;
  }
  
  .divider {
    text-align: center;
    margin: 1rem 0;
    color: #666;
    font-size: 0.8rem;
  }
  
  .github-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #000;
    border: 1px solid #ccc;
  }
  
  .github-button svg {
    margin-right: 0.5rem;
  }
  
  .terms {
    font-size: 0.8rem;
    color: #666;
    text-align: center;
    margin-top: 1rem;
  }
  
  .terms a {
    color: #000;
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
  
    .testimonial {
      padding: 1rem;
    }
  
    .form-container {
      padding: 1rem;
    }
  }
  </style>