<template>
  <div class="mainContent">
    <div>
      <h1>Business area</h1>
      <div class="contentTop">
        <div>
          <div>
            <div class="image1 image"></div>
          </div>
          <div>
            <p>01</p>
            <span>비즈니스 리모델링</span>
          </div>
        </div>
        <div>
          <div>
            <div class="image2 image"></div>
          </div>
          <div>
            <p>02</p>
            <span>미래전략 설계</span>
          </div>
        </div>
        <div>
          <div>
            <div class="image3 image"></div>
          </div>
          <div>
            <p>03</p>
            <span>컨설팅</span>
          </div>
        </div>
      </div>
      <div class="contentBottom">
        <div>
          <div>
            <div class="image4 image"></div>
          </div>
          <div>
            <p>04</p>
            <span>AI 모델 계발</span>
          </div>
        </div>
        <div>
          <div>
            <div class="image5 image"></div>
          </div>
          <div>
            <p>05</p>
            <span>AI 데이터 가공</span>
          </div>
        </div>
        <div>
          <div>
            <div class="image6 image"></div>
          </div>
          <div>
            <p>06</p>
            <span>초기투자</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">
  .mainContent{
    max-width: 1920px;
    width: 100%;
    height: 800px;
    background-image: url("../assets/backBuilding.png");

    > div{
      margin: 0 auto;
      max-width: 1200px;
      width: 100%;
      padding-top: 87px;
      
      >h1{
        margin-bottom: 50px;
        font-family: GmarketSansTTFBold ,sans-serif;
        color: #0d1741;
      }

      .contentTop{
        margin-bottom: 48px;
      }

      > div{
        width: 100%;
        height: 235px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        >div{
          overflow: hidden;
          height: 100%;
          width: 380px;
          box-shadow:3px 10px 20px #d8d8d8;

          .image1{
            background-image: url("../assets/1.png");
          }
          .image2{
            background-image: url("../assets/2.png");
          }
          .image3{
            background-image: url("../assets/3.png");
          }
          .image4{
            background-image: url("../assets/4.png");
          }
          .image5{
            background-image: url("../assets/5.png");
          }
          .image6{
            background-image: url("../assets/6.png");
          }

            >div{
              overflow: hidden;
              > div:first-child{
                  height: 151px;
                // background:orange ;
              }
            }

          > div:last-child{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 27px;
            height: 85px;
            background: white ;

            p{
             color: #01bc9a; 
             font-size: 26px;
             display: flex;
             align-items: center;
             font-family: GmarketSansTTFBold ,sans-serif;
            }

            p::after{
              content: "";
              display: block;
              height: 23px;
              width: 1px;
              background:#5e6480;
              margin:0 10px;
            }
            
            span{
              color: #0d1741;
              font-size: 26px;
              font-family: GmarketSansTTFMedium ,sans-serif;
            }
          }
        }

        >div:hover{
          
          .image{
            // width: 105%;
            // height: 105%;
            background-repeat: no-repeat;
            transform:scale(1.25);  
          }
        }
        .image{
          transition: 1s;
          // width: 100%;
          // height: 100%;
          background-repeat: no-repeat;
        }
      }
    }
  }
</style>>
