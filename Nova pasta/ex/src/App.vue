<script setup>
import { ref } from 'vue'
import Nav from './components/nav.vue'
import Produtos from './components/produto.vue'
import Clientes from './components/cliente.vue'

const telaAtual = ref('produto')
</script>

<template>
  <div class="container mt-4">
    <Nav :telaAtual="telaAtual" @mudarTela="(tela) => telaAtual = tela" />
    
    <Produtos v-if="telaAtual === 'produto'" />
    <Clientes v-if="telaAtual === 'cliente'" />
  </div>
</template>


