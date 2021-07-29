import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Dummy from './src/components/Dummy'

export class App extends Component {

  state = {
    Notes: [{
        NotesData: 'Write',
        placeholder: 'type'

    }]
  }




  onAddhandler = ()=> {
      let {Notes} = this.state
      Notes.push({NotesData: 'New Notes'})
      this.setState({Notes})

      
  }

  onDeletehandler = (index) => {
    let {Notes} = this.state
    Notes.splice(index, 1)
    this.setState({Notes})
  }

  
  

  render() {
    return (
      <View style={styles.control}>
        <FlatList
         
         keyExtractor = {(item, index)=> index.toString()}
         data = {this.state.Notes}
         renderItem = {({item}) => <Dummy Add={ this.onAddhandler} 
                                          Delete={this.onDeletehandler} 
                                         
                                           />}
         
        />
        
        {/* {this.state.Notes.map((Notes, index) => <Dummy Add={ this.onAddhandler} Delete={this.onDeletehandler}  index = {index}/>)} */}
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({

  control: {
    flex: 1,

  }
})
