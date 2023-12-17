<template>
  <div class="previous-posts" v-if="blogsSliced.length">
    <LineDivider />
    <h2 class="previous-posts__title">Posts Anteriores</h2>
    <PostSummary v-for="post in blogsSliced" :key="post.id" :id="post.id" :title="post.title"
      :description="post.description" :triggerWarnings="post.triggerWarnings" />
    <BaseButton v-if="blogs.length > blogsSliced.length + 1" :variant="true" @click="goToHistory"
      class="previous-posts__history">
      Ver Más Posts
    </BaseButton>
  </div>
</template>

<script>
import PostSummary from '@/components/common/PostSummary.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import LineDivider from '@/components/ui/LineDivider.vue';
import blogs from '@/content/blogs.json';

export default {
  name: 'PreviousPosts',
  components: {
    PostSummary, BaseButton, LineDivider
  },
  props: {
    maxAmountOfPosts: {
      type: Number,
      default: 5,
    }
  },
  data() {
    return {
      blogs,
      blogsSliced: blogs.slice(1, this.maxAmountOfPosts),
    };
  },
  methods: {
    goToHistory() {
      this.$router.push({ name: 'history' });
    }
  }
};
</script>

<style lang="scss" scoped>
.previous-posts {
  position: relative;
  padding-bottom: 2rem;
  box-shadow: var(--main-box-shadow);
  z-index: 5;
  display: flex;
  flex-direction: column;

  .previous-posts__history {
    align-self: center;
    margin-bottom: 5rem;
  }
}
</style>
