<template>
  <button class="base-button" :class="{ 'base-button__variant': variant, 'base-button__shrink': wasClicked }"
    @click="wasClicked = true" @animationend="handleButton">
    <slot>Clickeame</slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    wasClicked: false,
  }),
  methods: {
    handleButton() {
      this.wasClicked = false;
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss" scoped>
.base-button {
  background-color: var(--alternate-background-color);
  border: none;
  color: var(--variant-color);
  font-family: 'Barlow Condensed';
  box-shadow: var(--main-box-shadow);
  cursor: pointer;
  transition: all 0.5s;
  padding: 0.5rem 0.8rem;
  font-size: 1.2rem;
  border-radius: 0.4rem;

  &.base-button__variant {
    background-color: var(--variant-background-color);
    color: var(--main-color);
  }

  &.base-button__variant:hover {
    background-color: var(--alternate-hover-background-color);
    color: var(--variant-color);
  }

  @media (min-width: $xs) {
    padding: 0.8rem 1rem;
    font-size: 1.5rem;
    border-radius: 0.8rem;
  }

  @media (min-width: $s) {
    padding: 1rem 1.5rem;
    font-size: 1.8rem;
    border-radius: 1rem;
  }

  @media (min-width: $r) {
    padding: 1.2rem 1.8rem;
    font-size: 2rem;
    border-radius: 1rem;
  }

  @media (min-width: $l) {
    padding: 1.5rem 2rem;
    font-size: 2.5rem;
    border-radius: 1rem;
  }

  @media (min-width: $xl) {
    padding: 2rem 3rem;
    font-size: 3rem;
    border-radius: 1rem;
  }

  &.base-button__shrink {
    animation: shrink 0.5s;
  }

  @keyframes shrink {
    50% {
      transform: scale(0.95);
    }
  }
}


.base-button:hover {
  background-color: var(--variant-background-color);
  color: var(--main-color);
}
</style>