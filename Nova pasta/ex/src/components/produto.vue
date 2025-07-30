<script setup>
import { ref } from 'vue'

const produtos = ref(['Tijolo', 'Cimento', 'Areia', 'Pedra', 'Argamassa'])

function adicionarProduto() {
    const novo = prompt('Digite o nome do novo produto:')
    if (novo && novo.trim() !== '') {
        produtos.value.push(novo.trim())
    }
}
</script>

<template>
    <div>
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h2>Produtos</h2>
            <button class="btn btn-success" @click="adicionarProduto">
                Adicionar
            </button>
        </div>

        <ul class="list-group">
            <li class="list-group-item" v-for="(produto, index) in produtos" :key="index">
                {{ produto }}
            </li>
        </ul>
    </div>
</template>
