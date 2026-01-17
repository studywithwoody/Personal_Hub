<template>
  <section
    class="py-12 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-16"
  >
    <!-- Avatar / Image Section -->
    <div class="relative group">
      <div
        class="absolute -inset-1 bg-gradient-to-r from-primary-400 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"
      ></div>
      <UAvatar
        src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"
        alt="User Avatar"
        size="3xl"
        class="relative ring-4 ring-gray-100 dark:ring-gray-800 w-48 h-48 md:w-64 md:h-64"
        :ui="{ rounded: 'rounded-full' }"
      />
    </div>

    <!-- Text Content Section -->
    <div class="text-center md:text-left flex-1 space-y-6">
      <div class="space-y-2">
        <h1
          class="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Hello, I'm <span class="text-primary-500">Johan</span>
        </h1>
        <p
          class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light"
        >
          Developer, Educator & Tech Enthusiast
        </p>
      </div>

      <p
        class="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0"
      >
        Welcome to my digital hub. Here you'll find links to my latest projects,
        technical tutorials, and learning resources. I build things for the web
        and love sharing what I learn.
      </p>

      <!-- Social / Contact Links -->
      <div class="flex flex-wrap justify-center md:justify-start gap-4">
        <UButton
          icon="i-heroicons-envelope"
          color="gray"
          variant="ghost"
          label="Contact Me"
          size="lg"
        />
        <UButton
          icon="i-simple-icons-github"
          color="gray"
          variant="ghost"
          to="https://github.com"
          target="_blank"
          aria-label="GitHub"
        />
        <UButton
          icon="i-simple-icons-linkedin"
          color="gray"
          variant="ghost"
          to="https://linkedin.com"
          target="_blank"
          aria-label="LinkedIn"
        />
        <UButton
          icon="i-simple-icons-twitter"
          color="gray"
          variant="ghost"
          to="https://twitter.com"
          target="_blank"
          aria-label="Twitter"
        />
      </div>
    </div>
  </section>
</template>
