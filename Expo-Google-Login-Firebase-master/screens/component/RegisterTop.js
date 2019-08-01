import React, { Component } from 'react';
import { View, Text, StyleSheet,ActivityIndicator,StatusBar } from 'react-native';
import firebase from 'firebase';
import { Button, ThemeProvider,SocialIcon ,Image, Header} from 'react-native-elements';
import { Container,Icon } from 'native-base';

export default class RegisterTop extends React.Component {
  render() {
    return (
        <Container style={{
                  flexDirection: "row",
                  justifyContent: "space-between",}}>
                <Icon
                      name='md-arrow-round-back' 
                      style={{
                        marginTop:34,
                        marginLeft:17}}
                      />
                <Image
                      source={ require('../../assets/img_bg_header.png') }
                      style={{alignSelf: 'flex-end' }}
                    />
              
          </Container>
    );
  }
}


