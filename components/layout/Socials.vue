<template>
  <div class="fixed z-40 top-1/2 -translate-y-1/2 flex flex-col">
    <a
      v-for="(item, index) in items"
      :key="index"
      class="layoutSocials--item group relative flex items-center justify-center w-[66px] h-[70px] transition-colors duration-500 ease-in-out"
      :class="[
        index === 0
          ? 'rounded-tr-[10px]'
          : index === 4
          ? 'rounded-br-[10px]'
          : '',
      ]"
      :style="{
        backgroundColor: item.theme,
      }"
      :href="item.to"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`${item.title} link`"
    >
      <img
        :src="item.icon"
        :alt="item.title"
        class="w-auto h-10 transition-all duration-500 ease-in-out grayscale brightness-0 invert group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert-0"
      />
      <div
        class="absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full pointer-events-none text-white bg-[#55acee] px-1.5 py-[3px] min-w-max rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        {{ item.title }}
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import Discord from "@/assets/media/icons/discord.svg";
import Twitter from "@/assets/media/icons/twitter.svg";
import Youtube from "@/assets/media/icons/youtube.svg";
import Store from "@/assets/media/icons/tags.svg";
import Play from "@/assets/media/icons/play.svg";

const items = [
  {
    to: "https://discord.gg/minescape",
    title: "Discord",
    theme: "#3b5998",
    icon: Discord,
  },
  {
    to: "https://twitter.com/playminescape",
    title: "Twitter",
    theme: "#55acee",
    icon: Twitter,
  },
  {
    to: "https://www.youtube.com/minescape",
    title: "Youtube",
    theme: "#b00",
    icon: Youtube,
  },
  {
    to: "https://store.minescape.me/",
    title: "Store",
    theme: "#0cb0b5",
    icon: Store,
  },
  {
    to: "#",
    title: "Pause/Play Audio",
    theme: "#b5450c",
    icon: Play,
  },
];
</script>

<style>
.layoutSocials--item:hover {
  background-color: #000 !important;
}
</style>
