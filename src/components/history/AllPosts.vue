<template>
  <div class="all-posts">
    <h2 class="all-posts__title">Historial de Posteos</h2>
    <LineDivider />
    <div class="all-posts__posts">
      <PostSummary v-for="post in blogs" :key="post.id" :id="post.id" :title="post.title" :description="post.description"
        :triggerWarnings="post.triggerWarnings" />
    </div>
    <BaseButton :variant="true" @click="goBack" class="all-posts__back">Volver</BaseButton>
  </div>
</template>

<script>
import PostSummary from '@/components/common/PostSummary.vue';
import LineDivider from '@/components/ui/LineDivider.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import blogs from '@/content/blogs.json';

export default {
  name: 'AllPosts',
  components: {
    PostSummary, LineDivider, BaseButton
  },
  data() {
    return {
      blogs,
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.all-posts {
  padding-bottom: 12rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .all-posts__back {
    position: fixed;
    bottom: 0;
    align-self: center;
    margin-bottom: 5rem;
    margin-right: 1rem;

    @media(min-width:$xs) {
      margin-right: 2rem;
    }

    @media(min-width:$s) {
      margin-right: 2.5rem;
    }

    @media(min-width:$r) {
      margin-right: 3.5rem;
    }
  }
}
</style>
