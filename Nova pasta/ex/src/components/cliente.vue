<script setup>
import { ref } from 'vue'

const clientes = ref(['Pedro', 'Murilo', 'Danilo'])

function adicionarCliente() {
    const novo = prompt('Digite o nome do novo cliente:')
    if (novo && novo.trim() !== '') {
        clientes.value.push(novo.trim())
    }
}
</script>

<template>
    <div>
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h2>Clientes</h2>
            <button class="btn btn-success" @click="adicionarCliente">
                Adicionar
            </button>
        </div>

        <ul class="list-group">
            <li class="list-group-item" v-for="(cliente, index) in clientes" :key="index">
                {{ cliente }}
            </li>
        </ul>
    </div>
</template>
