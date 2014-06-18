/*!	SWFMini - a SWFObject 2.2 cut down version for webshims
 * 
 * based on SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfmini=function(){function a(){if(!s){s=!0;for(var a=r.length,b=0;a>b;b++)r[b]()}}function b(a){s?a():r[r.length]=a}function c(){q&&d()}function d(){var a=o.getElementsByTagName("body")[0],b=e(i);b.setAttribute("type",m);var c=a.appendChild(b);if(c){var d=0;!function(){if(typeof c.GetVariable!=h){var e=c.GetVariable("$version");e&&(e=e.split(" ")[1].split(","),u.pv=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)])}else if(10>d)return d++,void setTimeout(arguments.callee,10);a.removeChild(b),c=null}()}}function e(a){return o.createElement(a)}function f(a){var b=u.pv,c=a.split(".");return c[0]=parseInt(c[0],10),c[1]=parseInt(c[1],10)||0,c[2]=parseInt(c[2],10)||0,b[0]>c[0]||b[0]==c[0]&&b[1]>c[1]||b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]?!0:!1}var g=function(){j.error("This method was removed from swfmini")},h="undefined",i="object",j=window.webshims,k="Shockwave Flash",l="ShockwaveFlash.ShockwaveFlash",m="application/x-shockwave-flash",n=window,o=document,p=navigator,q=!1,r=[c],s=!1,t=!0,u=function(){var a=typeof o.getElementById!=h&&typeof o.getElementsByTagName!=h&&typeof o.createElement!=h,b=p.userAgent.toLowerCase(),c=p.platform.toLowerCase(),d=/win/.test(c?c:b),e=/mac/.test(c?c:b),f=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,g=!1,j=[0,0,0],r=null;if(typeof p.plugins!=h&&typeof p.plugins[k]==i)r=p.plugins[k].description,!r||typeof p.mimeTypes!=h&&p.mimeTypes[m]&&!p.mimeTypes[m].enabledPlugin||(q=!0,g=!1,r=r.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),j[0]=parseInt(r.replace(/^(.*)\..*$/,"$1"),10),j[1]=parseInt(r.replace(/^.*\.(.*)\s.*$/,"$1"),10),j[2]=/[a-zA-Z]/.test(r)?parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof n.ActiveXObject!=h)try{var s=new ActiveXObject(l);s&&(r=s.GetVariable("$version"),r&&(g=!0,r=r.split(" ")[1].split(","),j=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)]))}catch(t){}return{w3:a,pv:j,wk:f,ie:g,win:d,mac:e}}();j.ready("DOM",a),j.loader.addModule("swfmini-embed",{d:["swfmini"]});var v=f("9.0.0")?function(){return j.loader.loadList(["swfmini-embed"]),!0}:j.$.noop;return Modernizr.video?j.ready("WINDOWLOAD",v):v(),{registerObject:g,getObjectById:g,embedSWF:function(a,b,c,d,e,f,g,h,i,k){var l=arguments;v()?j.ready("swfmini-embed",function(){swfmini.embedSWF.apply(swfmini,l)}):k&&k({success:!1,id:b})},switchOffAutoHideShow:function(){t=!1},ua:u,getFlashPlayerVersion:function(){return{major:u.pv[0],minor:u.pv[1],release:u.pv[2]}},hasFlashPlayerVersion:f,createSWF:function(a,b,c){return u.w3?createSWF(a,b,c):void 0},showExpressInstall:g,removeSWF:g,createCSS:g,addDomLoadEvent:b,addLoadEvent:g,expressInstallCallback:g}}();webshims.isReady("swfmini",!0),function(a,b){"use strict";var c,d=a.audio&&a.video,e=!1,f=b.bugs,g="mediaelement-jaris",h=function(){b.ready(g,function(){b.mediaelement.createSWF||(b.mediaelement.loadSwf=!0,b.reTest([g],d))})},i=b.cfg,j=i.mediaelement;if(!j)return void b.error("mediaelement wasn't implemented but loaded");if(d){var k=document.createElement("video");a.videoBuffered="buffered"in k,a.mediaDefaultMuted="defaultMuted"in k,e="loop"in k,a.mediaLoop=e,b.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),(!a.videoBuffered||!e||!a.mediaDefaultMuted&&-1!=navigator.userAgent.indexOf("MSIE")&&"ActiveXObject"in window)&&(b.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),b.loader.loadList(["mediaelement-native-fix"]))}a.track&&!f.track&&!function(){if(!f.track){window.VTTCue&&!window.TextTrackCue?window.TextTrackCue=window.VTTCue:window.VTTCue||(window.VTTCue=window.TextTrackCue);try{new VTTCue(2,3,"")}catch(a){f.track=!0}}}(),b.register("mediaelement-core",function(b,f,i,j,k,l){c=swfmini.hasFlashPlayerVersion("10.0.3");var m=f.mediaelement;m.parseRtmp=function(a){var b,c,d,e=a.src.split("://"),g=e[1].split("/");for(a.server=e[0]+"://"+g[0]+"/",a.streamId=[],b=1,c=g.length;c>b;b++)d||-1===g[b].indexOf(":")||(g[b]=g[b].split(":")[1],d=!0),d?a.streamId.push(g[b]):a.server+=g[b]+"/";a.streamId.length||f.error("Could not parse rtmp url"),a.streamId=a.streamId.join("/")};var n=function(a,c){a=b(a);var d,e={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};return e.src?(d=a.attr("data-server"),null!=d&&(e.server=d),d=a.attr("type")||a.attr("data-type"),d?(e.type=d,e.container=b.trim(d.split(";")[0])):(c||(c=a[0].nodeName.toLowerCase(),"source"==c&&(c=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e.server?(e.type=c+"/rtmp",e.container=c+"/rtmp"):(d=m.getTypeForSrc(e.src,c,e),d&&(e.type=d,e.container=d))),e.container||b(a).attr("data-wsrecheckmimetype",""),d=a.attr("media"),d&&(e.media=d),("audio/rtmp"==e.type||"video/rtmp"==e.type)&&(e.server?e.streamId=e.src:m.parseRtmp(e)),e):e},o=!c&&"postMessage"in i&&d,p=function(){p.loaded||(p.loaded=!0,l.noAutoTrack||f.ready("WINDOWLOAD",function(){r(),f.loader.loadList(["track-ui"])}))},q=function(){var a;return function(){!a&&o&&(a=!0,f.loader.loadScript("https://www.youtube.com/player_api"),b(function(){f._polyfill(["mediaelement-yt"])}))}}(),r=function(){c?h():q()};f.addPolyfill("mediaelement-yt",{test:!o,d:["dom-support"]}),m.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},m.mimeTypes.source=b.extend({},m.mimeTypes.audio,m.mimeTypes.video),m.getTypeForSrc=function(a,c){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";if(0===a.indexOf("rtmp"))return c+"/rtmp";a=a.split("?")[0].split("#")[0].split("."),a=a[a.length-1];var d;return b.each(m.mimeTypes[c],function(b,c){return-1!==c.indexOf(a)?(d=b,!1):void 0}),d},m.srces=function(a,c){if(a=b(a),!c){c=[];var d=a[0].nodeName.toLowerCase(),e=n(a,d);return e.src?c.push(e):b("source",a).each(function(){e=n(this,d),e.src&&c.push(e)}),c}f.error("setting sources was removed.")},b.fn.loadMediaSrc=function(){f.error("loadMediaSrc was removed.")},m.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],m.canThirdPlaySrces=function(a,d){var e="";return(c||o)&&(a=b(a),d=d||m.srces(a),b.each(d,function(a,b){return b.container&&b.src&&(c&&-1!=m.swfMimeTypes.indexOf(b.container)||o&&"video/youtube"==b.container)?(e=b,!1):void 0})),e};var s={};m.canNativePlaySrces=function(a,c){var e="";if(d){a=b(a);var f=(a[0].nodeName||"").toLowerCase(),g=(s[f]||{prop:{_supvalue:!1}}).prop._supvalue||a[0].canPlayType;if(!g)return e;c=c||m.srces(a),b.each(c,function(b,c){return c.type&&g.call(a[0],c.type)?(e=c,!1):void 0})}return e};var t=/^\s*application\/octet\-stream\s*$/i,u=function(){var a=t.test(b.attr(this,"type")||"");return a&&b(this).removeAttr("type"),a};m.setError=function(a,c){if(b("source",a).filter(u).length){f.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{b(a).mediaLoad()}catch(d){}}else c||(c="can't play sources"),b(a).pause().data("mediaerror",c),f.error("mediaelementError: "+c),setTimeout(function(){b(a).data("mediaerror")&&b(a).addClass("media-error").trigger("mediaerror")},1)};var v=function(){var a,d=c?g:"mediaelement-yt";return function(c,e,g){f.ready(d,function(){m.createSWF&&b(c).parent()[0]?m.createSWF(c,e,g):a||(a=!0,r(),v(c,e,g))}),a||!o||m.createSWF||q()}}(),w=function(a,b,c,d,e){var f;c||c!==!1&&b&&"third"==b.isActive?(f=m.canThirdPlaySrces(a,d),f?v(a,f,b):e?m.setError(a,!1):w(a,b,!1,d,!0)):(f=m.canNativePlaySrces(a,d),f?b&&"third"==b.isActive&&m.setActive(a,"html5",b):e?(m.setError(a,!1),b&&"third"==b.isActive&&m.setActive(a,"html5",b)):w(a,b,!0,d,!0))},x=/^(?:embed|object|datalist)$/i,y=function(a,c){var d=f.data(a,"mediaelementBase")||f.data(a,"mediaelementBase",{}),e=m.srces(a),g=a.parentNode;clearTimeout(d.loadTimer),b(a).removeClass("media-error"),b.data(a,"mediaerror",!1),e.length&&g&&1==g.nodeType&&!x.test(g.nodeName||"")&&(c=c||f.data(a,"mediaelement"),m.sortMedia&&e.sort(m.sortMedia),w(a,c,l.preferFlash||k,e))};m.selectSource=y,b(j).on("ended",function(a){var c=f.data(a.target,"mediaelement");(!e||c&&"html5"!=c.isActive||b.prop(a.target,"loop"))&&setTimeout(function(){!b.prop(a.target,"paused")&&b.prop(a.target,"loop")&&b(a.target).prop("currentTime",0).play()},1)});var z=!1,A=function(){var g=function(){f.implement(this,"mediaelement")&&(y(this),a.mediaDefaultMuted||null==b.attr(this,"muted")||b.prop(this,"muted",!0))};f.ready("dom-support",function(){z=!0,e||f.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(a){var e;e=f.defineNodeNameProperty(a,"load",{prop:{value:function(){var a=f.data(this,"mediaelement");y(this,a),!d||a&&"html5"!=a.isActive||!e.prop._supvalue||e.prop._supvalue.apply(this,arguments),!p.loaded&&b("track",this).length&&p(),b(this).triggerHandler("wsmediareload")}}}),s[a]=f.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(e){var f="";return d&&s[a].prop._supvalue&&(f=s[a].prop._supvalue.call(this,e),"no"==f&&(f="")),!f&&c&&(e=b.trim((e||"").split(";")[0]),-1!=m.swfMimeTypes.indexOf(e)&&(f="maybe")),f}}})}),f.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=f.data(a,"mediaelementBase")||f.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer),b.loadTimer=setTimeout(function(){y(a),a=null},9)}}),f.addReady(function(a,c){var d=b("video, audio",a).add(c.filter("video, audio")).each(g);!p.loaded&&b("track",d).length&&p(),d=null})}),d&&!z&&f.addReady(function(a,c){z||b("video, audio",a).add(c.filter("video, audio")).each(function(){return m.canNativePlaySrces(this)?void 0:(r(),z=!0,!1)})})};d?(f.isReady("mediaelement-core",!0),A(),f.ready("WINDOWLOAD mediaelement",r)):f.ready(g,A),f.ready("track",p)})}(Modernizr,webshims),webshims.register("track",function(a,b,c,d){"use strict";function e(a,c,e){3!=arguments.length&&b.error("wrong arguments.length for VTTCue.constructor"),this.startTime=a,this.endTime=c,this.text=e,this.onenter=null,this.onexit=null,this.pauseOnExit=!1,this.track=null,this.id=null,this.getCueAsHTML=function(){var a,b="",c="";return function(){var e,g;if(a||(a=d.createDocumentFragment()),b!=this.text)for(b=this.text,c=f.parseCueTextToHTML(b),s.innerHTML=c,e=0,g=s.childNodes.length;g>e;e++)a.appendChild(s.childNodes[e].cloneNode(!0));return a.cloneNode(!0)}}()}var f=b.mediaelement,g=((new Date).getTime(),{subtitles:1,captions:1,descriptions:1}),h=a("<track />"),i=Modernizr.ES5&&Modernizr.objectAccessor,j=function(a){var c={};return a.addEventListener=function(a,d){c[a]&&b.error("always use $.on to the shimed event: "+a+" already bound fn was: "+c[a]+" your fn was: "+d),c[a]=d},a.removeEventListener=function(a,d){c[a]&&c[a]!=d&&b.error("always use $.on/$.off to the shimed event: "+a+" already bound fn was: "+c[a]+" your fn was: "+d),c[a]&&delete c[a]},a},k={getCueById:function(a){for(var b=null,c=0,d=this.length;d>c;c++)if(this[c].id===a){b=this[c];break}return b}},l={0:"disabled",1:"hidden",2:"showing"},m={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",id:"",mode:"disabled",oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(a){if(this.cues){var c=this.cues[this.cues.length-1];c&&c.startTime>a.startTime&&b.error("cue startTime higher than previous cue's startTime")}else this.cues=f.createCueList();a.track&&a.track.removeCue&&a.track.removeCue(a),a.track=this,this.cues.push(a)},removeCue:function(a){var c=this.cues||[],d=0,e=c.length;if(a.track!=this)return void b.error("cue not part of track");for(;e>d;d++)if(c[d]===a){c.splice(d,1),a.track=null;break}return a.track?void b.error("cue not part of track"):void 0}},n=["kind","label","srclang"],o={srclang:"language"},p=function(c,d){var e,f,g=[],h=[],i=[];if(c||(c=b.data(this,"mediaelementBase")||b.data(this,"mediaelementBase",{})),d||(c.blockTrackListUpdate=!0,d=a.prop(this,"textTracks"),c.blockTrackListUpdate=!1),clearTimeout(c.updateTrackListTimer),a("track",this).each(function(){var b=a.prop(this,"track");i.push(b),-1==d.indexOf(b)&&h.push(b)}),c.scriptedTextTracks)for(e=0,f=c.scriptedTextTracks.length;f>e;e++)i.push(c.scriptedTextTracks[e]),-1==d.indexOf(c.scriptedTextTracks[e])&&h.push(c.scriptedTextTracks[e]);for(e=0,f=d.length;f>e;e++)-1==i.indexOf(d[e])&&g.push(d[e]);if(g.length||h.length){for(d.splice(0),e=0,f=i.length;f>e;e++)d.push(i[e]);for(e=0,f=g.length;f>e;e++)a([d]).triggerHandler(a.Event({type:"removetrack",track:g[e]}));for(e=0,f=h.length;f>e;e++)a([d]).triggerHandler(a.Event({type:"addtrack",track:h[e]}));(c.scriptedTextTracks||g.length)&&a(this).triggerHandler("updatetrackdisplay")}},q=function(c,d){d||(d=b.data(c,"trackData")),d&&!d.isTriggering&&(d.isTriggering=!0,setTimeout(function(){a(c).closest("audio, video").triggerHandler("updatetrackdisplay"),d.isTriggering=!1},1))},r=function(){var c={subtitles:{subtitles:1,captions:1},descriptions:{descriptions:1},chapters:{chapters:1}};return c.captions=c.subtitles,function(d){var e,f,g=a.prop(d,"default");return g&&"metadata"!=(e=a.prop(d,"kind"))&&(f=a(d).parent().find("track[default]").filter(function(){return!!c[e][a.prop(this,"kind")]})[0],f!=d&&(g=!1,b.error("more than one default track of a specific kind detected. Fall back to default = false"))),g}}(),s=a("<div />")[0];c.VTTCue=e,c.TextTrackCue=function(){b.error("Use VTTCue constructor instead of abstract TextTrackCue constructor."),e.apply(this,arguments)},c.TextTrackCue.prototype=e.prototype,f.createCueList=function(){return a.extend([],k)},f.parseCueTextToHTML=function(){var a=/(<\/?[^>]+>)/gi,b=/^(?:c|v|ruby|rt|b|i|u)/,c=/\<\s*\//,d=function(a,b,d,e){var f;return c.test(e)?f="</"+a+">":(d.splice(0,1),f="<"+a+" "+b+'="'+d.join(" ").replace(/\"/g,"&#34;")+'">'),f},e=function(a){var c=a.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return c[0]&&(c[0]=c[0].toLowerCase(),b.test(c[0])?"c"==c[0]?a=d("span","class",c,a):"v"==c[0]&&(a=d("q","title",c,a)):a=""),a};return function(b){return b.replace(a,e)}}(),f.loadTextTrack=function(c,d,e,h){var i="play playing",j=e.track,k=function(){var g,h,l,m="disabled"!=j.mode&&a.attr(d,"src")&&a.prop(d,"src");if(m&&(a(c).off(i,k).off("updatetrackdisplay",k),!e.readyState)){g=function(){e.readyState=3,j.cues=null,j.activeCues=j.shimActiveCues=j._shimActiveCues=null,a(d).triggerHandler("error")},e.readyState=1;try{j.cues=f.createCueList(),j.activeCues=j.shimActiveCues=j._shimActiveCues=f.createCueList(),l=function(){h=a.ajax({dataType:"text",url:m,success:function(i){"text/vtt"!=h.getResponseHeader("content-type")&&b.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),f.parseCaptions(i,j,function(b){b&&"length"in b?(e.readyState=2,a(d).triggerHandler("load"),a(c).triggerHandler("updatetrackdisplay")):g()})},error:g})},a.ajax&&a.ajaxSettings.xhr?l():(b.ready("jajax",l),b.loader.loadList(["jajax"]))}catch(n){g(),b.error(n)}}};e.readyState=0,j.shimActiveCues=null,j._shimActiveCues=null,j.activeCues=null,j.cues=null,a(c).on(i,k),h?(j.mode=g[j.kind]?"showing":"hidden",b.ready("WINDOWLOAD",k)):b.ready("WINDOWLOAD",function(){a(c).on("updatetrackdisplay",k)})},f.createTextTrack=function(c,d){var e,g;return d.nodeName&&(g=b.data(d,"trackData"),g&&(q(d,g),e=g.track)),e||(e=j(b.objectCreate(m)),i||n.forEach(function(b){var c=a.prop(d,b);c&&(e[o[b]||b]=c)}),d.nodeName?(i&&n.forEach(function(c){b.defineProperty(e,o[c]||c,{get:function(){return a.prop(d,c)}})}),e.id=a(d).prop("id"),g=b.data(d,"trackData",{track:e}),f.loadTextTrack(c,d,g,r(d))):(i&&n.forEach(function(a){b.defineProperty(e,o[a]||a,{value:d[a],writeable:!1})}),e.cues=f.createCueList(),e.activeCues=e._shimActiveCues=e.shimActiveCues=f.createCueList(),e.mode="hidden",e.readyState=2),"subtitles"!=e.kind||e.language||b.error("you must provide a language for track in subtitles state"),e.__wsmode=e.mode),e},f.parseCaptionChunk=function(){var a=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,c=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,d=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,f=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(g){var h,i,j,k,l,m,n,o,p,q;if(c.exec(g))return null;if(o=d.exec(g))return null;if(o=f.exec(g))return null;for(h=g.split(/\n/g);!h[0].replace(/\s+/gi,"").length&&h.length>0;)h.shift();for(h[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(n=String(h.shift().replace(/\s*/gi,""))),m=0;m<h.length;m++){var r=h[m];(p=a.exec(r))&&(l=p.slice(1),i=parseInt(60*(l[0]||0)*60,10)+parseInt(60*(l[1]||0),10)+parseInt(l[2]||0,10)+parseFloat("0."+(l[3]||0)),j=parseInt(60*(l[4]||0)*60,10)+parseInt(60*(l[5]||0),10)+parseInt(l[6]||0,10)+parseFloat("0."+(l[7]||0))),h=h.slice(0,m).concat(h.slice(m+1));break}return i||j?(k=h.join("\n"),q=new e(i,j,k),n&&(q.id=n),q):(b.warn("couldn't extract time information: "+[i,j,h.join("\n"),n].join(" ; ")),null)}}(),f.parseCaptions=function(a,c,d){var e,g,h,i,j;f.createCueList(),a?(h=/^WEBVTT(\s*FILE)?/gi,g=function(k,l){for(;l>k;k++){if(e=a[k],h.test(e))j=!0;else if(e.replace(/\s*/gi,"").length){if(!j){b.error("please use WebVTT format. This is the standard"),d(null);break}e=f.parseCaptionChunk(e,k),e&&c.addCue(e)}if(i<(new Date).getTime()-30){k++,setTimeout(function(){i=(new Date).getTime(),g(k,l)},90);break}}k>=l&&(j||b.error("please use WebVTT format. This is the standard"),d(c.cues))},a=a.replace(/\r\n/g,"\n"),setTimeout(function(){a=a.replace(/\r/g,"\n"),setTimeout(function(){i=(new Date).getTime(),a=a.split(/\n\n+/g),g(0,a.length)},9)},9)):b.error("Required parameter captionData not supplied.")},f.createTrackList=function(c,d){return d=d||b.data(c,"mediaelementBase")||b.data(c,"mediaelementBase",{}),d.textTracks||(d.textTracks=[],b.defineProperties(d.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null},onchange:{value:null},getTrackById:{value:function(a){for(var b=null,c=0;c<d.textTracks.length;c++)if(a==d.textTracks[c].id){b=d.textTracks[c];break}return b}}}),j(d.textTracks),a(c).on("updatetrackdisplay",function(){for(var b,c=0;c<d.textTracks.length;c++)b=d.textTracks[c],b.__wsmode!=b.mode&&(b.__wsmode=b.mode,a([d.textTracks]).triggerHandler("change"))})),d.textTracks},Modernizr.track||(b.defineNodeNamesBooleanProperty(["track"],"default"),b.reflectProperties(["track"],["srclang","label"]),b.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),b.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(a){var c=b.data(this,"trackData");this.setAttribute("data-kind",a),c&&(c.attrKind=a)},get:function(){var a=b.data(this,"trackData");return a&&"attrKind"in a?a.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),a.each(n,function(c,d){var e=o[d]||d;b.onNodeNamesPropertyModify("track",d,function(){var c=b.data(this,"trackData");c&&("kind"==d&&q(this,c),i||(c.track[e]=a.prop(this,d)))})}),b.onNodeNamesPropertyModify("track","src",function(c){if(c){var d,e=b.data(this,"trackData");e&&(d=a(this).closest("video, audio"),d[0]&&f.loadTextTrack(d,this,e))}}),b.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(b.data(this,"trackData")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return f.createTextTrack(a(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),b.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var a=this,c=b.data(a,"mediaelementBase")||b.data(a,"mediaelementBase",{}),d=f.createTrackList(a,c);return c.blockTrackListUpdate||p.call(a,c,d),d},writeable:!1},addTextTrack:{value:function(a,c,d){var e=f.createTextTrack(this,{kind:h.prop("kind",a||"").prop("kind"),label:c||"",srclang:d||""}),g=b.data(this,"mediaelementBase")||b.data(this,"mediaelementBase",{});return g.scriptedTextTracks||(g.scriptedTextTracks=[]),g.scriptedTextTracks.push(e),p.call(this),e}}},"prop");var t=function(c){if(a(c.target).is("audio, video")){var d=b.data(c.target,"mediaelementBase");d&&(clearTimeout(d.updateTrackListTimer),d.updateTrackListTimer=setTimeout(function(){p.call(c.target,d)},0))}},u=function(a,b){return b.readyState||a.readyState},v=function(a){a.originalEvent&&a.stopImmediatePropagation()},w=function(){if(b.implement(this,"track")){var c,d=this.track;d&&(b.bugs.track||!d.mode&&!u(this,d)||(a.prop(this,"track").mode=l[d.mode]||d.mode),c=a.prop(this,"kind"),d.mode="string"==typeof d.mode?"disabled":0,this.kind="metadata",a(this).attr({kind:c})),a(this).on("load error",v)}};b.addReady(function(c,d){var e=d.filter("video, audio, track").closest("audio, video");a("video, audio",c).add(e).each(function(){p.call(this)}).on("emptied updatetracklist wsmediareload",t).each(function(){if(Modernizr.track){var c=a.prop(this,"textTracks"),d=this.textTracks;c.length!=d.length&&b.warn("textTracks couldn't be copied"),a("track",this).each(w)}}),e.each(function(){var a=this,c=b.data(a,"mediaelementBase");c&&(clearTimeout(c.updateTrackListTimer),c.updateTrackListTimer=setTimeout(function(){p.call(a,c)},9))})}),Modernizr.texttrackapi&&a("video, audio").trigger("trackapichange")});