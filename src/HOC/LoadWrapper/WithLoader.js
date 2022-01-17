import React from "react";
import Loader from "./../../components/Loader/Loader";



const withLoader = (WrappedComponent, loading) => {
  class HOC extends React.Component {
    render() {
      return loading ? <WrappedComponent {...this.props}  /> : <Loader />;
    }
  }    
  return HOC;
};

export default withLoader;
