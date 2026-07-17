<script setup>
import LeaderboardTable from '@/components/LeaderboardTable.vue';
import { totalCafes } from '@/data/media';

</script>

<template>
  <main>
   <div class="geral">
     <h1>Ranking Geral</h1>
     <div class="texto">
      <p>Total de Cafés Avaliados</p>
     <p>{{ totalCafes }}</p>
     </div>
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
.geral {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.texto {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
</style>