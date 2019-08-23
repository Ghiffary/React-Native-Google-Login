import React, { Component } from 'react';
import {   StyleSheet,ActivityIndicator,StatusBar,ScrollView,TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { Button,ThemeProvider,SocialIcon ,Image, Header,ButtonGroup} from 'react-native-elements';
import { Container,Icon, Text,View,Item, Input, Footer,DatePicker,Picker,Content, } from 'native-base';
import { LinearGradient } from 'expo'
import { grey } from 'ansi-colors';



class DashboardScreen extends Component {

  constructor(props) {

    super(props)
      this.state={user:''}
  }
  


  componentDidMount(){

    var user = firebase.auth().currentUser;
    this.setState({
      user:user
    })
    var name, email, photoUrl, uid, emailVerified;
    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
                       // you have one. Use User.getToken() instead.
            console.log("123")
           console.log(user)            
    }
  }

  render() {
    return (
      
     
      <Container>
      <Container>
      <StatusBar barStyle = "dark-content" hidden = {false}  translucent = {true}/>

            <Content>
                <View>
                <Image
                      source={ require('../assets/logo_dark.png') }
                      style={{alignSelf: 'center',
                              marginTop:'10%'}}
                    />   
                <Text style={{alignSelf: 'center',
                              marginTop:'10%',
                              fontSize:20}}>
                Your password is successfully set
                </Text>
                
                <Image
                      source={ require('../assets/jempol.png') }
                      style={{alignSelf: 'center',
                              marginTop:'15%',
                              height:210,
                              width:210}}
                    />
                <Text style={{alignSelf: 'center',
                              marginTop:'10%',
                              fontSize:15,
                              marginStart:'10.94%',
                              marginEnd:'10.94%',
                              textAlign:'center',
                              marginBottom:'6%'
                              }}>
                Your password has been saved. Let’s start join campaigns on Allstars!
                </Text>
                
                    
                    <TouchableOpacity 
                                // style={{backgroundColor: "red", padding: 20}} 
                                onPress={()=> {
                                        console.log('does not work');
                                        this.props.navigation.navigate('Main')
                                                }
                    }>

                    <Image
                      
                      source={ require('../assets/ButtonCheckCampaigns.png') }
                      style={{alignSelf: 'center',
                              marginTop:'8%',
                              height:40,
                              width:280
                              }}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity 
                                // style={{backgroundColor: "red", padding: 20}} 
                                onPress={()=> {
                                        console.log('does not work cok');
                                        this.props.navigation.navigate('SetPassword')
                                                }
                    }>

                    <Image
                      
                      source={ require('../assets/ButtonEditPass.png') }
                      style={{alignSelf: 'center',
                              marginTop:'3%',
                              height:40,
                              width:280
                              }}
                    />
                    </TouchableOpacity>
                </View>
            </Content>

         
      </Container>
          
          
      
      </Container>
    );
  }
}
export default DashboardScreen;

const styles = StyleSheet.create({
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    
    height:40,
    justifyContent: 'center',
    borderRadius:40,
    marginStart:'10.94%',
    marginEnd:'10.94%',
  },
  container: {
    flex: 1,
    margin:10,
    // alignItems: 'center',
    justifyContent: 'center'
  }
});

