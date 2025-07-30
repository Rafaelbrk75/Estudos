<script setup>
const props = defineProps({
    telaAtual: String
})
const emit = defineEmits(['mudarTela'])
</script>

<template>
    <nav class="navbar">
        <ul class="nav">
            <li class="nav-item">
                <a href="#" class="nav-link" :class="{ 'fw-bold': telaAtual === 'produto' }"
                    @click.prevent="emit('mudarTela', 'produto')">
                    Produtos
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link" :class="{ 'fw-bold': telaAtual === 'cliente' }"
                    @click.prevent="emit('mudarTela', 'cliente')">
                    Clientes
                </a>
            </li>
        </ul>
    </nav>
</template>
