<template>
  <div class="post-content">
    <div class="post-content__info">
      <div v-if="!hideDate" class="post-content__date">{{ date }}</div>
      <h2>{{ title }}</h2>
      <div class="post-content__description">{{ description }}</div>
      <template v-if="triggerWarnings.length">
        <div class="post-content-disclaimer">
          Alerta de Contenido
        </div>
        <div class="post-content__trigger-warnings">
          <TriggerWarning v-for="triggerWarning in triggerWarnings" :key="triggerWarning" :label="triggerWarning"
            class="post-content__trigger-warning" />
        </div>
      </template>
    </div>
    <LineDivider v-if="!hideDate" />
    <div class="post-content__content">
      <template v-for="p in post">
        <h3 v-if="p.type === constantTypes.SUBTITLE" :key="p.id">{{ p.content }}</h3>
        <p v-if="p.type === constantTypes.PARAGRAPH" :key="p.id">{{ p.content }}</p>
      </template>
    </div>
  </div>
</template>

<script>
import LineDivider from '@/components/ui/LineDivider.vue';
import TriggerWarning from '@/components/common/TriggerWarning.vue';
import constantTypes from '@/constants/contentTypes';

export default {
  name: 'PostContent',
  components: {
    LineDivider, TriggerWarning
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    triggerWarnings: {
      type: Array,
      default: () => ([])
    },
    post: {
      type: Array,
      required: true,
    },
    hideDate: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      constantTypes,
    };
  }
};
</script>

<style lang="scss" scoped>
.post-content {
  background-color: var(--secondary-background-color);
  padding-top: 2rem;

  @media (min-width: $xs) {
    padding-top: 3rem;
  }

  @media (min-width: $s) {
    padding-top: 4rem;
  }

  @media (min-width: $l) {
    padding-top: 5rem;
  }

  .post-content__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem;

    @media (min-width: $xs) {
      margin: 0 2rem;
    }

    @media (min-width: $s) {
      margin: 0 4rem;
    }

    @media (min-width: $r) {
      margin: 0 8rem;
    }

    @media (min-width: $l) {
      margin: 0 12rem;
    }

    @media (min-width: $xl) {
      margin: 0 16rem;
    }
  }

  .post-content__date {
    font-family: 'Barlow Condensed Light';
    font-size: 1.2rem;

    @media (min-width: $xs) {
      font-size: 1.4rem;
    }

    @media (min-width: $s) {
      font-size: 1.8rem;
    }

    @media(min-width: $r) {
      font-size: 2rem;
    }

    @media (min-width: $l) {
      font-size: 2.2rem;
    }
  }

  .post-content__description {
    font-family: 'Barlow Condensed Light';
    text-align: center;
    font-size: 1.2rem;

    @media (min-width: $xs) {
      font-size: 1.4rem;
    }

    @media (min-width: $s) {
      font-size: 1.6rem;
    }

    @media (min-width: $r) {
      font-size: 1.8rem;
    }

    @media (min-width: $l) {
      font-size: 2rem;
    }

    @media (min-width: $xl) {
      font-size: 2.2rem;
    }
  }

  .post-content-disclaimer {
    margin-top: 2rem;
    font-weight: bold;
    font-size: 1.2rem;

    @media (min-width: $xs) {
      font-size: 1.4rem;
    }

    @media (min-width: $s) {
      font-size: 1.6rem;
    }

    @media (min-width: $r) {
      font-size: 1.8rem;
    }

    @media (min-width: $l) {
      font-size: 2rem;
    }

    @media (min-width: $xl) {
      font-size: 2.2rem;
    }
  }

  .post-content__trigger-warnings {
    display: flex;
    margin: 0.5rem 0 0;
    background-color: var(--main-background-color);
    border-radius: 0.5rem;
    padding: 0.5rem;

    @media (min-width: $xs) {
      padding: 0.8rem;
    }

    @media (min-width: $s) {
      padding: 1rem;
    }
  }

  .post-content__trigger-warning {
    margin: 0 0.5rem;
  }

  .post-content__content {
    margin: 2rem 1rem 0;
    padding-bottom: 2rem;

    @media (min-width: $xs) {
      margin: 2.5rem 2rem 0;
    }

    @media (min-width: $s) {
      margin: 3rem 4rem 0;
    }

    @media (min-width: $r) {
      margin: 3.5rem 8rem 0;
    }

    @media (min-width: $l) {
      margin: 4rem 12rem 0;
    }

    @media (min-width: $xl) {
      margin: 4.5rem 16rem 0;
    }
  }
}
</style>