<template>
  <footer
    class="py-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 mt-auto"
  >
    <UContainer>
      <p>
        &copy; {{ new Date().getFullYear() }} StudyWithWoody.
        {{ $t("footer.rights") }}
      </p>
    </UContainer>
  </footer>
</template>
