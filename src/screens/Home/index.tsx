import React, {useState, useEffect} from 'react';
import {BackHandler, Text, FlatList, Alert} from 'react-native';

import {BoxSafe, Box} from '../../atomic/atoms/Spaces';

import Header from '../../atomic/atoms/Header';
import Loading from '../../atomic/atoms/Loading';
import colors from '../../atomic/constants/colors';
import {connect} from 'react-redux';

import * as equipamentsAction from '../../redux/actions/equipamentsActions';

import {isEmpty} from 'lodash';

import moment from 'moment';

import CardEquipaments from '../../atomic/molecules/CardEquipaments';

function Home({
  navigation,
  _getEquipaments,
  darkMode,
  dataEquipaments
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
    _getEquipaments()
  }, []);

  //render item
  const renderItem = ({item}) => {
    const {
      name
    } = item;

    return (
      <CardEquipaments
        navigation={navigation}
        title={name}
      />
    );
  };

  return (
    <>
      <Header backButton={false} title="CHECKLIST" navigation={navigation} />
      <BoxSafe>
  
        <Box pr={8} pl={8} pt={8} bg={darkMode ? '' : colors.white}>
          {dataEquipaments.isLoading ? (
            <Loading name={'spinner'} size={30} color={colors.gold}></Loading>
          ) : (
            <>
              
              <FlatList
                data={dataEquipaments.data}
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
                //onEndReached={() => onEndFlatList()}
                onEndReachedThreshold={0.01}
              />
            </>
          )}
        </Box>
      </BoxSafe>
    </>
  );
}

const mapStateToProps = (state) => ({
  dataEquipaments: state.equipamentsReducer,
  darkMode: state.appReducer.darkMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    _getEquipaments: () => {
      dispatch(equipamentsAction.EquipamentsRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
