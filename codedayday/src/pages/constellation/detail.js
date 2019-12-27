
import Taro, { Component } from '@tarojs/taro'
import './detail.scss'

export default class detail extends Component {
	state = {
		constellation: {},
		allNum : 0, 
		healthNum: 0, 
		loveNum: 0,
		moneyNum: 0,
		workNum: 0
	}

	config: Config = {
		navigationBarTitleText: '详情'
	}

	componentWillMount () {}

	render () {
		return (
			<View class='page'> 
			</View>
		)
	}
}

