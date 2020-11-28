<template>
  <div id="app">
    <VmHeader></VmHeader>
    <div id="content">
    <VmLeft class = "left" 
    :option1 = 'option1'
		:option3 = 'option3'
		:option5 = 'option5'></VmLeft>

    <VmCenter class = "center"
    :centerTop ='centerTop'
		:foreignData = 'foreignData'></VmCenter>

    <VmRight class = "right"
    :option2 = 'option2'
		:option4 = 'option4'
		:option6 = 'option6'></VmRight>
    </div>

    <!-- <div id="content">
      <VmLeft class = "left"></VmLeft>
      <VmCenter class = "center"></VmCenter>
      <VmRight class = "right"></VmRight>
    </div> -->
  </div>
</template>

<script>
import VmHeader from '@/components/header/VmHeader'
import VmLeft from '@/components/left/VmLeft'
import VmCenter from '@/components/center/VmCenter'
import VmRight from '@/components/right/VmRight'

import {getForeinData,} from './commonfun/charts'

export default {
  name: 'App',
  components: {
    VmHeader,
    VmLeft,
    VmCenter,
    VmRight
  },

  data(){
    return {
      option1:{},
      option2:{},
      option3:{},
      option4:{},
      option5:{},
      option6:{},
      centerTop:{},
      foreignData:{},
    }
  },

  mounted(){
    getForeinData().then(res => {
      this.option1 = res.option1;
      this.option2 = res.option2;
      this.option3 = res.option3;
      this.option4 = res.option4;
      this.option5 = res.option5;
      this.option6 = res.option6;
      this.centerTop = res.centerTop;
      this.foreignData = res.foreignData;
    })
  },

}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
		list-style: none;
	}

  @font-face {
    font-family: electronicFont;
    src: url(./assets/font/DS-DIGIT.TTF);
  }

  #app{
    /* width: 1920px;
    height: 1080px; */
    /* 100vm相当于一个视口宽度 1vm相当于1/100视口宽度 */
    width: calc(100vw - 17px); 
    background: url(./assets/image/bg.jpg);
  }

  #content {
		/* width: 100vw; */
		/* height: 100px; */
		/* background-color: pink; */
		padding: 10px 10px 0;
		display: flex;
	}
	#content .left {
		flex: 3
	}

  #content .center {
		flex: 5
	}
	#content .right {
		flex: 3
	}

</style>
