<template>
  <div class="trigger-warning">
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'TriggerWarning',
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.trigger-warning {
  background-color: var(--variant-background-color);
  border-radius: 0.3rem;
  box-shadow: var(--secondary-box-shadow);
  font-family: 'Barlow Condensed Light';
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  user-select: none;
  color: var(--main-color);
  padding: 0.5rem;
  font-size: 0.8rem;

  @media (min-width: $xs) {
    padding: 0.8rem;
    font-size: 1rem;
  }

  @media (min-width: $s) {
    padding: 1rem;
    font-size: 1.2rem;
  }

  @media (min-width: $r) {
    font-size: 1.5rem;
  }

  @media (min-width: $l) {
    font-size: 1.8rem;
  }

  @media (min-width: $xl) {
    font-size: 2rem;
  }
}
</style>