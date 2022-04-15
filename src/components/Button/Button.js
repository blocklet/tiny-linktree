/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import { string, number, object } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { trackGoogleEvent } from '../../analytics/google';
import { trackUmamiEvent } from '../../analytics/umami';
import { trackMatomoEvent } from '../../analytics/matomo';

import { useConfigContext } from '../../contexts/config';

function Button(props) {
  const { config } = useConfigContext();

  const { name, href, displayName, logo, styles, alt, icon } = props;

  const handleClick = () => {
    const eventName = `${name}-button`;

    if (config?.GA_TRACKING_ID) {
      trackGoogleEvent(eventName);
    }
    if (config?.UMAMI_WEBSITE_ID && config?.UMAMI_APP_URL) {
      trackUmamiEvent(eventName);
    }
    if (config?.MATOMO_SITE_ID && config?.MATOMO_URL) {
      trackMatomoEvent(eventName);
    }
  };

  return (
    <a
      className={styles ? 'button' : `button button-${name}`}
      href={href}
      target={config?.BUTTON_TARGET || '_blank'}
      rel="noopener noreferrer"
      onClick={handleClick}
      style={styles}
      title={alt || displayName}>
      {logo && <img className="icon" src={logo} alt={`${displayName} logo`} />}
      {icon && <FontAwesomeIcon className="icon" icon={icon.split(' ')} />}
      {displayName}
    </a>
  );
}

export default memo(Button);

Button.propType = {
  src: string.isRequired,
  alt: string.isRequired,
  displayName: string.isRequired,
  href: string.isRequired,
  name: string.isRequired,
  order: number.isRequired,
  logo: string,
  icon: string,
  styles: object,
};
