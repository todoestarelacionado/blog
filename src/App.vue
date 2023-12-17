<template>
  <div id="app">
    <transition mode="out-in" :name="$route.meta.transition">
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Barlow Condensed';
  src: local('Barlow Condensed'),
    url(@/assets/fonts/barlow-condensed.ttf) format('truetype');
}

@font-face {
  font-family: 'Barlow Condensed Light';
  src: local('Barlow Condensed Light'),
    url(@/assets/fonts/barlow-condensed-light.ttf) format('truetype');
}

@font-face {
  font-family: 'PT Sans Narrow';
  src: local('PT Sans Narrow'),
    url(@/assets/fonts/pt-sans-narrow.ttf) format('truetype');
}

html {
  --main-color: rgb(238, 231, 190);
  --secondary-color: rgb(202, 204, 77);
  --variant-color: #181f08;
  --alternate-color: rgb(150, 37, 37);

  --main-background-color: #181f08;
  --secondary-background-color: #3b4d0a;
  --variant-background-color: rgb(150, 37, 37);
  --alternate-background-color: rgb(138, 139, 43);
  --alternate-hover-background-color: rgb(203, 206, 42);

  --main-text-shadow: #181f08 0.1rem 0 1rem;

  --main-box-shadow: 0 0 2rem 0.2rem #181f08;
  --secondary-box-shadow: 0 0 0.5rem 0.01rem #181f08;

  --main-border: rgb(202, 204, 77) 0.1rem solid;
}

#app {
  color: var(--main-color);
  background-color: var(--main-background-color);
}

body {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3 {
  font-family: 'Barlow Condensed';
  margin: 0;
  text-align: center;
  width: 100%;
  user-select: none;
  color: var(--secondary-color);
  text-shadow: var(--main-text-shadow);
}

h1 {
  padding: 2rem 0 1rem;
  font-size: 3rem;

  @media (min-width: $xs) {
    font-size: 4rem;
  }

  @media (min-width: $s) {
    font-size: 6rem;
  }

  @media (min-width: $r) {
    font-size: 8rem;
  }

  @media (min-width: $l) {
    font-size: 10rem;
  }

  @media (min-width: $xl) {
    font-size: 12rem;
  }
}

h2 {
  padding: 2rem 0 1rem;
  font-size: 2rem;

  @media (min-width: $xs) {
    font-size: 2.5rem;
  }

  @media (min-width: $s) {
    font-size: 3.5rem;
  }

  @media (min-width: $r) {
    font-size: 4.5rem;
  }

  @media (min-width: $l) {
    font-size: 5.5rem;
  }

  @media (min-width: $xl) {
    font-size: 7rem;
  }
}

h3 {
  padding: 2rem 0 1rem;
  font-size: 1.5rem;

  @media (min-width: $xs) {
    font-size: 2rem;
  }

  @media (min-width: $s) {
    font-size: 3rem;
  }

  @media (min-width: $r) {
    font-size: 4rem;
  }

  @media (min-width: $l) {
    font-size: 5rem;
  }

  @media (min-width: $xl) {
    font-size: 6rem;
  }
}

div,
p {
  font-family: 'PT Sans Narrow';
  margin: 0;
}

p {
  line-height: 1.5rem;
  font-size: 1rem;
  margin: 0.2rem 0;
  text-indent: 2rem;

  @media (min-width: $xs) {
    font-size: 1.2rem;
    line-height: 2rem;
    margin: 0.4rem 0;
    text-indent: 3rem;
  }

  @media (min-width: $s) {
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin: 0.6rem 0;
    text-indent: 4rem;
  }

  @media (min-width: $r) {
    margin: 0.8rem 0;
    text-indent: 5rem;
  }

  @media (min-width: $l) {
    margin: 1rem 0;
    text-indent: 6rem;
  }

  @media (min-width: $xl) {
    margin: 1.2rem 0;
    text-indent: 7rem;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.5s;
}

.slide-up-enter {
  transform: translateY(100%)
}

.slide-up-leave-to {
  transform: translateY(-100%)
}
</style>
