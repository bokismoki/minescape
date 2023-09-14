<template>
  <div
    id="team"
    class="relative bg-fixed bg-no-repeat bg-cover bg-center py-16"
    :style="{
      backgroundImage: `url(${Bg})`,
    }"
  >
    <div class="container relative z-10">
      <div class="bg-white px-5 py-12 mb-12 md:px-12">
        <div class="mb-16">
          <h2
            class="text-5xl leading-[1.2] font-bold text-center text-accent uppercase mb-2"
          >
            Team
          </h2>
          <p class="text-center mb-4">
            Meet the amazing team behind the MineScape project.
          </p>
          <p class="text-center mb-4">
            Meet the amazing te The main goal of the MineScape team is to bring
            the amazing world of RuneScape to Minecraft players.am behind the
            MineScape project. <br />
            Our team consists of amazing modelers, builders, moderators and
            support staff, all here to bring you the best experience possible!
          </p>
          <div class="w-10 h-[5px] bg-accent mx-auto" />
        </div>
        <div
          class="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-[30px] md:grid-cols-3"
        >
          <div v-for="(item, index) in items" :key="index" class="">
            <div
              class="group relative w-full aspect-square rounded overflow-hidden mb-5"
            >
              <img
                :src="item.avatar"
                :alt="item.name"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div
                class="flex flex-col items-center justify-center text-center absolute inset-0 w-full h-full px-5 border-[20px] overflow-hidden border-black border-opacity-10 bg-white/90 transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <div
                  class="transition-all duration-500 -translate-y-1/2 group-hover:translate-y-0"
                >
                  <div
                    class="text-[1.75rem] leading-[1.2] font-medium text-accent mb-2"
                  >
                    {{ item.overlay.title }}
                  </div>
                  <p class="text-black">
                    {{ item.overlay.description }}
                  </p>
                </div>
              </div>
            </div>
            <h3
              class="text-[1.5rem] leading-[1.2] tracking-[2px] font-medium text-accent mb-2"
            >
              {{ item.name }}
            </h3>
            <div
              class="text-xs leading-[1.5] tracking-[1px] uppercase text-black"
            >
              {{ item.role }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center text-center text-white mb-5"
      >
        <p class="mb-1.5">
          © Copyright <strong>MineScape™®</strong>. All Rights Reserved
        </p>
        <a href="https://forum.minescape.me/help/legal/" class="mb-4">
          <p class="underline">Legal</p>
        </a>
        <a href="https://m.minescape.me/">
          <p class="underline">Mobile</p>
        </a>
      </div>
    </div>
    <div class="absolute inset-0 w-full h-full bg-accent opacity-70" />
  </div>
</template>

<script setup lang="ts">
import Bg from "@/assets/media/home/socials-bg.jpg";
import Dablakbandit from "@/assets/media/home/team-Dablakbandit.jpg";
import DarkPyroNinja from "@/assets/media/home/team-DarkPyroNinja.jpg";
import Zygeno from "@/assets/media/home/team-Zygeno.jpg";
import _Zombie__ from "@/assets/media/home/team-_Zombie__.jpg";
import SecretCowLVL from "@/assets/media/home/team-SecretCowLVL.jpg";
import Regorty from "@/assets/media/home/team-Regorty.jpg";
import EnderSven from "@/assets/media/home/team-EnderSven.jpg";
import Ruby_Kitsune from "@/assets/media/home/team-Ruby_Kitsune.jpg";
import landontwist from "@/assets/media/home/team-landontwist.jpg";
import pournjack from "@/assets/media/home/team-pournjack.jpg";

const items = [
  {
    name: "Ashley Thew (Dablakbandit)",
    role: "Founder, Creator & Head Developer",
    avatar: Dablakbandit,
    overlay: {
      title: "Senior Software Developer",
      description:
        "Studied Bachelor of Computer and Information Sciences at Auckland University of Technology. Double Majoring in Software Development and Computer Science.",
    },
  },
  {
    name: "DarkPyroNinja",
    role: "Head Builder & Support",
    avatar: DarkPyroNinja,
    overlay: {
      title: "Head Builder",
      description: "Manages the MineScape team build world.",
    },
  },
  {
    name: "Zygeno",
    role: "Head Moderator",
    avatar: Zygeno,
    overlay: {
      title: "The Punisher",
      description: "Manages the server moderation team.",
    },
  },
  {
    name: "_Zombie__",
    role: "Helper & Builder",
    avatar: _Zombie__,
    overlay: {
      title: "Helping & Building",
      description: "MineScapes world builder, enjoy exploring our server map.",
    },
  },
  {
    name: "SecretCowLVL",
    role: "Helper",
    avatar: SecretCowLVL,
    overlay: {
      title: "The Helper",
      description: "Helping on MineScape is just what I do.",
    },
  },
  {
    name: "Regorty",
    role: "Lead Modeler, Builder",
    avatar: Regorty,
    overlay: {
      title: "Model Maker",
      description:
        "Amazing modeler, creating complex and beautiful models for the server.",
    },
  },
  {
    name: "EnderSven",
    role: "Modeler",
    avatar: EnderSven,
    overlay: {
      title: "Modeler & Designer",
      description: "Part of our amazing modeling team.",
    },
  },
  {
    name: "Ruby_Kitsune",
    role: "Lead Q/A & Builder",
    avatar: Ruby_Kitsune,
    overlay: {
      title: "Q/A Lead",
      description: "Notice anything out of the ordinary? Report it to us!",
    },
  },
  {
    name: "landontwist",
    role: "Builder & Q/A",
    avatar: landontwist,
    overlay: {
      title: "Q/A Tester",
      description: "Lets make this the greatest MineScape recreation!",
    },
  },
  {
    name: "pournjack",
    role: "Q/A",
    avatar: pournjack,
    overlay: {
      title: "Testing Q/A",
      description: "Gladly apart of the fantastic Quality Assurance team.",
    },
  },
];
</script>
