import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ShowAll from '../components/ShowAll';
import Header from '../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import { getCategories } from '../redux/MainApi';
import ItemStatus from '../RenderItem/ItemStatus';
const AllProduct = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const useAppSelector = useSelector;
  const appState = useAppSelector((state) => state.app);

  const fetchCategories = async () => {
    try {
      dispatch(getCategories());
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCategories();
    return () => { }
  },[])
  useEffect(() => {
    if (appState.categories) {
      setCategories(appState.categories);
    }
  }, [appState.categories]);
  return (
    <ScrollView>
     <Header
        image = {require('../images/search-interface-symbol.png')}
        title={'Tất cả'}
        navigateTo={'Search'}
       />
    <View style={{marginHorizontal:20,backgroundColor:'white'}}>
     <ShowAll data={categories}/>
     {/* <ItemStatus categories={categories}/> */}
     
    </View>
    </ScrollView>
  )
}

export default AllProduct
