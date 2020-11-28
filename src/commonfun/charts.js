import {jsonp} from './jsonp.js'
import {setOption1,setOption2,setOption3,setOption4,setOption5,setOption6,setForeignData} from './options.js'

//获取国外疫情数据
//通过return promise的形式,导出异步获得的数据
export function getForeinData (){
	return new Promise((resolve,reject)=>{
		jsonp({
			url: 'https://view.inews.qq.com/g2/getOnsInfo',
			params: {
				name: 'disease_foreign',
			},
			success(res) {
				let foreinData;
				let chinaData;
				foreinData = JSON.parse(res.data);
				// 新增确诊top10
				const option1 = setOption1(foreinData.countryAddConfirmRankList);
				// 主要疫情国家治愈率
				const option2 = setOption2(foreinData.foreignList);
				// 大洲感染人数趋势
				const option3 = setOption3(foreinData.continentStatis);
				// 世界每周新增和死亡人数
				const option4 = setOption4(foreinData.globalDailyHistory);
				// 大洲感染人数饼图
				const option5 = setOption5(foreinData.continentStatis[foreinData.continentStatis.length-1]);
				// 境外输入top10省份
				const option6 = setOption6(foreinData.importStatis);
				// 中间世界地图
				const centerTop = foreinData.globalStatis;
				resolve({option1,option2,option3,option4,option5,option6,centerTop})
			}
		});		
	})
}

//同时获取国外和国内疫情数据与，并进行一定处理
export function getMapData(){
	return Promise.all([new Promise((resolve,reject)=>{
		
		jsonp({
			url: 'https://view.inews.qq.com/g2/getOnsInfo',
			params: {
				name: 'disease_foreign',
			},
			success(res) {
				let foreinData;
				foreinData = JSON.parse(res.data);
				const foreignData = setForeignData(foreinData.foreignList);
				resolve(foreignData)
			}})
		
		
	}),new Promise((resolve,reject)=>{
		jsonp({
			url: 'https://view.inews.qq.com/g2/getOnsInfo',
			params: {
				name: 'disease_h5',
			},
			success(res1) {   //注意不能和上面的重复
				let chinaData;
				chinaData = JSON.parse(res1.data);
				const chinaMapData = {name:'中国',confirm:chinaData.chinaTotal.confirm,nowConfirm:chinaData.chinaTotal.nowConfirm}
				resolve(chinaMapData);
			}
		});
	})])
}

//添加echart图表
export function addChart(dom,option){
	let myChart = echarts.init(dom);
	myChart.setOption(option);
	window.addEventListener("resize", function() {
	  myChart.resize();
	});
	return myChart;
}