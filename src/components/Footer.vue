<template>
  <div class="footer">
    <div>
      <div>
        <p>get connected</p>
        <img src="../assets/facebook.png" alt="facebook">
      </div>
      <p>Copyright © 20121 Businessdesignlab. All rights reserved</p>
      <div @click="screenTop">
        <p>TOP</p>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {


  methods:{
    screenTop(){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
  }


}
</script>

<style lang="scss">
  .footer{
    height: 200px;
    width: 100%;
    background: #e8e8ec;

    >div{
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      >p{
        font-size: .75rem;
        font-family: 'Myriad Pro' ,sans-serif;
      }

      >div:first-child{
        width: 450px;
        height: 144px;
        background: #d5d5da;
        padding-left: 52px;
        padding-top: 25px;

        >p{
          font-size: 1.125rem;
          font-family: GmarketSansTTFMedium ,sans-serif;
          margin-bottom: 30px;
        }
      }

      >div:last-child{
        display: flex;
        align-items: center;

        >p{
          margin-right: 15px;
          position: relative;
          font-family: 'Ailero' ,sans-serif;
        }

        >p::after{
          content: "";
          width: 100%;
          height: 1px;
          background: black;
          position: absolute;
          bottom: -5px;
          left: 0;
          transition: .3s;
          opacity: 0;
        }

        >div{
          transform: rotate(-90deg);
          width: 25px;
          height: 25px;
          border-radius: 100%;
          background: black;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: .3s;
          cursor: pointer;

          p{
            height: 1px;
            width: 13px;
            background: white;
            position:relative;
            transition: .3s;
          }

          p::after{
            content: "";
            width: 5px;
            height: 1px;
            background: white;
            position: absolute;
            right: 0;
            top:-2px;
            transform: rotate(45deg);
            transition: .3s;
          }

          p::before{
            content: "";
            width: 5px;
            height: 1px;
            background: white;
            position: absolute;
            right: 0;
            top: 2px;
            transform: rotate(-45deg);
            transition: .3s;
          }

        }
      }

      div:last-child:hover{
        cursor: pointer;

        >p::after{
          opacity: 1;
        }

        >div{
          background: white;
          border: 1px solid black;

          >p,p::after,p::before{
            background: black;
          }
        }
      }


      >p,>div:last-child{
        padding-top: 60px;
      }
    }
  }
</style>
