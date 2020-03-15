import React from 'react';
import {View, Dimensions, TextInput, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors, Typography} from '../../styles/index';

const {width, height} = Dimensions.get('screen');

export default function RoundedInputPassword({
  placeholder,
  onChangeHandler,
  nameIcon,
  error,
  value,
}) {
  return (
    <>
      <View style={styles.container}>
        {error ? (
          <>
            <Icon
              name={nameIcon}
              type="font-awesome"
              color={Colors.STATE_ERROR}
            />
            <TextInput
              style={styles.inputError}
              placeholder={placeholder}
              onChangeText={onChangeHandler}
              secureTextEntry={true}
              value={value}
            />
          </>
        ) : (
          <>
            <Icon
              name={nameIcon}
              type="font-awesome"
              color={Colors.PRIMARY_BLUE}
            />
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              onChangeText={onChangeHandler}
              secureTextEntry={true}
              value={value}
            />
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    width: width - 60,
    marginBottom: 20,
    borderRadius: 100,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 1,
    alignSelf: 'center',
  },
  input: {
    color: Colors.PRIMARY_BLUE,
    borderRadius: 100,
    height: 70,
    marginLeft: 20,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    width: '100%',
  },
  inputError: {
    color: Colors.STATE_ERROR,
    borderRadius: 100,
    height: 70,
    marginLeft: 20,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    width: '100%',
  },
});
