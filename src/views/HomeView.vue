<template>
  <div class="home-view">
    <ErrorBoundary component="Imagen de Cabecera">
      <LandingHero />
    </ErrorBoundary>
    <ErrorBoundary component="Último Post">
      <LatestPost />
    </ErrorBoundary>
    <ErrorBoundary component="Posts Anteriores">
      <PreviousPosts />
    </ErrorBoundary>
  </div>
</template>

<script>
import ErrorBoundary from '@/components/util/ErrorBoundary.vue';
import LandingHero from '@/components/home/LandingHero.vue';
import PreviousPosts from '@/components/home/PreviousPosts.vue';
import LatestPost from '@/components/home/LatestPost.vue';

export default {
  name: 'HomeView',
  title: 'Todo Está Relacionado',
  components: {
    ErrorBoundary, LandingHero, PreviousPosts, LatestPost
  }
};
</script>

