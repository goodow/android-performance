import React, {Component} from 'react';
import {
    FlatList,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
} from 'react-native';
import constantData from './data/searchtest.json'; 
export default class ViewPager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listData: this.getData(0),
            myindex: 1,
        };
    }

    getData(index) {
        return constantData['listData'];
    }
    
    // 
    renderItem({item, index}) {
        return <View style={styles.listItem}>
            
            <View style={styles.image}>
                <Image source={{uri:item.url}} style={styles.image} resizeMode='stretch'></Image>
            </View>
            <View style={styles.text}>
                <Text >{item.title}</Text>
            </View>
        </View>;
    }

    render() {
        return (
            <View style={styles.view}>
                <FlatList
                    data={this.state.listData}
                    renderItem={this.renderItem}
                    onEndReached={()=>{
                        if(this.state.myindex<2){
                      // 到达底部，加载更多列表项
                      this.setState({
                        listData: this.state.listData.concat(this.getData(this.state.myindex)),
                        myindex:this.state.myindex+1

                      });
                      }
                      console.log("onEndReached=" + this.state.listData.length);
                }}
                    refreshing={false}
                    onRefresh={() => {

                            this.setState({
                            listData: this.getData(0),
                            myindex:1,
                          });

                     console.log("onRefresh=" + this.state.listData.length);
                    }}
                    debug={true}
                    numColumns={1}

                    getItemLayout={(data, index) => (
                    // 120 是被渲染 item 的高度 ITEM_HEIGHT。
                    console.log("index="+index),
                    {length: itemHeight, offset: itemHeight * index, index}
                )}
                    ListFooterComponent={this.footerView}
                    onScroll={this._scrollSinkY}
                />
            </View>
        )
    }

    footerView() {

        return <View style={{flex:1,height:70,justifyContent:'center',alignItems:'center'}}>
            <Text>上啦加载更多</Text>
        </View>

    }
}

const itemHeight = 336;
const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    listItem: {
        flexDirection: 'column',
        flex: 1,
        height: itemHeight,
        borderBottomWidth: 1,
        borderBottomColor: 'red'
    },
    image: {
        height: 236,
        width: 420,
    },
    text: {
        height: 100,
        width: 420,
    },

});

AppRegistry.registerComponent("ReactNativePerformanceApp", () => ViewPager);