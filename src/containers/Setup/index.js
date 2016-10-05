// @flow
import React from 'react';
import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Style from './Setup.css';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import Input from '../../components/Input';
import { setDevice } from '../../actions/rfid';
import { login } from '../../actions/auth';
import { fetchSystem } from '../../actions/system';
import { addNotification } from '../../actions/notification';

type State = {
  token: string,
  loading: boolean,
  rfid: string
};

type Props = {
  token: string,
  push: () => void,
  location: Object,
  setDevice: () => void,
  fetchSystem: () => Promise<*>,
  addNotification: () => void,
  login: () => void
};

class SetupContainer extends React.Component {

  state: State = {
    token: '',
    loading: false,
    rfid: ''
  };

  componentDidMount() {
    if (this.props.token.length > 0 && !this.props.location.query.presist) {
      this.props.push('/launch');
    }
  }

  onSave() {
    this.setState({ loading: true });
    this.props.setDevice(this.state.rfid);
    this.props.login(this.state.token);
    this.props.fetchSystem()
      .then(() => {
        this.props.push('/launch');
        this.setState({ loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
        this.props.addNotification({
          title: 'Invalid token!',
          level: 'warning',
          message: 'The specified token was either expired or invalid.'
        });
      });
  }

  props: Props;

  render() {
    return (
      <div className={Style.setupContainer}>
        <h1 className={Style.header}>AbaCash</h1>
        <h6 className={Style.subHeader}>setup</h6>

        <div className={Style.inputContainer}>
          <Input
            placeholder='API token'
            onSubmit={() => this.onSave()}
            value={this.state.token}
            onChange={(token) => this.setState({ token })}
          />
        </div>

        <div className={Style.inputContainer}>
          <Dropdown
            placeholder='Select RFID device'
            nullValue='No RFID device'
            options={fromJS([])}
            onChange={(rfid) => this.setState({ rfid })}
          />
        </div>

        <Button loading={this.state.loading} confirm onClick={() => this.onSave()} label='Lagre' />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  token: store.auth.get('token')
});

const mapDispatchToProps = {
  login,
  fetchSystem,
  setDevice,
  addNotification,
  push
};

export default connect(mapStateToProps, mapDispatchToProps)(SetupContainer);
