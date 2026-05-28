<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';

import About from './components/About.vue';
</script>

<template>
  <div class="max-w-5xl mx-auto w-full">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
