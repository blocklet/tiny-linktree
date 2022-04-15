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

const fields = [
  'NAME',
  'BIO',
  'FOOTER',

  'EMAIL',
  'EMAIL_TEXT',
  'EMAIL_ALT',
  'EMAIL_ALT_TEXT',

  'TWITTER',
  'INSTAGRAM',
  'FACEBOOK',
  'LINKED_IN',
  'YOUTUBE',
  'GITHUB',
  'GITLAB',
  'DISCORD',
  'TWITCH',
  'PRODUCT_HUNT',
  'SNAPCHAT',
  'SPOTIFY',
  'REDDIT',
  'MEDIUM',
  'PINTEREST',
  'TIKTOK',

  'SOUND_CLOUD',
  'FIGMA',
  'KIT',
  'TELEGRAM',
  'TUMBLR',
  'STEAM',
  'VIMEO',
  'WORDPRESS',
  'GOODREADS',
  'SKOOB',
  'LETTERBOXD',
  'MASTODON',
  'MICRO_BLOG',
  'WHATSAPP',
  'STRAVA',
  'BUYMEACOFFEE',
  'PATREON',
  'DEVTO',
  'UMAMI_APP_URL',
  'PAYPAL',
  'SLACK',
  'STACKOVERFLOW',
  'LASTFM',
  'GITEA',
  'POLYWORK',
  'SIGNAL',
  'UNTAPPD',
  'GHOST',

  'CUSTOM_BUTTON_TEXT',
  'CUSTOM_BUTTON_URL',
  'CUSTOM_BUTTON_COLOR',
  'CUSTOM_BUTTON_TEXT_COLOR',
  'CUSTOM_BUTTON_ALT_TEXT',
  'CUSTOM_BUTTON_NAME',
  'CUSTOM_BUTTON_ICON',

  'BUTTON_ORDER',
  'BUTTON_TARGET',
];

function ConfigProvider({ children }) {
  const [config, setConfig] = useState(undefined);
  const { session } = useSessionContext();

  const load = async () => {
    const { data } = await api.get('/api/config');
    setConfig(data);
    return data;
  };

  const update = async (body) => {
    const defaults = {
      AVATAR: session.user.avatar,
      NAME: body.NAME || session.user.fullName,
      EMAIL: body.EMAIL || session.user.email,
    };

    const { data } = await api.post('/api/config', {
      ...defaults,
      ...fields.reduce((acc, key) => {
        acc[key] = body[key] || '';
        return acc;
      }, {}),
    });
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

  return <Provider value={{ config, fields, update, publish }}>{children}</Provider>;
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
