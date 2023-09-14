<template>
  <div
    class="relative bg-fixed bg-no-repeat bg-cover bg-center py-32"
    :style="{
      backgroundImage: `url(${Bg})`,
    }"
  >
    <div class="container">
      <div class="relative z-10">
        <Swiper
          :modules="[SwiperA11y, SwiperPagination]"
          :pagination="{
            el: '.homeTestimonials--pagination',
            clickable: true,
          }"
          class="max-w-[1100px] mx-auto"
        >
          <SwiperSlide
            v-for="(slide, index) in slides"
            :key="index"
            class="flex flex-col text-center"
          >
            <img
              :src="slide.avatar"
              :alt="slide.title"
              class="w-32 h-32 object-cover rounded-full mb-4 mx-auto"
            />
            <div
              class="text-[1.4rem] leading-[1.5] font-semibold text-white uppercase mb-4"
            >
              {{ slide.title }}
            </div>
            <p class="text-xl leading-[1.5] font-light text-white">
              {{ slide.quote }}
            </p>
            <a
              :href="slide.youtube.to"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-xl leading-[1.5] font-light text-black mb-4"
            >
              {{ slide.youtube.label }}
            </a>
            <div
              class="flex items-center justify-center w-[52px] h-[52px] bg-white rounded-full mx-auto"
            >
              <img :src="Quote" alt="quote" class="w-8 h-8" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          class="homeTestimonials--pagination flex items-center justify-center gap-2 mt-6"
        />
      </div>
    </div>
    <div class="absolute inset-0 w-full h-full bg-accent opacity-70" />
  </div>
</template>

<script setup lang="ts">
import Bg from "@/assets/media/home/socials-bg.jpg";
import FlippingOldSchool from "@/assets/media/home/FlippingOldschool.jpg";
import SirPugger from "@/assets/media/home/SirPugger.jpg";
import Quote from "@/assets/media/icons/quote.svg";

const slides = [
  {
    avatar: FlippingOldSchool,
    title: "FlippingOldschool",
    quote:
      '"I really wanted to explore the mechanics of the server and I was not let down."',
    youtube: {
      label:
        "This Runescape Fan Project Created a Functioning Grand Exchange! [Minescape2]",
      to: "https://www.youtube.com/watch?v=jWyw4s306xA",
    },
  },
  {
    avatar: SirPugger,
    title: "SirPugger",
    quote:
      '"The biggest thing I like about this server, is there is no pay to win aspect what so ever."',
    youtube: {
      label:
        "This RuneScape/Minecraft Project Took 2 Years to Make (MineScape)",
      to: "https://www.youtube.com/watch?v=aSIyaiXi-Kc",
    },
  },
];
</script>

<style>
.homeTestimonials--pagination .swiper-pagination-bullet {
  @apply w-[18px] h-[7px] transition-all duration-[0.6s] ease-in-out rounded-none bg-white opacity-100;
}
.homeTestimonials--pagination .swiper-pagination-bullet-active {
  @apply w-[25px] bg-black;
}
</style>
