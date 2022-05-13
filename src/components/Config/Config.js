/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import get from 'lodash/get';
import startCase from 'lodash/startCase';
import Form from '@rjsf/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useConfigContext } from '../../contexts/config';

export default function Config() {
  const { config, fields, update, publish } = useConfigContext();
  const [formData, setFormData] = useState(config || {});
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      setTimeout(() => setMessage(''), 3000);
    }
  }, [message]);

  const schema = {
    // title: 'Tiny LinkHub Config',
    description: 'Customize your LinkHub page',
    type: 'object',
    properties: fields.reduce((acc, field) => {
      acc[field] = { type: 'string', title: startCase(field.toLowerCase()), default: get(config, field, '') };
      return acc;
    }, {}),
  };

  const onSubmit = async () => {
    try {
      await update(formData);
      setMessage('Config updated successfully');
    } catch (err) {
      setMessage(err.message);
    }
  };
  const onPublish = async () => {
    try {
      await publish();
      setMessage('Config published successfully');
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <Div>
      <Form schema={schema} formData={formData} onChange={(e) => setFormData(e.formData)}>
        <div className="form-actions">
          <div className="btn btn-primary" onClick={onSubmit}>
            Save
          </div>
          {get(config, 'status') === 'draft' && (
            <div className="btn btn-success" onClick={onPublish}>
              Publish
            </div>
          )}
          <Link className="btn btn-default" to="/">
            Preview
          </Link>
          {!!message && <span className="alert alert-info">{message}</span>}
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
