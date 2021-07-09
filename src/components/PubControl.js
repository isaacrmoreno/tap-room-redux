import React from 'react';
import NewKegForm from './NewKegForm';
import Menu from './Menu';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class PubControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleAddNewKegToMenu = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent } = newKeg;
    const action = { 
      type: 'ADD_BEER',
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleEditKegInMenu = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent } = kegToEdit;
    const action = { 
      type: 'ADD_BEER',
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
    }
    dispatch(action);
    this.setState({
      editing: false, 
      selectedKeg: null
    });
  }

  handleChangeSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegMenu[id];
    this.setState({selectedKeg: selectedKeg})
  }

  handleDeleteKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_BEER',
      id: id
    }
    dispatch(action);
    this.setState({selectedKeg: null});
  }

  handleSellPint = (id) => {
    const selectedKeg = this.state.masterKegMenu.filter(keg => keg.id === id)[0];
    if (selectedKeg.pints >= 1) {
      selectedKeg.pints--;
      this.setState({
        masterKegMenu: this.state.masterKegMenu,
        editing: false,
        selectedKeg: null
      })
    }
  }
  
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

      if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditKegInMenu}/>
      buttonText = "Return to Menu";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} 
      onClickDelete = {this.handleDeleteKeg} 
      onClickEdit = {this.handleEditClick}/>
      buttonText = "Return to Menu";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddNewKegToMenu}/>
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <Menu menu={this.props.masterKegMenu}
      onKegSelection={this.handleChangeSelectedKeg}
      onClickSellPint={this.handleSellPint}/>
      buttonText = "Add Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
} 

PubControl.propTypes = {
  masterKegMenu: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    masterKegMenu: state.masterKegMenu,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PubControl = connect(mapStateToProps)(PubControl)

export default PubControl;