<template>
  <video-js ref="video-player" controls preload="auto" class="vjs-big-play-centered">
    <source :src="src" type="application/x-mpegURL" />
  </video-js>
</template>

<script>
import videojs from "video.js";

export default {
  props: ["src"],

  data() {
    return {
      player: null,
    };
  },

  mounted() {
    const element = this.$refs["video-player"];

    this.player = videojs(element, {
      fluid: true,
    });
  },
};
</script>
