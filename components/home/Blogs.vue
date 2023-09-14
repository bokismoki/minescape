<template>
  <section id="blog" class="py-16">
    <div class="container">
      <div class="mb-16">
        <h2
          class="text-5xl leading-[1.2] font-bold text-center text-accent uppercase mb-2"
        >
          MineScape Update Blog
        </h2>
        <p class="text-center mb-4">
          Updates on the MineScape: RuneScape in MineScape progress.
        </p>
        <div class="w-10 h-[5px] bg-accent mx-auto" />
      </div>
      <div
        class="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-x-[30px] md:gap-y-12"
      >
        <NuxtLink
          v-for="(card, index) in cards"
          :key="index"
          :to="`/blog/${card.slug}`"
          class="group bg-white flex flex-col rounded overflow-hidden text-left border border-black border-opacity-[0.125]"
          :style="{
            boxShadow: '0 13px 8px -10px rgba(0,0,0,.1)',
          }"
        >
          <div class="relative">
            <img :src="card.cover" :alt="card.title" class="w-full" />
            <div
              class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 text-[11px] leading-[2.27] tracking-[0.1px] text-white uppercase bg-accent rounded px-[15px] pt-[3px] pb-1 max-w-max h-8"
            >
              Blog post
            </div>
          </div>
          <div class="pt-[30px] px-5 pb-9">
            <h3
              class="text-[1.3rem] leading-[1.2] font-medium mb-3 transition-colors duration-500 ease-in-out hover:text-accent"
            >
              {{ card.title }}
            </h3>
            <p>
              {{ card.description }}
            </p>
          </div>
          <div
            class="flex items-center justify-between px-5 py-3 border-t border-black border-opacity-[0.125] mt-auto"
          >
            <div class="flex items-center gap-2">
              <img
                :src="card.author.avatar"
                :alt="card.author.name"
                class="w-8 h-8 object-cover rounded-full"
              />
              <span
                class="text-black transition-colors duration-500 ease-in-out hover:text-accent"
              >
                {{ card.author.name }}
              </span>
            </div>
            <span>
              {{ card.date }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Blog1 from "@/assets/media/home/blog-1.jpeg";
import Blog2 from "@/assets/media/home/blog-2.jpeg";
import Blog3 from "@/assets/media/home/blog-3.jpeg";
import Blog4 from "@/assets/media/home/blog-4.jpeg";
import Blog5 from "@/assets/media/home/blog-5.jpeg";
import Blog6 from "@/assets/media/home/blog-6.jpeg";
import Dablakbandit from "@/assets/media/home/Dablakbandit.jpg";
import SecretCowLVL from "@/assets/media/home/SecretCowLVL.jpg";

const cards = [
  {
    title: "DevBlog #38 Animal Magnetism Quest, Version Update & More",
    slug: "41",
    description:
      "1.18 Server Update Due to a security issue that affected Minecraft and other applications in early ...",
    date: "2023-02-03 22:30:00",
    cover: Blog1,
    author: {
      avatar: Dablakbandit,
      name: "Dablakbandit",
    },
  },
  {
    title: "DevBlog #37 Drop Tables, Shop Rework, Improvements & More",
    slug: "41",
    description:
      "A new quest release and highly requested changes in MineScape's latest server update! So let's get r...",
    date: "2021-09-07 19:00:00",
    cover: Blog2,
    author: {
      avatar: SecretCowLVL,
      name: "SecretCowLVL",
    },
  },
  {
    title: "DevBlog #36 Brimhaven, Metal Dragons, Agility Shortcuts, Oh My!",
    slug: "41",
    description:
      "With August already here, things have been heating up over in Brimhaven with our researchers having ...",
    date: "2021-08-06 23:00:00",
    cover: Blog3,
    author: {
      avatar: SecretCowLVL,
      name: "SecretCowLVL",
    },
  },
  {
    title:
      "DevBlog #35 Agility Rooftops, Inventory Rework, New Team Members & More",
    slug: "41",
    description:
      "With July already underway, the researchers here at MineScape HQ have been hard at work. Concocting ...",
    date: "2021-07-08 04:00:00",
    cover: Blog4,
    author: {
      avatar: Dablakbandit,
      name: "Dablakbandit",
    },
  },
  {
    title:
      "DevBlog #34 East Ardougne, 3 New Quests, Fishing Guild, Collection Log & Much, Much More",
    slug: "41",
    description:
      "We are already halfway through the year and the MineScape team has been hard at work to bring yet an...",
    date: "2021-06-18 02:00:00",
    cover: Blog5,
    author: {
      avatar: Dablakbandit,
      name: "Dablakbandit",
    },
  },
  {
    title:
      "DevBlog #33 Construction Release, Easter Event, Lost City Quest & Much More",
    slug: "41",
    description:
      "The time is here! The team has been working really hard to get this update out and is very excited t...",
    date: "2021-03-31 23:00:00",
    cover: Blog6,
    author: {
      avatar: Dablakbandit,
      name: "Dablakbandit",
    },
  },
];
</script>
