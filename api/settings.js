var settings = {};

try {
    settings = require("./secret_settings");
} catch (e) {
    settings = {};
}

settings.cache_timeout = 60 * 60 * 1000;
settings.leanpub_key = settings.leanpub_key || process.env.LEANPUB_KEY;
settings.leanpub_slug = settings.leanpub_slug || process.env.LEANPUB_SLUG;

module.exports = settings;
