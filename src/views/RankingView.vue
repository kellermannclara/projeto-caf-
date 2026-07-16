<script setup>
import LeaderboardTable from '@/components/LeaderboardTable.vue';
import { totalCafes } from '@/data/media';

</script>

<template>
  <main>
   <div class="geral">
     <h1>Ranking Geral</h1>
     <p>Total de Cafés Avaliados</p>
     <p>{{ totalCafes }}</p>
   </div>

    <LeaderboardTable/>
  </main>
</template>

<style scoped>
.geral h1 {
  color: white;
}
.geral p {
  color: red;
}
</style>