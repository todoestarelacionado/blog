<template>
  <div class="post-container">
    <PostContent :id="id" :date="date" :title="title" :description="description" :triggerWarnings="triggerWarnings"
      :post="post" />
    <BaseButton @click="goBack" class="post-container__back">Volver</BaseButton>
  </div>
</template>

<script>
import PostContent from '@/components/common/PostContent.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import blogs from '@/content/blogs.json';

export default {
  name: 'PostContainer',
  components: {
    PostContent, BaseButton
  },
  data() {
    return {
      blogs,
      id: 0,
      date: '',
      title: '',
      description: '',
      triggerWarnings: [],
      post: [],
    };
  },
  watch: {
    title() {
      document.title = `TER — ${this.title}`;
    }
  },
  created() {
    const blog = this.blogs.find((blog) => blog.id == this.$route.params.id);

    if (!blog) {
      throw new Error("No se pudo recuperar el post");
    }

    const { id, date, title, description, triggerWarnings, post } = blog;

    if (!id || !date || !title || !description || !post.length) {
      throw new Error("Falta información");
    }

    this.id = id;
    this.date = date;
    this.title = title;
    this.description = description;
    this.triggerWarnings = triggerWarnings;
    this.post = post;
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.post-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .post-container__back {
    margin: 2rem 0 5rem;
  }
}
</style>