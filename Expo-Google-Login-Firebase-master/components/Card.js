import React, {Component} from 'react';
import { SearchBar , Card, Text,Button} from 'react-native-elements';
import { View ,Content, Icon, Picker, Form, Container,} from 'native-base';
// import Listview from '../screen/home/movieList';
import { withNavigation } from 'react-navigation';
// import NavigationService from '../navigationRoute/service'


class Kartu extends Component {
  state = {
    search: '',
  };
  constructor(props) {

    super(props)

  //  Obj = new Listview();

  }
  CallFunction_1 (){

    // Obj.onFocus() ;
    // NavigationService.navigate('Searcher')

   }
  // onFocus () {
  //   // const {navigate} = this.props.navigation;
  //   // navigate('SearchPage')
    
  // }

 

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      
        <View>
     
            <Card
                // title='HELLO WORLD'
                image={require('../assets/images/campaign.png')}>
                <Text style={{marginBottom: 5, color:'#FF004F'}}>
                    Tokopedia
                </Text>
                <Text style={{marginBottom: 10}}>
                    Kejutan Belanja Untung Campaign
                </Text>
                <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>

<View style={{flex: 0, flexDirection: 'row',alignSelf:'center'}}>
                <Button
                    buttonStyle={{borderRadius: 100, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Submission Date'
                    type='clear'
                    titleStyle={{color:'black'}}
                     />
                     <Button
                    buttonStyle={{borderColor:'black',borderLeftWidth: 1,borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,}}
                    type='clear'
                    title='Earn up to'
                    titleStyle={{color:'black'}}
                     />
      </View>
                <Button
                    // icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#FF0B52'
                    buttonStyle={{borderRadius: 100,marginTop:40, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#FF0B52'}}
                    title='See campaign detail'
                     />
            </Card>
       </View>
    );
  }
}

export default withNavigation(Kartu);



