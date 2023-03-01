<template>
  <div id="app">
    <header>
      <router-link to="/question1">Question 1 link</router-link>&emsp;
      <router-link to="/question2">Question 2 link</router-link>&emsp;
      <router-link to="/question3">Question 3 link</router-link>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  position: fixed;
  top: 0;
  left: 10%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
