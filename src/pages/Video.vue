<template>
    <main>
    <section class="container">
    <h1>Videos</h1>

    <section class="videos">
    <div class="video" v-for="(video,index) in videos" :key="index">
    <a :href="video.link" target="_blank" rel="noopener noreferrer">
    <img :src="video.thumb" alt="">
    <div> {{ video.title }} </div>
    </a>
    </div>
    </section>

    </section>
    </main>
</template>

<script>
import api from '../services/api.js';

export default {
    name: 'Video',
    components: {
    },
    data() {
        return {
            videos: []
        }
    },
    mounted() {
        // this.getData()
        api.get('/videos.json').then(response => {
            this.videos=response.data
        });
    },
}
</script>

<style scoped>

main {
    align-items: center;
}

.videos {
    display: flex;
    flex-direction: column;
    align-items: center;
    }

.video {
    width: 80%;
    margin-bottom: 30px;
}
.video img {
    width: 100%;
}

.video a {
    color: var(--color-text-dark);
    text-align: center;
}

@media (min-width: 768px) {
    .videos {
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .video {
        width: 300px;
        margin-bottom: 30px;
        margin-right: 30px;
    }
}
</style>