<template>
  <div class="content2Main_m">
    <div>
      <span>Target</span>
      <p>Who is the target of <br> Business Design Lab?</p>
      <div class="itemsTop">
        <div class="content2_Item">
          <div>
            <div>
              <img src="../assets/mobile/content2/1.png" alt="icon">
              <img src="../assets/mobile/content2/white_1.png" alt="icon">
            </div>
            <span>변화 관리</span>
            <p>고객사가 변화에 수반되는 위험 요소들을 <br> 예측하고 평가하며 관리하여 어려움을 극복</p>
          </div>
        </div>
        <div class="content2_Item">
          <div>
            <div>
              <img src="../assets/mobile/content2/2.png" alt="icon">
              <img src="../assets/mobile/content2/white_2.png" alt="icon">
            </div>
            <span>기업 성장</span>
            <p>투자 전략을  통한 경쟁 우위를 차지할 수 <br> 있도록 지원</p>
          </div>
        </div>
        <div class="content2_Item">
          <div>
            <div>
              <img src="../assets/mobile/content2/3.png" alt="icon">
              <img src="../assets/mobile/content2/white_3.png" alt="icon">
            </div>
            <span>고객 전략 및 마케팅</span>
            <p>회사 운영과 경제성(economics)에 관한 <br> 실질적인 전문성에 심도 깊은 고객 인사이트를 <br> 접목하여, 고객사들이 지속가능하고 유기적인 <br> 성장을 달성할 수 있도록 지원</p>
          </div>
        </div>
      </div>
      <div class="items_bottom">
        <div class="content2_Item">
          <div>
            <div>
              <img src="../assets/mobile/content2/4.png" alt="icon">
              <img src="../assets/mobile/content2/white_4.png" alt="icon">
            </div>
            <span>M&A and Divestitures</span>
            <p>M&A 기회가 발생하기 이전부터 계획을 세우고,<br> 꾸준히 이어지는 거래를 성사시켜 반복가능한<br> 인수 모델을 정립</p>
          </div>
        </div>
        <div class="content2_Item">
          <div>
            <div>
              <img src="../assets/mobile/content2/5.png" alt="icon">
              <img src="../assets/mobile/content2/white_5.png" alt="icon">
            </div>
            <span>조직</span>
            <p>모든 조직 시스템을 통일하여 재무 성과와 근무<br>환경을 개선하도록 지원하고, 기업의 목표를 <br>달성할 수 있도록 지원</p>
          </div>
        </div>
        <div class="content2_Item">
          <div>
            <div>
              <img src="../assets/mobile/content2/6.png" alt="icon">
              <img src="../assets/mobile/content2/white_6.png" alt="icon">
            </div>
            <span>운영</span>
            <p>기업 성장과 비용 절감, 전략 실행을 위해 사업<br> 운영의 개념을 새롭게 형성</p>
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

// 1rem = 16
  .content2Main_m{
    padding-top: 195px;
    max-width: 1396px;
    width: 100%;
    height:4980px;
    background-image: url("../assets/backDot.png");
    background-position-y: 124px;
    background-repeat: no-repeat;
    margin: 0 auto;
    
    > div{
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;

      >span{
        margin: 0 auto;
        width: 1060px;
        display:flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 4.6875rem;
        color: #0d1741;
        // margin-top: 195px;
        margin-bottom: 15px;
        font-family: GmarketSansTTFBold ,sans-serif;
      }

      >p{
        margin: 0 auto;
        width: 1060px;
        display:flex;
        justify-content: flex-start;
        align-items: center;
        font-size:2.5rem;
        color: #0d1741;
        font-weight: bold;
        margin-bottom: 65px;
        font-family: GmarketSansTTFMedium ,sans-serif;
      }

      >div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: wrap;
      }
      
      .content2_Item{
        margin-bottom: 74px;
        background:white;
        max-width: 1060px;
        width: 100%;
        height: 676px;
        border: 1px solid #e8e9eb;
        transition: .5s;
        position: relative;
        overflow: hidden;
        padding-left: 35px;
        padding-top: 42px;
        z-index: 5  ;

        > div{
          position: relative;
          z-index: 10;
          transition: .3s;

          >div{
            height: 160px;
            position: relative;

            >img:first-child{
              transition: .3s;
            }

            >img:last-child{
              transition: .3s;
              opacity: 0;
            }

            >img{
              position: absolute;
              top: 0;
              left: 0;
            }
          }
        }

        span{
          display: block;
          font-size: 4.25rem;
          font-weight: bold;
          margin-top: 28px;
          margin-bottom: 15px;
          color: #525871;
          font-family: GmarketSansTTFMedium ,sans-serif;
        }

        p{
          font-size: 3rem;
          color: #525871;
          @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
          font-family: 'Noto Sans CJK KR', Noto Sans KR, sans-serif;
        }

      }
      .content2_Item::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        background-image:url("../assets/content2/1.png");
        background-position-x: -13px;
        background-position-y: -8px;
        transition: .5s;
        width: 100%;
        height: 100%;
      }

      .content2_Item::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        background: #01bc9a;
        z-index: 2;
        transition: .5s;
      }
      
      .content2_Item:hover{
        box-shadow:3px 10px 20px #bbbbbb;

        > div{
          
          // filter: brightness(0) invert(1);

          >div{
            >img:first-child{
              opacity: 0;
            }

            >img:last-child{
              opacity: 1;
            }
          }

          >span,p{
            color: white;
          }
        }
      }

      .content2_Item:hover::before{
        opacity: .9;
      }
      .content2_Item:hover::after{
        opacity: 1;
      }

      
    }
  }
</style>
