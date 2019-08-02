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
                <View style={{
                  alignContent:'center',
                  flexDirection: "row",
                  marginTop:50,
                  marginStart:20,
                  marginEnd:20,}}> 
                  <Image
                      source={ require('../assets/Checkbox.png') }
                      style={{alignSelf: 'center',
                              
                              height:36,
                              width:36}}
                    /> 

                <View>
                    <Text style={{
                                fontSize:20,
                                marginStart:'8%',
                                marginEnd:'10.94%',}}>
                    Congratulations. Your account
                    </Text>
                    <Text style={{
                                fontSize:20,
                                marginStart:'8%',
                                marginEnd:'10.94%',}}>
                     has been verified. 
                    </Text>
                    <Text style={{
                                fontStyle:'italic',
                                fontSize:15,
                                marginStart:'8%',
                                marginEnd:'10.94%',
                                marginTop:'2%',
                                }}>
                    To increase the security of your account,
                    </Text>
                    <Text style={{
                                fontStyle:'italic',
                                fontSize:15,
                                marginStart:'8%',
                                marginEnd:'10.94%',
                                marginBottom:'6%'
                                }}>
                    please set a password.
                    </Text>
                </View>
                </View>
                {/* <Text style={{alignSelf: 'center',
                              fontSize:20}}>
                successfully created.
                </Text> */}
                <View
                    style={{
                        borderBottomColor: '#E1E8EE',
                        borderBottomWidth: 1,
                        marginEnd:'5%',
                        marginStart:'5%',
                        marginTop:'8%'
                    }}
                    />
                <Text style={{fontSize:13,
                              marginStart:20,
                              marginTop:30}}>
                   Password
                </Text>
                    <Item 
                        rounded 
                        style={{
                          backgroundColor:'#F0F0F0',
                          borderColor:'#F0F0F0',
                          marginStart:20,
                          marginEnd:20,
                          marginTop:10,
                          height:40}}>

                          <Input 
                            style={{marginLeft:20,
                                    fontSize:12}}
                            placeholder='Type password here'/>
                    </Item>
                <Text style={{
                        fontStyle:'italic',
                        fontSize:12,
                        color:'#E1E8EE',
                        marginStart:'8%',
                        marginEnd:'10.94%',
                        marginTop:'2%',
                            }}>
                    Your password should contain uppercase, lowercase, number, and symbol with min. 8 characters.
                </Text>
                <Text style={{fontSize:13,
                              marginStart:20,
                              marginTop:30}}>
                   Confirm Password
                </Text>
                    <Item 
                        rounded 
                        style={{
                          backgroundColor:'#F0F0F0',
                          borderColor:'#F0F0F0',
                          marginStart:20,
                          marginEnd:20,
                          marginTop:10,
                          height:40}}>

                          <Input 
                            style={{marginLeft:20,
                                    fontSize:12}}
                            placeholder='Retype password here'/>
                    </Item>

               
                </View>
            </Content>

         
      </Container>
      <Footer>
      <LinearGradient
        onPress= {() => this.props.navigation.navigate('SetPasswordSuccess')}
        colors={['#FF786F', '#FF0B52']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}    
        style={styles.text}>

        <Text 
        onPress= {() => this.props.navigation.navigate('SetPasswordSuccess')}
        style={{color:'white', fontSize:14}}>Submit</Text>
        
      </LinearGradient>
      </Footer>
          
      
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

