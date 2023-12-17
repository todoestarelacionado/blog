<template>
  <div class="post-summary" :class="{ 'post-summary__shrink': wasClicked }" @click="wasClicked = true"
    @animationend="goToPost">
    <div class="post-summary__title">{{ title }}</div>
    <div class="post-summary__description">{{ description }}</div>
    <div class="post-summary__trigger-warnings">
      <TriggerWarning v-for="triggerWarning in triggerWarnings" :key="triggerWarning" :label="triggerWarning"
        class="post-summary__trigger-warning" />
    </div>
  </div>
</template>

<script>
import TriggerWarning from '@/components/common/TriggerWarning.vue';

export default {
  name: 'PostSummary',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    triggerWarnings: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    TriggerWarning
  },
  data: () => ({
    wasClicked: false,
  }),
  methods: {
    goToPost() {
      this.wasClicked = false;
      this.$router.push({ name: 'post', params: { id: this.id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.post-summary {
  background-color: var(--alternate-background-color);
  color: var(--variant-color);
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  user-select: none;
  margin: 0 1rem 0.5rem;
  transition: background-color 0.5s;

  &.post-summary__shrink {
    animation: shrink 0.5s;
  }

  @media(min-width: $xs) {
    margin: 0 2rem 1rem;
    border-radius: 1rem;
    padding: 1rem 1rem 2rem;
  }

  @media(min-width: $s) {
    margin: 0 2.5rem 1.5rem;
  }

  @media(min-width: $r) {
    margin: 0 3.5rem 2rem;
  }

  @media(min-width: $xl) {
    margin: 0 6rem 2.5rem;
  }

  .post-summary__title {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
    text-align: center;

    @media(min-width: $xs) {
      font-size: 1.8rem;
    }

    @media(min-width: $s) {
      font-size: 2rem;
    }

    @media(min-width: $r) {
      font-size: 2.2rem;
    }

    @media(min-width: $xl) {
      font-size: 2.5rem;
    }
  }

  .post-summary__description {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    text-align: center;

    @media(min-width: $xs) {
      font-size: 1.5rem;
    }

    @media(min-width: $s) {
      font-size: 1.8rem;
    }

    @media(min-width: $r) {
      font-size: 2rem;
    }

    @media(min-width: $xl) {
      font-size: 2.2rem;
    }
  }

  .post-summary__trigger-warnings {
    display: flex;
    justify-content: center;
  }

  .post-summary__trigger-warning {
    margin: 0.5rem 0.5rem 0 0;
  }

  @keyframes shrink {
    50% {
      transform: scale(0.95)
    }
  }
}

.post-summary:hover {
  background-color: var(--alternate-hover-background-color)
}
</style>