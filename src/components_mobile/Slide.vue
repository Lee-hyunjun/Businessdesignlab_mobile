<template>
  <div class="slide_m">
     
    <div class="slideButton">
      <img @click="slideButton(1)" class="arrow1" src="../assets/arrow.png" alt="arrow">
      <img @click="slideButton(2)" class="arrow2" src="../assets/arrow.png" alt="arrow">
    </div>
    <div class="slides">
      <div id="TextMove" class="TextMove">
        <div class="slide1Text TextOpacity" id="slide1Text">
          <span>Why Business Design Lab?</span>
          <p>잘하는 것을 더 잘하게, </p>
          <p>하고 싶은 것을 시작할 수 있게,</p>
          <p>전문가들의 노하우와</p>
          <p>빅데이터 분석을 통해 </p>
          <p>나아갈 방향을 제시합니다.</p>
        </div>
      </div>
      <div class="slideImgs">
        <div id="slide1" class="slide1"></div>
        <div id="slide2" class="slide2"></div>
        <div id="slide3" class="slide3"></div>
      </div>
      <!-- <hooper :infiniteScroll="true" ref="slide"> -->
        <!-- <slide> -->
        <!-- </slide> -->
        <!-- <slide> -->
        <!-- </slide> -->
        <!-- <slide> -->
        <!-- </slide> -->
      <!-- </hooper> -->
      
    </div>
  </div>
</template>

<script>
// import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  
  components: {
    // Hooper, Slide
  },

  data() {
    return {
      slide:1
    }
  },

  created(){
    // this.$refs.slide.mouseDrag = false
    // this.$refs.slide.shortDrag = false
    setTimeout(() => {
      this.slideButton(0)
    }, 10);
  },

  methods:{
    slideButton(key){
    
      console.log(document.getElementById("slide1").style.opacity)

      if (key === 1) {
        this.slide = this.slide - 1
      }else if(key === 2){
        this.slide = this.slide + 1
      }
      if (this.slide < 1) {
        this.slide = 3
      }
      if (this.slide > 3) {
        this.slide = 1
      }
      
          // var vel = document.getElementById("slide1Text")
          // var vel2 = document.getElementById("TextMove")
          // vel.classList.remove('TextOpacity')
          // vel2.classList.remove('TextMove')
          // void vel.offsetWidth;
          // void vel2.offsetWidth;
          // vel.classList.add("TextOpacity");
          // vel2.classList.add("TextMove");



          
      if (this.slide === 1) {
        // document.getElementById("slide1").style.animationName = "";
        document.getElementById("slide1").style.animation = 'TextMove 2s';
  
        document.getElementById("slide1").style.opacity = "1";
        document.getElementById("slide1").style.transform = "scale(1)";

        document.getElementById("slide2").style.opacity = "0";
        document.getElementById("slide3").style.opacity = "0";

        document.getElementById("slide2").style.transform = "scale(1.25)";
        document.getElementById("slide3").style.transform = "scale(1.25)";

      }else if(this.slide === 2){
        // document.getElementById("slide2").style.animationName = "TextMove";

        document.getElementById("slide2").style.opacity = "1";
        document.getElementById("slide2").style.transform = "scale(1)";

        document.getElementById("slide1").style.opacity = "0";
        document.getElementById("slide3").style.opacity = "0";
        document.getElementById("slide1").style.transform = "scale(1.25)";
        document.getElementById("slide3").style.transform = "scale(1.25)";
      }else if(this.slide === 3){
        // document.getElementById("slide3").style.animationName = "TextMove";
        
        document.getElementById("slide3").style.opacity = "1";
        document.getElementById("slide3").style.transform = "scale(1)";
        
        document.getElementById("slide1").style.opacity = "0";
        document.getElementById("slide2").style.opacity = "0";
        document.getElementById("slide1").style.transform = "scale(1.25)";
        document.getElementById("slide2").style.transform = "scale(1.25)";
      }
    }
  }
}
</script>

<style lang="scss">

  @keyframes TextMove {
    from {left: -100px;}
    to {left: 0px;}
  }

  @keyframes TextOpacity {
    from {opacity:0;}
    to {opacity:1;}
  }

  .TextMove{
    animation: TextMove 2s;
  }
  .TextOpacity{
    animation: TextOpacity 2s;
  }



  .hooper{
    height: 100%;
  }
  .hooper-slide {
    width: 100%;
    height: 100%;
    background-color: #62caaa;
    // padding: 20px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // color: #fff;
    // border: 2px solid #fff;
    // font-size: 30px;
    // border-radius: 10px;
  }

  .slide_m{
    height: 2216px;
  
  
    .slideImgs{
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
      .slideButton{
        position: absolute;
        top:1080px;
        padding: 0 58px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 8;

        img:hover{
          cursor: pointer;
        }

        .arrow1{
          transform: rotate(180deg);
        }

      }
      .slides{
        width: 100%;
    height: 100%;
        overflow: hidden;

        >div:first-child{
          width: 1200px;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
            height: 2216px;
          animation: TextMove 2s;
          z-index: 5;
        }

        .slide1Text{
          max-width: 1060px;
          width: 100%;
          max-height: 246px;
          height: 100%;
          margin: 0 auto;
          z-index: 10;
          animation: TextOpacity 2s;
          position: absolute;
          top: 513PX;


          span{
            display: block;
            color: white;
            font-size: 20px;
            margin-bottom: 25px;
            font-family: GmarketSansTTFMedium ,sans-serif;
            font-size: 3.75rem;
          }

          p{
            font-size: 4.375rem;
            font-weight: bold;
            color: white;
            font-family: GmarketSansTTFBold ,sans-serif;
          }
          
        }

        .slide1{
          background-image: url("../assets/mobile/slide/1.png");
          width: 100%;
          height: 100%;
          transition: 2s;
          opacity: 0;
          position: absolute;
          top:0;
          left: 0%;
          background-repeat: no-repeat;
          transform:scale(1.25);
        }
        .slide2{
          background-image: url("../assets/mobile/slide/1.png");
          width: 100%;
          height: 100%;
          transition: 2s;
          opacity: 0;
          position: absolute;
          top:0;
          left: 0%;
          background-repeat: no-repeat;
          transform:scale(1.25);
        }
        .slide3{
          background-image: url("../assets/mobile/slide/1.png");
          width: 100%;
          height: 100%;
          transition: 2s;
          opacity: 0;
          position: absolute;
          top:0;
          left: 0%;
          background-repeat: no-repeat;
          transform:scale(1.25);
        }
      }
  }
</style>
