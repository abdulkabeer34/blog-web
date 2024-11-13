<template>
  <main class="main">
    <div class="container content">
      <div class="card">
        <div class="left-panel">
          <h2 class="title">Got ideas? We've got the skills. Let's team up.</h2>
          <p class="description">
            Tell us more about yourself and what you've got in mind. We're
            excited to bring your vision to life.
          </p>
          <form class="form">
            <input type="text" placeholder="Your name" class="input" />
            <input type="email" placeholder="you@company.com" class="input" />
            <textarea
              placeholder="Tell us a little about your project..."
              class="textarea"
              rows="30"
            ></textarea>
            <button class="submit-button">Let's get started!</button>
          </form>
        </div>
        <div class="right-panel">
          <h3 class="get-in-touch-title">Get in touch</h3>
          <div class="contact-info">
            <div class="contact-item">
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
                class="lucide lucide-message-square"
              >
                <path
                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                />
              </svg>
              <div>
                <h4 class="contact-title">Chat to us</h4>
                <p class="contact-description">
                  Our friendly team is here to help.
                </p>
                <a href="mailto:hi@untitledui.com" class="contact-link"
                  >hi@untitledui.com</a
                >
              </div>
            </div>
            <div class="contact-item">
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
                class="lucide lucide-map-pin"
              >
                <path
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <h4 class="contact-title">Visit us</h4>
                <p class="contact-description">
                  Come say hello at our office HQ.
                </p>
                <p class="contact-address">
                  100 Smith Street, Collingwood VIC 3066 AU
                </p>
              </div>
            </div>
            <div class="contact-item">
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
                class="lucide lucide-phone"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <div>
                <h4 class="contact-title">Call us</h4>
                <p class="contact-description">Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+15550000000" class="contact-link"
                  >+1 (555) 000-0000</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px;
}
.branding {
  display: flex;
  align-items: center;
}
.icon.globe {
  width: 32px;
  height: 32px;
  color: #4f46e5;
}
.brand-name {
  margin-left: 8px;
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
}
.nav {
  display: flex;
  gap: 40px;
}
.nav-link {
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s;
}
.nav-link:hover {
  color: #1f2937;
}
.main {
  flex-grow: 1;
}
.content {
  padding: 48px 0;
}
.card {
  display: flex;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.left-panel,
.right-panel {
  padding: 24px;
  flex: 1;
}
.title {
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 24px;
}
.description {
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 32px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.input,
.textarea,
.submit-button {
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  padding: 4px 10px;
}

.textarea {
  padding: 10px;
  min-height: 10rem;
}

.submit-button {
  background-color: #4f46e5;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  min-height: 3.5rem;
  transition: background-color 0.2s;
}
.submit-button:hover {
  background-color: #4338ca;
}
.get-in-touch-title,
.follow-us-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 16px;
}
.contact-info {
  margin-bottom: 48px;
}
.contact-item {
  display: flex;
  gap: 16px;
  align-items: start;
}
.icon {
  width: 24px;
  height: 24px;
  color: #4f46e5;
}
.contact-title {
  font-size: 1.125rem;
  font-weight: medium;
  color: #1f2937;
}
.contact-description,
.contact-address {
  color: #4b5563;
}
.contact-link {
  color: #4f46e5;
  text-decoration: none;
  transition: color 0.2s;
}
.contact-link:hover {
  color: #3b82f6;
}
.social-media {
  display: flex;
  flex-direction: column;
}
.social-icons {
  display: flex;
  gap: 24px;
}
.social-icon {
  color: #6b7280;
  transition: color 0.2s;
}
.social-icon:hover {
  color: #374151;
}
.footer {
  background-color: #1f2937;
  padding: 24px 0;
}
.footer-text {
  color: #9ca3af;
  text-align: center;
}
</style>
