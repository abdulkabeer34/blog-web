<template>
  <div class="card">
    <img
      src="@/assets/blog1.jpg"
      alt="Office space with people in meeting"
      class="card-image"
    />
    <div class="card-content">
      <div class="author">
        <img
          src="@/assets/blogLogo.png"
          alt="Esther Howard"
          class="author-image"
        />
        <div class="author-info">
          <h3 class="author-name">Esther Howard</h3>
          <span class="date">May 9, 2014</span>
        </div>
      </div>
      <h2 class="title">
        Top Trends in Office Design for a Productive Workplace
      </h2>
      <p class="description">
        This includes open layouts for collaboration, ergonomic furniture for
        comfort, biophilic elements to bring nature indoors, and tech-integrated
        spaces for seamless.
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  max-width: 340px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.author {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.author-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 0;
}

.date {
  font-size: 14px;
  color: #666;
  margin-top: 2px;
}

.title {
  font-size: 24px;
  font-weight: 600;
  color: #111;
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.description {
  font-size: 16px;
  color: #444;
  line-height: 1.5;
  margin: 0;
}

/* Optional hover effect */
.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}
</style>
