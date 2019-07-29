import { Image,Alert } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper'; // 0.4.0


export default class App extends React.Component {
  render() {
    return (
        <Onboarding
        onSkip={() => this.props.navigation.navigate('LoadingScreen')}
        onDone={() => this.props.navigation.navigate('LoadingScreen')}
        bottomBarColor={'#FF004F'}
          pages={[
            {
              backgroundColor: '#FAFAFA',
              image: <Image source={require('../assets/img_onboarding_1.png')} />,
              title: 'Onboarding',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
              backgroundColor: '#FAFAFA',
              image: <Image source={require('../assets/img_onboarding_2.png')} />,
              title: 'The Title',
              subtitle: 'This is the subtitle that sumplements the title.',
            },
            {
              backgroundColor: '#FAFAFA',
              image: <Image source={require('../assets/img_onboarding_3.png')} />,
              title: 'Triangle',
              subtitle: "Beautiful, isn't it?",
            },
          ]}
        />
    );
  }
}
