import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class ResourcesScreen extends React.Component {
  static navigationOptions = {
    title: 'Resources',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {}
        <ExpoLinksView/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
