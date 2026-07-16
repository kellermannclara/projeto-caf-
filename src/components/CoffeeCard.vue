<script setup>
import { calcularMedia } from '@/data/media';

const props = defineProps({
    cafe: Object
})
</script>
<template>
    <div class="card">
        <h2>{{ cafe.nome }}</h2>
        <p><strong>Produtor:</strong> {{ cafe.produtor }}</p>
        <p>
            <strong>Média:</strong>
            {{ calcularMedia(cafe) }}
        </p>
        <p>{{ cafe.observacao }}</p>
    </div>
</template>
<style scoped>

.card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 6px rgba(0,0,0,.15);
    color: black;
}

</style>