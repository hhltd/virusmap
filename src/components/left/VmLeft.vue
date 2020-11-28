<template>
  <div id="vmleft">
    <!-- 第一张图 -->
    <VmPanel>
      <div slot='panelcontent'>
				<h2>新增确诊TOP10</h2>
				<div class="chart topteninfected"></div>
			</div>
    </VmPanel>
    <!-- 第二张图 -->
    <VmPanel>
			<div slot='panelcontent'>
				<h2>大洲感染总人数趋势图</h2>
				<div class="chart infectedstates"></div>
			</div>
		</VmPanel>
    <!-- 第三张图 -->
    <VmPanel>
			<div slot='panelcontent'>
				<h2>大洲感染人数饼状图</h2>
				<div class="chart infectedstatesPie"></div>
			</div>
		</VmPanel>
  </div>
</template>

<script>
import VmPanel from '@/common/VmPanel'
import {addChart,} from '@/commonfun/charts'

export default {
  name: 'VmLeft',
  components: {
    VmPanel,
  },

  props: {
    option1:{},
		option3:{},
		option5:{}
  },

  watch: {
    option1(){
      // echart一定要有一个有宽高的容器
			let topteninfected = document.querySelector('.topteninfected');
			addChart(topteninfected, this.option1);
    },
    
    option3(){
			let infectedstates = document.querySelector('.infectedstates');
			addChart(infectedstates, this.option3);
    },
    
		option5(){
			let infectedstatesPie = document.querySelector('.infectedstatesPie');
			addChart(infectedstatesPie, this.option5);
		},
  }

}
</script>

<style scoped>

</style>>