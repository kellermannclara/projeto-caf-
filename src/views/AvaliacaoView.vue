<script setup>
import { cafes } from '@/data/coffees';
import CoffeeCard from '@/components/CoffeeCard.vue';
import RatingForm from '@/components/RatingForm.vue';
</script>

<template>
  <main>
    <section class="coisa">
      <div class="avaliacoes">
        <h1>Avaliações de cafés</h1>
        <CoffeeCard v-for="cafe in cafes" :key="cafe.id" :cafe="cafe" />
      </div>
      <div class="form">
        <h1>Nova Avaliação</h1>
        <RatingForm/>
      </div>
    </section>
  </main>
</template>

<style scoped>

.coisa {
    display: flex;
    gap: 4rem;
    align-items: flex-start;
    margin-top: 2rem;
}

.form {
    width: 65%;
    margin-left: 2rem;
}

.avaliacoes {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

</style>