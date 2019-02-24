<template>
<div class="wrap">
    <header1/>
    <carousel/>
    <tianmiao />
    <taoto/>
  <div class="wrap1">
      <taobaolive :pic2="pics.pic2"
                    :pic3="pics.pic3"
                    :boolo="pics.boolo"
                    :boloo="pics.boloo"
                    :text="pics.text"
                    :text2="pics.text2"
                    :blloo="pics.blloo"
      />
     <anchor
       v-for="pic in pics1"
       :key="pic.id"
       :pic5="pic.pic5"
       :pic4="pic.pic4"
       :boololo="pic.boololo"
       :booloo1="pic.booloo1"
       :boolllo="pic.boolllo"
       :bololle="pic.bololle"
       :shiz="pic.shiz"
       :text2="pic.text2"
     />
    <goodstuff />
  </div>
  <div class="wrap1">
    <taobaolive :pic2="pics2.pic2"
                :pic3="pics2.pic3"
                :boolo="pics2.boolo"
                :boloo="pics2.boloo"
                :text="pics2.text"
                :text2="pics2.text2"
                :blloo="pics2.blloo"
    />
    <div class="korea">
      <div class="justone">justone</div>
        <span class="qizi"></span>
        <span class="hanguo">韩国</span>
        <div class="picw"></div>
    </div>
    <everydayspecial
      v-for="pic in pics3"
      :key="pic.id"
      :tejia="pic.tejia"
      :text3="pic.text3"
      :text4="pic.text4"
      :pic5="pic.pic5"
      :pic6="pic.pic6"
      :pic7="pic.pic7"
      :zhu="pic.zhu"
      :tubiao="pic.tubiao"
      :purple="pic.purple"
      :yellow="pic.yellow"
      :red="pic.red"
      :ping="pic.ping"
    />
  </div>
  <div class="wrap1">
    <taobaolive :pic2="pics4.pic2"
                :pic3="pics4.pic3"
                :boolo="pics4.boolo"
                :boloo="pics4.boloo"
                :text="pics4.text"
                :text2="pics4.text2"
                :blloo="pics4.blloo"
    />
    <anchor
      :pic4="pics5.pic4"
      :pic5="pics5.pic5"
      :boololo="pics5.boololo"
      :booloo1="pics5.booloo1"
      :boolllo="pics5.boolllo"
      :bololle="pics5.bololle"
      :shiz="pics5.shiz"
      :text2="pics5.text2"
    />
    <everydayspecial
      v-for="pic in pics6"
      :key="pic.id"
      :tejia="pic.tejia"
      :text3="pic.text3"
      :text4="pic.text4"
      :pic5="pic.pic5"
      :pic6="pic.pic6"
      :pic7="pic.pic7"
      :zhu="pic.zhu"
      :tubiao="pic.tubiao"
      :purple="pic.purple"
      :yellow="pic.yellow"
      :red="pic.red"
      :ping="pic.ping"
    />
  </div>
  <div class="wrap1">
    <taobaolive :pic2="pics8.pic2"
                :pic3="pics8.pic3"
                :boolo="pics8.boolo"
                :boloo="pics8.boloo"
                :text="pics8.text"
                :text2="pics8.text2"
                :blloo="pics8.blloo"
    />
    <anchor
      :pic4="pics9.pic4"
      :pic5="pics9.pic5"
      :boololo="pics9.boololo"
      :booloo1="pics9.booloo1"
      :boolllo="pics9.boolllo"
      :bololle="pics9.bololle"
      :shiz="pics9.shiz"
      :text2="pics9.text2"
    />
    <everydayspecial
      v-for="pic in pics10"
      :key="pic.id"
      :tejia="pic.tejia"
      :text3="pic.text3"
      :text4="pic.text4"
      :pic5="pic.pic5"
      :pic6="pic.pic6"
      :pic7="pic.pic7"
      :zhu="pic.zhu"
      :tubiao="pic.tubiao"
      :purple="pic.purple"
      :yellow="pic.yellow"
      :red="pic.red"
      :ping="pic.ping"
    />
    <dinner
      v-for="pic in pics11"
      :key="pic.id"
      :color="pic.color"
      :text4="pic.text4"
      :text5="pic.text5"
      :pic11="pic.pic11"
      :line="pic.line"
      :item="pic.item"
    />
  </div>
  <div class="wrap1">
    <taobaolive :pic2="pics12.pic2"
                :pic3="pics12.pic3"
                :boolo="pics12.boolo"
                :boloo="pics12.boloo"
                :text="pics12.text"
                :text2="pics12.text2"
                :blloo="pics12.blloo"
    />
    <anchor
      :pic4="pics13.pic4"
      :pic5="pics13.pic5"
      :boololo="pics13.boololo"
      :booloo1="pics13.booloo1"
      :boolllo="pics13.boolllo"
      :bololle="pics13.bololle"
      :shiz="pics13.shiz"
      :text2="pics13.text2"
    />
    <everydayspecial
      v-for="pic in pics14"
      :key="pic.id"
      :tejia="pic.tejia"
      :text3="pic.text3"
      :text4="pic.text4"
      :pic5="pic.pic5"
      :pic6="pic.pic6"
      :pic7="pic.pic7"
      :zhu="pic.zhu"
      :tubiao="pic.tubiao"
      :purple="pic.purple"
      :yellow="pic.yellow"
      :red="pic.red"
      :ping="pic.ping"
    />
  </div>
  <div class="wrap1 wrap2">
    <dinner
      v-for="pic in pics15"
      :key="pic.id"
      :color="pic.color"
      :text4="pic.text4"
      :text5="pic.text5"
      :pic11="pic.pic11"
      :line="pic.line"
      :item="pic.item"
    />
    <everydayspecial
      v-for="pic in pics17"
      :key="pic.id"
      :tejia="pic.tejia"
      :text3="pic.text3"
      :text4="pic.text4"
      :pic5="pic.pic5"
      :pic6="pic.pic6"
      :pic7="pic.pic7"
      :zhu="pic.zhu"
      :tubiao="pic.tubiao"
      :purple="pic.purple"
      :yellow="pic.yellow"
      :red="pic.red"
      :ping="pic.ping"
    />
    <div>
      <ul class="divul">
        <li class="shifa"></li>
        <li class="genduo">更多服务</li>
      </ul>
    </div>
  </div>
  <div class="wrap1 wrap5">
    <anchor
      v-for="pic in pics16"
      :key="pic.id"
      :pic5="pic.pic5"
      :pic4="pic.pic4"
      :boololo="pic.boololo"
      :booloo1="pic.booloo1"
      :boolllo="pic.boolllo"
      :bololle="pic.bololle"
      :shiz="pic.shiz"
      :text2="pic.text2"
    />
    <preschool
      v-for="piv in pics20"
      :key="piv.id"
      :booo="piv.booo"
      :text1="piv.text1"
      :text2="piv.text2"
      :pic="piv.pic"
    />
  </div>
  <div class="wrap1">
    <taobaolive :pic2="pics21.pic2"
                :pic3="pics21.pic3"
                :boolo="pics21.boolo"
                :boloo="pics21.boloo"
                :text="pics21.text"
                :text2="pics21.text2"
                :blloo="pics21.blloo"
    />
    <anchor
      v-for="pic in pics22"
      :key="pic.id"
      :pic5="pic.pic5"
      :pic4="pic.pic4"
      :boololo="pic.boololo"
      :booloo1="pic.booloo1"
      :boolllo="pic.boolllo"
      :bololle="pic.bololle"
      :shiz="pic.shiz"
      :text2="pic.text2"
    />
    <agoodshop
      v-for="picc in pics23"
      :key="picc.id"
      :pic1="picc.pic1"
      :pic2="picc.pic2"
      :pic3="picc.pic3"
      :text1="picc.text1"
      :text2="picc.text2"
    />
  </div>
  <div class="wrap1 wrap12">
      <span class="line"></span>
      <div class="cai">猜你喜欢</div>
      <span class="yuan"></span>
  </div>
  <div class="wrap1 wrap22">
    <recommend
      v-for="pic1 in pics24"
      :key="pic1.id"
      :pic="pic1.pic"
      :booo="pic1.booo"
      :boooe="pic1.boooe"
      :text3="pic1.text3"
      :text2="pic1.text2"
      :text1="pic1.text1"
    />
  </div>
  <div class="wrap1 wrap23">
    <footer1 />
  </div>
