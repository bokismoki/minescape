<template>
  <section class="relative h-screen">
    <div class="flex flex-col justify-center items-center h-full">
      <div class="container">
        <div class="relative z-20 text-center">
          <button
            @click="copyToClipboard('minescape.me')"
            class="flex justify-center w-full mb-2"
          >
            <h2
              class="text-[calc(36px+3vw)] leading-[1.2] font-medium text-accent"
            >
              IP: minescape.me
            </h2>
          </button>
          <div class="text-xl leading-[1.5] font-light text-white">
            <p class="mb-1">
              Play the RuneScape in Minecraft MMORPG for free today!
            </p>
            <p class="mb-1">No mods required!</p>
            <p>Join 226938 other players!</p>
            <hr class="my-4 border-black/10" />
            <p>Join with vanilla java minecraft 1.18.2+</p>
          </div>
        </div>
      </div>
    </div>
    <video
      playsinline="playsinline"
      autoplay="autoplay"
      muted="muted"
      loop="loop"
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="@/assets/media/home/background.mp4" type="video/mp4" />
    </video>
    <div class="absolute z-10 inset-0 w-full h-full bg-black opacity-50">
      <img
        src="@/assets/media/home/logo-nzgda-transparent.png"
        alt="nzgda game logo"
        width="255"
        height="113"
        class="absolute bottom-[15px] right-[15px]"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const copyToClipboard = (text: string) => {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};
</script>
