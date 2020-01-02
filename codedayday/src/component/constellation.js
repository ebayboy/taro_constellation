
import Taro, { Component } from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import './constellation.less'

import 白羊座 from '../public/白羊座.jpg'
import 金牛座 from '../public/金牛座.jpg'
import 双子座 from '../public/双子座.jpg'
import 巨蟹座 from '../public/巨蟹座.jpg'
import 狮子座 from '../public/狮子座.jpg'
import 处女座 from '../public/处女座.jpg'
import 天秤座 from '../public/天秤座.jpg'
import 天蝎座 from '../public/天蝎座.jpg'
import 射手座 from '../public/射手座.jpg'
import 摩羯座 from '../public/摩羯座.jpg'
import 水瓶座 from '../public/水瓶座.jpg'
import 双鱼座 from '../public/双鱼座.jpg'

class Constellation extends Component {

	//跳转页面
	onTap(name) 
	{
		//跳转到目的页面， 打开新页面

		Taro.navigateTo({ url:'/pages/constellation/detail?constellation=' + name })
	}

	render () {
		const show = [
			{key:'白羊座',value:白羊座},
			{key:'金牛座',value:金牛座},
			{key:'双子座',value:双子座},
			{key:'巨蟹座',value:巨蟹座},
			{key:'狮子座',value:狮子座},
			{key:'处女座',value:处女座},
			{key:'天秤座',value:天秤座},
			{key:'天蝎座',value:天蝎座},
			{key:'射手座',value:射手座},
			{key:'摩羯座',value:摩羯座},
			{key:'水瓶座',value:水瓶座},
			{key:'双鱼座',value:双鱼座} 
		]
		let status = show.map((item) => {
			return (
				<View class='item' onClick={this.onTap.bind(this, item.key)} >
					<View class='viewItem'>
						<Image src={item.value} class='constellationPic' />
					</View>
				</View>
			)
		})
		return (
			<View>
				{status}
			</View>
		)
	}
}

