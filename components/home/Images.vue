<template>
  <section id="images" class="pt-16 pb-12">
    <div class="container">
      <div class="mb-16">
        <h2
          class="text-5xl leading-[1.2] font-bold text-center text-accent uppercase mb-2"
        >
          MineScape Server Images
        </h2>
        <p class="text-center mb-4">
          Beautiful images taken of the cities in the MineScape world.
        </p>
        <div class="w-10 h-[5px] bg-accent mx-auto" />
      </div>
      <div
        class="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-x-[30px] md:gap-y-12"
      >
        <button
          v-for="(card, index) in cards"
          :key="index"
          class="group bg-white flex flex-col text-left"
          :style="{
            boxShadow: '0 13px 8px -10px rgba(0,0,0,.1)',
          }"
          @click="lightbox = card"
        >
          <div class="overflow-hidden">
            <img
              :src="card.image"
              :alt="`${card.title} Build`"
              class="w-full transition-all duration-1000 group-hover:scale-[1.3]"
            />
          </div>
          <div class="pt-8 pb-4 pl-3.5 pr-2.5">
            <h3
              class="text-[1.2rem] leading-[1.2] font-medium text-accent mb-2"
            >
              {{ card.title }}
            </h3>
            <div class="flex items-center gap-1">
              <span class="text-[13px] leading-[1.5] text-accent">{{
                card.category
              }}</span>
              <span>/</span>
              <span class="text-[13px] leading-[1.5]">
                {{ card.date }}
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
    <Transition name="fade">
      <div
        v-if="lightbox"
        class="fixed z-50 inset-0 w-full h-full flex items-center justify-center"
      >
        <div class="relative z-10 flex flex-col max-w-[90vw] max-h-full w-full">
          <div class="relative flex border-4 border-white rounded h-full">
            <img
              :src="lightbox.lightbox"
              alt="Lightbox"
              class="w-full h-auto object-contain"
            />
            <button
              class="absolute top-1/2 left-0 -translate-y-1/2 w-[34%] h-full"
              @click="goPrev"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-14 h-14 text-white -rotate-90 translate-x-2"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <button
              class="absolute top-1/2 right-0 -translate-y-1/2 w-[calc(100%-34%)] h-full flex justify-end items-center"
              @click="goNext"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-14 h-14 text-white rotate-90 -translate-x-2"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
          </div>
          <div class="flex items-center justify-between py-2">
            <div class="text-xs leading-[1.5] text-[#999]">
              Image
              {{ imageOf }}
              of {{ cards.length }}
            </div>
            <button @click="lightbox = undefined" class="flex">
              <img :src="X" alt="x" class="w-[30px] h-[30px] text-white" />
            </button>
          </div>
        </div>
        <div
          class="absolute inset-0 w-full h-full bg-black/80 cursor-pointer"
          @click="lightbox = undefined"
        />
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import Image1 from "@/assets/media/home/image-1.png";
import Image1Lightbox from "@/assets/media/home/image-1-lightbox.jpeg";
import Image2 from "@/assets/media/home/image-2.jpg";
import Image2Lightbox from "@/assets/media/home/image-2-lightbox.jpeg";
import Image3 from "@/assets/media/home/image-3.jpg";
import Image3Lightbox from "@/assets/media/home/image-3-lightbox.jpeg";
import Image4 from "@/assets/media/home/image-4.png";
import Image4Lightbox from "@/assets/media/home/image-4-lightbox.jpeg";
import Image5 from "@/assets/media/home/image-5.jpg";
import Image5Lightbox from "@/assets/media/home/image-5-lightbox.jpeg";
import Image6 from "@/assets/media/home/image-6.png";
import Image6Lightbox from "@/assets/media/home/image-6-lightbox.jpeg";
import X from "@/assets/media/icons/x.svg";

const lightbox = ref<(typeof cards)[0]>();

const cards = [
  {
    title: "Tutorial Island",
    category: "Mayneman",
    date: "April. 2019",
    image: Image1,
    lightbox: Image1Lightbox,
  },
  {
    title: "Lumbridge",
    category: "Mayneman",
    date: "April. 2019",
    image: Image2,
    lightbox: Image2Lightbox,
  },
  {
    title: "Al Kharid",
    category: "Mayneman",
    date: "April. 2019",
    image: Image3,
    lightbox: Image3Lightbox,
  },
  {
    title: "Draynor Village",
    category: "Mayneman",
    date: "April. 2019",
    image: Image4,
    lightbox: Image4Lightbox,
  },
  {
    title: "Port Sarim",
    category: "Mayneman",
    date: "April. 2019",
    image: Image5,
    lightbox: Image5Lightbox,
  },
  {
    title: "Varrock",
    category: "Mayneman",
    date: "April. 2019",
    image: Image6,
    lightbox: Image6Lightbox,
  },
];

const imageOf = computed(() => {
  return cards.findIndex((card) => card.title === lightbox.value?.title) + 1;
});

const goPrev = () => {
  const index = cards.findIndex((card) => card.title === lightbox.value?.title);
  if (index === 0) {
    lightbox.value = cards[cards.length - 1];
  } else {
    lightbox.value = cards[index - 1];
  }
};

const goNext = () => {
  const index = cards.findIndex((card) => card.title === lightbox.value?.title);
  if (index === cards.length - 1) {
    lightbox.value = cards[0];
  } else {
    lightbox.value = cards[index + 1];
  }
};
</script>
