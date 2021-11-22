<template>
    <main>
    <div class="text-top">Texto teste top</div>
    <a href="https://www.youtube.com/channel/UCUInlDpWqdFaYsS1D09B1mA" target="_blank" rel="noopener noreferrer">
    <img id="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg" alt=""/>
    </a>
    <div class="text-bottom">Texto teste bottom</div>
    <div></div>
    </main>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
          
        }
    },
}
</script>

<style scoped>

main {
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
}
.text-top {
    color: var(--color-text-light);
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
    }
.text-bottom {
    color: var(--color-text-light);
    font-size: 18px;    
    margin-top: 20px;
    }

#subscribe {
        width: 350px;
    }

@media (min-width: 768px) {
    #subscribe {
        width: 380px;
    }
}

</style>