<template>
  <div class="post-view">
    <ErrorBoundary component="Contenido del Post">
      <PostContainer />
    </ErrorBoundary>
  </div>
</template>

<script>
import ErrorBoundary from '@/components/util/ErrorBoundary.vue';
import PostContainer from '@/components/post/PostContainer.vue';

export default {
  name: 'PostView',
  title: 'Post',
  components: {
    ErrorBoundary, PostContainer
  }
};
</script>
