<template>
  <header
    class="fixed z-50 top-0 left-0 w-full transition-all duration-500 ease-in-out"
    :class="[
      isScrolling
        ? 'bg-white/90 py-[5px] h-[50px] shadow-[0 6px 9px 0 rgba(0,0,0,.06)]'
        : 'py-[25px] h-[90px]',
    ]"
  >
    <div class="container h-full flex justify-end">
      <nav class="flex items-center flex-wrap justify-between">
        <NuxtLink
          to="/"
          class="flex transition-colors duration-500 font-semibold uppercase"
          :class="[isScrolling ? 'text-accent' : 'text-black']"
        >
          Home
        </NuxtLink>
      </nav>
    </div>
    <Transition name="fade">
      <button
        v-if="isScrolling"
        aria-label="Scroll to top"
        class="fixed bottom-[15px] right-[15px] z-50 w-11 h-11 flex items-center justify-center bg-accent rounded-full"
        @click="scrollToTop"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          viewBox="0 0 24 24"
          class="w-6 h-6 text-white"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isScrolling = ref(false);

const handleScrolling = () => {
  isScrolling.value = window.scrollY > 50;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScrolling);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScrolling);
});
</script>
