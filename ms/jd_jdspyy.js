/*
测试茅台下单脚本
自动预约茅台 执行时间大家自己改下
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#测试茅台下单脚本
0 0 12,20 * * * https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js, tag=测试茅台下单脚本, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "0 0 12,20 * * *" script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js,tag=测试茅台下单脚本
===================================Surge================================
测试茅台下单脚本 = type=cron,cronexp="0 0 12,20 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js
====================================小火箭=============================
测试茅台下单脚本 = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js, cronexpr="0 0 12,20 * * *", timeout=3600, enable=true
 */
const $ = new Env('测试茅台下单脚本');

var _0xodH='jsjiami.com.v6',_0xodH_=['‮_0xodH'],_0x5b76=[_0xodH,'wog5Qg==','woV2wpzCul7DrsKI','w4DCssKuNcO0dxbCrw==','J0jCmgstwpzCqg==','wrzDiMK1HRTCmxfDrC4=','a8K9czbDp1Es','LUzCng==','ZixRGF8+','McKXDMOHRg==','w4TDtW5Awrk=','CV0KDRk=','wrfDrsKrJDg=','DMOIwp3CkMK9wpQcwo/CrMKZZw==','NcKzHsOYXUUVAw==','VmPCq1bCgsKCw4E=','TcOLAR7CgkZxDg==','csKgwqvDosKNN0Ald2U=','SVDCu2rCtA==','wpUpKV5F','wpfCoSlcwoQ=','dnpOw4hL','KMKUBsOMYg==','K8OvwrbCmMKJ','fU7CvXrCsg==','WsOEwo5cUQ==','DOistuWdj+eNjOWimOWNuemEiuS6uea3ruWInemevOikvOmii+e4v+WVmuWQteebo8OZOcOiWUTClsOf','KyXCkMOSNw==','ScKKJMK6Yg==','5a+/5LuM6LSQ77+v6ISB5p6N5bS36L2T5pyK776m6K2L5rWG5Yqvw4hN572Q7729w4t7wrsbNMOEw6NzCAHoja7ljKHmnrTmlYjoh5HmnLw=','wqZDwrjDlwo=','w4p/QcOpJw==','UMO7wp1D','PjXChsOHGg==','wrwEwog=','TVzCsHPCvQ==','TsKWw6s=','TQPDhMOf','44C85o2x56aa44C46K2W5YSl6I2E5YyR5LmC5Lqj6LSi5Y2L5Li6woTDiMOkwpAYCSrnmJHmj6PkvLHnl5nDnsOaw7seL0DnmYHkuqXkuoLnr7vlioTojpnljKM=','wpfDk8KuBg7DhHLCh37DvsKXw4fDncK5wofCllFvLMKDYzgOw40QDXpxZsOxAsOcIsKZwr3CqsK7w7Vwwox2w4fDgQ==','wpNDwoF6wp8NCcOFR0wxw5hSwoXCuVnDrANcwrJHFVMMwrTCqcKpwr/DhcKlwr3ClMKUwr7DmsK6QzI0w5VvRm0=','w5vDs1k=','CDLCj8O7MA==','wpRvwrcwLw==','w6/CssKm','HcOVN8K4w70=','ISHCksOGJlI=','woJzwpbDnAc2w4JR','woDCo8KtDsOf','eMOpNg7Cqg==','wotgwqTCsVjDs8KH','ecKqwrg=','DSPDsWLCu3HCtuW+jOWlnOOBrOS7luS6oui0tuWPqA==','wqvDvTjDj8Kz','e8KswrzDhMKqOFg0','U8KyAsKRVcOAwqjDsQ==','XmFOw7Fu','dhdfFFs=','wq4sWg==','44OT5o6P56SH44G7w5LCgw0YQMKL5baC5aa35paQ','5Liv5Lq86LWK5Y6z','ecOSw4Vbw68Mwp7Cog==','esOTwoBNVA==','wrZYwoA+D8Kf','LkXCpDUH','w5jDjnBqwpE=','OQLDqRVvDMOkwoteNA==','YX7CkHA=','ZHXCumDCrcKXw4lE','5LmT5Lq76Le85Y6B','SsOzwoBefg==','dsOuwoFJSMODwpTCuw==','w5vorKXphbjmlbjnmovlv7rojqXljJ7Coi7DojdJwrA=','Z8K9fiE=','aXDCj1DClTvDkQ==','wrLDpi/Dgg==','w5LDskg=','D8KOwqYjwqoXc0c=','RsKLw7o=','w5DCv8KzcHjDoRcm','wozCljlHwrs=','T8OywoM=','wpvCvOWkj+i0jsOdB+WMqeWZtWLCiw==','wonCniNFwr9Ew7g=','Rw3Dh8Of','wqFVeUIf','NcKlwooT','aMK0CsOeKcKHwqTDsHHDj8OZw458w5B4w4lUw45ywrgbPMOCw6RwAgfCt8KWw5nCncO2NVnCtSFINsOrU8KKT8Kgw6fCsnzCrMOcwrzCv8K0TMKmw5HDiMKwwoxlwr99w4knciA3w6rCv17CnHHDusKTKwEQw7ozw6rDqMKJasOhw645wpA7K8Kxw4wvZDTDuGodw5bDssOlwp3CnTrDsG1yw6BhQcKxw4vDjRcLw6EhVcKKw4jCvsOZwqXDiEdfCsOpTcKvGMObw7nCrMKYwp1Ww7zDi8KdwrbDo0nCkgRTQD4DwonDksKqwq4mwozCjk/DjsKjwoh0ezYKYsKYw6MsFcOtY8Kgf8KGDcOhZ8OafsObZMOWR8KwLMKVGH5Sw43CkMOzQlLCjix2wqMkWlHDmcOSwqTDsMKzJGfCmwXDnsOAXsO3w7ttKMOCw4PChz0sW8K3wp7DvMKPTnkBRTvDojlFZsO9QMOcw4PDnhJEU3bCkcOlXsKaQ3Qdw6jCjsKMwpbDtcKDwrt/WSHDiRXCgW/ChsOReErDpsK0UifDisK+w7A6b1wUwqoJw6JHwptLwo7ConXDk2tKwpvCillGwpxuasOHOU0bfB1ywqhqwqbDjltrwpvCp0HCvcOmcsKUT0tSwprCuC/Dj8OnfHTCowDDhy8MwrgFBklhSsObw4rDjsObw7/CisO/wrjCq8O/wqkTwqnCnW1SQMOGUlHCnMOZVTZWZCXCgwjCjXLDn8K1JyHDhkzChsOFPcK3RcOqX1jDi8KJwp40Y8KPd2LCqD0Ewpwiwpc6UMKiw43CqcK4w4c1QsKwwpYFw7HDn8OtHD1xdG84esOZw4kUDsOcR8K+w6fCpyTCgWHCrsK/wp3CnMOUwojCtG3DmlIsw4RhwqjDnWE2dsOnw5V9Wz/CvsKPwroswpl3fsOKQcOpw5A5IsKiBQVmHMOqwpXCssOdwqMvei/DmwJWwpPCs8Oewp/CilMzwolRTHvCsMKbwpoRWMKvw7B/KnRRw4rDq8KWQjkPwqHDvcKow6jCiwFMwot5NMKuwpAreSLDhcOSw4HCncOYZsKIw75kw7rClDRbGcOww4jDhmc8O8OTwofDs33CjUVIwpTDucOrX0ZSCMKAwp7Dt8KuwovCnVjDrFXDgDscenrCqMKBw7/CnsO3w6A6HsOFwrMuwoJNecO+WwdELiQqw7ExfsOIGGXChA9pZsO3wojDqTrCkcKcwqdpwoseAXXDiXw4wpnCicKrccKnw4PDsHbDoMOZNnBiw6DDuXvCgMOjwoLDmsK9SlrCrnXDinrDk3zDvnjCiA==','JiHCmcORf1vCgsOmRR0=','woNjwpjCslbDucKIwrLCnkTCrUHDuE4bcVvDghrCmxfCgMKvcsKdS3PCrBPCssKgOcKQ','ZsK8ZiLDth4sAcKoEcOfwrnDnQ/DtMKkwrhHDcO/wrjDo8O2woQ7ZsKlw6HDrlJnwqTDusKbwrZFw6jDpsKew53Cikc6w4jDgHokwofCgTPDo17CsMKYUz0fUQTDqAl3GcKnTzHDmB9ew7xUfQAbMsOrIRfDiMOkwoEfCzHCuEA8woBowo7CucKGw6hIwovDtjLCqF1pw5nDjMOuU8OCA28BCEgpwo5zw67Cv1PCn8OOUcKYw5kwfnjDsg7CvDHDhcO/wpZGwpvCu2I5Y8OkNAlVSMOqBcOfw5U2C8Kxw5rDgl/CvH/DqVIfCMKIw5/CtkENWMKGwrZFDcKXWMOBMVHCrAM3JcK4w57Cl8OTw70xw6nDp8KqwpDDtwvDv8ODWsKfw5ZWPlgwWMKlw6Bcw6rDs8KgwqNpPT9rwpUSwpTCgMOrT8K5woU2Nn8DQFcTJMOrwqbDtsOge0PCgkdyN8K4wozDu8KJeCDDrHfDrVPDv8OOX8OaF8KTAMOhw6MVP8OYUsKYwrJXOS9pYCs7wq/CrgPDjMO/e8OIXxLDhWl8GAjDg8KcWRx+wqPDksKaw6PClcOxL0/DgcOnasK+wqpgw7E4YMOaw4tKwpzDgsO0w4rDt2pnwpnCsSsrw40xwoTCtS3CoCV+IxQbw5zCp0jDhF0qIDTCtsOOFXkHw5/Cq8Kfw7vDpRg1w7p+LATCiD7Cu8KwWsKSwog9w7bCl8Ofw7ZdVcO+eMO2w4oQUiYmacK9w7rCnMKAa8KjXG/Do8O5V1zCvX1gcQFkZ3I4bEHCrsOKd8O9G8OVI8K9wp8KKsOcLsKTwpQYSsKFwqvDnWcow7rCr14RV1bDisOwGBrCrCjDmCwhw7XDq0LDhzrCh2DCrkfCs8Ohw7xaw7lzw7PCosKyKcK/U8OqUmrCscOlallfdAfDgcKcJTknOcOefcKhwpstW1gLVMO/wrbDgsO4w4Erw4vDiMOjBmEtw4fDicKiD1fChcKndEvDj8OQwrvDs8OuVz5nw5ouw4xOw4M8w6rDuWNLBMKZwqvCqcKswrnDhcKeQsKUw5XDglfDjhDDq8KNaMK5bxk4DBrCtsKESAI2WsK5Q8Oqw5FKwofDnMOcbBIhOmMeYMOPw4HCjmfDj3kGf3PClcK3w6zCnwRRXxhhwpnDuGQ2cxMhwpBaPsOwc8OWG8KCQDrDoADCn8OnCjZ5FMOREldPwpvCkwIsVMKSOMOOesKpLsKXasKzw6QWDEMYesKbNsKxY8OKwqLCi8KnwrMmwpPDhMO5wo3DkMOlwrjCnEnDs1FNcmlUw7Vp','woRjUR0TwoLCmsKsSDbDohwPfSjDtwdBBHTDhg==','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','RcKIFMKhXQ==','wpZdwqcaKQ==','wrJiwoXDrA4=','wofDrsKvGi8=','a27CvQXDhw==','B8KSwq0fwoQ=','JcO5wrbCn8KDwpZoByDCrcOPAF90wqrDrMOrwqwFWsOIwrjDnA==','w6bDlC4qRQ==','f03CuS3DpQ==','w75vw6B/Ig==','w7J5fMOkCA==','wr81w7tzTg==','JsOswqzCjsK+','BDLClcOqEA==','wrHDtjjDhcKE','w7nCngfDjcODwp8=','bnrClSfDtT4=','woUyw5bDvMODAQ==','woMdw4U=','bW3CiCPDpBLDuA==','DsODwp8=','w7rCiRrDicOSwrPCvw==','w5xPfRYjDsOxw7DCo8OLw4QV','w7JvDVrCgMOeUkcaw5dHwr4=','wqMNwpZ1','w7bClMKL','XWnCuA==','wqoscwXDlcKJ','w6MAwobDgw==','w4TChMOYw5/CucOwwrw=','wpd5T1s=','YC1I','wrXDo8KFMjjCvAjDrw==','KCrCig==','w4TCisOGw6nCvQ==','jsjtibaAmi.cuoZtplmDxS.Svl6LQXWO=='];if(function(_0x24b54b,_0x4bf3c6,_0x10747e){function _0x29d6ff(_0x569997,_0x39df4b,_0x4a0d4c,_0xd412f0,_0x23bc8e,_0x3cd935){_0x39df4b=_0x39df4b>>0x8,_0x23bc8e='po';var _0x7d3ad1='shift',_0x332b87='push',_0x3cd935='‮';if(_0x39df4b<_0x569997){while(--_0x569997){_0xd412f0=_0x24b54b[_0x7d3ad1]();if(_0x39df4b===_0x569997&&_0x3cd935==='‮'&&_0x3cd935['length']===0x1){_0x39df4b=_0xd412f0,_0x4a0d4c=_0x24b54b[_0x23bc8e+'p']();}else if(_0x39df4b&&_0x4a0d4c['replace'](/[tbAuZtplDxSSlLQXWO=]/g,'')===_0x39df4b){_0x24b54b[_0x332b87](_0xd412f0);}}_0x24b54b[_0x332b87](_0x24b54b[_0x7d3ad1]());}return 0xccde3;};return _0x29d6ff(++_0x4bf3c6,_0x10747e)>>_0x4bf3c6^_0x10747e;}(_0x5b76,0x172,0x17200),_0x5b76){_0xodH_=_0x5b76['length']^0x172;};function _0x4a39(_0x324bf5,_0x3892d3){_0x324bf5=~~'0x'['concat'](_0x324bf5['slice'](0x1));var _0x2814d2=_0x5b76[_0x324bf5];if(_0x4a39['lokdLv']===undefined){(function(){var _0x59ce2d=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2f57c9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x59ce2d['atob']||(_0x59ce2d['atob']=function(_0x5ea756){var _0x1ff59b=String(_0x5ea756)['replace'](/=+$/,'');for(var _0x44e3ed=0x0,_0x1d88d1,_0x4550bd,_0x17a339=0x0,_0x1c3004='';_0x4550bd=_0x1ff59b['charAt'](_0x17a339++);~_0x4550bd&&(_0x1d88d1=_0x44e3ed%0x4?_0x1d88d1*0x40+_0x4550bd:_0x4550bd,_0x44e3ed++%0x4)?_0x1c3004+=String['fromCharCode'](0xff&_0x1d88d1>>(-0x2*_0x44e3ed&0x6)):0x0){_0x4550bd=_0x2f57c9['indexOf'](_0x4550bd);}return _0x1c3004;});}());function _0xa451ec(_0x1bbe12,_0x3892d3){var _0x357eeb=[],_0x1e09e3=0x0,_0x399cfe,_0x4773eb='',_0x428a60='';_0x1bbe12=atob(_0x1bbe12);for(var _0xa9b6b5=0x0,_0x4249af=_0x1bbe12['length'];_0xa9b6b5<_0x4249af;_0xa9b6b5++){_0x428a60+='%'+('00'+_0x1bbe12['charCodeAt'](_0xa9b6b5)['toString'](0x10))['slice'](-0x2);}_0x1bbe12=decodeURIComponent(_0x428a60);for(var _0x47c258=0x0;_0x47c258<0x100;_0x47c258++){_0x357eeb[_0x47c258]=_0x47c258;}for(_0x47c258=0x0;_0x47c258<0x100;_0x47c258++){_0x1e09e3=(_0x1e09e3+_0x357eeb[_0x47c258]+_0x3892d3['charCodeAt'](_0x47c258%_0x3892d3['length']))%0x100;_0x399cfe=_0x357eeb[_0x47c258];_0x357eeb[_0x47c258]=_0x357eeb[_0x1e09e3];_0x357eeb[_0x1e09e3]=_0x399cfe;}_0x47c258=0x0;_0x1e09e3=0x0;for(var _0x4dcc25=0x0;_0x4dcc25<_0x1bbe12['length'];_0x4dcc25++){_0x47c258=(_0x47c258+0x1)%0x100;_0x1e09e3=(_0x1e09e3+_0x357eeb[_0x47c258])%0x100;_0x399cfe=_0x357eeb[_0x47c258];_0x357eeb[_0x47c258]=_0x357eeb[_0x1e09e3];_0x357eeb[_0x1e09e3]=_0x399cfe;_0x4773eb+=String['fromCharCode'](_0x1bbe12['charCodeAt'](_0x4dcc25)^_0x357eeb[(_0x357eeb[_0x47c258]+_0x357eeb[_0x1e09e3])%0x100]);}return _0x4773eb;}_0x4a39['dsdiFM']=_0xa451ec;_0x4a39['TuatmW']={};_0x4a39['lokdLv']=!![];}var _0x42f081=_0x4a39['TuatmW'][_0x324bf5];if(_0x42f081===undefined){if(_0x4a39['xXWOeS']===undefined){_0x4a39['xXWOeS']=!![];}_0x2814d2=_0x4a39['dsdiFM'](_0x2814d2,_0x3892d3);_0x4a39['TuatmW'][_0x324bf5]=_0x2814d2;}else{_0x2814d2=_0x42f081;}return _0x2814d2;};const notify=$[_0x4a39('‮0','II!J')]()?require('./sendNotify'):'';const jdCookieNode=$[_0x4a39('‫1','2Aqv')]()?require('./jdCookie.js'):'';const skuId=$[_0x4a39('‫2','th43')]()?process[_0x4a39('‮3','b6H5')][_0x4a39('‮4','2Aqv')]?process[_0x4a39('‮5','y6nM')][_0x4a39('‫6','II!J')]:_0x4a39('‮7','x[^0'):_0x4a39('‮8','^*7I');$[_0x4a39('‫9','Ychz')]=!![];try{$['isNode']()?require('./ql212796668.js'):'';}catch(_0x426a87){console[_0x4a39('‮a','yf5o')]('\x0a\x0a我觉得你没拉我仓库，脚本不执行了\x0a\x0a');console[_0x4a39('‫b','Dd&r')]('\x0a拉仓库加QQ群：212796668\x20，看群公告\x0a');$['sfyx']=![];}let cookiesArr=[],cookie='',message;if($[_0x4a39('‫c','^*7I')]()){Object[_0x4a39('‮d','ZCyw')](jdCookieNode)[_0x4a39('‫e','38ip')](_0x155734=>{cookiesArr[_0x4a39('‮f','izAS')](jdCookieNode[_0x155734]);});if(process[_0x4a39('‮10','q&4%')][_0x4a39('‫11','eEe)')]&&process[_0x4a39('‮12','fg%$')][_0x4a39('‫11','eEe)')]===_0x4a39('‮13','38ip'))console[_0x4a39('‮14','$*wL')]=()=>{};}else{cookiesArr=[$[_0x4a39('‮15',')Zdj')](_0x4a39('‮16',')]Tt')),$[_0x4a39('‮17','3)]p')](_0x4a39('‫18','eEe)')),...jsonParse($[_0x4a39('‮19','Fa*c')]('CookiesJD')||'[]')[_0x4a39('‮1a','3)]p')](_0x2da6b9=>_0x2da6b9[_0x4a39('‮1b','q&4%')])]['filter'](_0x5d21d9=>!!_0x5d21d9);}function formatZero(_0x430659){var _0x2562f6={'HIqRE':function(_0x466f54,_0x1bfbdd){return _0x466f54+_0x1bfbdd;},'siPkE':function(_0x3f58e6,_0x589a91){return _0x3f58e6<=_0x589a91;},'JSQEL':function(_0x38ea61,_0x435b3f){return _0x38ea61===_0x435b3f;},'MkXjL':_0x4a39('‫1c','o$G5')};if(_0x430659>=0x0&&_0x2562f6[_0x4a39('‮1d','S^nl')](_0x430659,0x9)){if(_0x2562f6['JSQEL'](_0x2562f6[_0x4a39('‮1e','xMh)')],_0x2562f6['MkXjL'])){return _0x2562f6['HIqRE']('0',_0x430659);}else{return _0x2562f6[_0x4a39('‮1f','eEe)')]('0',_0x430659);}}else{return _0x430659;}}function getCurrentDateTime(){var _0x59975e={'xVdxW':function(_0x20c3b9,_0x5a8ff){return _0x20c3b9+_0x5a8ff;},'zBlYP':function(_0xb69028,_0x425cf0){return _0xb69028+_0x425cf0;},'fbtwy':function(_0x452683,_0x149b2f){return _0x452683(_0x149b2f);},'MRakE':function(_0x249352,_0x13db98){return _0x249352(_0x13db98);},'LHbhQ':function(_0x416991,_0x231df3){return _0x416991(_0x231df3);},'yYjgW':function(_0x500b2b,_0x4f66c8){return _0x500b2b(_0x4f66c8);}};var _0x500119=new Date();var _0x52402e=_0x500119[_0x4a39('‮20','y6nM')]();var _0x140056=_0x500119[_0x4a39('‮21','o$G5')]()+0x1;var _0x38b720=_0x500119[_0x4a39('‫22','Dd&r')]();var _0x3c957a=_0x500119[_0x4a39('‫23','nH(F')]();var _0x116546=_0x500119[_0x4a39('‮24','oXFf')]();var _0x421fb0=_0x500119['getSeconds']();return _0x59975e[_0x4a39('‮25','Dd&r')](_0x59975e[_0x4a39('‮26','x[^0')](_0x59975e[_0x4a39('‫27','mv2a')](_0x59975e[_0x4a39('‫28','RUZb')](_0x59975e[_0x4a39('‫29','o$G5')](_0x52402e,_0x59975e[_0x4a39('‮2a','OXkd')](formatZero,_0x140056)),formatZero(_0x38b720)),_0x59975e['MRakE'](formatZero,_0x3c957a)),_0x59975e[_0x4a39('‫2b','Dd&r')](formatZero,_0x116546)),_0x59975e[_0x4a39('‫2c',')&X6')](formatZero,_0x421fb0));}!(async()=>{var _0x342678={'EvsZb':_0x4a39('‫2d','h*4n'),'hyGKp':_0x4a39('‫2e','fg%$'),'sqzfH':function(_0x45071d,_0x2b014b){return _0x45071d==_0x2b014b;},'COERS':function(_0x327e7b,_0x4476dd){return _0x327e7b===_0x4476dd;},'BCMfI':_0x4a39('‮2f','h*4n'),'WHAGl':function(_0x41e62f,_0x54e296){return _0x41e62f>_0x54e296;},'KDyaD':function(_0x3686bf){return _0x3686bf();},'cIKyG':_0x4a39('‮30','h*4n'),'NKhyX':function(_0x339228,_0x2222a5){return _0x339228<_0x2222a5;},'RGCXG':function(_0x520c3e,_0x184bd5){return _0x520c3e+_0x184bd5;},'PMdAr':function(_0x209e7a,_0x502955){return _0x209e7a===_0x502955;},'sTagm':'AuRYG','YNdvR':'https://bean.m.jd.com/bean/signIndex.action','nhJZK':function(_0x5edc53,_0x56cbd7){return _0x5edc53!==_0x56cbd7;},'oRNAm':_0x4a39('‫31','&*Xi'),'sbXKF':_0x4a39('‮32','lWVv')};if(!$[_0x4a39('‫33',')&X6')])return;if(_0x342678[_0x4a39('‫34','fg%$')](skuId,'')){console[_0x4a39('‫35','Ychz')](_0x342678['EvsZb']);return;}console['log']('\x0a\x20脚本速度不快，听说都是看号，大家随缘吧\x20\x0a');if(!cookiesArr[0x0]){if(_0x342678['COERS'](_0x342678[_0x4a39('‮36','r9uS')],_0x342678['BCMfI'])){$[_0x4a39('‮37','0Ll5')]($[_0x4a39('‫38','p6Am')],_0x4a39('‮39','mR9n'),_0x4a39('‮3a','eEe)'),{'open-url':_0x4a39('‮3b','@Lt$')});return;}else{console[_0x4a39('‫3c','S^nl')](_0x342678[_0x4a39('‫3d','fg%$')]);return;}}if(_0x342678['WHAGl'](_0x342678[_0x4a39('‫3e','T7H7')](getCurrentDateTime),0x1263e27227ff)){console[_0x4a39('‮3f',')]Tt')](_0x342678['cIKyG']);return;}for(let _0x48647c=0x0;_0x342678[_0x4a39('‮40','SH(%')](_0x48647c,cookiesArr[_0x4a39('‮41','fg%$')]);_0x48647c++){if(cookiesArr[_0x48647c]){cookie=cookiesArr[_0x48647c];$[_0x4a39('‮42','&*Xi')]=decodeURIComponent(cookie['match'](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x4a39('‫43','jdPX')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$['index']=_0x342678[_0x4a39('‫44','nH(F')](_0x48647c,0x1);$[_0x4a39('‮45',')Zdj')]=!![];$['nickName']='';message='';console[_0x4a39('‫46','oXFf')](_0x4a39('‮47','2Aqv')+$[_0x4a39('‮48','ks5P')]+'】'+($[_0x4a39('‮49','oXFf')]||$[_0x4a39('‫4a','h*4n')])+'*********\x0a');if(!$['isLogin']){if(_0x342678[_0x4a39('‫4b','RUZb')](_0x342678[_0x4a39('‫4c','q&4%')],'AuRYG')){$[_0x4a39('‫4d','^*7I')]($['name'],_0x4a39('‮4e','^*7I'),_0x4a39('‮4f','is59')+$['index']+'\x20'+($['nickName']||$[_0x4a39('‮50','mR9n')])+'\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action',{'open-url':_0x342678[_0x4a39('‫51',')&X6')]});if($[_0x4a39('‫52','T7H7')]()){if(_0x342678[_0x4a39('‮53','3)]p')](_0x342678[_0x4a39('‫54','S^nl')],_0x342678['sbXKF'])){await notify[_0x4a39('‫55','ei2d')]($[_0x4a39('‫56','r9uS')]+'cookie已失效\x20-\x20'+$[_0x4a39('‫57','Dd&r')],_0x4a39('‮58','eEe)')+$[_0x4a39('‮59',')&X6')]+'\x20'+$[_0x4a39('‮5a',')&X6')]+_0x4a39('‮5b','2nvB'));}else{$['done']();}}continue;}else{Object[_0x4a39('‫5c','Fa*c')](jdCookieNode)[_0x4a39('‫5d','r9uS')](_0x1d2568=>{cookiesArr[_0x4a39('‮5e','ks5P')](jdCookieNode[_0x1d2568]);});if(process[_0x4a39('‮5f','S^nl')][_0x4a39('‮60','pvty')]&&process[_0x4a39('‫61','0Ll5')][_0x4a39('‫62','yf5o')]===_0x342678['hyGKp'])console['log']=()=>{};}}await _0x342678['KDyaD'](tj);}}})()[_0x4a39('‫63','mv2a')](_0x5e9987=>{$[_0x4a39('‫64',')&X6')]('',$['name']+_0x4a39('‫65','S^nl')+_0x5e9987+'!','');})[_0x4a39('‮66','mv2a')](()=>{$[_0x4a39('‫67','p6Am')]();});function tj(){var _0x1f8ea9={'hNOvu':function(_0x8363c7,_0x3a49c3){return _0x8363c7!==_0x3a49c3;},'FYEqf':'aznBT'};return new Promise(_0x311a32=>{if(_0x1f8ea9['hNOvu'](_0x1f8ea9['FYEqf'],_0x1f8ea9[_0x4a39('‫68','izAS')])){return n;}else{$[_0x4a39('‫69','pvty')](taskurl(),async(_0x65935d,_0x43dbe8,_0x228d16)=>{try{console[_0x4a39('‮a','yf5o')](_0x228d16);if(_0x65935d){}else{}}catch(_0x2edc14){}finally{_0x311a32(_0x228d16);}});}});}function taskurl(){var _0x5503e2={'CIsBF':function(_0x2a74bd,_0x3f05e5){return _0x2a74bd+_0x3f05e5;},'KElOa':'https://marathon.jd.com/seckillnew/orderService/submitOrder.action?skuId=','IviKB':function(_0x39d7e4,_0x270795){return _0x39d7e4+_0x270795;},'HoiIC':_0x4a39('‫6a','h*4n'),'ebvBG':_0x4a39('‮6b','fg%$'),'xIulR':'664','lgfMV':_0x4a39('‮6c',')Zdj'),'BXTxk':_0x4a39('‮6d','Fa*c'),'etBnt':_0x4a39('‮6e','izAS'),'xDbet':'same-origin','QOnul':'cors','tdoju':_0x4a39('‮6f',')&X6'),'YFHdx':_0x4a39('‮70','y6nM'),'MAEXv':_0x4a39('‮71','ks5P'),'sedoO':_0x4a39('‫72','xMh)')};return{'url':_0x5503e2[_0x4a39('‮73','h*4n')](_0x5503e2['KElOa'],skuId),'body':_0x5503e2[_0x4a39('‫74','T7H7')](_0x5503e2['HoiIC'],skuId),'headers':{'Connection':_0x5503e2[_0x4a39('‫75','&*Xi')],'Content-Length':_0x5503e2[_0x4a39('‮76','eEe)')],'Accept':_0x5503e2[_0x4a39('‫77','2Aqv')],'User-Agent':_0x5503e2[_0x4a39('‮78','pvty')],'Content-Type':'application/x-www-form-urlencoded','Origin':_0x4a39('‫79','OXkd'),'X-Requested-With':_0x5503e2[_0x4a39('‮7a','is59')],'Sec-Fetch-Site':_0x5503e2[_0x4a39('‫7b','2Aqv')],'Sec-Fetch-Mode':_0x5503e2['QOnul'],'Sec-Fetch-Dest':'empty','Referer':_0x5503e2[_0x4a39('‮7c','Rz2w')](_0x5503e2[_0x4a39('‫7d','lWVv')],skuId)+_0x5503e2[_0x4a39('‮7e','b6H5')],'Accept-Encoding':'gzip,\x20deflate','Accept-Language':_0x5503e2[_0x4a39('‫7f','y6nM')],'Cookie':_0x5503e2[_0x4a39('‫80','fg%$')](cookie,_0x5503e2[_0x4a39('‫81','ks5P')])}};};_0xodH='jsjiami.com.v6';

function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}