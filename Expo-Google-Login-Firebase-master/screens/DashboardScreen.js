import React, { Component } from 'react';
import { View, Text, StyleSheet,ActivityIndicator, StatusBar,ScrollView } from 'react-native';
import firebase from 'firebase';
import { Button, ThemeProvider,SocialIcon ,Image, Header} from 'react-native-elements';
import { Container ,Content, Icon, Picker, Form, } from 'native-base';
import SearchBar from '../components/searchBar'
import Card from '../components/Card'
import DropdownMenu from 'react-native-dropdown-menu';



class DashboardScreen extends Component {

  constructor(props) {

    super(props)
      this.state={user:'',text: ''}
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
  onValueChange(value: "string") {
    this.setState({
      selected: value
    });
  }



  render() {
    var data = [["Media", "Java", "JavaScript", "PHP"], ["Sort by", "Ruby"],];
    return (
      <Container>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
        <Header
          placement="center"
          // leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent= {
          <Image source={ require('../assets/logo_dark.png') }
                      style={{alignSelf: 'center',
                              marginTop:'10%'}}
          /> }
          // rightComponent={{ icon: 'home', color: '#fff' }}
          containerStyle={{
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
  }}
        />
        <SearchBar/>
        {/* <View style={{flex: 1}}> */}
        <DropdownMenu
          style={{flex:1 }}
          bgColor={'#FFFFFF'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          // arrowImg={}      
          // checkImage={}   
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}} 
          // maxHeight={300} 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >
         <View style={{flex: 1, zIndex:0}}>
         <ScrollView>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </ScrollView>
          </View>
        </DropdownMenu>

       
          {/* <Container style={styles.container}>
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
          {/* </View> */}
      </Container>
    );
  }
}
export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10,
    // alignItems: 'center',
    justifyContent: 'center'
  }
});