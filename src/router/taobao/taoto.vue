<template>
  <div class="wrap">
    <div class="line"></div>
    <div class="name1" v-for="item in items">
      <div class="woo" >
        <div class="taoqiang" :style="{backgroundImage:'url(' + item.pic + ')'}"/>
        <span class="xing" :class="{niahoma:item.bollo}">{{item.text1}}</span>
        <div class="jiqi" :style="{backgroundImage:'url(' + item.pic1 + ')'}"></div>
      </div>
      <div class="nihap">
        <div class="iphone" :style="{backgroundImage:'url(' + item.pic2 + ')'}"></div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      items:[
        {
          pic:"https://gw.alicdn.com/tfs/TB1317ISFXXXXbxXVXXXXXXXXXX-563-78.png_.webp",
          bollo:true,
          text1:"hdi",
          pic1:"//gw.alicdn.com/imgextra/O1CN01HdtqIU1CHEGxB7NQE_!!55-0-lubanu.jpg_100x100q85s150.jpg_.webp",
          pic2:"//gw.alicdn.com/imgextra/O1CN01zChrHd1CmNClUQ9ES_!!123-0-lubanu.jpg_200x200q85s150.jpg_.webp"
        },
        {
          pic:"https://gw.alicdn.com/tfs/TB1ANZGSFXXXXXdXVXXXXXXXXXX-563-78.png_.webp",
          bollo:false,
          text1:"高颜值美物",
          pic1:"//gw.alicdn.com/imgextra/i4/137/TB2TJsiGY1YBuNjSszeXXablFXa_!!137-0-luban.jpg_100x100q85s150.jpg_.webp",
          pic2:"//gw.alicdn.com/imgextra/i1/150/TB2wm0Jr8smBKNjSZFsXXaXSVXa_!!150-0-luban.jpg_200x200q85s150.jpg_.webp",
        },
        {
          pic:"https://img.alicdn.com/tfs/TB1NnpaxljTBKNjSZFuXXb0HFXa-563-78.png_.webp",
          bollo:false,
          text1:"2018流行啥",
          pic1:"//gw.alicdn.com/imgextra/i1/93/TB2VrMYoH1YBuNjSszhXXcUsFXa_!!93-0-luban.jpg_100x100q85s150.jpg_.webp",
          pic2:"//gw.alicdn.com/imgextra/i4/25/TB2RyMhnuuSBuNjSsziXXbq8pXa_!!25-0-luban.jpg_200x200q85s150.jpg_.webp",
        },
        {
          pic:"https://gw.alicdn.com/tfs/TB1FqhfSVXXXXaqXXXXXXXXXXXX-563-78.png_.webp",
          bollo:false,
          text1:"都整理好了",
          pic1:"//gw.alicdn.com/imgextra/i1/3/TB2uCp7npGWBuNjy0FbXXb4sXXa_!!3-0-luban.jpg_100x100q85s150.jpg_.webp",
          pic2:"//gw.alicdn.com/imgextra/i3/124/TB2jq1hd5MnBKNjSZFCXXX0KFXa_!!124-0-luban.jpg_200x200q85s150.jpg_.webp",
        }
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
  .wrap{
    position: relative;
    width: 375px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: hidden;
  }
  .line{
    overflow: hidden;
    width: 100%;
    height: 0.55px;
    background-color:rgb(238,238,238);
    position: absolute;
    top:130px;
    z-index: 100;
  }
  .name1{
    height:123.641px;
    background-color: #ffffff;
    position: relative;
  }
  .woo{
    height:123.094px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .taoqiang{
    width:187.5px;
    height: 26px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .xing{
    display: inline-block;
    overflow: hidden;
    font-size: 13.248px;
    height: auto;
    margin-left: 11.04px;
    text-align: left;
    color: rgb(153, 153, 153);
    width: 92.46px;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 16.248px;
    opacity: 1;
  }
  .jiqi{
    width:79.484px;
    height:64.031px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    margin-left: 11.04px;
  }
  .iphone{
    width:87.203px;
    height:102.109px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }
  .nihap{
    display: flex;
    overflow: hidden;
    margin-left: 103.5px;
    width: 103.5px;
    height:123.641px;
    top:15px;
    left: 0;
    position: absolute;
  }
  .niahoma{
    opacity:0;
  }
</style>
