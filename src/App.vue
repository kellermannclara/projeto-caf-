<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <img src="https://i.pinimg.com/736x/4a/b8/11/4ab8118b26620f94714f6f6b7fc5654e.jpg" alt="">
    <div class="logo">Café Desafio</div>
    <nav class="nav-links">
      <RouterLink class="nav-item" to="/">Home</RouterLink>
      <RouterLink class="nav-item" to="/avaliacao">Avalição</RouterLink>
      <RouterLink class="nav-item" to="/ranking">Ranking</RouterLink>
    </nav>
  </header>

  <main class="content">
    <RouterView />
    <!-- tudo que precisa ser renderizado pelas minhas rotas estará dentro dessa tag content, o responssavel por isso é o routerview -->
  </main>
</template>

<style scoped>

.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
}
.navbar img {
  width: 3rem;
  height: auto;
}

.nav-links{
display: flex;
gap: 1.5rem;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #222;
}

.nav-item {
  color: brown;
  text-decoration: none;
}
.nav-item:hover,
.nav-item.active {
  text-decoration: none;
  color: aquamarine;
}
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}


</style>
