<template>
  <header
    class="fixed z-50 top-0 left-0 w-full transition-all duration-500 ease-in-out"
    :class="[
      isScrolling || showMobileNavigation
        ? 'bg-white/90 py-[5px]'
        : 'py-[25px]',
    ]"
  >
    <div class="container">
      <nav class="flex items-center flex-wrap justify-between">
        <NuxtLink to="/" class="flex">
          <img
            :src="Logo"
            alt="Minescape server logo"
            width="240"
            height="93"
          />
        </NuxtLink>
        <button
          class="relative flex flex-col gap-1 px-3 py-2 lg:hidden"
          aria-label="Toggle navigation"
          @click="showMobileNavigation = !showMobileNavigation"
        >
          <span
            class="w-[25px] h-[3px] transition-all duration-[0.35s] ease-in-out"
            :class="[
              isScrolling || showMobileNavigation ? 'bg-dark' : 'bg-white',
              showMobileNavigation
                ? 'absolute top-2.5 left-3 opacity-90 rotate-[135deg]'
                : '',
            ]"
          />
          <span
            class="w-[25px] h-[3px] transition-all duration-[0.35s] ease-in-out"
            :class="[
              isScrolling || showMobileNavigation ? 'bg-dark' : 'bg-white',
              showMobileNavigation ? 'invisible h-3 bg-transparent' : '',
            ]"
          />
          <span
            class="w-[25px] h-[3px] transition-all duration-[0.35s] ease-in-out"
            :class="[
              isScrolling || showMobileNavigation ? 'bg-dark' : 'bg-white',
              showMobileNavigation
                ? 'absolute top-2.5 left-3 opacity-90 rotate-[-135deg]'
                : '',
            ]"
          />
        </button>
        <ul
          class="transition-all duration-[0.35s] basis-full overflow-hidden lg:max-h-none lg:flex lg:items-center lg:basis-[unset] lg:gap-5 lg:overflow-visible"
          :class="[showMobileNavigation ? 'max-h-[500px]' : 'max-h-0']"
        >
          <li v-for="(item, index) in navItems" :key="index">
            <NuxtLink
              :to="item.to"
              class="relative flex py-2 text-accent font-semibold uppercase after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:transition-all after:duration-500 after:bg-accent after:hover:w-[35px] lg:p-2 lg:after:left-2"
              :class="[isScrolling ? '' : 'lg:text-white lg:after:bg-white']"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
          <li class="lg:relative">
            <button
              class="relative flex items-center gap-2 py-2 text-accent font-semibold uppercase after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:transition-all after:duration-500 after:bg-accent after:hover:w-[35px] lg:p-2 lg:after:left-2"
              :class="[isScrolling ? '' : 'lg:text-white lg:after:bg-white']"
              @click="links.show = !links.show"
            >
              <span> Links </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="svg2989"
                version="1.1"
                viewBox="0 -256 1792 1792"
                class="w-3"
              >
                <g id="g2991" transform="matrix(1 0 0 -1 402.44 1239.864)">
                  <path
                    id="path2993"
                    fill="currentColor"
                    d="M1024 832q0-26-19-45L557 339q-19-19-45-19t-45 19L19 787Q0 806 0 832t19 45q19 19 45 19h896q26 0 45-19t19-45z"
                  />
                </g>
              </svg>
            </button>
            <ul
              v-if="links.show"
              class="mt-[18px] py-2 bg-white/90 rounded min-w-[160px] lg:absolute lg:top-full lg:left-0"
              v-click-outside="() => (links.show = false)"
            >
              <li
                v-for="(linkItem, linkIndex) in links.items"
                :key="linkIndex"
                class=""
              >
                <NuxtLink
                  :to="linkItem.to"
                  class="flex w-full px-[27px] py-[11px] text-accent transition-colors duration-500 hover:bg-accent hover:text-dark"
                >
                  {{ linkItem.label }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
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
import Logo from "@/assets/media/logo.png";

const isScrolling = ref(false);

const showMobileNavigation = ref(false);
const navItems = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Forums",
    to: "https://forum.minescape.me",
  },
  {
    label: "About",
    to: "/#about",
  },
  {
    label: "Images",
    to: "/#images",
  },
  {
    label: "Blog",
    to: "/#blog",
  },
  {
    label: "Team",
    to: "/#team",
  },
];
const links = ref({
  show: false,
  items: [
    {
      label: "Map",
      to: "/map",
    },
    {
      label: "Roadmap",
      to: "/",
    },
    {
      label: "Legal",
      to: "/legal",
    },
  ],
});

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
