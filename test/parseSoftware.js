const assert = require('assert');
const ua = require('..');


function parse007ac9Crawler() {
  var a = ua.parse('Mozilla/5.0 (compatible; 007ac9 Crawler; http://crawler.007ac9.net/)');
  assert.equal('Mozilla/5.0', a.compatible);
  // assert.equal('007ac9 Crawler', a.code);
  // assert.equal('http://crawler.007ac9.net/', a.url);
}

function parseGooglebot() {
  var a = ua.parse('Googlebot-Image/1.0');
  assert.equal('Googlebot-Image/1.0', a.code);
  var a = ua.parse('Mozilla/5.0 (Windows NT 5.1; rv:11.0) Gecko Firefox/11.0 (via ggpht.com GoogleImageProxy)');
}

function parseFacebook() {
  var a = ua.parse('facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)');
}

function parseYahoo() {
  var a = ua.parse('YahooMailProxy; https://help.yahoo.com/kb/yahoo-mail-proxy-SLN28749.html');
  var a = ua.parse('Mozilla/5.0 (compatible; Yahoo! Slurp/3.0; http://help.yahoo.com/help/us/ysearch/slurp)');
}

function parseNagios() {
  var a = ua.parse('check_http/v2.2.1 (nagios-plugins 2.2.1)');
  var a = ua.parse('check_http/v2.2.1.git (nagios-plugins 2.2.1)');
}

function parseMisc() {
  var a = ua.parse('Hobbit bbtest-net/4.3.0-0.beta2');
  assert.equal('Hobbit bbtest-net/4.3.0-0.beta2', a.code);
  var a = ua.parse('HWCDN/GFS v1.80.995-4.38.2369.el7 CDS/DA2');
  assert.equal('HWCDN/GFS/1.80.995-4.38.2369.el7', a.code);
  var a = ua.parse('LogicMonitor SiteMonitor/1.0');
  assert.equal('LogicMonitor SiteMonitor/1.0', a.code);
  var a = ua.parse('Pingdom.com_bot_version_1.4_(http://www.pingdom.com/)');
  assert.equal('Pingdom.com_bot/1.4',a.code);
  assert.equal('http://www.pingdom.com/', a.url);
  var a = ua.parse('Mozilla/5.0 (compatible; Qwantify/2.4w; +https://www.qwant.com/)/2.4w');
  var a = ua.parse('Mozilla/5.0 (compatible; SemrushBot/1.1~bl; +http://www.semrush.com/bot.html)');
  var a = ua.parse('Mozilla/5.0 (compatible; spbot/5.0.3; +http://OpenLinkProfiler.org/bot )');
  var a = ua.parse('Mozilla/5.0+(compatible; UptimeRobot/2.0; http://www.uptimerobot.com/)');
  var a = ua.parse('Xymon xymonnet/4.3.17');
  assert.equal('Xymon xymonnet/4.3.17', a.code);
}

function parseApache() {
  var a = ua.parse('Apache/2.4.7 (Unix) OpenSSL/1.0.1e PHP/5.4.22 mod_perl/2.0.8-dev Perl/v5.16.3 (internal dummy connection)');
}

// Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.90 Safari/537.36 RuxitSynthetic/1.0
// Mozilla/5.0 CK={} (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko
// Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)
// Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1; 125LA; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)
// Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.2; Win64; x64; Trident/6.0; .NET4.0E; .NET4.0C; Microsoft Outlook 15.0.5023; ms-office; MSOffice 15)
// Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt)
// Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (KHTML, like Gecko) BingPreview/1.0b


function parseSoftware() {
  parse007ac9Crawler();
}
module.exports = parseSoftware;
