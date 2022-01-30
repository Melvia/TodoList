import React from "react";
import Loader from "./../../components/Loader/Loader";



const withLoader = (WrappedComponent, loading) => {
  class HOC extends React.Component {
    render() {
      return loading ? <Loader /> : <WrappedComponent {...this.props}  /> ;
    }
  }    
  return HOC;
};

export default withLoader;
