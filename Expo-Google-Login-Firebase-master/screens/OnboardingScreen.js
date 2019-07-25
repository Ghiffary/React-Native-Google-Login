import { Image,Alert } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper'; // 0.4.0


export default class App extends React.Component {
  render() {
    return (
        <Onboarding
        onSkip={() => this.props.navigation.navigate('LoadingScreen')}
        onDone={() => this.props.navigation.navigate('LoadingScreen')}
          pages={[
            {
              backgroundColor: '#fff',
              image: <Image source={require('../assets/circle.png')} />,
              title: 'Onboarding',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
              backgroundColor: '#fe6e58',
              image: <Image source={require('../assets/square.png')} />,
              title: 'The Title',
              subtitle: 'This is the subtitle that sumplements the title.',
            },
            {
              backgroundColor: '#999',
              image: <Image source={require('../assets/triangle.png')} />,
              title: 'Triangle',
              subtitle: "Beautiful, isn't it?",
            },
          ]}
        />
    );
  }
}