</div>
</template>
<script type="text/ecmascript-6">
/* eslint-disable */
import {PostIn} from "../../axios/index"
import header1 from "./header.vue"
import carousel from "./carousel.vue"
import tiaomao from "./tianmao.vue"
import taoto from "./taoto.vue"
import taobaolive from "./taobaolive.vue"
import anchor from "./ anchor.vue"
import goodstuff from "./goodstuff.vue"
import everydayspecial from "./everydayspecial"
import dinner from "./dinner"
import preschool from "./preschool"
import agoodshop from "./agoodshop"
import recommend from "./recommend"
import footer1 from "./footer1"
export default {
  data() {
    return {
      pics24:[
        {
          pic:"//img.alicdn.com/bao/uploaded/i2/180859468/TB2Ij2.kDnI8KJjy0FfXXcdoVXa_!!180859468.jpg_300x300q85s150.jpg_.webp",
          booo:false,
          boooe:false,
          text3:"[为你推荐]6 8 10 12寸牛皮纸蛋糕盒烘焙西点盒手提生日蛋糕包装盒 铁塔10套",
          text2:"24",
          text1:"83"
        },
        {
          pic:"//img.alicdn.com/bao/uploaded/i3/107938846/TB2Dl_rdSxjpuFjSszeXXaeMVXa_!!107938846.jpg_300x300q85s150.jpg_.webp",
          booo:false,
          boooe:false,
          text3:"[为你推荐]大墙面20框卧室创意组合相框墙客厅相框挂墙照片墙相片墙",
          text2:"59",
          text1:"23"
        },
        {
          pic:"//img.alicdn.com/bao/uploaded/i2/43623533/O1CN011by9ktJQQiZ1pXj_!!43623533.jpg_300x300q85s150.jpg_.webp",
          booo:false,
          boooe:false,
          text3:"[为你推荐]肥龙珐琅搪瓷无盖卷边漏嘴奶锅宝宝辅食加厚单柄锅电磁炉燃气通用",
          text2:"58",
          text1:"39"
        },
        {
          pic:"//img.alicdn.com/bao/uploaded/i3/608874650/TB2JTbUugaTBuNjSszfXXXgfpXa_!!608874650-0-item_pic.jpg_300x300q85s150.jpg_.webp",
          booo:false,
          boooe:false,
          text3:"[为你推荐]公主田园风格单人枕头套枕套 枕巾 单个价格 要2个数量请选2配件",
          text2:"25",
          text1:"155"
        },
        {
          pic:"//img.alicdn.com/bao/uploaded/i1/TB1sYeeHpXXXXcRXXXXXXXXXXXX_!!0-item_pic.jpg_300x300q85s150.jpg_.webp",
          booo:true,
          boooe:false,
          text3:"[为你推荐]圣诞节 可拆diy磨具豆腐家庭自制豆腐框手工制作杉木豆腐盒模具",
          text2:"23.9",
          text1:"58"
        },
        {
          pic:"//img.alicdn.com/bao/uploaded/i1/T1albGFe0aXXXXXXXX_!!0-item_pic.jpg_300x300q85s150.jpg_.webp",
          booo:false,
          boooe:true,
          text3:"[为你推荐]日光生活除垢海绵金刚砂海绵擦磨力擦去焦去顽固污渍擦锅海绵4片",
          text2:"23.9",
          text1:"58"
        }
      ],
      pics23:[
        {
          pic1:'//gw.alicdn.com/bao/uploaded/i3/232131272/TB1ha6GcRDH8KJjSspnXXbNAVXa_!!0-item_pic.jpg_200x200q85s150.jpg_.webp',
          pic2:'//gw.alicdn.com/bao/uploaded/i4/232131272/TB2CfMngIbI8KJjy1zdXXbe1VXa_!!232131272.jpg_100x100q85s150.jpg_.webp',
          pic3:'//gw.alicdn.com/bao/uploaded/i2/232131272/TB2ZJclXVooBKNjSZPhXXc2CXXa_!!232131272.jpg_100x100q85s150.jpg_.webp',
          text1:'万能集市',
          text2:'发现深藏的好店'
        },
        {
          pic1:'//gw.alicdn.com/bao/uploaded/i3/430573/TB2vqvZrKuSBuNjSsziXXbq8pXa_!!430573.jpg_200x200q85s150.jpg_.webp',
          pic2:'//gw.alicdn.com/bao/uploaded/i4/430573/TB2rqoobGQoBKNjSZJnXXaw9VXa_!!430573.jpg_100x100q85s150.jpg_.webp',
          pic3:'//gw.alicdn.com/bao/uploaded/i3/430573/TB23kxbiRyWBuNkSmFPXXXguVXa_!!430573.jpg_100x100q85s150.jpg_.webp',
          text1:'淘宝江湖',
          text2:'找点乐子儿~'
        },
        {
          pic1:'//gw.alicdn.com/bao/uploaded/i4/47774830/TB1Pv2Mj9fD8KJjSszhXXbIJFXa_!!0-item_pic.jpg_200x200q85s150.jpg_.webp',
          pic2:'//gw.alicdn.com/bao/uploaded/i3/47774830/TB26Kd3nVXXXXXYXpXXXXXXXXXX_!!47774830.jpg_100x100q85s150.jpg_.webp',
          pic3:'//gw.alicdn.com/bao/uploaded/i2/TB1cmG7NFXXXXXUaXXXXXXXXXXX_!!0-item_pic.jpg_100x100q85s150.jpg_.webp',
          text1:'深藏不露',
          text2:'日常版の造物节'
        },
        {
          pic1:'//gw.alicdn.com/bao/uploaded/i3/130590945/TB2amYuud0opuFjSZFxXXaDNVXa_!!130590945.png_200x200q85s150.jpg_.webp',
          pic2:'//gw.alicdn.com/bao/uploaded/i1/130590945/TB2M3hRrlUSMeJjy1zkXXaWmpXa_!!130590945.png_100x100q85s150.jpg_.webp',
          pic3:'//gw.alicdn.com/bao/uploaded/i2/130590945/TB2xfWYdTAlyKJjSZPiXXXL2VXa_!!130590945.png_100x100q85s150.jpg_.webp',
          text1:'高手林立',
          text2:'好店不怕巷子深'
        }
      ],
      pics22: [
        {
          pic4:"//img.alicdn.com/imgextra/i1/1850683564/TB2TBMmv9FjpuFjSszhXXaBuVXa_!!1850683564-0-beehive-scenes.jpg_200x200q85s150.jpg_.webp",
          boololo:false,
          booloo1:true,
          boolllo:false,
          bololle:false,
          shiz:false,
          text2:"神殿推荐",
          pic5:"https://gw.alicdn.com/tfs/TB1KdOYQFXXXXc_aXXXXXXXXXXX-264-57.png_.webp",
        },
      ],
      pics21:{
        pic2:"//gw.alicdn.com/tfscom/img.alicdn.com/imgextra/i3/118011809/O1CN01L8E1ZU1PEYyVexTRd_!!118011809-0-beehive-scenes.jpg",
        pic3:"https://gw.alicdn.com/tfs/TB1S5_jQFXXXXapaXXXXXXXXXXX-1125-87.png?getAvatar=1_.webp",
        boolo:false,
        boloo:false,
        text:'特色好店',
        text2:"穿梭在巴洛克时期的古着珠宝店",
        blloo:false
      },
      pics20:[
        {
          booo: true,
          text1: "学前男宝",
          text2: "火锅玩具夹",
          pic: "//gw.alicdn.com/tfscom/TB1du2ij4YaK1RjSZFnSuu80pXa.jpg_200x200q85s150.jpg_.webp"
        },
        {
          booo: false,
          text1: "租房一族",
          text2: "绣花窗帘",
          pic: "//gw.alicdn.com/tfscom/TB1c0y7lWAoBKNjSZSySuuHAVXa.jpg_200x200q85s150.jpg_.webp"
        },
        {
          booo: true,
          text1: "绘画一族",
          text2: "猪鬃扇形笔",
          pic: "//gw.alicdn.com/tfscom/TB19CRRjNjaK1RjSZFASuvdLFXa.jpg_200x200q85s150.jpg_.webp"
        },
        {
          booo: false,
          text1: "肉食党",
          text2: "爱森五花肉",
          pic: "//gw.alicdn.com/tfscom/TB2ELaGiTnI8KJjSszgXXc8ApXa_!!1598711954-0-beehive-scenes.jpg_200x200q85s150.jpg_.webp"
        },
        {
          booo: true,
          text1: "囤货小当家",
          text2: "上海药皂肥皂",
          pic: "//gw.alicdn.com/tfscom/TB22cpLiwZC2uNjSZFnXXaxZpXa_!!6000000000567-0-at.jpg_200x200q85s150.jpg_.webp"
        },
        {
          booo: false,
          text1: "宝宝营养师",
          text2: "231人在逛",
          pic: "//gw.alicdn.com/tfscom/TB2xl3Te5MnBKNjSZFCXXX0KFXa_!!3307505848.jpg_200x200q85s150.jpg_.webp"
        }
      ],
      pics16: [
        {
          pic4:"//gw.alicdn.com/tfscom/i1/2695033657/TB2XUmjlXXXXXa_XXXXXXXXXXXX_!!2695033657.jpg_200x200q85s150.jpg_.webp",
          boololo:false,
          booloo1:true,
          boolllo:true,
          bololle:false,
          shiz:true,
          text2:"装修家",
        },
        {
          pic4: "//gw.alicdn.com/tfscom/i4/51007557/O1CN0125h9WebhPWzmc8A_!!51007557.jpg_200x200q85s150.jpg_.webp",
          boololo: false,
          booloo1: true,
          boolllo: false,
          bololle: false,
          shiz: false,
          text2:"爱乐迷"
        },
        {
          pic4:"//gw.alicdn.com/tfscom/i2/2045777410/TB2JbSnleJ8puFjy1XbXXagqVXa_!!2045777410.jpg_200x200q85s150.jpg_.webp",
          boololo: false,
          booloo1: true,
          boolllo: false,
          bololle: false,
          shiz: false,
          text2:"新时代主妇"
        },
      ],
      pics17:[
        {
          zhu:false,
          pic7:"https://gw.alicdn.com/tfs/TB1r8PXQFXXXXbKaXXXXXXXXXXX-105-42.png_.webp",
          tubiao:true,
          purple:false,
          yellow:false,
          red:false,
          ping:true,
          text3:'口碑生活',
          text4:'坚持运动 苗条一夏',
          pic5:'https://gw.alicdn.com/tfs/TB1YGFSllTH8KJjy0FiXXcRsXXa-800-800.jpg_100x100q85s150.jpg_.webp',
          pic6:'https://gw.alicdn.com/tfs/TB1dVzNfhTI8KJjSspiXXbM4FXa-800-800.jpg_100x100q85s150.jpg_.webp'
        },
        {
          zhu:false,
          pic7:"https://gw.alicdn.com/tfs/TB1bg2fQFXXXXb_aXXXXXXXXXXX-105-42.png_.webp",
          tubiao:false,
          purple:false,
          yellow:false,
          red:false,
          ping:false,
          text3:'阿里健康',
          text4:'自营正品开启健康生活',
          pic5:'https://gw.alicdn.com/tfs/TB1ZBq2AVGWBuNjy0FbXXb4sXXa-800-800.jpg_100x100q85s150.jpg_.webp',
          pic6:'https://gw.alicdn.com/tfs/TB1Sn29A49YBuNjy0FfXXXIsVXa-800-800.png_100x100q85s150.jpg_.webp'
        },

      ],
      pics15:[
        {
          color:false,
          text4:"淘宝众筹",
          text5:"超任性的音响",
          pic11:"https://img.alicdn.com/tfs/TB1HEBlcXYqK1RjSZLeXXbXppXa-580-580.jpg_100x100q85s150.jpg_.webp",
          line:true,
        },
        {
          color:true,
          text4:"魅力惠",
          text5:"奢品秋冬上新",
          pic11:"https://img.alicdn.com/imgextra/i3/2670830951/TB2Q5OcxamWBuNjy1XaXXXCbXXa_!!2670830951.jpg_100x100q85s150.jpg_.webp",
          line:true
        },
        {
          color:false,
          text4:"淘票票",
          text5:"宝贝儿",
          pic11:"https://img.alicdn.com/tfs/TB1xYIzigHqK1RjSZFgXXa7JXXa-800-800.jpg_100x100q85s150.jpg_.webp",
          line:true
        },
        {
          color:true,
          text4:"兴农扶贫",
          text5:"源头好农品",
          pic11:"https://gw.alicdn.com/tfs/TB1GIicvHGYBuNjy0FoXXciBFXa-800-800.jpg_100x100q85s150.jpg_.webp",
          line:false
        }
      ],
      pics12:{
        pic2:"https://img.alicdn.com/i3/TB20UfdiMJlpuFjSspjXXcT.pXa_!!1586519881-0-beehive-scenes.jpg_200x200q85s150.jpg_.webp",
        pic3:"https://gw.alicdn.com/tfs/TB1Q6V8i22H8KJjy0FcXXaDlFXa-1125-87.png_.webp",
        boolo:true,
        boloo:true,
        text:'性感开叉小心机， 你get了吗',
        text2:"败家主播天天有，边看直播边剁手",
        blloo:true
      },
      pics13:{
        pic4:"https://gw.alicdn.com/tfs/TB1JOZ3w7voK1RjSZFNXXcxMVXa-400-400.jpg_200x200q85s150.jpg_.webp",
        boololo:false,
        booloo1:true,
        boolllo:false,
        bololle:false,
        shiz:true,
        text2:"羽绒服",
        pic5:"https://gw.alicdn.com/tfs/TB1TXYXQFXXXXX6XVXXXXXXXXXX-264-57.png_.webp"
      },
      pics14:[
        {
          zhu:false,
          pic7:"https://gw.alicdn.com/tfs/TB1r8PXQFXXXXbKaXXXXXXXXXXX-105-42.png_.webp",
          tubiao:true,
          purple:false,
          yellow:false,
          red:false,
          ping:true,
          text3:'iFashion',
          text4:'学明星变时髦精',
          pic5:'https://img.alicdn.com/tfs/TB1ovU5o3vD8KJjy0FlXXagBFXa-800-800.jpg_100x100q85s150.jpg_.webp',
          pic6:'https://img.alicdn.com/tfs/TB16bgGoZrI8KJjy0FhXXbfnpXa-800-800.jpg_100x100q85s150.jpg_.webp'
        },
        {
          zhu:false,
          pic7:"https://gw.alicdn.com/tfs/TB1bg2fQFXXXXb_aXXXXXXXXXXX-105-42.png_.webp",
          tubiao:false,
          purple:false,
          yellow:false,
          red:false,
          ping:false,
          text3:'全球时尚',
          text4:'行走的品牌时尚',
          pic5:'https://img.alicdn.com/tfs/TB1ovU5o3vD8KJjy0FlXXagBFXa-800-800.jpg_100x100q85s150.jpg_.webp',
          pic6:'https://img.alicdn.com/tfs/TB16bgGoZrI8KJjy0FhXXbfnpXa-800-800.jpg_100x100q85s150.jpg_.webp'
        },
        {
          zhu:false,
          pic7:"https://gw.alicdn.com/tfs/TB1bg2fQFXXXXb_aXXXXXXXXXXX-105-42.png_.webp",
          tubiao:false,
          purple:false,
          yellow:false,
          red:false,
          ping:false,
          text3:'美妆学院',
          text4:'不能错过的潮流新品',
          pic5:'https://img.alicdn.com/tfs/TB1ovU5o3vD8KJjy0FlXXagBFXa-800-800.jpg_100x100q85s150.jpg_.webp',
          pic6:'https://img.alicdn.com/tfs/TB16bgGoZrI8KJjy0FhXXbfnpXa-800-800.jpg_100x100q85s150.jpg_.webp'
        },
        {
          zhu:false,
          pic7:"https://gw.alicdn.com/tfs/TB1bg2fQFXXXXb_aXXXXXXXXXXX-105-42.png_.webp",
          tubiao:false,
          purple:false,
          yellow:false,
          red:false,
          ping:false,
          text3:'非常大牌',
          text4:'疯抢500元券',
          pic5:'//gw.alicdn.com/imgextra/O1CN011ChKpKMd7AP5mRK_!!112-2-lubanu.png_100x100q85s150.jpg_.webp',
          pic6:'//gw.alicdn.com/imgextra/TB2qbn9ctrJ8KJjSspaXXXuKpXa_!!152-2-luban.png_100x100q85s150.jpg_.webp'
        },
      ],
      pics11:[
        {
          color:false,
          text4:"主题聚惠",
          text5:"尾货一折起",
          pic11:"//gw.alicdn.com/imgextra/O1CN011DIQuROoPKlm1OX_!!193-2-lubanu.png_100x100q85s150.jpg_.webp",
          line:true,
          item:"/jump"
        },
        {
          color:false,
          text4:"量贩优选",
          text5:"1分钱疯抢",
          pic11:"//gw.alicdn.com/imgextra/TB2tve8nhuTBuNkHFNRXXc9qpXa_!!11-2-luban.png_100x100q85s150.jpg_.webp",
          line:false
        },
        {
          color:false,
          text4:"淘宝心选",
          text5:"官方自营品牌",
          pic11:"https://gw.alicdn.com/tfs/TB1qTcKmfBNTKJjSszcXXbO2VXa-800-800.jpg_100x100q85s150.jpg_.webp",
          line:false
        },
        {
          color:false,
          text4:"聚名品",
          text5:"奢品抄底促",
          pic11:"//gw.alicdn.com/imgextra/O1CN01qqk1Ji1D4h2cxhEmD_!!163-2-lubanu.png_100x100q85s150.jpg_.webp",
          line:false
        }
      ],
      pics10:[
        {
          zhu:false,
          pic7:"https://gw.alicdn.com/tfs/TB1bg2fQFXXXXb_aXXXXXXXXXXX-105-42.png_.webp",
          tubiao:false,
          purple:false,
          yellow:false,
          red:false,
          ping:false,
          text3:'瘦身星人',
          text4:'健康瘦看这里',
          pic5:'https://gw.alicdn.com/tfs/TB1mfU3w5rpK1RjSZFhXXXSdXXa-600-600.jpg_100x100q85s150.jpg_.webp',
          pic6:'https://gw.alicdn.com/tfs/TB1jS7Tw6DpK1RjSZFrXXa78VXa-600-600.jpg_100x100q85s150.jpg_.webp'
        },
        {
          zhu:false,
          pic7:"https://gw.alicdn.com/tfs/TB1bg2fQFXXXXb_aXXXXXXXXXXX-105-42.png_.webp",
          tubiao:false,
          purple:false,
          yellow:false,
          red:false,
          ping:false,
          text3:'手机发烧友',
          text4:'武装你的兴趣爱好',
          pic5:'https://gw.alicdn.com/tfs/TB1fjTyw4TpK1RjSZFKXXa2wXXa-430-430.jpg_100x100q85s150.jpg_.webp',
          pic6:'https://gw.alicdn.com/tfs/TB1uCO2w9zqK1RjSZFpXXakSXXa-430-430.jpg_100x100q85s150.jpg_.webp'
        },
        {
          zhu:false,
          pic7:"https://gw.alicdn.com/tfs/TB1bg2fQFXXXXb_aXXXXXXXXXXX-105-42.png_.webp",
          tubiao:false,
          purple:false,
          yellow:false,
          red:false,
          ping:false,
          text3:'智能设备控',
          text4:'发现智能数码',
          pic5:'https://gw.alicdn.com/tfs/TB1NLc0w9zqK1RjSZFLXXcn2XXa-600-600.jpg_100x100q85s150.jpg_.webp',
          pic6:'https://gw.alicdn.com/tfs/TB1jQZ9wZfpK1RjSZFOXXa6nFXa-600-600.jpg_100x100q85s150.jpg_.webp'
        },
        {
          zhu:false,
          pic7:"https://gw.alicdn.com/tfs/TB1bg2fQFXXXXb_aXXXXXXXXXXX-105-42.png_.webp",
          tubiao:false,
          purple:false,
          yellow:false,
          red:false,
          ping:false,
          text3:'男得好货',
          text4:'潮流尖货 限时首发',
          pic5:'//img.alicdn.com/tps/TB2OnVRkLBNTKJjSszeXXcu2VXa_!!71-2-luban.png_100x100q85s150.jpg_.webp',
          pic6:'//img.alicdn.com/tps/TB2ODwOdxHI8KJjy1zbXXaxdpXa_!!104-2-luban.png_100x100q85s150.jpg_.webp'
        },
        {
          zhu:false,
          pic7:"https://gw.alicdn.com/tfs/TB1hGPBQFXXXXXSXFXXXXXXXXXX-105-42.png_.webp",
          tubiao:true,
          purple:false,
          yellow:false,
          red:true,
          ping:false,
          text3:'天天特价',
          text4:'第2件半价爆品热卖',
          pic5:'https://img.alicdn.com/tfs/TB15aqlRpXXXXaQaFXXXXXXXXXX-800-800.jpg_100x100q85s150.jpg_.webp',
          pic6:'https://img.alicdn.com/tfs/TB15_uKRpXXXXcIXVXXXXXXXXXX-800-800.jpg_100x100q85s150.jpg_.webp'
        },
        {
          zhu:false,
          pic7:"https://gw.alicdn.com/tfs/TB1hGPBQFXXXXXSXFXXXXXXXXXX-105-42.png_.webp",
          tubiao:false,
          purple:false,
          yellow:false,
          red:false,
          ping:false,
          text3:'品牌闪购',
          text4:'抢限量5折券',
          pic5:'//img.alicdn.com/tps/O1CN01L6oHPF1CHEFuhoQ3M_!!55-2-lubanu.png_100x100q85s150.jpg_.webp',
          pic6:'//img.alicdn.com/tps/TB2J0d6XFYqK1RjSZLeXXbXppXa_!!30-2-luban.png_100x100q85s150.jpg_.webp'
        },
      ],
      pics8:{
        pic2:"//img.alicdn.com/i3/TB283.MG41YBuNjy1zcXXbNcXXa_!!1927620085-0-beehive-scenes.jpg_200x200q85s150.jpg_.webp",
        pic3:"https://gw.alicdn.com/tfs/TB1dgbkQFXXXXaMaXXXXXXXXXXX-1125-87.png_.webp",
        boolo:true,
        boloo:true,
        text:'8月国内最火的手机，这几款值得看一看',
        text2:"败家主播天天有，边看直播边剁手",
        blloo:true
      },
      pics9:{
        pic4:"https://gw.alicdn.com/tfs/TB1kb.YXCzqK1RjSZFLXXcn2XXa-240-240.jpg_200x200q85s150.jpg_.webp",
        boololo:false,
        booloo1:true,
        boolllo:false,
        bololle:false,
        shiz:true,
        text2:"篮球迷",
        pic5:"https://gw.alicdn.com/tfs/TB1ZKLuQFXXXXbJXXXXXXXXXXXX-264-57.png_.webp"
      },
      pics6:[
        {
          zhu:true,
          pic7:"https://gw.alicdn.com/tfs/TB1bg2fQFXXXXb_aXXXXXXXXXXX-105-42.png_.webp",
          tubiao:true,
          purple:false,
          yellow:true,
          red:false,
          ping:false,
          text3:'极有家',
          text4:'黑灰色系 单身男极简家',
          pic5:'http://img.alicdn.com/bao/uploaded/i4/TB1Y9L5PpXXXXbVaXXXSutbFXXX.jpg_100x100q85s150.jpg_.webp',
          pic6:'http://img.alicdn.com/bao/uploaded/i2/TB1.Ps6PpXXXXcnXXXXSutbFXXX.jpg_100x100q85s150.jpg_.webp'
        },
        {
          zhu:false,
          pic7:"https://gw.alicdn.com/tfs/TB1bg2fQFXXXXb_aXXXXXXXXXXX-105-42.png_.webp",
          tubiao:false,
          purple:false,
          yellow:false,
          red:false,
          ping:false,
          text3:'生活家',
          text4:'彩色绕线画， 七夕陪你看日出',
          pic5:'http://img.alicdn.com/bao/uploaded/i4/TB1Y9L5PpXXXXbVaXXXSutbFXXX.jpg_100x100q85s150.jpg_.webp',
          pic6:'http://img.alicdn.com/bao/uploaded/i2/TB1.Ps6PpXXXXcnXXXXSutbFXXX.jpg_100x100q85s150.jpg_.webp'
        },
        {
          zhu:false,
          pic7:"https://gw.alicdn.com/tfs/TB1bg2fQFXXXXb_aXXXXXXXXXXX-105-42.png_.webp",
          tubiao:false,
          purple:false,
          yellow:false,
          red:false,
          ping:false,
          text3:'汇吃',
          text4:'高颜值 好品质美物',
          pic5:'http://img.alicdn.com/bao/uploaded/i4/TB1Y9L5PpXXXXbVaXXXSutbFXXX.jpg_100x100q85s150.jpg_.webp',
          pic6:'http://img.alicdn.com/bao/uploaded/i2/TB1.Ps6PpXXXXcnXXXXSutbFXXX.jpg_100x100q85s150.jpg_.webp'
        },
        {
          zhu:false,
          pic7:"https://gw.alicdn.com/tfs/TB1bg2fQFXXXXb_aXXXXXXXXXXX-105-42.png_.webp",
          tubiao:false,
          purple:false,
          yellow:false,
          red:false,
          ping:false,
          text3:'苏宁易购',
          text4:'家电预定低至5折 赠豪礼',
          pic5:'https://gw.alicdn.com/tfs/TB1JYUJh3TqK1RjSZPhXXXfOFXa-186-186.jpg_100x100q85s150.jpg_.webp',
          pic6:'https://gw.alicdn.com/tfs/TB1kwcJh4TpK1RjSZFKXXa2wXXa-186-186.jpg_100x100q85s150.jpg_.webp'
        },
      ],
      pics3:[
        {
        zhu:false,
        tubiao:false,
        purple:true,
        yellow:false,
        red:false,
        ping:false,
        text3:'进口优选',
        text4:'正品保障15天售后无忧',
        pic5:'//gw.alicdn.com/imgextra/i1/52/TB2wyCKvBjTBKNjSZFuXXb0HFXa_!!52-2-luban.png_100x100q85s150.jpg_.webp',
        pic6:'//gw.alicdn.com/imgextra/i2/46/TB29kkMwx1YBuNjy1zcXXbNcXXa_!!46-2-luban.png_100x100q85s150.jpg_.webp'
      },
        {
          zhu:false,
          tubiao:false,
          purple:false,
          yellow:false,
          red:false,
          ping:false,
          text3:'全球品牌动态',
          text4:'3186个品牌资讯和上新',
          pic5:'//gw.alicdn.com/imgextra/i1/141/TB2fEZOx1uSBuNjy1XcXXcYjFXa_!!141-2-luban.png_100x100q85s150.jpg_.webp',
          pic6:'//gw.alicdn.com/imgextra/i1/174/TB28kHBoiOYBuNjSsD4XXbSkFXa_!!174-2-luban.png_100x100q85s150.jpg_.webp'
        },
        {
          zhu:false,
          tubiao:false,
          purple:false,
          yellow:false,
          red:false,
          ping:false,
          text3:'全球购',
          text4:'海淘尖货免费领用',
          pic5:'//gw.alicdn.com/imgextra/i3/22/TB2joCyvrZnBKNjSZFrXXaRLFXa_!!22-2-luban.png_100x100q85s150.jpg_.webp',
          pic6:'//gw.alicdn.com/imgextra/i3/84/TB25pgRkAomBKNjSZFqXXXtqVXa_!!84-2-luban.png_100x100q85s150.jpg_.webp'
        },
        {
          zhu:false,
          tubiao:false,
          purple:false,
          yellow:false,
          red:false,
          ping:false,
          text3:'海淘笔记',
          text4:'百万口碑好货真实评测',
          pic5:'//gw.alicdn.com/imgextra/i1/2/TB2uNyuHeGSBuNjSspbXXciipXa_!!2-2-luban.png_100x100q85s150.jpg_.webp',
          pic6:'//gw.alicdn.com/imgextra/i2/64/TB2BRXsIf5TBuNjSspmXXaDRVXa_!!64-2-luban.png_100x100q85s150.jpg_.webp'
        },
        ],
      pics:{
        pic2:"http://img.alicdn.com/imgextra/i1/1266505025207716392/TB2OLLjiC0mpuFjSZPiXXbssVXa_!!0-dgshop.jpg",
        pic3:"https://gw.alicdn.com/tfs/TB1MGnKQFXXXXcAXpXXXXXXXXXX-1125-87.png?getAvatar=1_.webp",
        boolo:false,
        boloo:false,
        text:'"路转粉" 每一秒都在发生',
        text2:"败家主播天天有，边看直播边剁手",
        blloo:false
      },
      pics2:{
        pic2:"//img.alicdn.com/tps/TB22Rlkd4PI8KJjSspfXXcCFXXa_!!2631876902-0-beehive-scenes.jpg_200x200q85s150.jpg_.webp",
        pic3:"https://gw.alicdn.com/tfs/TB1R07AQVXXXXcEXpXXXXXXXXXX-1125-87.png?getAvatar=1_.webp",
        boolo:true,
        boloo:true,
        text:'私人定制安全祛疤利器',
        text2:"败家主播天天有，边看直播边剁手",
        blloo:true
      },
      pics4:{
        pic2:"//img.alicdn.com/i3/TB2dgtRc.R1BeNjy0FmXXb0wVXa_!!573408722-0-beehive-scenes.jpg_200x200q85s150.jpg_.webp",
        pic3:"https://gw.alicdn.com/tfs/TB1EVHdQFXXXXbIaXXXXXXXXXXX-1125-87.png_.webp",
        boolo:true,
        boloo:true,
        text:'分娩前应该多吃的助产食物',
        text2:"败家主播天天有，边看直播边剁手",
        blloo:true
      },
      pics5:{
        pic4:"https://gw.alicdn.com/tfs/TB1kI65sYSYBuNjSspiXXXNzpXa-240-240.jpg_200x200q85s150.jpg_.webp",
        boololo:false,
        booloo1:true,
        boolllo:false,
        bololle:false,
        shiz:true,
        text2:"湿纸巾",
        pic5:"https://gw.alicdn.com/tfs/TB1KdOYQFXXXXc_aXXXXXXXXXXX-264-57.png_.webp"
      },
      pics1: [
        {
          pic4:"https://gw.alicdn.com/imgextra/i3/40/TB2A3CDo_vI8KJjSspjXXcgjXXa_!!40-0-luban.jpg_200x200q85s150.jpg_.webp",
          boololo:true,
          booloo1:true,
          boolllo:false,
          bololle:false,
          shiz:false,
        },
        {
          pic4: "https://gw.alicdn.com/imgextra/i4/138/TB2dyPRXAfb_uJkSmLyXXcxoXXa_!!138-0-luban.jpg_200x200q85s150.jpg_.webp",
          boololo: false,
          booloo1: false,
          boolllo: false,
          bololle: false,
          shiz: false,
        },
        {
          pic4:"https://gw.alicdn.com/imgextra/i4/91/TB2hQfwi26H8KJjSspmXXb2WXXa_!!91-0-luban.jpg_200x200q85s150.jpg_.webp",
          boololo: false,
          booloo1: false,
          boolllo: false,
          bololle: false,
          shiz: false,
        },
        {
          pic4:"https://gw.alicdn.com/imgextra/i3/120/TB2rCWwceuSBuNjSsplXXbe8pXa_!!120-0-luban.jpg_200x200q85s150.jpg_.webp",
          boololo: false,
          booloo1: false,
          boolllo: false,
          bololle: false,
          shiz: false,
        }
      ],
    }
  },
  computed: {},
  methods: {
     getDocumentTop() {
        let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
          bodyScrollTop = document.body.scrollTop;
          }
          if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
          }
          scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
          return scrollTop;
        },

      //可视窗口高度
       getWindowHeight() {
        let windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
          windowHeight = document.documentElement.clientHeight;
        } else {
          windowHeight = document.body.clientHeight;
        }
        return windowHeight;
        },

        //滚动条滚动高度
        getScrollHeight() {
          let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
          if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
          }
          if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
          }
          scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
          return scrollHeight;
      },
    async PostIn(){
         const data = await PostIn({
           code:0,
           id:null,
           message:null,
           result:false,
           updateMsg:null,
         })
      console.log(data)
    }
  },
  beforeCreate() {
  },
  create() {},
  beforeMounted() {},
  mounted() {
    window.onscroll = () => {
      let isUpdate = false
//      console.log(this.getDocumentTop())
//      console.log(this.getWindowHeight())
//      console.log(this.getScrollHeight())
      //监听事件内容
      if (this.getScrollHeight() - this.getWindowHeight() - this.getDocumentTop() < -1 ) {
        if (!isUpdate) {
          isUpdate = true
          this.PostIn().then(() => {
            console.log(this)
            isUpdate = false
             this.pics24 = this.pics24.concat(this.pics24)
          }).catch((x) => {
            isUpdate = false
            console.log(x)
          })
        }
      }
    }
    },
  beforeUpdate() {},
  update() {},
  beforeDestroy() {},
  destroyed() {},
  components: { // 引入组件
    "header1":header1,
    "carousel":carousel,
    "tianmiao":tiaomao,
    "taoto":taoto,
    "taobaolive":taobaolive,
    "anchor":anchor,
    "goodstuff":goodstuff,
    "everydayspecial":everydayspecial,
    "dinner":dinner,
    "preschool":preschool,
    "agoodshop":agoodshop,
    "recommend":recommend,
    "footer1":footer1,
  }
}
</script>
<style scoped lang="scss">
  .wrap {
    background-color: #f4f4f4;
  }
  .wrap1{
    flex-wrap: wrap;
    width: 375px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: #ffffff;
    margin-top: 20px;
  }
  .wrap5{
    overflow:visible;
  }
  .korea{
    width: 125px;
    height: 125px;
    overflow: hidden;
    position: relative;
    flex-wrap: wrap;
  }
  .justone{
    overflow: hidden;
    font-size: 14px;
    height: auto;
    width: 100%;
    white-space: nowrap;
    line-height: 17px;
    color: rgb(51, 51, 51);
    margin-top: 10px;
    margin-left: 10px;
    text-align: left;
    text-overflow: ellipsis;
  }
  .qizi{
    display: inline-block;
    width: 12px;
    height:12px;
    background-image: url(https://g.alicdn.com/mui/flag-img/circle/KR.png);
    border-radius: 6px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    margin-left: 10px;
    position: absolute;
  }
  .hanguo{
    display: inline-block;
    overflow: hidden;
    font-size: 10px;
    height: auto;
    width: 100%;
    margin-left: 5px;
    color: rgb(153, 153, 153);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 13px;
    position: absolute;
    left: 20px;
  }
  .picw{
    width:115px;
    height: 70px;
    background-image: url(https://img.alicdn.com/tps/TB1mrptRXXXXXbPXVXXXXXXXXXX-510-315.png_200x200q85s150.jpg_.webp);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    position: absolute;
    top: 49px;
    left: 5px;
  }
  .wrap2{
    margin-top: 10px;
  }
  .divul{
    width: 375px;
    height:36px;
    line-height: 36px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }
  .shifa{
    width:187.5px;
    height: 100%;
    background-image: url(https://gw.alicdn.com/tfs/TB1EEjruTtYBeNjy1XdXXXXyVXa-563-108.png_.webp);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }
  .genduo{
    display: flex;
    overflow: hidden;
    font-size: 12px;
    height: 100%;
    width: 168px;
    color: rgb(51, 51, 51);
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin-right: 17px;
  }
  .genduo:after{
    content: "";
    display: inline-block;
    overflow: hidden;
    width: 10px;
    height: 10px;
    margin-left: 2px;
    background-image: url(https://gw.alicdn.com/tfs/TB1gTq4QFXXXXacaXXXXXXXXXXX-15-27.png_.webp);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }
  .line{
    display: inline-block;
    width: 140px;
    height: 1px;
    background: #ff5000;
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform:translate(-50%);
  }
  .wrap12{
    display: block;
    width: 375px;
    height: 35px;
    line-height: 35px;
    position: relative;
    margin-top: 10px;
  }
  .cai{
    box-sizing: content-box;
    padding: 0 8px 0 8px;
    text-align: center;
    width: 91px;
    position:absolute;
    z-index: 2;
    display: inline-block;
    color: #ff5000;
    background-color: #ffffff;
    height: 35px;
    line-height: 35px;
    font-size: 17px;
    left: 50%;
    transform: translate(-50%);
  }
  .yuan{
    display:block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border:1px solid #ff5000;;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    left:37%;
    z-index: 100;
  }
  .line:before{
    content: '';
    position: absolute;
    background: #ff5000;
    width: 3px;
    height: 3px;
    border-radius: 100%;
    top: 50%;
    left:14px;
    transform: translateY(-50%);
  }
  .line:after{
    content: '';
    position: absolute;
    background: #ff5000;
    width: 3px;
    height: 3px;
    border-radius: 100%;
    top: 50%;
    left:125px;
    transform: translateY(-50%);
  }
  .wrap22{
    margin: 0;
  }
  .wrap23{
    display: block;
    margin-top: 20px;
  }
</style>
