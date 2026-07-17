<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { cafes } from '@/data/coffees';
import { calcularMedia } from '@/data/media';
import { totalCafes } from '@/data/media';

// const totalCafes = computed(() => cafes.value.length)
const melhorCafe = computed(() => {
  return [...cafes.value].sort(
    (a, b) => calcularMedia(b) - calcularMedia(a)
  )[0]
})
const ultimaAvaliacao = computed(() => {
  return cafes.value[cafes.value.length - 1]
})



</script>

<template>
  <main>
    <section class="incio">
      <div class="imagem">
        <img src="https://i.pinimg.com/736x/20/76/ac/2076acc4f1bf90b4f9bfb3007872426d.jpg" alt="imagem legal">
      </div>

      <div class="texto">
        <h1>Campeonato de Avaliação de Qualidade de Café</h1>
        <hr>
        <p>Avalie, compare e descubra os melhores cafés especiais.</p>
      </div>
    </section>

    <section class="cards">
      <div class="card">
        <h2>Total de cafés avaliados</h2>
        <h2>{{ totalCafes }}</h2>
        <p>cafés</p>
      </div>
      <div class="card">
        <h2>Café com a maior nota</h2>
        <h2>{{ calcularMedia(melhorCafe) }}</h2>
        <p>{{ melhorCafe?.nome }}</p>
      </div>
      <div class="card">
        <h2>Última Avaliação</h2>
        <h2>{{ calcularMedia(ultimaAvaliacao) }}</h2>
        <p>{{ ultimaAvaliacao?.nome }}</p>
      </div>
    </section>
    <section class="botao">
      <RouterLink class="ir" to="/avaliacao">Ver Avaliações</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.incio {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  margin-top: 40px;
  border: 2px solid #ddd;
  border-radius: 15px;
}

.imagem {
  width: 45%;
  display: flex;
  justify-content: center;
}

.imagem img {
  width: 300px;
}

.texto {
  width: 45%;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

hr {
  width: 200px;
  margin: 20px auto;
  border: 1px solid #8b5e3c;
}

p {
  font-size: 1.4rem;
}

.cards {
  display: flex;
  gap: 3rem;
  margin-top: 2vw;
}

.card {
  border: solid 2px #ddd;
  border-radius: 20px;
  padding: 40px 60px;
  text-align: center;
}
.card p {
  color: #636363;
}

.botao {
  margin-top: 2vw;
  align-items: center;
  display: flex;
}
.ir {
  background-color: #8b5e3c;
  padding: 1vw 3vw;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;
}
</style>
