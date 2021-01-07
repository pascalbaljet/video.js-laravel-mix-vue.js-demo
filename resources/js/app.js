import Vue from 'vue';

import VideoPlayer from './VideoPlayer.vue';

Vue.config.ignoredElements = [
    'video-js'
];

new Vue({
    el: '#app',
    components: { VideoPlayer }
});