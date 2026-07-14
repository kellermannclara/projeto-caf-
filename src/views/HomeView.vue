<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { cafes } from '@/data/coffees';
import { calcularMedia } from '@/data/media';

const totalCafes = computed(() => cafes.value.length)
const melhorCafe = computed(() => {
  return [...cafes.value].sort((a, b) => b.media - a.media)[0]
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
        <h1>{{ totalCafes }}</h1>
      </div>
      <div class="card">
        <h2>Café com a maior nota</h2>
        <h1>{{ melhorCafe?.calcularMedia }}</h1>
        <p>{{ melhorCafe?.nome }}</p>
      </div>
      <div class="card">
        <h2>Última Avaliação</h2>
        <h1>{{ ultimaAvaliacao?.media }}</h1>
        <p>{{ ultimaAvaliacao?.nome }}</p>
      </div>
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
  border: 1px solid #ddd;
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
</style>
