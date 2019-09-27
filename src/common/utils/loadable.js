// import React from 'react';
import Loadable from 'react-loadable';

// loading过场组件
import Loading from '../../components/loading/loading'


//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (component,loading = Loading)=>{
    return Loadable({
        loader:component,
        loading:loading
    })
}