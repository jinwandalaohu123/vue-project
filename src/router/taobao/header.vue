<template>
  <div class="wrap">
    <div class="header">
      <div class="tao">
        <a class="shop">
          <span class="find">
            寻找宝贝店铺
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // eslint-disable-next-line no-extend-native
  /* eslint-disable */
  export default {
  data() {
    return {
    }
  },
  computed: {},
  methods: {
  },
  beforeCreate() {
  },
  create() {},
  beforeMounted() {},
  mounted() {},
  beforeUpdate() {},
  update() {},
  beforeDestroy() {},
  destroyed() {},
components: { // 引入组件
  }
}
</script>

<style scoped lang="scss">
  .header{
    position: fixed;
    width: 375px;
    z-index: 1000;
    top: 0;
    left: 0;
    background-color: #FF852A;
  }
  .tao{
    width: 100%;
    padding-right: 9px;
    padding-left: 42px;
    padding-top: 6px;
    padding-bottom: 6px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAwCAYAAACmCaIKAAAAGXRFW…wbqnjl3BeayIl1CJspHfQ8JeTyS5Rn4AbLdSp9jXdwnwkwAGXl2KVI+BEMAAAAAElFTkSuQmCC);
    background-repeat: no-repeat;
    background-size: 27px 20px;
    background-position: 9px center;
    box-sizing: border-box;
  }
  .shop{
    display: block;
    font-size: 0;
    background-color: #FF4E22;
    text-align: center;
    border-radius: 4px;
  }
  .find{
    height: 25px;
    line-height: 25px;
    font-size: 13px;
    display: inline-block;
    color: #F0E0DC;
  }
  .find:before{
    content: '\E600';
    font-size: 15px;
    display: inline-block;
    color: #FFF;
    margin-right: 5px;
  }
</style>
