import React, { Component } from 'react';
import { View, Text, StyleSheet,ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import { Button, ThemeProvider,SocialIcon ,Image, Header} from 'react-native-elements';
import { Container } from 'native-base';



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
        <Header
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
          </Container>
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