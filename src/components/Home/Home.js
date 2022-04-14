/* eslint-disable react/no-array-index-key */
/* eslint-disable unicorn/filename-case */
import React, { memo, useEffect } from 'react';

import Config from '../Config/Config';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import githubLogo from '../../icons/github.svg';
import instagramLogo from '../../icons/instagram.svg';
import kitLogo from '../../icons/kit.svg';
import tiktokLogo from '../../icons/tiktok.svg';
import twitchLogo from '../../icons/twitch.svg';
import twitterLogo from '../../icons/twitter.svg';
import discordLogo from '../../icons/discord.svg';
import youtubeLogo from '../../icons/youtube.svg';
import facebookLogo from '../../icons/facebook.svg';
import messengerLogo from '../../icons/messenger.svg';
import linkedinLogo from '../../icons/linkedin.svg';
import producthuntLogo from '../../icons/producthunt.svg';
import snapchatLogo from '../../icons/snapchat.svg';
import spotifyLogo from '../../icons/spotify.svg';
import redditLogo from '../../icons/reddit.svg';
import mediumLogo from '../../icons/medium.svg';
import pinterestLogo from '../../icons/pinterest.svg';
import soundcloudLogo from '../../icons/soundcloud.svg';
import figmaLogo from '../../icons/figma.svg';
import telegramLogo from '../../icons/telegram.svg';
import tumblrLogo from '../../icons/tumblr.svg';
import steamLogo from '../../icons/steam.svg';
import vimeoLogo from '../../icons/vimeo.svg';
import wordpressLogo from '../../icons/wordpress.svg';
import goodreadsLogo from '../../icons/goodreads.svg';
import skoobLogo from '../../icons/skoob.svg';
import letterboxdLogo from '../../icons/letterboxd.svg';
import mastodonLogo from '../../icons/mastodon.svg';
import microblogLogo from '../../icons/microblog.svg';
import emailLogo from '../../icons/email.svg';
import emailAltLogo from '../../icons/email_alt.svg';
import whatsappLogo from '../../icons/whatsapp.svg';
import stravaLogo from '../../icons/strava.svg';
import buyMeACoffeeLogo from '../../icons/buymeacoffee.svg';
import gitlabLogo from '../../icons/gitlab.svg';
import patreonLogo from '../../icons/patreon.svg';
import devtoLogo from '../../icons/devto.svg';
import Sort from '../Sort/Sort';
import paypalLogo from '../../icons/paypal.svg';
import slackLogo from '../../icons/slack.svg';
import stackoverflowLogo from '../../icons/stackoverflow.svg';
import lastfmLogo from '../../icons/lastfm.svg';
import giteaLogo from '../../icons/gitea.svg';
import polyworkLogo from '../../icons/polywork.svg';
import signalLogo from '../../icons/signal.svg';
import untappdLogo from '../../icons/untappd.svg';
import instantGamingLogo from '../../icons/instantgaming.svg';
import ghostLogo from '../../icons/ghost.svg';

import { useConfigContext } from '../../contexts/config';
import { useSessionContext } from '../../contexts/session';

