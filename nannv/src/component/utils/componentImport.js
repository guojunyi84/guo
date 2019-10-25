import React from 'react';
import Loadable from 'react-loadable';

//通过的过场组件
const loadingComponent=()=>{
  return(
    <div>loading</div>
  )
}
//过场组件默认采用通用的,若传入了loading,则采用传入的过场组件
//抛出的是一个函数 函数里指向的组件
export default (loader,loading=loadingComponent)=>{
  return Loadable({
    loader,
    loading
  })
}