<template>
  <div class="wrap">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="pic1 in swiperArr" :key="pic1.id">
        <img class="imgpic" :src="pic1.pic"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay:{
          delay: 3000,
        },
      },
      swiperArr: [
        {pic:"https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg"},
        {pic:"https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg"},
        {pic:"//gw.alicdn.com/imgextra/i1/102/O1CN01eYWVMh1CckszSVCiR_!!102-0-lubanu.jpg"},
        {pic:"//gw.alicdn.com/imgextra/i1/102/O1CN01eYWVMh1CckszSVCiR_!!102-0-lubanu.jpg"},
        {pic:"//img.alicdn.com/imgextra/i2/131/O1CN01c7PAXC1Cq2MzejOY4_!!131-0-luban.jpg"},
        {pic:"//img.alicdn.com/imgextra/i2/131/O1CN01c7PAXC1Cq2MzejOY4_!!131-0-luban.jpg"}
      ],
    }
  },
  computed: {},
  methods: {

    },
  beforeCreate() {
  },
  create() {},
  beforeMounted() {},
  mounted() {
  },
  beforeUpdate() {},
  update() {},
  beforeDestroy() {},
  destroyed() {},
  components: { // 引入组件
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang="scss">
  .wrap{
    margin-top: 37px;
    width: 375px;
    height:120px;
  }
  .imgpic{
    width: 100%;
    height: 100%;
  }
</style>
