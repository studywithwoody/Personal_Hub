<template>
  <div>
    <UContainer>
      <main class="space-y-12 pb-24">
        <AppHero />
      </main>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Woody | Personal Hub",
  meta: [
    {
      name: "description",
      content: "Personal hub leading to my personal projects.",
    },
  ],
});
</script>
