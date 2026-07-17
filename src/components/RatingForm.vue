<script setup>
import { cafes } from '@/data/coffees';
import { calcularMedia } from '@/data/media';
import { ref } from 'vue';

const novoCafe = ref({
    nome: '',
    produtor: '',
    aroma: 0,
    sabor: 0,
    acidez: 0,
    corpo: 0,
    finalizacao: 0,
    observacao: ''
})

function adicionarCafe() {
    if (!novoCafe.value.nome || !novoCafe.value.produtor || novoCafe.value.aroma === null || novoCafe.value.sabor === null || novoCafe.value.acidez === null || novoCafe.value.corpo === null || novoCafe.value.finalizacao === null) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    cafes.value.push({
        id: Date.now(),
        ...novoCafe.value
    })

    novoCafe.value = {
        nome: '',
        produtor: '',
        aroma: 0,
        sabor: 0,
        acidez: 0,
        corpo: 0,
        finalizacao: 0,
        observacao: ''
    };
}

function limpar() {
    novoCafe.value = {
        nome: '',
        produtor: '',
        aroma: 0,
        sabor: 0,
        acidez: 0,
        corpo: 0,
        finalizacao: 0,
        observacao: ''
    };
}

</script>
<template>
    <section class="coisas">
        <p>Nome do Café</p>
        <input type="text" v-model="novoCafe.nome" placeholder="Digite o nome do café...">
        <p>Nome do Produtor</p>
        <input type="text" v-model="novoCafe.produtor" placeholder="Digite o nome do produtor...">
        <p>Aroma</p>
        <input type="number" min="0" max="10" v-model.number="novoCafe.aroma">
        <p>Sabor</p>
        <input type="number" min="0" max="10" v-model.number="novoCafe.sabor">
        <p>Acidez</p>
        <input type="number" min="0" max="10" v-model.number="novoCafe.acidez">
        <p>Corpo</p>
        <input type="number" min="0" max="10" v-model.number="novoCafe.corpo">
        <p>Finalização</p>
        <input type="number" min="0" max="10" v-model.number="novoCafe.finalizacao">
        <p>Observação</p>
        <textarea v-model="novoCafe.observacao"></textarea>
    </section>

    <div class="media">
        <h3>Media calculada</h3>
        <p>{{ calcularMedia(novoCafe).toFixed(1) }}</p>
    </div>
    <div class="botao">
        <button @click="adicionarCafe">Adicionar Avaliação</button>
        <button @click="limpar">Limpar</button>
    </div>


</template>
<style scoped>

.coisa p {
    color: white;
    font-weight: bold;
}

.coisas {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.coisas input,
.coisas textarea {
    padding: 10px;
    border: 1px solid #bbb;
    border-radius: 8px;
    font-size: 1rem;
}

.media {
    font-size: 20px;
    margin: 10px 0 10px 0;
    border: 1px solid #bbb;
    padding: 10px;
    border-radius: 10px;
    color: white;
}

button {
    padding: 12px;
    background: #8b5e3c;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin: 0 10px 0 0;
}

button:hover {
    background: #6f482d;
}
</style>