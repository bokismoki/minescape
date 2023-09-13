<template>
  <section id="about" class="pt-16 pb-12">
    <div class="container">
      <div class="mb-16">
        <h2
          class="text-5xl leading-[1.2] font-bold text-center text-accent uppercase mb-2"
        >
          About Minescape
        </h2>
        <p class="text-center mb-4">What is MineScape?</p>
        <p class="text-center mb-4">
          Learn more about the MineScape network and servers
        </p>
        <div class="w-10 h-[5px] bg-accent mx-auto" />
      </div>
      <div
        class="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-x-[30px] md:gap-y-12"
      >
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="group bg-white px-5 py-10 rounded-2xl flex flex-col items-center text-center"
          :style="{
            boxShadow: '0 13px 8px -10px rgba(0,0,0,.1)',
          }"
        >
          <div
            class="flex items-center justify-center w-[120px] h-[120px] rounded-full border-[10px] border-accent mb-4 transition-colors duration-500 group-hover:bg-accent group-hover:border-[#f5dcdc]"
          >
            <img
              :src="card.icon"
              :alt="card.title"
              class="w-16 h-16 transition-all duration-500 group-hover:grayscale group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <h3
            class="py-1.5 text-[1.4rem] leading-[1.2] font-medium text-accent uppercase mb-2"
          >
            {{ card.title }}
          </h3>
          <p class="">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Cubes from "@/assets/media/icons/cubes.svg";
import Image from "@/assets/media/icons/image.svg";
import Chart from "@/assets/media/icons/chart.svg";
import Heart from "@/assets/media/icons/heart.svg";
import Paintbrush from "@/assets/media/icons/paintbrush.svg";
import Play from "@/assets/media/icons/play2.svg";

const cards = [
  {
    title: "Immersive",
    description:
      "Utilizing resourcepacks MineScape is designed to look and feel like RuneScape. Never before seen techniques have been implemented to create the greatest recreaction of RuneScape in Minecraft.",
    icon: Cubes,
  },
  {
    title: "Picturesque",
    description:
      "Beautifully hand crafted map, the MineScape server takes pride in our builds. Take breathtaking, cinematic screenshots of your MineScape gameplay and share them online!",
    icon: Image,
  },
  {
    title: "Hiscores",
    description:
      "Achieve greatness and become legendary by showing off your skills to compete on the MineScape hiscores. With multiple skilling and ironman hiscores, will you be the one to rise to the top?",
    icon: Chart,
  },
  {
    title: "Friendly",
    description:
      "The MineScape community welcomes all players from around the world, start your latest adventure by becoming apart of our wholesome community today.",
    icon: Heart,
  },
  {
    title: "Creative Server",
    description:
      "Want to build something unique of your own? Build with our custom blocks to your hearts desires, show off to your builds to friends on the MineScape creative plots server.",
    icon: Paintbrush,
  },
  {
    title: "Play Now",
    description:
      "What are you waiting for? Launch your Minecraft client, join with the ip: minescape.me and play MineScape now!",
    icon: Play,
  },
];
</script>
