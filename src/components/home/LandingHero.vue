<template>
  <div class="landing-hero">
    <div class="landing-hero__image-content">
      <div class="landing-hero__logo">TER</div>
      <h1 class="landing-hero__title">
        Todo Está Relacionado
      </h1>
      <div class="landing-hero__subtitle">
        Un blog sobre todo y sobre nada a la vez
      </div>
    </div>
    <div class="landing-hero__image" />
  </div>
</template>

<script>
export default {
  name: 'LandingHero'
};
</script>

<style lang="scss" scoped>
.landing-hero {
  position: relative;
  box-shadow: var(--main-box-shadow);
  z-index: 5;

  .landing-hero__image-content {
    position: absolute;
    margin-top: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (min-width: $xs) {
      margin-top: 35%;
    }

    @media (min-width: $s) {
      margin-top: 20%;
    }

    @media (min-width: $r) {
      margin-top: 15%;
    }

    @media (min-width: $l) {
      margin-top: 10%;
    }

    @media (min-width: $xl) {
      margin-top: 5%;
    }

    .landing-hero__logo {
      background-color: var(--alternate-color);
      padding: 2rem;
      height: 10rem;
      width: 10rem;
      border-radius: 50%;
      font-family: 'Barlow Condensed';
      font-size: 7rem;
      display: flex;
      align-items: center;
      box-shadow: var(--main-box-shadow);
      user-select: none;

      @media (min-width: $s) {
        font-size: 12rem;
        height: 17rem;
        width: 17rem;
      }

      @media (min-width: $r) {}

      @media (min-width: $l) {}
    }

    .landing-hero__subtitle {
      font-family: 'PT Sans Narrow';
      font-size: 1rem;
      text-align: center;
      text-shadow: var(--main-text-shadow);
      user-select: none;

      @media (min-width: $xs) {
        font-size: 1.8rem;
      }

      @media (min-width: $s) {
        font-size: 2.4rem;
      }

      @media (min-width: $r) {
        font-size: 3.2rem;
      }

      @media (min-width: $l) {
        font-size: 4rem;
      }

      @media (min-width: $xl) {
        font-size: 4.8rem;
      }
    }
  }

  .landing-hero__image {
    background: url('@/assets/images/landing.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
}
</style>