import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, ThemeProvider,SocialIcon ,Image} from 'react-native-elements';
import { Footer, Container,Header,Content} from 'native-base';



class LoginScreen extends Component {
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
  onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInAndRetrieveDataWithCredential(credential)
            .then(function(result) {
              console.log('user signed in ');
              if (result.additionalUserInfo.isNewUser) {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .set({
                    gmail: result.user.email,
                    profile_picture: result.additionalUserInfo.profile.picture,
                    first_name: result.additionalUserInfo.profile.given_name,
                    last_name: result.additionalUserInfo.profile.family_name,
                    created_at: Date.now()
                  })
                  .then(function(snapshot) {
                    // console.log('Snapshot', snapshot);
                  });
              } else {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .update({
                    last_logged_in: Date.now()
                  });
              }
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log('User already signed-in Firebase.');
        }
      }.bind(this)
    );
  };
  signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '506979177321-cjpridbn48fvhav56eaqsf7dfudlp1g8.apps.googleusercontent.com',
        behavior: 'web',
        iosClientId: '506979177321-j7aav6c5tlaqkcd4illvqpsqo4jlhn9e.apps.googleusercontent.com', //enter ios client id
        scopes: ['profile', 'email']
      });

      if (result.type === 'success') {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
  render() {
    return (
      //
      <Container>
        <Image
            source={ require('../assets/img_login_1.png') }
            style={{ width: '100%', height: 200 }}
          />
        {/* <Header /> */}
        <Container style={styles.container}>
        
        <SocialIcon
                title="Sign In With Instagram"
                button
                raised={false}
                type='instagram'
                // onPress={() => this.signInWithGoogleAsync()}
                
          />
          <SocialIcon
                title="Sign In With Facebook"
                button
                raised={false}
                type='facebook'
                // onPress={() => this.signInWithGoogleAsync()}
                
          />
          <SocialIcon
                title="Sign In With Twitter"
                button
                raised={false}
                type='twitter'
                // onPress={() => this.signInWithGoogleAsync()}
                
          />
        <SocialIcon
                title="Sign In With Google"
                button
                raised={false}
                type='google-plus-official'
                onPress={() => this.signInWithGoogleAsync()}
                
          />
        
          
        </Container>
        
          
          </Container>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10,
    // alignItems: 'center',
    justifyContent: 'center'
  }
});
