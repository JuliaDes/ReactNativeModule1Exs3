import { SteleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'row'  }}>
      <View style={{ flex: 1, backgroundColor: 'green' }}>
      </View>
      <View style={{ flex: 2, backgroundColor: 'red' }}>
      </View>
      <View style={{ flex: 3, backgroundColor: 'blue' }}>
      </View>
    </View>
  );
}
