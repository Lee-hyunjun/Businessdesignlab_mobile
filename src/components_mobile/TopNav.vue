<template>
  <div class="Navs_m">
    <div class="NavLogo">
      <img src="../assets/mobile/mobile_logo.png" alt="Logo">
    </div>
    <div class="NavButton" @click="open">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div class="NavPop">
      <div>
        <img @click="close" src="../assets/mobile/nav/close_button.png" alt="close">
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
    open(){
      document.getElementsByClassName("NavPop")[0].style.display = "flex";
    },

    close(){
      document.getElementsByClassName("NavPop")[0].style.display = "none";
    },

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
  .Navs_m{
    max-width: 1200px;
    width: 100%;
    z-index: 10;
    position: absolute;
    top: 0;


    .NavLogo{
      position: absolute; 
      top: 70px;
      left: 70px;
      >img{
        width: 450px;     
      }
    }

    .NavButton{ 
      display: none;
      width: 40px;
      height: 40px;
      flex-flow: wrap;
      position: fixed;
      top: 70px;
      right: 70px;
      z-index: 100;

      >p{
        width: 100%;
        height: 5px;
        background: white;
        border-radius: 10px;
      }
    } 
    .NavButton:hover{
      cursor: pointer;
    }
    .NavPop{
      background: rgba(0, 0, 0, .6);
      width: 100%;
      height: 100%;
      position: relative;
      height: 10000px;
      z-index: 1000;
      display: none;
      justify-content: flex-end;

      >div{
        width: 690px;
        height: 100%;
        background: #0d1741;
        padding-left: 75px;
        padding-top: 70px;

        >img{
          margin-bottom: 100px;
          padding-left: 465px;
        }

        >p{
          font-size: 3.125rem;
          color: white;
          font-family: 'Objektiv Mk2 W03 Medium' , sans-serif;
          margin-bottom: 50px;
        }
      }
    }
  }
</style>
