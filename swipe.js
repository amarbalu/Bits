import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';

class Swipe extends Component {
    
    renderCardItem = (item) => {
        if (!this.props.data.length) {
           return this.props.renderNoMoreCards();
        } 
        return (
           <View key={item.newsId}>
             {this.props.renderCard(item)}
           </View>
         );
       };
     

  renderCards = () => {
    return this.props.data.map(this.renderCardItem);
  };

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};

export default Swipe;