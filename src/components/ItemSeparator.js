import React from 'react'
import {View} from 'react-native'

export default props => {
   return (
      //Item Separator
      <View style={{height: props.height, width: props.width , backgroundColor: props.backgroundColor}}/>
    );
}