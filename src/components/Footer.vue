<template>
    <footer class="footer">
        <a class="social-link" v-for="(socialLink,index) in socialLinks" :key="index" 
        :href="socialLink.link" target="_blank" rel="noopener noreferrer">
        <img :src="socialLink.icon" :alt="socialLink.label">
        </a>
    </footer>
</template>

<script>
import api from '../services/api.js'
export default {
    name: 'Footer',
    data() {
        return {
          socialLinks: []
    }
    },
    mounted() {
        // this.getData()
        api.get('/social-links.json').then(response => {
            this.socialLinks=response.data
        });
    },
}
</script>

<style scoped>
footer {
    width: 100%;
    height: 60px;
    background: var(--color-background-nav);
    display: flex;
    justify-content: center;
    align-items: center;
    }
.social-link {
    margin: 0 10px;
    border: 2px solid #ffffff;;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    }
.social-link img {
    width: 20px;
    }
</style>