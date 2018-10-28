import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto'
import MainAppBarr from './MainAppBar'
import MainMenuDrawer from './MainMenuDrawer'

import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import QuestionarioPreAnestesico from './QuestionarioPreAnestesico'
import TriagemPreoperatoria from './TriagemPreoperatoria'

class App extends Component {
  state = {
    drawerOpened: false,
    open: false
  }

  handleClose = () => {
    this.setState({open: false})
  }

  toggleDrawer = () => () => {
    console.log("toggleDrawer" + this.state.drawerOpened);
    this.setState ({drawerOpened: !this.state.drawerOpened});
  }

  forms = [
    {
      key: 'QUESTIONARIO_PRE_ANESTESICO',
      component: QuestionarioPreAnestesico
    },
    {
      key: 'TRIAGEM_PRE_OPERATORIA',
      component: TriagemPreoperatoria
    }
  ]

  openForm = (formKey) => {
    const form = this.forms.find(form=>form.key === formKey)
    if (form) {

    } else {
      this.setState({open: true, formKey: formKey})
    }
  }

  showFormularioInvalido = () => {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Formulário não encontrado!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            O formulário {this.state.formKey} não foi encontrado.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog> 
    )
  }
  render() {
    return (
      <div className="App">
        <MainAppBarr toggleDrawer={this.toggleDrawer} />
        <MainMenuDrawer opened={this.state.drawerOpened} toggleDrawer={this.toggleDrawer} openForm={this.openForm} />
        {this.showFormularioInvalido()}
        <TriagemPreoperatoria />
      </div>
    );
  }
}

export default App;
