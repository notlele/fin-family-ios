import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../constants/loginStyles';
import { LinearGradient } from 'expo-linear-gradient';
// import {  } from 'react-native-gesture-handler';
import { navigation, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { useInput } from '../hooks/useInput';
import { sendData } from '../hooks/sendData';
import { getCache } from '../hooks/getCache';

export default function Members(props) {
	const navigation = useNavigation();
	return null;
}
