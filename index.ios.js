  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   */

   'use strict';
   import React, {
     AppRegistry,
     Component,
     Image,
     StyleSheet,
     TabBarIOS,
     NavigatorIOS,
     Text,
     View,
     ListView,
   } from 'react-native';

var finance = React.createClass({
   statics: {
      title: '<TabBarIOS>',
      description: 'Tab-based navigation.'
    },

    getInitialState: function() {
      return {
        selectedTab: 'redTab',
        notifCount: 0,
        presses: 0,
      };
    },

    _renderContent: function(color: string, pageText: string) {
      return (
        <View style={[styles.tabContent, {backgroundColor: color}]}>
        </View>
      );
    },
     render: function()  {
          return (
          <TabBarIOS
              tintColor="purple"
              barTintColor="#3abeff">

              <TabBarIOS.Item
                title="Blue Tab"
                systemIcon="favorites"
                selected={this.state.selectedTab === 'purpleTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'purpleTab',
                  });
                }}>
                {this._renderContent('#FFFFFF', 'Blue Tab')}
              </TabBarIOS.Item>

              <TabBarIOS.Item
                systemIcon="history"
                badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                selected={this.state.selectedTab === 'redTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'redTab',
                    notifCount: this.state.notifCount + 1,
                  });
                }}>
                {this._renderContent('#FFFFFF', 'Red Tab')}
              </TabBarIOS.Item>

              <TabBarIOS.Item
                systemIcon="search"
                selected={this.state.selectedTab === 'greenTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'greenTab',
                    presses: this.state.presses + 1
                  });
                }}>
                {this._renderContent('#FFFFFF', 'Green Tab')}
              </TabBarIOS.Item>

              <TabBarIOS.Item
                systemIcon="contacts"
                selected={this.state.selectedTab === 'contactsTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'contactsTab',
                    presses: this.state.presses + 1
                  });
                }}>
                {this._renderContent('#FFFFFF', 'contacts Tab')}
              </TabBarIOS.Item>
           </TabBarIOS>
      );
   },
  });
    
  var styles = StyleSheet.create({
    tabContent: {
      flex: 1,
      alignItems: 'center',
    },
    tabText: {
      color: 'white',
      margin: 50,
    },
  });

  AppRegistry.registerComponent('finance', () => finance);
