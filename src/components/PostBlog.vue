<template>
  <div class="post-blog">
    <h1>Create a New Blog Post</h1>

    <form @submit.prevent="submitBlogPost">
      <!-- Blog Title -->
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          v-model="title"
          required
          placeholder="Enter your blog title"
        />
      </div>

      <!-- Blog Description -->
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="description"
          required
          placeholder="Write a brief description of your blog post"
          rows="4"
        ></textarea>
      </div>

      <!-- Image Upload -->
      <div class="form-group">
        <label for="image" class="image-upload-label">
          <span>Upload Image</span>
          <input
            type="file"
            id="image"
            @change="handleImageUpload"
            accept="image/*"
            class="hidden-input"
          />
          <div class="upload-icon">
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
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
          </div>
          <span class="file-name">{{ fileName || "No file chosen" }}</span>
        </label>
      </div>

      <!-- Time to Read -->
      <div class="form-group">
        <label for="timeToRead">Time to Read</label>
        <div class="time-to-read-container">
          <input
            type="range"
            id="timeToRead"
            v-model="timeToRead"
            min="1"
            max="60"
            step="1"
          />
          <span class="time-display">{{ timeToRead }} min</span>
        </div>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="submit-button">Post Blog</button>
    </form>

    <!-- Display preview of the uploaded image -->
    <div v-if="imagePreview" class="image-preview">
      <h3>Image Preview</h3>
      <img :src="imagePreview" alt="Blog image preview" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      image: null,
      imagePreview: null,
      timeToRead: 5,
      fileName: "",
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.image = file;
      this.fileName = file ? file.name : "";

      // Create a preview URL for the uploaded image
      if (file) {
        this.imagePreview = URL.createObjectURL(file);
      }
    },
    submitBlogPost() {
      // Here, prepare the form data to send to the backend
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("timeToRead", this.timeToRead);
      if (this.image) {
        formData.append("image", this.image);
      }

      // Simulating a form submission with console log
      // Replace this with an actual API call using Axios or fetch.
      console.log("Blog Post Data:", {
        title: this.title,
        description: this.description,
        timeToRead: this.timeToRead,
        image: this.image,
      });

      // Reset form fields after submission
      this.title = "";
      this.description = "";
      this.timeToRead = 5;
      this.image = null;
      this.imagePreview = null;
      this.fileName = "";
      alert("Blog post submitted successfully!");
    },
  },
};
</script>

<style scoped>
.post-blog {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #4a5568;
}

.form-group input[type="text"],
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.form-group input[type="text"]:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
}

.image-upload-label {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background-color: #edf2f7;
  border: 2px dashed #cbd5e0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.image-upload-label:hover {
  background-color: #e2e8f0;
}

.hidden-input {
  display: none;
}

.upload-icon {
  margin-right: 0.5rem;
  color: #4a5568;
}

.file-name {
  font-size: 0.875rem;
  color: #4a5568;
}

.time-to-read-container {
  display: flex;
  align-items: center;
}

input[type="range"] {
  flex-grow: 1;
  margin-right: 1rem;
}

.time-display {
  font-size: 0.875rem;
  font-weight: 600;
  color: #4a5568;
  min-width: 3rem;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-button:hover {
  background-color: #3182ce;
}

.image-preview {
  margin-top: 2rem;
}

.image-preview h3 {
  font-size: 1.25rem;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.image-preview img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.image-preview {
  animation: fadeIn 0.5s ease-out;
}
</style>
