import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid,
    ListView,
    Platform,
    BackHandler,
    ToolbarAndroid,
    ViewPagerAndroid,
} from 'react-native';

import MenuList from './MenuList';
import TitleBar from './view/TitleBar';
import HomeView from './view/HomeView';
import MusicView from './view/MusicView';
import FriendView from './view/FriendView';

export default class CustomViewPager extends Component {

    // 构造默认状态
    constructor() {
        super();
        this.state = {
            isMenuOpen: false,
            tabIndex: 0,
        }
    }

    //当页面切换时候执行
    onPageScroll(e) {
        console.log('e=' + e.nativeEvent.offset);
    }

    onPageScrollStateChanged(state) {
        console.log('state=' + state);
    }

    onPageSelected(e) {
        console.log('page=' + e.nativeEvent.position);
        this.setState({
            tabIndex: e.nativeEvent.position,
        })
    }

    /**
     定义menu回调方法 position 下标
     **/
    onMenuItem(position) {
        alert(position);
    }

    /**
     点击下标(1,2,3,4,5)
     **/
    onSelectItem(position) {
        switch (position){
            case 1:
                this.refs.drawer.openDrawer();
                break;
            case 2:
                this.setState({tabIndex:0});
                this.refs.ViewPager.setPage(0);
                break;
            case 3:
                this.setState({tabIndex:1});
                this.refs.ViewPager.setPage(1);
                break;
            case 4:
                this.setState({tabIndex:2});
                // 切换没有动画 setPageWithoutAnimation
                this.refs.ViewPager.setPageWithoutAnimation(2);
                break;
            case 5:
                break;
            default:
                break;
        }
    }

    render() {
        //这里可以理解为传入的是onSelectItem的引用，至于参数则由真正的调用者传递
        var navigationView = (
            <MenuList
                onMenuItem={this.onMenuItem.bind(this)}/>
        );

        return (
            <DrawerLayoutAndroid
                ref='drawer'
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => navigationView}
                onDrawerOpen={() => this.setState({isMenuOpen: true})}
                onDrawerClose={() => this.setState({isMenuOpen: false})}>
                <View style={{flex: 1}}>
                    <TitleBar
                        onSelectItem={this.onSelectItem.bind(this)}
                        onCurrentIndex={this.state.tabIndex}/>

                    <ViewPagerAndroid
                        ref='ViewPager'
                        style={{flex: 1}}
                        onPageScroll={this.onPageScroll}
                        onPageScrollStateChanged={this.onPageScrollStateChanged}
                        onPageSelected={this.onPageSelected.bind(this)}>
                        <HomeView/>
                        <MusicView/>
                        <FriendView/>
                    </ViewPagerAndroid>
                </View>


            </DrawerLayoutAndroid>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});