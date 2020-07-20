const assert = require('assert');
const ua = require('..');


function parse007ac9Crawler() {
  var a = ua.parse('Mozilla/5.0 (compatible; 007ac9 Crawler; http://crawler.007ac9.net/)');
  assert.equal('Mozilla/5.0', a.compatible);
  // assert.equal('007ac9 Crawler', a.code);
  // assert.equal('http://crawler.007ac9.net/', a.url);
}

function parseGooglebot() {
  var i0 = 'Googlebot-Image/1.0';
  var i1 = 'Mozilla/5.0 (Windows NT 5.1; rv:11.0) Gecko Firefox/11.0 (via ggpht.com GoogleImageProxy)';
  var a = ua.parse(i0);
  assert.equal('Googlebot-Image/1.0', a.code);
  var a = ua.parse(i1);
}

function parseBing() {
  var p0 = ' Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (KHTML, like Gecko) BingPreview/1.0b';
}

function parseYahoo() {
  var m0 = 'YahooMailProxy; https://help.yahoo.com/kb/yahoo-mail-proxy-SLN28749.html';
  var s0 = 'Mozilla/5.0 (compatible; Yahoo! Slurp/3.0; http://help.yahoo.com/help/us/ysearch/slurp)';
  var a = ua.parse(m0);
  var a = ua.parse(s0);
}

function parseFacebook() {
  var f0 = 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)';
  var a = ua.parse(f0);
}

function parseNagios() {
  var h0 = 'check_http/v2.2.1 (nagios-plugins 2.2.1)';
  var h1 = 'check_http/v2.2.1.git (nagios-plugins 2.2.1)';
  var a = ua.parse(h0);
  var a = ua.parse(h1);
}

function parseMisc() {
  var h0 = 'Hobbit bbtest-net/4.3.0-0.beta2';
  var h1 = 'HWCDN/GFS v1.80.995-4.38.2369.el7 CDS/DA2';
  var l0 = 'LogicMonitor SiteMonitor/1.0';
  var p0 = 'Pingdom.com_bot_version_1.4_(http://www.pingdom.com/)';
  var q0 = 'Mozilla/5.0 (compatible; Qwantify/2.4w; +https://www.qwant.com/)/2.4w';
  var r0 = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.90 Safari/537.36 RuxitSynthetic/1.0';
  var s0 = 'Mozilla/5.0 (compatible; SemrushBot/1.1~bl; +http://www.semrush.com/bot.html)';
  var s1 = 'Mozilla/5.0 (compatible; spbot/5.0.3; +http://OpenLinkProfiler.org/bot )';
  var u0 = 'Mozilla/5.0+(compatible; UptimeRobot/2.0; http://www.uptimerobot.com/)';
  var x0 = 'Xymon xymonnet/4.3.17';
  var a = ua.parse(h0);
  assert.equal('Hobbit bbtest-net/4.3.0-0.beta2', a.code);
  var a = ua.parse(h1);
  assert.equal('HWCDN/GFS/1.80.995-4.38.2369.el7', a.code);
  var a = ua.parse(l0);
  assert.equal('LogicMonitor SiteMonitor/1.0', a.code);
  var a = ua.parse(p0);
  assert.equal('Pingdom.com_bot/1.4',a.code);
  assert.equal('http://www.pingdom.com/', a.url);
  var a = ua.parse(q0);
  var a = ua.parse(s0);
  var a = ua.parse(s1);
  var a = ua.parse(u0);
  var a = ua.parse(x0);
  assert.equal('Xymon xymonnet/4.3.17', a.code);
}

function parseApache() {
  var a0 = 'Apache/2.4.7 (Unix) OpenSSL/1.0.1e PHP/5.4.22 mod_perl/2.0.8-dev Perl/v5.16.3 (internal dummy connection)';
  var a = ua.parse(a0);
}

function parseSoftware() {
  parse007ac9Crawler();
}
module.exports = parseSoftware;
