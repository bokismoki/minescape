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
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex flex-col items-center text-center"
        >
          <div
            class="flex items-center justify-center w-20 h-20 border-[10px] border-white rounded-full mb-4"
          >
            <img
              :src="item.icon"
              :alt="item.label.replace(/<br\/?>/g, ' ')"
              class="w-auto h-8 grayscale brightness-0 invert"
            />
          </div>
          <div class="text-[2rem] leading-[1.5] text-white uppercase">
            {{ item.value }}
          </div>
          <div v-html="item.label" class="text-white uppercase" />
        </div>
      </div>
    </div>
    <div class="absolute inset-0 w-full h-full bg-accent opacity-70" />
  </div>
</template>

<script setup lang="ts">
import Bg from "@/assets/media/home/socials-bg.jpg";
import Bars from "@/assets/media/icons/bars.svg";
import Calendar from "@/assets/media/icons/calendar.svg";
import Users from "@/assets/media/icons/users.svg";
import Signal from "@/assets/media/icons/signal.svg";

const items = [
  {
    value: "297007",
    label: "Custom lines <br/> of code",
    icon: Bars,
  },
  {
    value: "3",
    label: "Years in <br/> development",
    icon: Calendar,
  },
  {
    value: "226938",
    label: "Unique <br/> players",
    icon: Users,
  },
  {
    value: "99",
    label: "Percent <br/> uptime",
    icon: Signal,
  },
];
</script>
