<template>
  <div
    class="relative bg-fixed bg-no-repeat bg-cover bg-center py-32"
    :style="{
      backgroundImage: `url(${Bg})`,
    }"
  >
    <div class="container">
      <div
        class="relative z-10 grid grid-cols-1 items-center gap-5 md:grid-cols-4"
      >
        <a
          v-for="(item, index) in items"
          :key="index"
          class="flex flex-col items-center text-center"
          :href="item.to"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${item.title} link`"
        >
          <div
            class="flex items-center justify-center w-20 h-20 border-[10px] border-white rounded-full mb-4"
          >
            <img
              :src="item.icon"
              :alt="item.title"
              class="w-auto h-8 grayscale brightness-0 invert"
            />
          </div>
          <div class="text-white uppercase">
            {{ item.title }}
          </div>
          <div class="text-white">
            {{ item.handle }}
          </div>
        </a>
      </div>
    </div>
    <div class="absolute inset-0 w-full h-full bg-accent opacity-70" />
  </div>
</template>

<script setup lang="ts">
import Bg from "@/assets/media/home/socials-bg.jpg";
import Discord from "@/assets/media/icons/discord.svg";
import Twitter from "@/assets/media/icons/twitter.svg";
import Instagram from "@/assets/media/icons/instagram.svg";
import Facebook from "@/assets/media/icons/facebook.svg";

const items = [
  {
    to: "https://discord.gg/minescape",
    title: "Discord",
    handle: "discord.gg/minescape",
    icon: Discord,
  },
  {
    to: "https://twitter.com/playminescape",
    title: "Twitter",
    handle: "@playminescape",
    icon: Twitter,
  },
  {
    to: "https://instagram.com/minescape/",
    title: "Instagram",
    handle: "@minescape",
    icon: Instagram,
  },
  {
    to: "https://www.facebook.com/minescape.me/",
    title: "Facebook",
    handle: "@minescape.me",
    icon: Facebook,
  },
];
</script>
