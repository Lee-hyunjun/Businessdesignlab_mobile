<template>
  <div class="content3Main">
    <div>
      <div class="fonts">
        <p>Our Goal</p>
        <span>With more than 20 years of know-how,<br>we will be your business success partner.</span>
      </div>
      <div class="contentBox">
        <div>
          <div class="boxItem">
            <div>
              <div class="icon1" alt="icon1"></div>
              <p>Analysis</p>
            </div>
            <p>기업 전체의 비즈니스를 한 눈에 볼 수 있게 <br> 함으로써 기업내의 자원과 노력을 효과적으로 <br> 배분할 수 있게 합니다.</p>
          </div>
          <div class="boxItem">
            <div>
              <div class="icon2" alt="icon2"></div>
              <p>Optimization</p>
            </div>
            <p>현재를 위한 사업 최적화, 내일을 위한 사업기회 발굴 <br>등 균형을 맞출 수 있게 합니다.</p>
          </div>
        </div>
        <div>
          <div class="boxItem">
            <div>
              <div class="icon3" alt="icon3"></div>
              <p>Insight</p>
            </div>
            <p>아웃사이드 (고객, 시장, 유통채널) 의 요구분석을<br>이해하고 이들의 시각을 통해 인사이드 (제품, <br>지식, 자원)을 볼 수 있게 합니다.</p>
          </div>
          <div class="boxItem">
            <div>
              <div class="icon4" alt="icon4"></div>
              <p>Know-how</p>
            </div>
            <p>20년 이상 해당분야 노하우 및 실적을 보유한 <br>전문위원을 통해 단순 가이드가 아닌 실제 사례를<br>통한 정확한 진단과 분석을 제시합니다.</p>
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


  .content3Main{
    width: 100%;
    height: 627px;
    background-image: url("../assets/content3/back.png");
    padding-top: 69px;

    >div{
      margin: 0 auto;
      max-width: 1200px;
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    .fonts{

      p,span{
        color: #0d1741;
        font-weight: bold;
      }

      p{
        font-family: GmarketSansTTFBold ,sans-serif;
        font-size: 2.375rem;
      }

      span{
        font-family : GmarketSansTTFMedium ,sans-serif;
        display: block;
        font-size: .625rem;
      }
    }
    
    .contentBox{
      max-width: 790px;
      width: 100%;
      box-shadow:0px 30px 45px #0d1741;
      >div{
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
      }

      .boxItem{
        max-width: 395px;
        width: 100%;
        height: 175px;
        background: #101a44;
        border: 1px solid #212c57;
        padding-left: 33px;
        padding-top: 28px;

        >div{
          display: flex;
          margin-bottom: 20px;

          >div{
            margin-right: 20px; 
            width: 35px;
            height: 35px;
            background-repeat: no-repeat;
            
          }

          .icon1{background-image:url('../assets/content3/icons/icon1.png')}
          .icon2{background-image:url('../assets/content3/icons/icon2.png')}
          .icon3{background-image:url('../assets/content3/icons/icon3.png')}
          .icon4{background-image:url('../assets/content3/icons/icon4.png')}

          p{
            // @import url(../assets/fonts/GmarketSansTTF/GmarketSansTTFMedium.ttf);
            font-family: GmarketSansTTFMedium;
            color: white;
            font-size: 1.5rem;
          }
        }

        >p{
          @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
          font-family: 'Noto Sans CJK KR', Noto Sans KR, sans-serif;
          color:#c0c9ef;
          font-size: 1rem;
        }
      }
    }
  }
</style>
