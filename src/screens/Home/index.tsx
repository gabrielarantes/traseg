import React, {useState, useEffect} from 'react';
import {BackHandler, Text, FlatList, Alert} from 'react-native';

import {BoxSafe, Box} from '../../atomic/atoms/Spaces';

import Header from '../../atomic/atoms/Header';
import Loading from '../../atomic/atoms/Loading';
import colors from '../../atomic/constants/colors';
import {connect} from 'react-redux';
import * as appAction from '../../redux/actions/appActions';
import * as equipamentsAction from '../../redux/actions/equipamentsAction';

import {isEmpty} from 'lodash';

import moment from 'moment';

import CardMovie from '../../atomic/molecules/CardMovie';
import Pagination from '../../atomic/molecules/Pagination';

function Home({
  navigation,
  _getItems,
  darkMode,
}) {

  //handling with back press
  const backAction = () => {
    Alert.alert('Ops!', 'Are you sure you want to quit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  //getting the list
  useEffect(() => {
    _getItems()
  }, []);

  //render item
  const renderItem = ({item}) => {
    const {
      title,
      poster_path,
      backdrop_path,
      id,
      release_date,
      vote_average,
      vote_count,
    } = item;

    return (
      <CardMovie
        navigation={navigation}
        title={title}
        image={poster_path}
        id={id}
        date={release_date}
        vote_average={vote_average}
        vote_count={vote_count}
      />
    );
  };

  return (
    <>
      <Header backButton={false} title="CHECKLIST" navigation={navigation} />
      <BoxSafe>
        {/* <Box pr={8} pl={8} pt={8} bg={darkMode ? '' : colors.white}>
          {dataMovies.isLoading ? (
            <Loading name={'spinner'} size={30} color={colors.gold}></Loading>
          ) : (
            <>
              <FlatList
                data={dataMovies.data.results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                onEndReached={() => onEndFlatList()}
                onEndReachedThreshold={0.01}
                numColumns={2}
              />
            </>
          )}
        </Box> */}
      </BoxSafe>
    </>
  );
}

const mapStateToProps = (state) => ({
  dataToken: state.appReducer,
  dataMovies: state.moviesReducer,
  darkMode: state.appReducer.darkMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    _getItems: () => {

    },
    _getToken: () => {
      dispatch(appAction.AppTokenRequest());
    },
    _getMovies: (data) => {
      dispatch(moviesAction.MoviesRequest(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
