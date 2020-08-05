/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import {Card, Button} from 'react-native-elements';
import axios from 'axios';
import {Icon} from 'react-native-elements';

const App: () => React$Node = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=abcaea57d4554c0fbc5f903521646862&page=${pageNumber}`,
      )
      .then(function (response) {
        // handle success
        const newData = response.data.articles;

        setArticles(newData);
        //
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const loadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    console.log('chay lai');
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=abcaea57d4554c0fbc5f903521646862&page=${pageNumber}`,
      )
      .then(function (response) {
        // handle success
        const newData = response.data.articles;
        console.log(newData);

        setArticles([...articles, ...newData]);
        //
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [pageNumber]);

  const renderItem = useCallback(
    (props) => {
      console.log(props);
      const {item} = props;
      return (
        <Card title={item.title} image={{uri: item.urlToImage}}>
          <View style={styles.row}>
            <Text style={styles.label}>Source</Text>
            <Text style={styles.info}>{item.source?.name}</Text>
          </View>
          <Text style={{marginBottom: 10}}>{item.content}</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Published</Text>
            <Text style={styles.info}>
              {moment(item.publishedAt).format('LLL')}
            </Text>
          </View>
          <Button icon={<Icon />} title="Read more" backgroundColor="#03A9F4" />
        </Card>
      );
    },
    [articles],
  );

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  // console.log(articles);
  // console.log(pageNumber);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Articles Count:</Text>

        <Text style={styles.info}>{articles.length}</Text>
      </View>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(_, index) => index}
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    height: 30,
    width: '100%',
    backgroundColor: 'pink',
  },
  row: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    color: 'grey',
  },
});

export default App;
