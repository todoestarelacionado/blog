<script>
export default {
  name: 'ErrorBoundary',
  data: () => ({
    error: false,
    message: '',
  }),
  props: {
    component: {
      type: String,
      required: true,
    }
  },
  errorCaptured({ message }) {
    this.error = true;
    this.message = message;
  },
  render(h) {
    return this.error ? h('p', `¡Error en la sección ${this.component}! ${this.message}`) : this.$slots.default[0];
  }
};
</script>
