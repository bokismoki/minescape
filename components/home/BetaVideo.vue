<template>
  <section id="about" class="py-16">
    <div class="container">
      <div class="mb-6">
        <h2
          class="text-5xl leading-[1.2] font-bold text-center text-accent uppercase mb-2"
        >
          Server Open Beta Video
        </h2>
        <p class="text-center mb-4">
          Watch the MineScape server video to learn more.
        </p>
        <div class="w-10 h-[5px] bg-accent mx-auto" />
      </div>
      <div class="relative aspect-video">
        <iframe
          src="https://www.youtube.com/embed/X3Q9z3OOtH0"
          title="MineScape beta video"
          width="560"
          height="315"
          frameborder="0"
          loading="lazy"
          class="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
