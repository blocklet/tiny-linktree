/* eslint-disable import/no-cycle */
import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Center from '@arcblock/ux/lib/Center';
import Spinner from '@arcblock/ux/lib/Spinner';
import useAsync from 'react-use/lib/useAsync';

import api from '../libs/api';
import { useSessionContext } from './session';

const ConfigContext = createContext({});
const { Provider, Consumer } = ConfigContext;

function ConfigProvider({ children }) {
  const [config, setConfig] = useState(undefined);
  const { session } = useSessionContext();

  const load = async () => {
    const { data } = await api.get('/api/config');
    setConfig(data);
    return data;
  };

  const update = async (body) => {
    body.AVATAR = session.user.avatar;
    body.NAME = body.NAME || session.user.fullName;
    body.EMAIL = body.EMAIL || session.user.email;

    const { data } = await api.post('/api/config', body);
    setConfig(data);
  };

  const publish = async () => {
    const { data } = await api.post('/api/config', { status: 'published' });
    setConfig(data);
  };

  const state = useAsync(load, []);

  if (state.loading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  return <Provider value={{ config, update, publish }}>{children}</Provider>;
}

ConfigProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

ConfigProvider.defaultProps = {};

function useConfigContext() {
  const result = useContext(ConfigContext);
  return result;
}

export { ConfigContext, ConfigProvider, Consumer as ConfigConsumer, useConfigContext };
