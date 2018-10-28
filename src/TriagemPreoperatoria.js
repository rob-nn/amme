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

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  textPadding: {
      marginLeft: 10,
      marginRight: 10,
  },
});

class TriagemPreOperatoria extends React.Component {
    constructor (props) {
        super(props)
        const { classes } = this.props;
        this.classes = classes;
    }

    state = {
        abaixo64Anos: false
    }
    handleChange = event => {
        this.setState({ value: event.target.value });
      };
    render = () => {
        return (
            <div>
                <h2>HOSPITAL REGIONAL DO GAMA (HRG)</h2>
                <h2>UNIDADE DE ANESTESIOLOGIA E MEDICINA PERIOPERATÓRIA (UAMP)</h2>
                <h2>AMBULATÓRIO MULTIDISCIPLINAR DE AVALIAÇÃO PERIOPERATÓRIA - (APA)</h2>
                <h2>TRIAGEM PRÉ-OPERATÓRIA</h2>

                <h3>RESPONDA AS PERGUNTAS</h3>
                <Grid container className={this.classes.root} spacing={16}>

                    <Grid item xs={12} md={4}> 
                        Qual(is) cirurgia(s)/procedimento(s) você irá fazer:
                    </Grid>

                    <Grid item xs={12} md={8} >
                        <TextField
                            id="q1"
                            label=""
                            placeholder="Placeholder"
                            multiline
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={4}> 
                    Sua idade está:  
                    </Grid>
                    <Grid item xs={8} >
                        <RadioGroup style={{display: 'flex', flexDirection: 'row'}}>
                                    <FormControlLabel value="0" control={<Radio />} label="Abaixo de 64 anos" />
                                    <FormControlLabel value="1" control={<Radio />} label="Acima de 64 anos" />
                        </RadioGroup>
                    </Grid>

                </Grid>
                <Perguntas classes={this.classes}/>
                <ResultadoTriagem classes={this.classes} />
            </div>
        )
    }
}

const ResultadoTriagem = (props) => {
    return (
        <Grid container className={props.classes.root} spacing={16}>
            <Grid item xs={4}> 
                Resultado da Triagem: encaminhado à GRCA para:
            </Grid>
            <Grid item xs={8} >
                <RadioGroup style={{display: 'flex', flexDirection: 'row'}}>
                    <FormControlLabel value="0" control={<Radio />} label="Baixo Risco" />
                    <FormControlLabel value="1" control={<Radio />} label="Alto Risco" />
                </RadioGroup>
            </Grid>
        </Grid>
    )
}

const Perguntas = (props) => {
    const listaPerguntas = [
        'Você tem pressão alta (hipertensão arterial)?',
        'Você tem diabetes?',
        'Você tem arritimia (no coração)?',
        'Você tem problemas no coração (inchaço, sopro, infarto...)?',
        'Você tem enfisema ou bronquite?',
        'Você tem asma?',
        'Você tem doenças do sangue (hemofilia, anemia falciforme, problemas de coagulação...)?',
        'Você é portador de problema psiquiátrico?',
        'Você tem câncer em tratamento ou já fez tratamento de cancer no passado?',
        'No caso de mulher, você teve ou tem gravidez com qualquer uma das doenças acima?',
        'Você é portador de necessidade especial?',
        'Você já teve trombose?',
        'Você tem alergia comprovada ou em tratamento (a alimentos, a comida...)?',
        'Você já teve complicações durante uma cirugia/anestesia que você já tenha feito?'
    ];
    return (
        <div>
            <h3>PEGUNTA xxxx</h3>
            <Grid container className={props.classes.root} spacing={16}>
                {
                    listaPerguntas.map(item => <Pergunta pergunta={item} classes={props.classes} />)
                }
            </Grid>
        </div>
    )
}

const Pergunta = (props) => {
    return ([
        <Grid item xs={1} />,
        <Grid item xs={6} style={{textAlign: 'left'}}>
            {props.pergunta}
        </Grid>,
        <Grid item xs={4}>
            <RadioGroup style={{display: 'flex', flexDirection: 'row'}}>
                <FormControlLabel value="0" control={<Radio />} label="Sim" />
                <FormControlLabel value="1" control={<Radio />} label="Não"/>
            </RadioGroup>
        </Grid>,
        <Grid item xs={1} />
    ])
}

export default withStyles(styles)(TriagemPreOperatoria);