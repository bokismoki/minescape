<template>
  <div>
    <div class="relative bg-[#e1816b] h-[350px]">
      <div
        class="relative z-10 container flex items-center justify-center h-full"
      >
        <h1
          class="text-2xl leading-[1.2] font-semibold text-white uppercase text-center pt-6 md:text-[3.5rem]"
        >
          {{ blog.title }}
        </h1>
      </div>
      <div class="absolute inset-0 w-full h-full bg-accent/20" />
    </div>
    <div class="container py-16">
      <div
        class="grid grid-cols-1 gap-[30px] md:grid-cols-[1fr,350px] md:items-start"
      >
        <div class="bg-white p-6 md:p-12">
          <div>
            <a href="https://i.imgur.com/ZLxP2uf.png" data-lightbox="gallery">
              <img :src="blog.cover" :alt="blog.title" class="w-full mb-4" />
            </a>
            <div
              class="text-2xl leading-[1.2] font-medium text-accent mb-4 md:text-[1.9rem]"
            >
              {{ blog.title }}
            </div>
            <div
              class="flex flex-col pl-4 border-l-4 border-accent mb-4 sm:flex-row sm:items-center sm:gap-4"
            >
              <div>Author: {{ blog.author }}</div>
              <div>Date: {{ blog.date }}</div>
            </div>
          </div>
          <ContentDoc class="blogContent" />
        </div>
        <div class="grid grid-cols-1 gap-12">
          <div class="bg-white p-6 md:p-12">
            <h2
              class="pl-4 border-l-4 border-accent text-accent uppercase font-semibold text-[1.6rem] leading-[1.2] mb-6"
            >
              Recent Posts
            </h2>
            <div>
              <NuxtLink
                v-for="(post, index) in recentPosts"
                :key="index"
                :to="`/blog/${post.slug}`"
                class="relative flex items-start pl-6 py-1.5 text-black transition-colors duration-500 before:absolute before:w-2.5 before:h-px before:bg-accent before:top-5 before:left-0 hover:text-accent"
              >
                {{ post.title }}
              </NuxtLink>
            </div>
          </div>
          <div class="bg-white p-6 md:p-12">
            <h2
              class="pl-4 border-l-4 border-accent text-accent uppercase font-semibold text-[1.6rem] leading-[1.2] mb-6"
            >
              Tags
            </h2>
            <div class="flex flex-wrap gap-2">
              <div
                v-for="(tag, index) in blog.tags"
                :key="index"
                class="px-2.5 pb-1 pt-0.5 rounded-[15px] bg-accent text-white capitalize leading-[1.5]"
              >
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Blog1 from "@/assets/media/home/blog-1.jpeg";

onMounted(() => {
  const lightboxImages = document.querySelectorAll('[data-lightbox="gallery"]');

  lightboxImages.forEach((image) => {
    image.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
});

const blog = ref({
  title: "DevBlog #38 Animal Magnetism Quest, Version Update & More",
  cover: Blog1,
  author: "Dablakbandit",
  date: "2023-02-03 22:30:00",
  tags: ["dev", "update"],
});

const recentPosts = ref([
  {
    title: "DevBlog #37 Drop Tables, Shop Rework, Improvements & More",
    slug: "40",
  },
  {
    title: "DevBlog #36 Brimhaven, Metal Dragons, Agility Shortcuts, Oh My!",
    slug: "40",
  },
  {
    title:
      "DevBlog #35 Agility Rooftops, Inventory Rework, New Team Members & More",
    slug: "40",
  },
  {
    title:
      "DevBlog #34 East Ardougne, 3 New Quests, Fishing Guild, Collection Log & Much, Much More",
    slug: "40",
  },
  {
    title:
      "DevBlog #33 Construction Release, Easter Event, Lost City Quest & Much More",
    slug: "40",
  },
  {
    title: "DevBlog #32 A Lovely New Year, Giant Mole & New Hud",
    slug: "40",
  },
]);

useHead({
  title: `MineScape Blog: ${blog.value.title}`,
});
definePageMeta({
  layout: "blog",
});
</script>

<style>
.blogContent h2 {
  @apply text-2xl leading-[1.2] font-medium text-accent mb-2;
}
.blogContent hr {
  @apply my-4;
}
.blogContent p {
  @apply mb-4 md:text-[1.2rem] leading-[1.5];
}
.blogContent ul {
  @apply pl-10 list-disc md:text-[1.2rem];
}
.blogContent a {
  @apply text-accent;
}
</style>
