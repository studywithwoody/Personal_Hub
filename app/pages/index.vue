<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans selection:bg-primary-500/30"
  >
    <UContainer>
      <main class="space-y-12 pb-24">
        <Hero />
        <USeparator
          label="Explore"
          :ui="{ label: 'text-primary-500 font-medium' }"
        />
        <Showcase />
      </main>

      <footer
        class="py-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800"
      >
        <p>&copy; {{ new Date().getFullYear() }} Johan. All rights reserved.</p>
      </footer>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Johan | Personal Hub",
  meta: [
    {
      name: "description",
      content:
        "Personal hub leading to my technical blog, courses, and portfolio.",
    },
  ],
});
</script>
