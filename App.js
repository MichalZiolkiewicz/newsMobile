/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNews} from './src/store/actions';

function App() {
  const dispatch = useDispatch();

  const news = useSelector(({news}) => news.news?.articles);
  const loading = useSelector(({news}) => news.loading);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <View>
      <Text>Siema</Text>
      <View>{news && news.map((item) => <Text>{item.title}</Text>)}</View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
