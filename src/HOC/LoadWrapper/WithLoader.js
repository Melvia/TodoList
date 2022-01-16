import React from "react";
import Loader from "./../../components/Loader/Loader";

const withLoader = (Component, loading) => {
  console.log(Component);
  return class WithLoader extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
       isLoading: loading
    };
  };
  


    render() {
      console.log({...this.props}); 
      return loading ? <Component {...this.props} /> : <Loader />;
    }
  };
};

export default withLoader;
