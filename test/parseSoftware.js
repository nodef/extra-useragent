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

// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone11,6;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/AT&T]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone11,8;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone10,1;FBMD/iPhone;FBSN/iOS;FBSV/13.4.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPad; CPU OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPad7,5;FBMD/iPad;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/tablet;FBLC/en_US;FBOP/5;FBCR/]
// Mozilla/5.0 (iPad; CPU OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Mobile/14G60 [FBAN/FBIOS;FBDV/iPad3,4;FBMD/iPad;FBSN/iOS;FBSV/10.3.3;FBSS/2;FBID/tablet;FBLC/en_US;FBOP/5;FBCR/]
// Mozilla/5.0 (Linux; Android 7.0; SM-G570M Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/192.0.0.34.85;]

// Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone12,5;FBMD/iPhone;FBSN/iOS;FBSV/13.4.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone10,6;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/AT&T]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone11,6;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/Verizon]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone9,2;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/Verizon]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone9,3;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/AT&T]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone10,4;FBMD/iPhone;FBSN/iOS;FBSV/13.4.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone8,2;FBMD/iPhone;FBSN/iOS;FBSV/13.4.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone10,3;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/Verizon]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone10,2;FBMD/iPhone;FBSN/iOS;FBSV/13.5.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone11,8;FBMD/iPhone;FBSN/iOS;FBSV/13.3;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/AT&T]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone11,8;FBMD/iPhone;FBSN/iOS;FBSV/13.3;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/Verizon]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone9,1;FBMD/iPhone;FBSN/iOS;FBSV/13.5.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone10,1;FBMD/iPhone;FBSN/iOS;FBSV/13.5.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone12,1;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/Sprint]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone12,1;FBMD/iPhone;FBSN/iOS;FBSV/13.4.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone8,4;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone12,3;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone10,2;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/Sprint]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone12,1;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/AT&T]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone9,4;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/AT&T]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone11,8;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone10,5;FBMD/iPhone;FBSN/iOS;FBSV/13.3;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/AT&T]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone8,1;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/TFW]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone12,5;FBMD/iPhone;FBSN/iOS;FBSV/13.5.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone8,1;FBMD/iPhone;FBSN/iOS;FBSV/13.5.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone11,6;FBMD/iPhone;FBSN/iOS;FBSV/13.5.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone11,8;FBMD/iPhone;FBSN/iOS;FBSV/13.3;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/T-Mobile]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone10,2;FBMD/iPhone;FBSN/iOS;FBSV/13.3;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/Verizon]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone10,5;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/T-Mobile]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone12,5;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/AT&T]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone9,4;FBMD/iPhone;FBSN/iOS;FBSV/13.4.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone10,3;FBMD/iPhone;FBSN/iOS;FBSV/13.4.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone10,5;FBMD/iPhone;FBSN/iOS;FBSV/13.1.3;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/AT&T]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone9,3;FBMD/iPhone;FBSN/iOS;FBSV/13.4.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone7,1;FBMD/iPhone;FBSN/iOS;FBSV/12.4.5;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone8,1;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/AT&T]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone11,8;FBMD/iPhone;FBSN/iOS;FBSV/13.3;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/Sprint]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone12,5;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/Verizon]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone9,2;FBMD/iPhone;FBSN/iOS;FBSV/13.5.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone11,8;FBMD/iPhone;FBSN/iOS;FBSV/13.1.3;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/Verizon]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone10,2;FBMD/iPhone;FBSN/iOS;FBSV/13.1.3;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/Verizon]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone10,5;FBMD/iPhone;FBSN/iOS;FBSV/13.5.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5]
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone8,1;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/Verizon]
// Mozilla/5.0 (iPad; CPU OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPad7,11;FBMD/iPad;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/tablet;FBLC/en_US;FBOP/5;FBCR/]
// Mozilla/5.0 (iPad; CPU OS 12_4_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPad4,1;FBMD/iPad;FBSN/iOS;FBSV/12.4.5;FBSS/2;FBID/tablet;FBLC/en_US;FBOP/5;FBCR/]
// Mozilla/5.0 (iPad; CPU OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36 [FBAN/FBIOS;FBDV/iPad2,5;FBMD/iPad;FBSN/iPhone OS;FBSV/9.3.5;FBSS/1;FBID/tablet;FBLC/en_US;FBOP/5;FBCR/]
// Mozilla/5.0 (Linux; Android 9; moto g(7) plus Build/PPWS29.98-66-2; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.101 Mobile Safari/537.36 [FB_IAB/Orca-Android;FBAV/221.1.0.15.157;]
// Mozilla/5.0 (Linux; Android 7.0; SM-G610M Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.80 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/197.0.0.46.98;]
// Mozilla/5.0 (Linux; Android 6.0; Lenovo K10a40 Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/59.0.3071.125 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/164.0.0.37.95;]

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
