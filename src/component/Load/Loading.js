import React from 'react';

function Loading(Component) {
    return function withLoadingAnyCom({TryLoading,DimData}){
    // console.log(TryLoading,DimData);
    if(TryLoading){
        return(
            <p> Loading.......</p>
        )
    }
    else{
        return(
            <Component data={DimData} />
        )
    }

  }
}

export default Loading;