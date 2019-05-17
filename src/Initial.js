import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApi } from './redux/action'

class Inital extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getApiResponse: '',
    }
  }
  componentDidMount() {
    this.props.getApi();
  }
  static getDerivedStateFromProps(props, state) {
    if (props.getApiResponse && props.getApiResponse !== state.getApiResponse) {
      return {
        getApiResponse: props.getApiResponse
      }
    }
    return null;
  }
  render() {
    const { getApiResponse } = this.state;
    return (
      <>
        {getApiResponse.email}
      </>
    )
  }
}
const mapDispatchToProps = {
  getApi,
}
const mapStateToProps = (state) => {
  return {
    getApiResponse: state.reducers.getApiResponse
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Inital);