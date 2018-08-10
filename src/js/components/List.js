// src/js/components/List.js
import React, {Component} from "react";
import { connect } from "react-redux";
import styles from '../../main.css';
import Form from './Form.js';
import { getImages } from "../actions/index";


const mapStateToProps = state => {
  return { articles: state.articles,
           images: state.image_items };
};
const mapDispatchToProps = dispatch => {
  return {
    getImages: () => dispatch(getImages())
  };
};

class ConnectedList extends Component{
  constructor(props){
    super(props);
    this.state = {
      images: props.images
    };
  }
  


  componentDidMount(){
    this.props.getImages();
  }

  render(){
    const images = this.props.images;
    const imgstyle = {
    padding: '13px',
    display: 'inline-block'

  };
    return(
      <div>
      {images.map(el => (
       <div>
         <img src= {el.img_url} style={imgstyle}/>
         <h4> {el.title} </h4>
         <Form selectedImg={el}/>
        </div>
      
      ))}
    </div> 

    );
  }
}
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;