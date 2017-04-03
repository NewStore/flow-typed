// @flow
import { Text, View } from 'react-native';

const A = <Text />;
const B = <View />;

// $ExpectError
const C = <Text style={'foo'} />
