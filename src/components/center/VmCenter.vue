<template>
  <div id="vmcenter">
    <VmCenterTop :centerTop ='centerTop'></VmCenterTop>
    <VmCenterContainer :foreignData = 'foreignData'></VmCenterContainer>
  </div>
</template>

<script>
import VmCenterTop from './VmCenterTop'
import VmCenterContainer  from './VmCenterContainer'

export default {
  name: 'VmCenter',
  props:{
			centerTop:{},
			foreignData:{}
		},
  components: {
    VmCenterTop,
    VmCenterContainer,
  }

}
</script>

<style>
  #vmcenter{
		/* height: 100px;
		background-color: #000088; */
		padding: 0 10px 15px;
	}
</style>