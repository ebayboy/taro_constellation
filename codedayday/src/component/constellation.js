
import Taro, { Component } from '@tarojs/taro'
import './constellation.scss'
import {View, Image} from '@tarojs/components'

class Constellation extends Component {

	//跳转页面
	onTap(name) 
	{
		console.log(name)
		//跳转到目的页面， 打开新页面

		Taro.navigateTo({ url:'/pages/constellation/detail?constellatio=' + name })
	}

	render () {
		const show = ['白羊座', '金牛座', '双子座', 
			'巨蟹座', '狮子座', '处女座', '天秤座', 
			'天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
		let status = show.map((item) => {
			let tempItem = 'http://cdn.uneedzf.com/wepyBook/constellation/' + item + '.jpg'
			return (
				<View class='item' onClick={this.onTap.bind(this, item)} >
					<View class='viewItem'>
						<Image src={tempItem} class='constellationPic' />
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
