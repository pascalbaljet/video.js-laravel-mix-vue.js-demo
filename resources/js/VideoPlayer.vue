<template>
  <video-js ref="video-player" controls preload="auto" class="vjs-big-play-centered">
    <source src="https://hls.protone.media/redfield.m3u8" type="application/x-mpegURL" />
  </video-js>
</template>

<script>
import videojs from "video.js";

export default {
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
