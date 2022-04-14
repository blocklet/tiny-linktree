const Database = require('@blocklet/sdk/lib/database');

/**
        META_TITLE: window?.env?.META_TITLE,
        META_DESCRIPTION: window?.env?.META_DESCRIPTION,
        META_AUTHOR: window?.env?.META_AUTHOR,

        LANG: window?.env?.LANG,

        GA_TRACKING_ID: window?.env?.GA_TRACKING_ID,
        UMAMI_WEBSITE_ID: window?.env?.UMAMI_WEBSITE_ID,

        THEME: window?.env?.THEME,
        NAME: window?.env?.NAME,
        BIO: window?.env?.BIO,

        GITHUB: window?.env?.GITHUB,
        TWITTER: window?.env?.TWITTER,
        INSTAGRAM: window?.env?.INSTAGRAM,
        FACEBOOK: window?.env?.FACEBOOK,
        FACEBOOK_MESSENGER: window?.env?.FACEBOOK_MESSENGER,
        LINKED_IN: window?.env?.LINKED_IN,
        YOUTUBE: window?.env?.YOUTUBE,
        DISCORD: window?.env?.DISCORD,
        TWITCH: window?.env?.TWITCH,
        PRODUCT_HUNT: window?.env?.PRODUCT_HUNT,
        SNAPCHAT: window?.env?.SNAPCHAT,
        SPOTIFY: window?.env?.SPOTIFY,
        REDDIT: window?.env?.REDDIT,
        MEDIUM: window?.env?.MEDIUM,
        PINTEREST: window?.env?.PINTEREST,
        TIKTOK: window?.env?.TIKTOK,
        EMAIL: window?.env?.EMAIL,
        EMAIL_TEXT: window?.env?.EMAIL_TEXT,
        EMAIL_ALT: window?.env?.EMAIL_ALT,
        EMAIL_ALT_TEXT: window?.env?.EMAIL_ALT_TEXT,
        SOUND_CLOUD: window?.env?.SOUND_CLOUD,
        FIGMA: window?.env?.FIGMA,
        KIT: window?.env?.KIT,
        TELEGRAM: window?.env?.TELEGRAM,
        TUMBLR: window?.env?.TUMBLR,
        STEAM: window?.env?.STEAM,
        VIMEO: window?.env?.VIMEO,
        WORDPRESS: window?.env?.WORDPRESS,
        GOODREADS: window?.env?.GOODREADS,
        SKOOB: window?.env?.SKOOB,
        LETTERBOXD: window?.env?.LETTERBOXD,
        MASTODON: window?.env?.MASTODON,
        MICRO_BLOG: window?.env?.MICRO_BLOG,
        FOOTER: window?.env?.FOOTER,
        WHATSAPP: window?.env?.WHATSAPP,
        STRAVA: window?.env?.STRAVA,
        BUYMEACOFFEE: window?.env?.BUYMEACOFFEE,
        GITLAB: window?.env?.GITLAB,
        PATREON: window?.env?.PATREON,
        DEVTO: window?.env?.DEVTO,
        UMAMI_APP_URL: window?.env?.UMAMI_APP_URL,
        BUTTON_ORDER: window?.env?.BUTTON_ORDER,
        PAYPAL: window?.env?.PAYPAL,
        SLACK: window?.env?.SLACK,

        CUSTOM_BUTTON_TEXT: window?.env?.CUSTOM_BUTTON_TEXT,
        CUSTOM_BUTTON_URL: window?.env?.CUSTOM_BUTTON_URL,
        CUSTOM_BUTTON_COLOR: window?.env?.CUSTOM_BUTTON_COLOR,
        CUSTOM_BUTTON_TEXT_COLOR: window?.env?.CUSTOM_BUTTON_TEXT_COLOR,
        CUSTOM_BUTTON_ALT_TEXT: window?.env?.CUSTOM_BUTTON_ALT_TEXT,
        CUSTOM_BUTTON_NAME: window?.env?.CUSTOM_BUTTON_NAME,
        CUSTOM_BUTTON_ICON: window?.env?.CUSTOM_BUTTON_ICON,

        STACKOVERFLOW: window?.env?.STACKOVERFLOW,
        LASTFM: window?.env?.LASTFM,
        GITEA: window?.env?.GITEA,
        POLYWORK: window?.env?.POLYWORK,
        SIGNAL: window?.env?.SIGNAL,
        UNTAPPD: window?.env?.UNTAPPD,
        BUTTON_TARGET: window?.env?.BUTTON_TARGET,
        INSTANTGAMING: window?.env?.INSTANTGAMING,

        OG_SITE_NAME: window?.env?.OG_SITE_NAME,
        OG_TITLE: window?.env?.OG_TITLE,
        OG_DESCRIPTION: window?.env?.OG_DESCRIPTION,
        OG_URL: window?.env?.OG_URL,
        OG_IMAGE: window?.env?.OG_IMAGE,
        OG_IMAGE_WIDTH: window?.env?.OG_IMAGE_WIDTH,
        OG_IMAGE_HEIGHT: window?.env?.OG_IMAGE_HEIGHT,

        TWITTER_CARD: window?.env?.TWITTER_CARD,
        TWITTER_IMAGE: window?.env?.TWITTER_IMAGE,
        TWITTER_SITE: window?.env?.TWITTER_SITE,
        TWITTER_CREATOR: window?.env?.TWITTER_CREATOR,
        GHOST: window?.env?.GHOST,

        MATOMO_URL: window?.env?.MATOMO_URL,
        MATOMO_SITE_ID: window?.env?.MATOMO_SITE_ID,
 */

class Config extends Database {
  constructor() {
    super('config');
  }
}

module.exports = new Config();
