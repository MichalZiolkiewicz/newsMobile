/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const App: () => React$Node = () => {
  // const news = useSelector((state) => state?.news.newsData.data);
  const news1 = useSelector(({news: {newsData}}) => newsData.data);

  const oneInfo = news1.map((item) => {
    return (
      <View key={item.id}>
        <Text>
          {item.name} | {item.author}
        </Text>
        <Text>{item.desc}</Text>
      </View>
    );
  });

  return (
    <View>
      <Text>Siema</Text>
      {news1 && oneInfo}
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
