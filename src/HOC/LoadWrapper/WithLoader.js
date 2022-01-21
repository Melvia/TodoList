import React from "react";
import Loader from "./../../components/Loader/Loader";


const withLoader = (WrappedComponent, loading) => {
  const HOC = (props) => {
      return loading ? <WrappedComponent {...props}  /> : <Loader />;    
  }    
  return HOC;
};

export default withLoader;