/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, FlatList} from 'react-native';
import Header from './src/component/Header/index';
import PostItem from './src/component/PostItem/index';

const App: () => React$Node = () => {
  const postData = [
    {
      id: 1,
      name: 'Nam Phan',
      url_image:
        'https://dicham.com/wp-content/uploads/2017/10/kinh-nghiem-du-lich-ha-giang2.jpg',
      url_user:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/cp0/p86x86/44088725_911043585767209_7723583901066592256_o.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=rJp932c205cAX8Mhxu1&_nc_ht=scontent.fhan2-1.fna&oh=7fc7a3314f87778e2d23b59afd6a31dd&oe=5F2FBAC2',
    },
    {
      id: 2,
      name: 'Trang Nguyễn',
      url_image:
        'https://hellothucung.com/wp-content/uploads/2019/06/gia-cho-corgi-2.jpg',
      url_user:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/s320x320/84413707_2428489100588351_844350665852452864_n.jpg?_nc_cat=103&_nc_sid=7206a8&_nc_ohc=NWhUoNdPcZoAX_Qp1-g&_nc_ht=scontent.fhan2-1.fna&_nc_tp=7&oh=1dbe21826c4972881b144bbf97aca677&oe=5F2E71BC',
    },
    {
      id: 3,
      name: 'Nhung Cát',
      url_image:
        'https://dicham.com/wp-content/uploads/2017/10/kinh-nghiem-du-lich-ha-giang2.jpg',
      url_user:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/p320x320/88173941_656709411771544_4238198724678909952_n.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=2-v_8FL8RiMAX_rSiVD&_nc_ht=scontent.fhan2-1.fna&_nc_tp=6&oh=76011902147144d123772c2879d59663&oe=5F307256',
    },
    {
      id: 4,
      name: 'Trang Nguyễn',
      url_image:
        'https://images.vov.vn/w720/uploaded/cizotokek8ly8uzveukg/2016_11_20/2_edee.jpg',
      url_user:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/s320x320/84413707_2428489100588351_844350665852452864_n.jpg?_nc_cat=103&_nc_sid=7206a8&_nc_ohc=NWhUoNdPcZoAX_Qp1-g&_nc_ht=scontent.fhan2-1.fna&_nc_tp=7&oh=1dbe21826c4972881b144bbf97aca677&oe=5F2E71BC',
    },
    {
      id: 5,
      name: 'Nhung Cát',
      url_image:
        'https://media.travelmag.vn/files/thuannguyen/2020/04/27/dao-ngoc-phu-quoc-3-1740.jpeg',
      url_user:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/p320x320/88173941_656709411771544_4238198724678909952_n.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=2-v_8FL8RiMAX_rSiVD&_nc_ht=scontent.fhan2-1.fna&_nc_tp=6&oh=76011902147144d123772c2879d59663&oe=5F307256',
    },
  ];
  const renderItem = ({item}) => {
    return <PostItem item={item} />;
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        <FlatList
          data={postData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
