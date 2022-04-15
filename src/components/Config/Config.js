/* eslint-disable no-console */
import React, { useState } from 'react';
import get from 'lodash/get';
import startCase from 'lodash/startCase';
import Form from '@rjsf/core';
import styled from 'styled-components';

import { useConfigContext } from '../../contexts/config';

const fields = [
  'NAME',
  'BIO',
  'GITHUB',
  'TWITTER',
  'INSTAGRAM',
  'FACEBOOK',
  'LINKED_IN',
  'YOUTUBE',
  'DISCORD',
  'TWITCH',
  'PRODUCT_HUNT',
  'SNAPCHAT',
  'SPOTIFY',
  'REDDIT',
  'MEDIUM',
  'PINTEREST',
  'TIKTOK',
  'EMAIL',
  'EMAIL_TEXT',
  'EMAIL_ALT',
  'EMAIL_ALT_TEXT',
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
  'FOOTER',
  'WHATSAPP',
  'STRAVA',
  'BUYMEACOFFEE',
  'GITLAB',
  'PATREON',
  'DEVTO',
  'UMAMI_APP_URL',
  'BUTTON_ORDER',
  'PAYPAL',
  'SLACK',
  'STACKOVERFLOW',
  'LASTFM',
  'GITEA',
  'POLYWORK',
  'SIGNAL',
  'UNTAPPD',
  'BUTTON_TARGET',
  'CUSTOM_BUTTON_TEXT',
  'CUSTOM_BUTTON_URL',
  'CUSTOM_BUTTON_COLOR',
  'CUSTOM_BUTTON_TEXT_COLOR',
  'CUSTOM_BUTTON_ALT_TEXT',
  'CUSTOM_BUTTON_NAME',
  'CUSTOM_BUTTON_ICON',
  'GHOST',
];

export default function Config() {
  const { config, update, publish } = useConfigContext();
  const [formData, setFormData] = useState(config || {});

  const schema = {
    title: 'Tiny Linktree Config',
    description: 'Customize your linktree page',
    type: 'object',
    properties: fields.reduce((acc, field) => {
      acc[field] = { type: 'string', title: startCase(field.toLowerCase()), default: get(config, field, '') };
      return acc;
    }, {}),
  };

  const onSubmit = () => update(formData);
  const onPublish = () => publish();
  const onCancel = () => (window.location.href = '/'); // eslint-disable-line

  return (
    <Div>
      <Form schema={schema} formData={formData} onChange={(e) => setFormData(e.formData)}>
        <div className="form-actions">
          <div className="btn btn-default" onClick={onCancel}>
            Cancel
          </div>
          <div className="btn btn-success" onClick={onPublish}>
            Publish
          </div>
          <div className="btn btn-primary" onClick={onSubmit}>
            Save
          </div>
        </div>
      </Form>
    </Div>
  );
}

const Div = styled.div`
  background: #fff;
  color: #555;
  padding: 24px;

  .control-label {
    font-size: 16px;
    font-weight: 500;
  }

  .form-actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .btn {
      margin-right: 16px;
    }
  }
`;
