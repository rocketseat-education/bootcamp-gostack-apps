import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import codePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  useEffect(() => {
    // verificar se o usuário está logado

    SplashScreen.hide();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#6633cc',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, color: '#FFF'}}>Hello World</Text>
    </View>
  );
};

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);
