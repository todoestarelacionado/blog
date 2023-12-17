<template>
  <div class="latest-post" :class="{ 'latest-post__background': displayAll }">
    <div class="latest-post__published" :class="{ 'latest-post__published-collapsed': !displayAll }">
      <div ref="latestPost" class="latest-post__legend">Último Post</div>
      <PostContent :id="id" :date="date" :title="title" :description="description" :triggerWarnings="triggerWarnings"
        :post="paragraphs" :hide-date="true" class="latest-post__content" />
    </div>
    <BaseButton @click="toggleReadMore" class="latest-post__toggle-button">
      {{ displayAll ? 'Cerrar' : 'Leer Más' }}
    </BaseButton>
  </div>
</template>

<script>
import PostContent from '@/components/common/PostContent.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import blogs from '@/content/blogs.json';

export default {
  name: 'LatestPost',
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
      displayAll: false,
      paragraphs: []
    };
  },
  created() {
    const blog = this.blogs[0];

    if (!blog) {
      throw new Error("No se pudo mostrar el último post");
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
    this.paragraphs = this.post.slice(0, 1);
  },
  methods: {
    toggleReadMore() {
      this.displayAll = !this.displayAll;
      this.paragraphs = this.displayAll ? this.post : this.post.slice(0, 1);
      if (!this.displayAll) {
        this.$refs.latestPost.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.latest-post {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;

  &.latest-post__background {
    background-color: var(--secondary-background-color);
  }

  .latest-post__published {
    background-color: var(--secondary-background-color);
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .latest-post__published-collapsed {
    mask-image: linear-gradient(180deg, black 70%, transparent);
  }

  .latest-post__legend {
    position: absolute;
    text-align: center;
    padding-top: 4rem;
    font-family: 'Barlow Condensed';
    font-size: 1.5rem;
    text-shadow: var(--main-text-shadow);

    @media (min-width: $xs) {
      padding-top: 4.5rem;
      font-size: 2rem;
    }

    @media (min-width: $s) {
      padding-top: 5rem;
      font-size: 3rem;
    }

    @media(min-width: $r) {
      font-size: 4rem;
    }

    @media (min-width: $l) {
      font-size: 4.5rem;
    }
  }

  .latest-post__content {
    margin-top: 2rem;
  }

  .latest-post__toggle-button {
    margin-top: 2rem;
  }
}
</style>
