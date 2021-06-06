<template>
  <div class="footer_m">
    <p>Copyright © 2021 Businessdesignlab. All rights reserved</p>
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
  .footer_m{
    height: 76px;
    width: 100%;
    background: #0d1741;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.25rem;
  }
</style>
