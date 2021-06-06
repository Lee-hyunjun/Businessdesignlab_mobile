<template>
  <div id="Main">
    <TopNav></TopNav>
    <Slide></Slide>
    <Content1></Content1>
    <Content2></Content2>
    <Content3></Content3>
    <Content4></Content4>
    <Content5></Content5>
    <Footer></Footer>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import Slide from './components/Slide.vue'
import Content1 from './components/Content1.vue'
import Content2 from './components/Content2.vue'
import Content3 from './components/Content3.vue'
import Content4 from './components/Content4.vue'
import Content5 from './components/Content5.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    TopNav,
    Slide,
    Content1,
    Content2,
    Content3,
    Content4,
    Content5,
    Footer
  }
}
</script>

<style lang="scss">

  @font-face{
    src: url('./assets/fonts/GmarketSansTTF/GmarketSansTTFMedium.ttf');
    font-family: 'GmarketSansTTFMedium';
  }

  @font-face{
    src: url('./assets/fonts/GmarketSansTTF/GmarketSansTTFBold.ttf');
    font-family: 'GmarketSansTTFBold';
  }


  @font-face{
    src:url('./assets/fonts/BebasNeue-Regular.ttf');
    font-family: 'BebasNeue-Regular';
  }

    @font-face{
    src: url('./assets/fonts/Objektiv Mk2 W03 Medium.ttf');
    font-family: 'Objektiv Mk2 W03 Medium';
  }

  @font-face{
    src: url('./assets/fonts/Objektiv Mk2 W03 Bold.ttf');
    font-family: 'Objektiv Mk2 W03 Bold';
  }
  
  * {
    margin:0;
    box-sizing: border-box;
    padding: 0;
  }

  body{
    overflow-x:hidden;
  }

  #Main{
    max-width: 1920px;
    width: 100%;
  }
</style>
