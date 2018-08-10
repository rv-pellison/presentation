// src/js/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle, getImages, updateImageTitle } from "../actions/index";
//import { fetchImages } from '../actions/imageActions.js'
const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article)),
    updateTitle: image => dispatch(updateImageTitle(image))
  };
};
class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImgTit: this.props.selectedImg.title,
      // title: "",
      selectedImgId: this.props.selectedImg._id
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(oldProps) {
    if(this.props === oldProps) {
      return;
    }
    console.log('didreceiveprops');
    console.log(this.props.selectedImg.title);
    this.setState({selectedImgTit: this.props.selectedImg.title});
  }
  


  handleChange(event) {
    this.setState({ selectedImgTit: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { selectedImgTit, selectedImgId } = this.state;
   // const id = uuidv1();
    // this.props.addArticle({ selectedImgTit, selectedImgId });
    this.props.updateTitle({selectedImgTit, selectedImgId})
    // this.setState({ title: "" });
  }
  render() {
    const { selectedImgTit, selectedImgId } = this.state;
    console.log('render title');
    console.log(selectedImgTit);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id={selectedImgId}
            value={selectedImgTit}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;