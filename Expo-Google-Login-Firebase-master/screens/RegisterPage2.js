
const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },]

import React, { Component } from 'react';
import {   StyleSheet,ActivityIndicator,StatusBar,ScrollView } from 'react-native';
import firebase from 'firebase';
import {  ThemeProvider,SocialIcon ,Image, Header,ButtonGroup,Text,Card,ListItem,Icon} from 'react-native-elements';
import { Button,Container,View,Item, Input, Footer,DatePicker,Picker,Content,Left, Body, Right,Thumbnail } from 'native-base';
import { LinearGradient } from 'expo'
import { grey } from 'ansi-colors';
import Checkbox from 'react-native-modest-checkbox'
import { Col, Row, Grid } from "react-native-easy-grid";





class DashboardScreen extends Component {

  constructor(props) {

    super(props)
      this.state={user:'',selectedIndex: 2,selected: 'key0'}
      this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }


  onValueChange(value) {
    this.setState({
      selected: value
    });
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
    const buttons = ['Male', 'Female']
    const { selectedIndex } = this.state
    return (
      
     
      <Container>
      <Container>
      <StatusBar barStyle = "dark-content" hidden = {false}  translucent = {true}/>

          <View 
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",}}
                  >
                  <Image
                      source={ require('../assets/allstarsred.png') }
                      style={{margin:20,
                                          height:37,width:37 }}
                    />
                  {/* <Icon
                      name='md-arrow-round-back' 
                      style={{
                        fontSize:14,
                        marginTop:34,
                        marginLeft:17}}
                      /> */}
                  <Image
                      source={ require('../assets/img_bg_header.png') }
                      style={{alignSelf: 'flex-end' }}
                    />  
          </View>
            {/* <Header
              placement="left"
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'Dashboard Screen', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
            />
              <Container style={styles.container}>
                  <Text style={{textAlign:"center"}}>
                      {this.state.user.displayName}
                  </Text> 
                  <Image
                    source={{ uri: this.state.user.photoURL}}
                    style={{ width: 200, height: 200}}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                  <Button 
                      title="Sign out" 
                      onPress={() => firebase.auth().signOut()} />
              </Container> */}
                
              <ScrollView 
              behaviour = "height"
              keyboardVerticalOffset = {64}
              style= {{  flex: 1,}}>

              

                <Text 
                  style={{
                    color:'#9c9c9c',
                    marginTop:20,
                    marginLeft:20,
                    fontSize:13}}>
                   1 of 2
                 </Text>
                 <Text 
                      style={{fontSize:14,
                              fontWeight:'bold',
                              marginStart:20,
                              marginTop:5}}>
                      Price Per Campaign
                 </Text>
                 <Text style={{fontSize:12,
                              marginStart:20,
                              marginTop:5}}>
                              You’ll need to set your price for services you want to cater on selected campaign.
                 </Text>

                 <View
                style={{height:20}}
                >

                </View>


                <Card>
                <Image source={require('../assets/ig.png')} 
                               style={{position:'relative', marginTop:-40,alignSelf:'flex-end',height:55,width:55}}
                     />
                    <Text style={{marginBottom: 10}}>
                        Instagram <Text style={{color:'gray'}}>@Ghiffary</Text>    
                    </Text>
                    <View
                        style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: '0.5',
                            marginTop :20,
                            marginBottom: 20
                        }}
                        />

                    <Checkbox
                    checked='true'
                    label='Instagram Post'
                    onChange={(checked) => console.log('Checked!')}/>

                    <View
                        style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.5,
                            marginTop :20,
                            marginBottom: 20

                        }}
                        />

                    <Checkbox
                    
                    label='Instagram Photo'
                    onChange={(checked) => console.log('Checked!')}/>
                <View
                        style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: '0.5',
                            marginTop :20,
                            marginBottom: 20
                        }}
                        />

                    <Checkbox
                    // checked='false'
                    label='Instagram Video'
                    onChange={(checked) => console.log('Checked!')}/>
                <View
                        style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: '0.5',
                            marginTop :20,
                            marginBottom: 20
                        }}
                        />

                    <Checkbox
                    // checked='false'
                    label='Instagram Tv'
                    onChange={(checked) => console.log('Checked!')}/>
                    
                    
                    
                    
                </Card>

                <View
                style={{height:20}}
                >

                </View>

                
                <Card>
                <Image source={require('../assets/facebook.png')} 
                               style={{position:'relative', marginTop:-40,alignSelf:'flex-end',height:55,width:55}}
                     />
                    <Text style={{marginBottom: 10}}>
                        Facebook 
                        {/* <Text style={{color:'gray'}}>@Ghiffary</Text>     */}
                    </Text>
                    <Text style={{color:'gray'}}>
                    You need to connect your account before setting up your pricing.
                    </Text>

                    <Button block rounded style={{marginTop:15}}>
                        <Text style={{color:'white'}}>Connect Facebook</Text>
                    </Button>

                    
                    
                </Card>

                <View
                style={{height:20}}
                >

                </View>

                
                <Card>
                <Image source={require('../assets/twitter.png')} 
                               style={{position:'relative', marginTop:-40,alignSelf:'flex-end',height:55,width:55}}
                     />
                    <Text style={{marginBottom: 10}}>
                        Twitter 
                        {/* <Text style={{color:'gray'}}>@Ghiffary</Text>     */}
                    </Text>
                    <Text style={{color:'gray'}}>
                    You need to connect your account before setting up your pricing.
                    </Text>
                    <Button block rounded info style={{marginTop:15}}>
                        <Text style={{color:'white'}}>Connect Twitter</Text>
                    </Button>

                    
                    
                </Card>

                <View
                style={{height:20}}
                >

                </View>

                
                <Card>
                <Image source={require('../assets/youtube.png')} 
                               style={{position:'relative', marginTop:-40,alignSelf:'flex-end',height:55,width:55}}
                     />
                    <Text style={{marginBottom: 10}}>
                        Youtube 
                        {/* <Text style={{color:'gray'}}>@Ghiffary</Text>     */}
                    </Text>
                    <Text style={{color:'gray'}}>
                    You need to connect your account before setting up your pricing.
                    </Text>
                    <Button block rounded danger style={{marginTop:15}}>
                        <Text style={{color:'white'}}>Connect Youtube</Text>
                    </Button>

                    
                    
                </Card>


          </ScrollView>
          </Container>
          
          
      <Footer>
      <LinearGradient
        onPress= {() => this.props.navigation.navigate('CheckEmailPage')}
        colors={['#FF786F', '#FF0B52']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}    
        style={styles.text}>

        <Text 
        onPress= {() => this.props.navigation.navigate('CheckEmailPage')}
        style={{color:'white', fontSize:14}}>Next</Text>
        {/* <Icon 
        onPress= {() => this.props.navigation.navigate('RegisterPage2')}
        style={{color:'white', marginStart: 10, fontSize:14}} name='md-arrow-round-forward'/> */}
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
  container: {
    flex: 1,
    margin:10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
    container2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        marginLeft:15,
        marginRight:15
    },
    buttonContainer: {
        flex: 0,
        margin:5
    }

});

