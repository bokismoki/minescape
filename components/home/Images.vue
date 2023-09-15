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
        <a
          v-for="(card, index) in cards"
          data-lightbox="images"
          :href="card.lightbox"
          :key="index"
          class="group bg-white flex flex-col text-left"
          :style="{
            boxShadow: '0 13px 8px -10px rgba(0,0,0,.1)',
          }"
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
        </a>
      </div>
    </div>
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

onMounted(() => {
  const lightboxImages = document.querySelectorAll('[data-lightbox="gallery"]');

  lightboxImages.forEach((image) => {
    image.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
});
</script>
