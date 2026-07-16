<script setup>
import { computed } from 'vue';
import { cafes } from '@/data/coffees';
import { calcularMedia } from '@/data/media';

const ranking = computed(() => {
    return[...cafes.value].sort((a,b) => {
        return calcularMedia(b) - calcularMedia(a)
    })
})
</script>
<template>
    <table>
    <thead>
      <tr>
        <th>Posição</th>
        <th>Café</th>
        <th>Produtor</th>
        <th>Média</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(cafe, index) in ranking" :key="cafe.id">
        <td>{{ index + 1 }}º</td>
        <td>{{ cafe.nome }}</td>
        <td>{{ cafe.produtor }}</td>
        <td>{{ calcularMedia(cafe) }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style>

table{
    width:100%;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
}

th, td{
    padding:12px;
    border:1px solid #ddd;
    text-align:center;
}

th{
    font-weight: bold;
    color:white;
}

</style>