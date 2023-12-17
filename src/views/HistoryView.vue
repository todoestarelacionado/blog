<template>
  <div class="history-view">
    <ErrorBoundary component="Posts Viejos">
      <AllPosts />
    </ErrorBoundary>
  </div>
</template>

<script>
import ErrorBoundary from '@/components/util/ErrorBoundary.vue';
import AllPosts from '@/components/history/AllPosts.vue';

export default {
  name: 'HistoryView',
  title: 'Historial de Posteos',
  components: {
    ErrorBoundary, AllPosts
  }
};
</script>