function Home() {
  const { config } = useConfigContext();
  const { session } = useSessionContext();

  useEffect(() => {
    // FIXME: if the user is not owner?
    if (!config && !session.user) {
      session.login();
    }
  }, []);

  if (!config) {
    if (!session.user) {
      return null;
    }

    return <Config />;
  }

  let order = [];
  if (config?.BUTTON_ORDER) {
    order = config.BUTTON_ORDER.split(',').reverse();
  }

  const buttonOrder = (button) => {
    return order.indexOf(button);
  };

  const renderCustomButtons = () => {
    const names = config.CUSTOM_BUTTON_NAME?.split(',');
    const urls = config.CUSTOM_BUTTON_URL?.split(',');
    const altTexts = config.CUSTOM_BUTTON_ALT_TEXT?.split(',');
    const texts = config.CUSTOM_BUTTON_TEXT?.split(',');
    const buttonColors = config.CUSTOM_BUTTON_COLOR?.split(',');
    const textColors = config.CUSTOM_BUTTON_TEXT_COLOR?.split(',');
    const icons = config.CUSTOM_BUTTON_ICON?.split(',');
    // have to clean up some of the strings to standardize for analytics

    return texts.map((t, i) => {
      // do not try to render button unless it has all of the required props
      return (
        <div key={i} order={buttonOrder(names[i]?.trim())}>
          {names &&
            names[i] &&
            urls &&
            urls[i] &&
            texts &&
            texts[i] &&
            buttonColors &&
            buttonColors[i] &&
            textColors &&
            textColors[i] &&
            altTexts &&
            altTexts[i] && (
              <Button
                name={names[i]?.trim().toLowerCase()}
                href={urls[i]?.trim()}
                displayName={texts[i]?.trim()}
                styles={{
                  backgroundColor: buttonColors[i]?.trim(),
                  color: textColors[i]?.trim(),
                }}
                alt={altTexts[i]?.trim()}
                icon={icons && icons[i]?.trim()}
              />
            )}
        </div>
      );
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column" style={{ marginTop: '12%' }}>
            <Avatar src={config.AVATAR_URL} srcSet={config.AVATAR_2X_URL} alt={config.AVATAR_ALT} />
            <h1>{`${config.NAME}`}</h1>
            <p>{config.BIO}</p>
            <Sort>
              {config.CUSTOM_BUTTON_TEXT && renderCustomButtons()}
              {config.YOUTUBE && (
                <Button
                  name="youtube"
                  href={config.YOUTUBE}
                  displayName="YouTube"
                  logo={youtubeLogo}
                  order={buttonOrder('YOUTUBE')}
                />
              )}
              {config.TWITCH && (
                <Button
                  name="twitch"
                  href={config.TWITCH}
                  displayName="Twitch"
                  logo={twitchLogo}
                  order={buttonOrder('TWITCH')}
                />
              )}
              {config.TWITTER && (
                <Button
                  name="twitter"
                  href={config.TWITTER}
                  displayName="Twitter"
                  logo={twitterLogo}
                  order={buttonOrder('TWITTER')}
                />
              )}
              {config.INSTAGRAM && (
                <Button
                  name="instagram"
                  href={config.INSTAGRAM}
                  displayName="Instagram"
                  logo={instagramLogo}
                  order={buttonOrder('INSTAGRAM')}
                />
              )}
              {config.GITHUB && (
                <Button
                  name="github"
                  href={config.GITHUB}
                  displayName="GitHub"
                  logo={githubLogo}
                  order={buttonOrder('GITHUB')}
                />
              )}

              {config.DISCORD && (
                <Button
                  name="discord"
                  href={config.DISCORD}
                  displayName="Discord"
                  logo={discordLogo}
                  order={buttonOrder('DISCORD')}
                />
              )}

              {config.TIKTOK && (
                <Button
                  name="tiktok"
                  href={config.TIKTOK}
                  displayName="TikTok"
                  logo={tiktokLogo}
                  order={buttonOrder('TIKTOK')}
                />
              )}
              {config.FACEBOOK && (
                <Button
                  name="facebook"
                  href={config.FACEBOOK}
                  displayName="Facebook"
                  logo={facebookLogo}
                  order={buttonOrder('FACEBOOK')}
                />
              )}
              {config.FACEBOOK_MESSENGER && (
                <Button
                  name="facebookmessenger"
                  href={config.FACEBOOK_MESSENGER}
                  displayName="Messenger"
                  logo={messengerLogo}
                  order={buttonOrder('FACEBOOK_MESSENGER')}
                />
              )}
              {config.LINKED_IN && (
                <Button
                  name="linkedin"
                  href={config.LINKED_IN}
                  displayName="ConfigedIn"
                  logo={linkedinLogo}
                  order={buttonOrder('LINKED_IN')}
                />
              )}
              {config.PRODUCT_HUNT && (
                <Button
                  name="producthunt"
                  href={config.PRODUCT_HUNT}
                  displayName="Product Hunt"
                  logo={producthuntLogo}
                  order={buttonOrder('PRODUCT_HUNT')}
                />
              )}
              {config.SNAPCHAT && (
                <Button
                  name="snapchat"
                  href={config.SNAPCHAT}
                  displayName="SnapChat"
                  logo={snapchatLogo}
                  order={buttonOrder('SNAPCHAT')}
                />
              )}
              {config.SPOTIFY && (
                <Button
                  name="spotify"
                  href={config.SPOTIFY}
                  displayName="Spotify"
                  logo={spotifyLogo}
                  order={buttonOrder('SPOTIFY')}
                />
              )}
              {config.REDDIT && (
                <Button
                  name="reddit"
                  href={config.REDDIT}
                  displayName="Reddit"
                  logo={redditLogo}
                  order={buttonOrder('REDDIT')}
                />
              )}
              {config.MEDIUM && (
                <Button
                  name="medium"
                  href={config.MEDIUM}
                  displayName="Medium"
                  logo={mediumLogo}
                  order={buttonOrder('MEDIUM')}
                />
              )}
              {config.PINTEREST && (
                <Button
                  name="pinterest"
                  href={config.PINTEREST}
                  displayName="Pinterest"
                  logo={pinterestLogo}
                  order={buttonOrder('PINTEREST')}
                />
              )}
              {config.EMAIL && (
                <Button
                  name="default"
                  href={`mailto:${config.EMAIL}`}
                  displayName={config.EMAIL_TEXT}
                  logo={emailLogo}
                  order={buttonOrder('EMAIL')}
                />
              )}

              {config.EMAIL_ALT && (
                <Button
                  name="default"
                  href={`mailto:${config.EMAIL_ALT}`}
                  displayName={config.EMAIL_ALT_TEXT}
                  logo={emailAltLogo}
                  order={buttonOrder('EMAIL_ALT')}
                />
              )}

              {config.SOUND_CLOUD && (
                <Button
                  name="soundcloud"
                  href={config.SOUND_CLOUD}
                  displayName="SoundCloud"
                  logo={soundcloudLogo}
                  order={buttonOrder('SOUND_CLOUD')}
                />
              )}
              {config.FIGMA && (
                <Button
                  name="figma"
                  href={config.FIGMA}
                  displayName="Figma"
                  logo={figmaLogo}
                  order={buttonOrder('FIGMA')}
                />
              )}

              {config.TELEGRAM && (
                <Button
                  name="telegram"
                  href={config.TELEGRAM}
                  displayName="Telegram"
                  logo={telegramLogo}
                  order={buttonOrder('TELEGRAM')}
                />
              )}

              {config.TUMBLR && (
                <Button
                  name="tumblr"
                  href={config.TUMBLR}
                  displayName="Tumblr"
                  logo={tumblrLogo}
                  order={buttonOrder('TUMBLR')}
                />
              )}
              {config.STEAM && (
                <Button
                  name="steam"
                  href={config.STEAM}
                  displayName="Steam"
                  logo={steamLogo}
                  order={buttonOrder('STEAM')}
                />
              )}

              {config.VIMEO && (
                <Button
                  name="vimeo"
                  href={config.VIMEO}
                  displayName="Vimeo"
                  logo={vimeoLogo}
                  order={buttonOrder('VIMEO')}
                />
              )}
              {config.WORDPRESS && (
                <Button
                  name="wordpress"
                  href={config.WORDPRESS}
                  displayName="Wordpress"
                  logo={wordpressLogo}
                  order={buttonOrder('WORDPRESS')}
                />
              )}
              {config.GOODREADS && (
                <Button
                  name="goodreads"
                  href={config.GOODREADS}
                  displayName="Goodreads"
                  logo={goodreadsLogo}
                  order={buttonOrder('GOODREADS')}
                />
              )}
              {config.SKOOB && (
                <Button
                  name="skoob"
                  href={config.SKOOB}
                  displayName="Skoob"
                  logo={skoobLogo}
                  order={buttonOrder('SKOOB')}
                />
              )}
              {config.LETTERBOXD && (
                <Button
                  name="letterboxd"
                  href={config.LETTERBOXD}
                  displayName="LetterBoxd"
                  logo={letterboxdLogo}
                  order={buttonOrder('LETTERBOXD')}
                />
              )}
              {config.MASTODON && (
                <Button
                  name="mastodon"
                  href={config.MASTODON}
                  displayName="Mastodon"
                  logo={mastodonLogo}
                  order={buttonOrder('MASTODON')}
                />
              )}
              {config.MICRO_BLOG && (
                <Button
                  name="microblog"
                  href={config.MICRO_BLOG}
                  displayName="Microblog"
                  logo={microblogLogo}
                  order={buttonOrder('MICRO_BLOG')}
                />
              )}
              {config.WHATSAPP && (
                <Button
                  name="whatsapp"
                  href={config.WHATSAPP}
                  displayName="WhatsApp"
                  logo={whatsappLogo}
                  order={buttonOrder('WHATSAPP')}
                />
              )}
              {config.KIT && (
                <Button name="kit" href={config.KIT} displayName="Kit" logo={kitLogo} order={buttonOrder('KIT')} />
              )}
              {config.STRAVA && (
                <Button
                  name="strava"
                  href={config.STRAVA}
                  displayName="Strava"
                  logo={stravaLogo}
                  order={buttonOrder('STRAVA')}
                />
              )}
              {config.BUYMEACOFFEE && (
                <Button
                  name="buymeacoffee"
                  href={config.BUYMEACOFFEE}
                  displayName="Buy Me a Coffee"
                  logo={buyMeACoffeeLogo}
                  order={buttonOrder('BUYMEACOFFEE')}
                />
              )}
              {config.GITLAB && (
                <Button
                  name="gitlab"
                  href={config.GITLAB}
                  displayName="GitLab"
                  logo={gitlabLogo}
                  order={buttonOrder('GITLAB')}
                />
              )}
              {config.PATREON && (
                <Button
                  name="patreon"
                  href={config.PATREON}
                  displayName="Patreon"
                  logo={patreonLogo}
                  order={buttonOrder('PATREON')}
                />
              )}
              {config.DEVTO && (
                <Button
                  name="devto"
                  href={config.DEVTO}
                  displayName="Dev.to"
                  logo={devtoLogo}
                  order={buttonOrder('DEVTO')}
                />
              )}
              {config.PAYPAL && (
                <Button
                  name="paypal"
                  href={config.PAYPAL}
                  displayName="Paypal"
                  logo={paypalLogo}
                  order={buttonOrder('PAYPAL')}
                />
              )}
              {config.SLACK && (
                <Button
                  name="slack"
                  href={config.SLACK}
                  displayName="Slack"
                  logo={slackLogo}
                  order={buttonOrder('SLACK')}
                />
              )}
              {config.STACKOVERFLOW && (
                <Button
                  name="stackoverflow"
                  href={config.STACKOVERFLOW}
                  displayName="stack"
                  logo={stackoverflowLogo}
                  order={buttonOrder('STACKOVERFLOW')}
                />
              )}
              {config.LASTFM && (
                <Button
                  name="lastfm"
                  href={config.LASTFM}
                  displayName="Last.fm"
                  logo={lastfmLogo}
                  order={buttonOrder('LASTFM')}
                />
              )}
              {config.GITEA && (
                <Button
                  name="gitea"
                  href={config.GITEA}
                  displayName="Gitea"
                  logo={giteaLogo}
                  order={buttonOrder('GITEA')}
                />
              )}
              {config.POLYWORK && (
                <Button
                  name="polywork"
                  href={config.POLYWORK}
                  displayName="Polywork"
                  logo={polyworkLogo}
                  order={buttonOrder('POLYWORK')}
                />
              )}
              {config.SIGNAL && (
                <Button
                  name="signal"
                  href={config.SIGNAL}
                  displayName="Signal"
                  logo={signalLogo}
                  order={buttonOrder('SIGNAL')}
                />
              )}
              {config.UNTAPPD && (
                <Button
                  name="untappd"
                  href={config.UNTAPPD}
                  displayName="Untappd"
                  logo={untappdLogo}
                  order={buttonOrder('UNTAPPD')}
                />
              )}
              {config.INSTANTGAMING && (
                <Button
                  name="instantgaming"
                  href={config.INSTANTGAMING}
                  displayName="Instant Gaming"
                  logo={instantGamingLogo}
                  order={buttonOrder('INSTANTGAMING')}
                />
              )}
              {config.GHOST && (
                <Button
                  name="ghost"
                  href={config.GHOST}
                  displayName="ghost"
                  logo={ghostLogo}
                  order={buttonOrder('GHOST')}
                />
              )}
            </Sort>
            <div>
              <p className="footer">{config.FOOTER}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Home);
