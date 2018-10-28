import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

class QuestionarioPreAnestesico extends React.Component {

    render = () => {
        return (
            <div>
                <h2>HOSPITAL REGIONAL DO GAMA (HRG)</h2>
                <h2>UNIDADE DE ANESTESIOLOGIA E MEDICINA PERIOPERATÓRIA (UAMP)</h2>
                <h2>AMBULATÓRIO MULTIDISCIPLINAR DE AVALIAÇÃO PERIOPERATÓRIA - (APA)</h2>
                <h2>QUESTIONÁRIOI PRÉ-ANESTÉSICO</h2>

                <h3></h3>
            </div>
        )
    }
}

export default QuestionarioPreAnestesico