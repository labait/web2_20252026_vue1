<script setup>
import { ref } from 'vue';

const works = [
  {
    title: 'work1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel metus ut magna volutpat blandit id eget mi. Sed ex mi, rhoncus nec magna quis, imperdiet porta lacus. Aliquam at leo erat. Integer massa turpis, elementum non laoreet ac, facilisis eu leo. Aliquam egestas rhoncus magna congue tempus. Nulla in rhoncus lorem, tempor condimentum dui.',
    image: 'https://picsum.photos/200/300?v=1',
  },
  {
    title: 'work2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel metus ut magna volutpat blandit id eget mi. Sed ex mi, rhoncus nec magna quis, imperdiet porta lacus. Aliquam at leo erat. Integer massa turpis, elementum non laoreet ac, facilisis eu leo. Aliquam egestas rhoncus magna congue tempus. Nulla in rhoncus lorem, tempor condimentum dui.',
    image: 'https://picsum.photos/200/300?v=2',
  },
  {
    title: 'work3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel metus ut magna volutpat blandit id eget mi. Sed ex mi, rhoncus nec magna quis, imperdiet porta lacus. Aliquam at leo erat. Integer massa turpis, elementum non laoreet ac, facilisis eu leo. Aliquam egestas rhoncus magna congue tempus. Nulla in rhoncus lorem, tempor condimentum dui.',
    image: 'https://picsum.photos/200/300?v=3',
  },
];

</script>

<template>
  <div id="works" class="p-8 text-4xl">
    works
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div v-for="(work, index) in works" :key="index" class="p-4">
      <img :src="work.image" alt="" class="w-full h-auto mb-4">
      <h3 class="text-xl font-bold mb-2">{{ work.title }}</h3>
      <p>{{ work.description }}</p>
    </div>
  </div>
</template>