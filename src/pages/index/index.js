import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtAvatar, AtFab } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>hello</Text>
        <AtButton type='primary'>按钮文案</AtButton>
        <AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
        <AtAvatar text='凹凸实验室'></AtAvatar>
        <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
        <AtAvatar circle text='凹凸实验室'></AtAvatar>
        <AtFab>
  <Text className='at-fab__icon at-icon at-icon-menu'></Text>
</AtFab>
      </View>
    )
  }
}
