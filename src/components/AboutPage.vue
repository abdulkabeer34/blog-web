<template>
  <div class="about-container">
    <main class="main-content">
      <section class="about-section">
        <h1>About Us</h1>
        <p class="lead-text">
          Welcome to BlogVerse, your premier destination for discovering and
          sharing incredible stories. We're passionate about creating a platform
          where voices can be heard and ideas can flourish.
        </p>
        <p>
          Our platform brings together millions of articles and stories from
          around the world. Whether you're interested in technology, lifestyle,
          travel, or culture, there's always something new to discover and
          explore.
        </p>
      </section>

      <section class="support-section">
        <h2>Customer Service and Support</h2>
        <div class="support-items">
          <div class="support-item">
            <h3>Help Center</h3>
            <p>
              Find answers to your questions in our comprehensive help
              documentation and guides.
            </p>
            <a href="#help" class="support-link">Visit Help Center →</a>
          </div>

          <div class="support-item">
            <h3>Community Forum</h3>
            <p>
              Join our vibrant community of writers and readers. Share ideas,
              get support, and connect with others.
            </p>
            <a href="#community" class="support-link">Join Community →</a>
          </div>

          <div class="support-item">
            <h3>Direct Support</h3>
            <p>
              Need personal assistance? Our support team is here to help you
              with any concerns.
            </p>
            <a href="#contact" class="support-link">Contact Support →</a>
          </div>
        </div>
      </section>

      <section class="locations-section">
        <h2>Our Offices</h2>
        <div class="office-grid">
          <div class="office-item">
            <h3>Headquarters</h3>
            <p>123 Tech Avenue</p>
            <p>San Francisco, CA 94105</p>
            <p>United States</p>
            <a href="mailto:hq@blogverse.com">hq@blogverse.com</a>
          </div>

          <div class="office-item">
            <h3>European Office</h3>
            <p>45 Digital Street</p>
            <p>London, EC2A 4NE</p>
            <p>United Kingdom</p>
            <a href="mailto:eu@blogverse.com">eu@blogverse.com</a>
          </div>

          <div class="office-item">
            <h3>Asia Pacific</h3>
            <p>88 Innovation Road</p>
            <p>Singapore, 018960</p>
            <p>Singapore</p>
            <a href="mailto:apac@blogverse.com">apac@blogverse.com</a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  min-height: 100vh;
  background-color: #ffffff;
  color: #191414;
}

.main-content {
  flex: 1;
  padding: 3rem 4rem;
  max-width: 1200px;
}

h1 {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 2rem;
  color: #191414;
}

.lead-text {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #616467;
  margin-bottom: 2rem;
}

.support-section {
  margin-top: 4rem;
}

.support-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.support-item {
  background-color: #f8f8f8;
  padding: 1.5rem;
  border-radius: 8px;
}

.support-item h3 {
  color: #191414;
  margin-bottom: 1rem;
}

.support-link {
  display: inline-block;
  margin-top: 1rem;
  color: #1db954;
  text-decoration: none;
  font-weight: 600;
}

.support-link:hover {
  text-decoration: underline;
}

.locations-section {
  margin-top: 4rem;
}

.office-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.office-item {
  padding: 1.5rem;
  background-color: #f8f8f8;
  border-radius: 8px;
}

.office-item h3 {
  color: #191414;
  margin-bottom: 1rem;
}

.office-item p {
  margin: 0.25rem 0;
  color: #616467;
}

.office-item a {
  display: inline-block;
  margin-top: 0.5rem;
  color: #1db954;
  text-decoration: none;
}

.office-item a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e5e5e5;
  }

  .main-content {
    padding: 2rem;
  }

  h1 {
    font-size: 2.5rem;
  }
}
</style>
