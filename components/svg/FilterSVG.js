import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default function FilterSVG() {
  return (
    <View>
      <Svg
        width="25"
        height="19"
        viewBox="0 0 25 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M24.6339 0.686328C24.1458 0.198145 23.3544 0.198145 22.8661 0.686328L7.89035 15.6623L2.13391 9.90581C1.64578 9.41763 0.85437 9.41768 0.366138 9.90581C-0.122046 10.3939 -0.122046 11.1854 0.366138 11.6735L7.00647 18.3138C7.49446 18.8019 8.28645 18.8016 8.77424 18.3138L24.6339 2.4541C25.1221 1.96597 25.122 1.17451 24.6339 0.686328Z"
          fill="black"
        />
      </Svg>
    </View>
  );
}
