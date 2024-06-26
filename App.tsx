import React, {useEffect} from 'react';
import AppNav from './src/navigation/AppNav';
import codePush from 'react-native-code-push';

function App() {
  useEffect(() => {
    codePush.sync();
  }, []);

  return <AppNav />;
}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
})(App);

// REACT NATIVE
// https://reactnative.dev/docs/environment-setup?guide=native

// NAVIGATION
// https://reactnavigation.org/docs/getting-started

// ICON
// https://github.com/moonrailgun/rn-icons?tab=readme-ov-file
// https://react-icons.github.io/react-icons/icons/bs/

// AXIOS
// https://www.npmjs.com/package/react-native-axios

// DROPDOWN
// https://www.npmjs.com/package/react-native-element-dropdown

// BOTTOM SHEET
// https://ui.gorhom.dev/components/bottom-sheet/usage
