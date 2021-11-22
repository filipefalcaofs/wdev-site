<template>
    <header>
    <nav class="container">
    <router-link to="/" class="logo">
    <img id="logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt="logo">
    </router-link>
    <img v-on:click="toggleMenu" id="menu-mobile" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" alt="logo">
    </nav>

    <div v-on:click="toggleMenu" id="menu-overlay" v-if="menuActive">
    </div>

    <div id="menu-itens" :class="{active: menuActive}">
    <img id="menu-logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt="logo">
    <ul>
    <li v-on:click="toggleMenu"><router-link to="/">Home</router-link ></li>
    <li v-on:click="toggleMenu"><router-link to="/Video">Video</router-link ></li>
    <li v-on:click="toggleMenu"><router-link to="/Sobre">Sobre</router-link ></li>
    <li v-on:click="toggleMenu"><router-link to="/Contato">Contato</router-link ></li>
    </ul>
    </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
          menuActive: false
        }
    },
    methods: {
        toggleMenu() {
            this.menuActive = !this.menuActive;
        }
    }
}
</script>

<style scoped>

header {
    background-color: var(--color-background-nav);
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#logo {
    width: 130px;
    }

#menu-mobile {
    width: 30px;
    cursor: pointer;
    }

nav {
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
    padding: 10px;
}

#menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    opacity: 0.8;
}

#menu-logo {
    width: 110px;
    margin-top: 30px;
    margin-bottom: 10px;
}

#menu-itens {
    position: fixed;
    top: 0;
    right: 0;
    width: 60%;
    height: 100vh;
    background-color: var(--color-background-nav);
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

#menu-itens.active {
    display: flex;
}

ul {
    list-style: none;
    text-align: center;
}
ul li {
    margin: 20px 0px;
}
ul li a {
    text-decoration: none;
    color: var(--color-text-light);
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
}

@media (min-width: 768px) {
    #menu-mobile,
    #menu-overlay,
    #menu-logo{
        display: none;
    }
    #menu-itens {
        display: flex;
        position: static;
        height: 60px;
        width: auto;
    }
    ul {
        display: flex;
        flex-direction: row;
        height: 60px;
        align-items: center;
    }
    ul li {
        margin: 0px 20px;
    }
}

</style>