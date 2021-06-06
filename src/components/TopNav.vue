<template>
  <div class="Navs">
    <div>
      <img src="../assets/logo.png" alt="Logo">
      <div>
        <p @click="scroll(1)">About</p> 
        <p @click="scroll(2)">Business area</p> 
        <p @click="scroll(3)">Target</p> 
        <p @click="scroll(4)">Our goal</p> 
        <p @click="scroll(5)">Works</p> 
        <p @click="scroll(6)">Partners</p> 
        <p @click="scroll(7)">Contact</p> 
      </div>
    </div>
  </div>
</template>

<script>

// import Logo from "@/assets/logo.png"

export default {
  components: {
    // Logo
  },

  methods:{
    scroll(key){
      let top = 0;
      switch (key) {
        case 1:
          top = 0
          break;
        case 2:
          top = 800
          break;
        case 3:
          top = 1600
          break;
        case 4:
          top = 2736
          break;
        case 5:
          top = 3235
          break;
        case 6:
          top = 5465
          break;
      
        case 7:
          top = 5465    
          break;

        default:
          break;
      }
       window.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style  lang="scss">
  .Navs{
    position: absolute;
    z-index: 1000;
    top: 55px;
    width: 100%;

    >div{
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;


      >div{
        display: flex; 
        align-items: center;

        p{
          color: white;
          margin-left: 24px;
          position: relative;
          transition: .3s;
          font-family: 'Objektiv Mk2 W03 Medium' ,sans-serif;
          font-size: .875rem;
        }



        p:hover{
          cursor: pointer;
        }

        p::after{
          content: "";
          opacity: 0;
        }

        p:hover::after{
          content: "";
          width: 100%;
          opacity: 1;
          height: 1px;
          position: absolute;
          bottom: 0;
          left: 0;
          background:white;
          -webkit-transition: all .3s;
          transition: all .3s;
        }
      }
    }
  }
</style>
