/*
 * Hero - Shoutcast and Icecast Radio Player With History - v1.6.1
 * Copyright 2017-2018, LambertGroup
 *
 */

 (function(f){function J(a,b,d,e){f(a.thumbsHolder_Thumbs[a.current_img_no]).css({background:b.playlistRecordBgOnColor,"border-bottom-color":b.playlistRecordBottomBorderOnColor,color:b.playlistRecordTextOnColor});a.is_very_first||L(-1,a,b,d);if(""!=b.radio_stream)var u=b.radio_stream;return u}function M(a,b){var d=new XMLHttpRequest;d.open(a.method,"https://zet.pluginsandthemes.ro/"+a.url);d.onload=d.onerror=function(){b(a.method+" "+a.url+"\n"+d.status+" "+d.statusText+"\n\n"+(d.responseText||
 ""))};/^POST/i.test(a.method)&&d.setRequestHeader("Content-Type","application/x-www-form-urlencoded");d.send(a.data)}function O(a,b,d,e,f,h,x,l,k,t,m,r,v,A,y,z){""!=a.curTitle&&a.isHistoryGenerated&&a.prevTitle!=a.curTitle&&(""!=a.prevTitle&&(30<=a.gen_total_images&&(a.gen_total_images--,a.playlist_arr.pop(),a.playlist_images_arr.pop()),a.gen_total_images++,a.playlist_arr.unshift(a.prevTitle),a.playlist_images_arr.unshift(a.prev_song_image),K(a,b,d,e,f,h,x,l,k,t,m,r,v,A,y,z)),a.prevTitle=a.curTitle)}
 function F(a,b,d,e,f,h,x,l,k,t,m,r,v,A,y,z){b.showOnlyPlayButton||a.isRadiojar?a.isRadiojar&&M({method:"GET",url:"http://www.radiojar.com/api/stations/"+a.mount_point+"/now_playing/"},function(g){startPoint=g.indexOf("{");-1!==startPoint&&(lengthPoint=g.length,g=g.substr(startPoint,lengthPoint),g=JSON.parse(g),a.curTitle=g.artist+" - "+g.title,G(a,b,d,h,x,l,k,t,m,r,v),O(a,b,h,d,e,f,A,x,l,k,t,m,r,v,y,z))}):(!1===a.now_playing_found&&a.now_playing_current_k<a.now_playing_arr_lenght&&a.now_playing_current_k++,
 ""!=a.ip&&a.now_playing_current_k<a.now_playing_arr_lenght?(M({method:"GET",url:"http://"+a.ip+":"+a.port+"/"+a.now_playing_arr[a.now_playing_current_k]},function(g){var p="";switch(a.now_playing_current_k){case 0:if(-1!=g.indexOf("<SONGTITLE>")){a.now_playing_found=!0;var q=g.indexOf("<SONGTITLE>")+11;var n=g.indexOf("</SONGTITLE>")-q;p=g.substr(q,n);a.curTitle=p;G(a,b,d,h,x,l,k,t,m,r,v)}else F(a,b,d,e,f,h,x,l,k,t,m,r,v,A,y,z);break;case 1:q=g.indexOf("<body>")+6;n=g.length;g=g.substr(q,n);g=g.replace("</body></html>",
 "");p=g.split(",");""!=p[6]&&void 0!=p[6]&&"oracle:0"!=p[6]?(a.now_playing_found=!0,p=p[6],a.curTitle=p,G(a,b,d,h,x,l,k,t,m,r,v)):F(a,b,d,e,f,h,x,l,k,t,m,r,v,A,y,z);break;case 2:q=g.indexOf('{"icestats":');if(-1!==q){n=g.length;g=g.substr(q,n);g=JSON.parse(g);q=!1;for(var u=0;u<Object.keys(g.icestats.source).length&&!q;)n=g.icestats.source[u].listenurl,0<n.indexOf(a.mount_point)&&(q=!0,u--),u++;q&&""!=g.icestats.source[u].title&&void 0!=g.icestats.source[u].title&&(a.now_playing_found=!0,p=g.icestats.source[u].title,
 a.curTitle=p,G(a,b,d,h,x,l,k,t,m,r,v))}""==p&&(a.now_playing_found=!1,F(a,b,d,e,f,h,x,l,k,t,m,r,v,A,y,z));break;case 3:""!=a.mount_point&&(q=g.indexOf(a.mount_point));0<q&&(n=g.length,g=g.substr(q,n));n=g.indexOf("Currently playing:");-1==n&&(n=g.indexOf("Current Song:"));0<n&&(a.now_playing_found=!0,q=g.indexOf('<td class="streamstats">',n),q=0<q?q+24:g.indexOf('<td class="streamdata">',n)+23,n=g.indexOf("</td>",q),p=g.substr(q,n-q),a.curTitle=p,G(a,b,d,h,x,l,k,t,m,r,v));""==p&&(a.now_playing_found=
 !1,F(a,b,d,e,f,h,x,l,k,t,m,r,v,A,y,z));break;default:a.now_playing_found=!0,a.curTitle="Not available...",G(a,b,d,h,x,l,k,t,m,r,v)}}),O(a,b,h,d,e,f,A,x,l,k,t,m,r,v,y,z)):(curSong="Data not available...",a.curTitle=curSong,G(a,b,d,h,x,l,k,t,m,r,v)))}function P(a,b,d,e,f,h,x,l,k,t,m,r,v,A,y,z,g){var p=a.playlist_arr[g].split("-");p[0]=p[0].trim();b.grabLastFmPhoto&&a.lastfm.artist.getInfo({artist:p[0]},{success:function(q){""!=q.artist.image[2]["#text"].trim()&&(a.playlist_images_arr[g]=q.artist.image[2]["#text"]);
 g==a.playlist_arr.length-1&&setTimeout(function(){K(a,b,e,d,v,r,A,f,h,x,l,k,t,m,y,z)},1E3)},error:function(q,n){g==a.playlist_arr.length-1&&setTimeout(function(){K(a,b,e,d,v,r,A,f,h,x,l,k,t,m,y,z)},1E3)}})}function T(a,b,d,e,f,h,x,l,k,t,m,r,v,A,y,z,g){clearInterval(a.radioReaderAjaxInterval);if(-1!==b.radio_stream.indexOf("radiojar.com")){a.isRadiojar=!0;var p=b.radio_stream.match(a.myregexp_radiojar);null!=p&&(a.ip=p[1],a.mount_point=p[2],a.port="")}else-1==b.radio_stream.indexOf("/",9)&&(b.radio_stream+=
 "/;"),"/"==b.radio_stream.charAt(b.radio_stream.length-1)&&(b.radio_stream+=";"),p=b.radio_stream.match(a.myregexp),null!=p&&(a.ip=p[1],a.port=p[2],a.mount_point=p[3],";"==a.mount_point.trim()&&(a.mount_point=""));m.css({width:b.playerWidth+"px",height:b.imageHeight+"px",background:"url("+b.noImageAvailable+") #000000","background-repeat":"no-repeat","background-position":"top center","background-size":"cover"});if(!b.showOnlyPlayButton){F(a,b,d,v,r,e,f,h,x,l,k,t,m,A,y,z);a.radioReaderAjaxInterval=
 setInterval(function(){F(a,b,d,v,r,e,f,h,x,l,k,t,m,A,y,z)},1E3*b.nowPlayingInterval);a.playlist_arr=[];a.playlist_images_arr=[];var q=-1,n,u,B,c=0;a.isRadiojar?M({method:"GET",url:"http://www.radiojar.com/api/stations/"+a.mount_point+"/tracks/"},function(w){n=w.indexOf("[{");if(-1!==n){u=w.length;w=w.substr(n,u);var p=JSON.parse(w);p.reverse()}for(c=0;c<Object.keys(p).length;c++)""!=p[c].track&&"Empty Title"!=p[c].track&&(q++,a.playlist_arr[q]=p[c].artist+" - "+p[c].track,a.playlist_images_arr[q]=
 b.noImageAvailable,P(a,b,d,e,f,h,x,l,k,t,m,r,v,A,y,z,q));a.playlist_arr.length?K(a,b,e,d,v,r,A,f,h,x,l,k,t,m,y,z):a.isHistoryGenerated=!0;b.sticky&&b.startMinified&&g.click()}):M({method:"GET",url:"http://"+a.ip+":"+a.port+"/"+a.history_arr[a.history_current_k]},function(c){if(-1!=c.indexOf("Current Song"))for(n=c.indexOf("Current Song")+12,u=c.length,c=c.substr(n,u),B=c.split("</td><td>"),B.shift(),c=0;c<B.length;c++)n=B[c].indexOf("</"),-1!=n&&(u=n,B[c]=B[c].substr(0,u),B[c]=B[c].replace(/<\/?[^>]+(>|$)/g,
 ""),""!=B[c]&&"Empty Title"!=B[c]&&(q++,a.playlist_arr[q]=B[c],a.playlist_images_arr[q]=b.noImageAvailable,P(a,b,d,e,f,h,x,l,k,t,m,r,v,A,y,z,q)));a.playlist_arr.length?K(a,b,e,d,v,r,A,f,h,x,l,k,t,m,y,z):a.isHistoryGenerated=!0;b.sticky&&b.startMinified&&g.click()})}a.isFlashNeeded?""!=a.myFlashObject&&a.myFlashObject.myAS3function(J(a,b,d,e),b.initialVolume):(document.getElementById(a.audioID).src=J(a,b,d,e),document.getElementById(a.audioID).load(),b.autoPlay&&f.click())}function G(a,b,d,e,f,h,x,
 l,k,t,m){a.curSongText="";b.showTitle&&null!=a.curTitle&&""!=a.curTitle&&(a.curSongText+=a.curTitle);b.showRadioStation&&null!=b.radio_name&&""!=b.radio_name&&k.html(b.radio_name);d=a.curTitle.split("-");var r=b.noImageAvailable;d[0]=d[0].trim();3<=d.length&&(d[0]=d[0].trim()+"-"+d[1].trim());b.grabLastFmPhoto?a.lastfm.artist.getInfo({artist:d[0]},{success:function(b){""!=b.artist.image[3]["#text"].trim()&&(r=b.artist.image[3]["#text"]);m.css({background:"url("+r+") #000000","background-repeat":"no-repeat",
 "background-position":"top center","background-size":"cover"});a.prev_song_image=a.cur_song_image;a.cur_song_image=r},error:function(b,d){a.prev_song_image=a.cur_song_image;a.cur_song_image=r;m.css({background:"url("+r+") #000000","background-repeat":"no-repeat","background-position":"top center","background-size":"cover"})}}):(a.prev_song_image=a.cur_song_image,a.cur_song_image=r,m.css({background:"url("+r+") #000000","background-repeat":"no-repeat","background-position":"top center","background-size":"cover"}));
 a.curSongText&&(d=a.curSongText.split("-"),a.curSongAuthorText=d[0].trim(),2<=d.length&&(a.curSongText=d[1].trim()),3<=d.length&&(a.curSongAuthorText=d[0].trim()+"-"+d[1].trim(),a.curSongText=d[2].trim()),h.html(Q(a.curSongAuthorText)),l.css({width:"auto"}),a.isStationTitleInsideScrolling=!1,a.stationTitleInsideWait=0,l.stop(),l.css({"margin-left":0}),l.html(a.curSongText),clearInterval(a.timeupdateInterval),l.width()>a.titleWidth?a.timeupdateInterval=setInterval(function(){!a.isStationTitleInsideScrolling&&
 5<=a.stationTitleInsideWait&&l.width()>a.titleWidth?(a.isStationTitleInsideScrolling=!0,a.stationTitleInsideWait=0,l.html(a.curSongText+" **** "+a.curSongText+" **** "+a.curSongText+" **** "+a.curSongText+" **** "+a.curSongText+" **** "),l.css({"margin-left":0}),l.stop().animate({"margin-left":b.playerWidth-l.width()+"px"},parseInt(1E4*(l.width()-b.playerWidth)/150,10),"linear",function(){a.isStationTitleInsideScrolling=!1})):!a.isStationTitleInsideScrolling&&l.width()>a.titleWidth&&a.stationTitleInsideWait++},
 300):l.css({width:"100%"}))}function L(a,b,d,e){if(b.selectedCateg_total_images>d.numberOfThumbsPerScreen){var u=(b.thumbsHolder_ThumbHeight+1)*(b.gen_total_images-d.numberOfThumbsPerScreen),h=0;e.stop(!0,!0);f("html, body").off("touchstart touchmove").on("touchstart touchmove",function(a){a.preventDefault()});-1==a||b.isCarouselScrolling?!b.isCarouselScrolling&&b.gen_total_images>d.numberOfThumbsPerScreen&&(b.isCarouselScrolling=!0,h=-1*parseInt((b.thumbsHolder_ThumbHeight+1)*b.current_img_no,10),
 Math.abs(h)>u&&(h=-1*u),b.gen_total_images>d.numberOfThumbsPerScreen&&d.showPlaylist&&b.audio6_html5_sliderVertical.slider("value",100+parseInt(100*h/u)),e.animate({top:h+"px"},500,"easeOutCubic",function(){b.isCarouselScrolling=!1;f("html, body").off("touchstart touchmove").on("touchstart touchmove",function(a){})})):(b.isCarouselScrolling=!0,h=2>=a?-1*u:parseInt(u*(a-100)/100,10),0<h&&(h=0),e.animate({top:h+"px"},1100,"easeOutQuad",function(){b.isCarouselScrolling=!1;f("html, body").off("touchstart touchmove").on("touchstart touchmove",
 function(a){})}))}}function N(a,b,d,e,f,h,x,l,k,t,m,r,v,A,y,z,g,p,q,n,C,B,c,w,E,D){e.width(d.playerWidth);if(d.showOnlyPlayButton||b.isMinified)a="none";"none"==a?y.css({width:"0px",height:"0px"}):y.css({width:d.playerWidth+"px",height:parseInt(d.playerWidth/d.origWidth*d.imageHeight,10)+"px"});d.sticky&&d.startMinified?y.css({display:"none",top:"0px",left:"0px"}):y.css({display:a,top:"0px",left:"0px"});b.imageTopPos=0;b.imageLeftPos=0;b.frameBehindTextTopPos=y.height();b.frameBehindTextLeftPos=0;
 d.showOnlyPlayButton?p.css({top:b.frameBehindTextTopPos+"px",left:b.frameBehindTextLeftPos+"px",background:d.frameBehindTextColor,width:0,height:0}):p.css({top:b.frameBehindTextTopPos+"px",left:b.frameBehindTextLeftPos+"px",background:d.frameBehindTextColor,height:k.height()+2*b.playVerticalPadding+"px"});b.playTopPos=b.frameBehindTextTopPos+b.playVerticalPadding;b.playLeftPos=b.frameBehindTextLeftPos+b.playHorizontalPadding;k.css({top:b.playTopPos+"px",left:b.playLeftPos+"px"});b.titleWidth=d.playerWidth-
 4*b.playHorizontalPadding-k.width();b.titleTopPos=b.playTopPos+3;b.titleLeftPos=k.width()+2*b.playHorizontalPadding;m.css({color:d.songTitleColor,top:b.titleTopPos+"px",left:b.titleLeftPos+"px",width:b.titleWidth+"px"});b.lineSeparatorTopPos=b.titleTopPos+m.height()+2;b.lineSeparatorLeftPos=b.titleLeftPos;q.css({background:d.lineSeparatorColor,top:b.lineSeparatorTopPos+"px",left:b.lineSeparatorLeftPos+"px",width:b.titleWidth+"px"});b.authorTopPos=b.lineSeparatorTopPos+8;b.authorLeftPos=b.titleLeftPos;
 t.css({color:d.authorTitleColor,top:b.authorTopPos+"px",left:b.authorLeftPos+"px",width:b.titleWidth+"px"});b.minimizeTopPos=b.playTopPos;!d.sticky||d.showOnlyPlayButton?(b.minimizeRightPos=0,C.css({display:"none",padding:0,margin:0})):d.sticky&&(b.minimizeRightPos=b.smallButtonDistance,C.css({top:b.minimizeTopPos+"px",right:b.minimizeRightPos+"px"}));b.frameBehindButtonsTopPos=b.frameBehindTextTopPos+p.height();b.frameBehindButtonsLeftPos=0;d.showOnlyPlayButton?n.css({background:d.frameBehindButtonsColor,
 height:0,top:b.frameBehindButtonsTopPos+"px",left:b.frameBehindButtonsLeftPos+"px"}):n.css({background:d.frameBehindButtonsColor,top:b.frameBehindButtonsTopPos+"px",left:b.frameBehindButtonsLeftPos+"px"});b.radioStationTopPos=b.frameBehindButtonsTopPos+Math.floor(n.height()-v.height())/2;b.radioStationLeftPos=b.playHorizontalPadding;v.css({color:d.radioStationColor,top:b.radioStationTopPos+"px",left:b.radioStationLeftPos+"px",width:b.titleWidth+"px"});0==b.historyButWidth&&(b.historyButWidth=B.width());
 b.showhidehistoryTopPos=b.frameBehindButtonsTopPos+Math.floor((n.height()-B.height())/2);b.temp_showHistoryBut?(b.showhideplaylistRightPos=2*b.smallButtonDistance,B.css({display:"block",width:b.historyButWidth+"px",top:b.showhidehistoryTopPos+"px",right:b.showhideplaylistRightPos+"px"})):(b.showhideplaylistRightPos=0,B.css({display:"none",width:0,padding:0,margin:0}));c.css({display:"none",width:0,padding:0,margin:0});b.volumeTopPos=b.frameBehindButtonsTopPos+Math.floor((n.height()-w.height())/2);
 d.showVolume?(b.volumeRightPos=b.showhideplaylistRightPos+B.width()+b.smallButtonDistance,w.css({top:b.volumeTopPos+"px",right:b.volumeRightPos+"px"})):(b.volumeRightPos=b.showhideplaylistRightPos+B.width(),w.css({display:"none",width:0,padding:0,margin:0}));b.twitterTopPos=b.frameBehindButtonsTopPos+Math.floor((n.height()-E.height())/2);d.showTwitterBut?(b.twitterRightPos=b.volumeRightPos+w.width()+b.smallButtonDistance,E.css({top:b.twitterTopPos+"px",right:b.twitterRightPos+"px"})):(b.twitterRightPos=
 b.volumeRightPos+w.width(),E.css({display:"none",width:0,padding:0,margin:0}));b.facebookTopPos=b.frameBehindButtonsTopPos+Math.floor((n.height()-D.height())/2);d.showFacebookBut?(b.facebookRightPos=b.twitterRightPos+E.width()+b.smallButtonDistance,D.css({top:b.facebookTopPos+"px",right:b.facebookRightPos+"px"})):(b.facebookRightPos=b.twitterRightPos,D.css({display:"none",width:0,padding:0,margin:0}))}function K(a,b,d,e,u,h,x,l,k,t,m,r,v,A,y,z){if(!b.showOnlyPlayButton){e.stop(!0,!0);a.isCarouselScrolling=
 !1;f(".readingData",h).css({display:"none"});l=parseInt(b.playerWidth/b.origWidth*b.historyRecordTitleLimit,10);k=parseInt(b.playerWidth/b.origWidth*b.historyRecordAuthorLimit,10);t=[];a.isHistoryGenerated=!0;e.html("");for(m=a.gen_total_images=0;m<a.playlist_arr.length;m++)a.gen_total_images++,t=a.playlist_arr[m].split("-"),1>t.length?a.gen_total_images--:(a.thumbsHolder_Thumb=f('<div class="thumbsHolder_ThumbOFF" rel="'+(a.gen_total_images-1)+'" data-origID="'+m+'"><div class="padding"><img src="'+
 a.playlist_images_arr[m]+'"><span class="titlex">'+R(t[1],l)+'</span><span class="authorx">'+R(t[0],k)+"</span></div></div>"),e.append(a.thumbsHolder_Thumb),0==a.thumbsHolder_ThumbHeight&&(a.thumbsHolder_ThumbHeight=a.thumbsHolder_Thumb.height()),a.thumbsHolder_Thumb.css({top:(a.thumbsHolder_ThumbHeight+1)*a.gen_total_images+"px",background:b.historyRecordBgColor,"border-bottom-color":b.historyRecordBottomBorderColor,color:b.historyRecordTextColor}),f(".titlex",a.thumbsHolder_Thumb).css({color:b.historyRecordSongColor,
 "border-bottom-color":b.historyRecordSongBottomBorderColor}),f(".authorx",a.thumbsHolder_Thumb).css({color:b.historyRecordAuthorColor}),a.current_img_no=0);u.height(2*b.historyPadding+(a.thumbsHolder_ThumbHeight+1)*b.numberOfThumbsPerScreen+z.height()+b.historyPadding);h.height((a.thumbsHolder_ThumbHeight+1)*b.numberOfThumbsPerScreen);h.css({"margin-top":z.height()+b.historyPadding+"px"});x.css({padding:b.historyPadding+"px"});a.thumbsHolder_Thumbs=f(".thumbsHolder_ThumbOFF",d);a.wrapperHeight=a.audioPlayerHeight+
 u.height()+b.historyTopPos;if(!b.showHistory||!b.showHistoryOnInit||0>u.css("margin-top").substring(0,u.css("margin-top").length-2))a.wrapperHeight=a.audioPlayerHeight;a.isMinified||y.css({height:a.wrapperHeight+"px"});a.gen_total_images>b.numberOfThumbsPerScreen&&b.showHistory?(b.isPlaylistSliderInitialized&&a.audio6_html5_sliderVertical.slider("destroy"),a.audio6_html5_sliderVertical.slider({orientation:"vertical",range:"min",min:1,max:100,step:1,value:100,slide:function(d,f){L(f.value,a,b,e)}}),
 b.isPlaylistSliderInitialized=!0,a.audio6_html5_sliderVertical.css({display:"inline",position:"absolute",height:u.height()-20-3*b.historyPadding-z.height()+"px",left:d.width()-a.audio6_html5_sliderVertical.width()-b.historyPadding+"px",top:a.audioPlayerHeight+b.historyTopPos+2*b.historyPadding+2+z.height()+"px"}),b.showHistoryOnInit||a.audio6_html5_sliderVertical.css({opacity:0,display:"none"}),f(".thumbsHolder_ThumbOFF",d).css({width:d.width()-a.audio6_html5_sliderVertical.width()-2*b.historyPadding-
 3+"px"})):(b.isPlaylistSliderInitialized&&(a.audio6_html5_sliderVertical.slider("destroy"),b.isPlaylistSliderInitialized=!1),f(".thumbsHolder_ThumbOFF",d).css({width:d.width()-2*b.historyPadding+"px"}));h.mousewheel(function(d,f,h,k){d.preventDefault();d=a.audio6_html5_sliderVertical.slider("value");if(1<parseInt(d)&&-1==parseInt(f)||100>parseInt(d)&&1==parseInt(f))d+=f,a.audio6_html5_sliderVertical.slider("value",d),L(d,a,b,e)});e.css({top:"0px"})}}function Q(a){a=a.toLowerCase();a=a.replace(/\b[a-z]/g,
 function(a){return a.toUpperCase()});a=a.replace(/&Apos;/gi,"'");a=a.replace(/&Amp;/gi,"&");return a=a.replace(/'[A-Z]/g,function(a){return a.toLowerCase()})}function R(a,b){a=String(a);var d="";if(a.length>b){a=a.substring(0,b);var e=a.split(" ");var f=a.substring(b-2,b-1);""!=f&&(e.pop(),d="...");a=e.join(" ")}a=Q(a);return a+d}function U(){f("audio").each(function(){f(".AudioPlay").removeClass("AudioPause");f(this)[0].pause()})}function S(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var b=
 navigator.userAgent,d=/MSIE ([0-9]{1,}[.0-9]{0,})/;null!=d.exec(b)&&(a=parseFloat(RegExp.$1))}else"Netscape"==navigator.appName&&(b=navigator.userAgent,d=/Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/,null!=d.exec(b)&&(a=parseFloat(RegExp.$1)));return parseInt(a,10)}function V(a){var b=!1;document.getElementById(a.audioID).canPlayType&&"no"!=document.getElementById(a.audioID).canPlayType("audio/mpeg")&&""!=document.getElementById(a.audioID).canPlayType("audio/mpeg")||(b=!0);return b}var I=navigator.userAgent.toLowerCase();
 f.fn.audio6_html5=function(a){a=f.extend({},f.fn.audio6_html5.defaults,a);S();return this.each(function(){var b=f(this),d=f('<div class="frameBehindText"></div><div class="frameBehindButtons"></div> <div class="ximage"></div> <div class="AudioControls"> <a class="AudioCloseBut" title="Minimize"></a><a class="AudioFacebook" title="Facebook"></a><a class="AudioTwitter" title="Twitter"></a><a class="AudioPlay" title="Play/Pause"></a><a class="AudioShowHidePlaylist" title="Show/Hide Playlist"></a><a class="VolumeButton" title="Mute/Unmute"></a><div class="VolumeSlider"></div>   </div>   <div class="songTitle"><div class="songTitleInside"></div></div>  <div class="songAuthorLineSeparator"></div>  <div class="songAuthor"></div>  <div class="radioStation"></div>     <div class="thumbsHolderWrapper"><div class="historyPadding">  <div class="historyTitle"></div> <div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div></div>  <div class="slider-vertical"></div>'),
 e=b.parent(".audio6_html5");e.addClass(a.skin);e.append(d);var u=f(".frameBehindText",e),h=f(".frameBehindButtons",e);f(".AudioControls",e);var x=f(".AudioFacebook",e),l=f(".AudioTwitter",e),k=f(".AudioPlay",e),t=f(".AudioShowHidePlaylist",e),m=f(".VolumeButton",e),r=f(".VolumeSlider",e),v=f(".AudioCloseBut",e),A=f(".songTitle",e),y=f(".songTitleInside",e),z=f(".songAuthor",e),g=f(".songAuthorLineSeparator",e),p=f(".radioStation",e),q=f(".ximage",e),n=f(".historyTitle",e);e.wrap("<div class='the_wrapper'></div>");
 var C=e.parent(),B=S();if(-1!=I.indexOf("ipad")||-1!=I.indexOf("iphone")||-1!=I.indexOf("ipod")||-1!=I.indexOf("webos")||-1!=navigator.userAgent.indexOf("Android"))a.autoPlay=!1;e.css({background:"transparent"});var c={current_img_no:0,origID:0,is_very_first:!0,total_images:0,gen_total_images:0,is_changeSrc:!1,timeupdateInterval:"",totalTime:"",playlist_arr:"",playlist_images_arr:"",isCarouselScrolling:!1,isHistoryGenerated:!1,isStationTitleInsideScrolling:!1,curTitle:"",prevTitle:"",cur_song_image:"",
 prev_song_image:"",curSongText:"",curSongAuthorText:"",stationTitleInsideWait:0,audioPlayerWidth:0,audioPlayerHeight:0,wrapperHeight:0,temp_showHistoryBut:!0,historyButWidth:0,isRadiojar:!1,historyInitialHeight:90,thumbsHolder_Thumb:f('<div class="thumbsHolder_ThumbOFF" rel="0"><div class="padding">test</div></div>'),thumbsHolder_ThumbHeight:0,thumbsHolder_Thumbs:"",constantDistance:0,titleWidth:0,radioStationTopPos:0,radioStationLeftPos:0,titleTopPos:0,titleLeftPos:0,lineSeparatorTopPos:0,lineSeparatorLeftPos:0,
 authorTopPos:0,authorLeftPos:0,minimizeTopPos:0,minimizeRightPos:0,isMinified:!1,imageTopPos:0,imageLeftPos:0,frameBehindButtonsTopPos:0,frameBehindButtonsLeftPos:0,frameBehindTextTopPos:0,frameBehindTextLeftPos:0,playTopPos:0,playLeftPos:0,volumeTopPos:0,volumeRightPos:0,volumesliderTopPos:0,volumesliderLeftPos:0,showhidehistoryTopPos:0,showhideplaylistRightPos:0,smallButtonDistance:4,playVerticalPadding:10,playHorizontalPadding:16,facebookTopPos:0,facebookRightPos:0,twitterTopPos:0,twitterRightPos:0,
 origParentFloat:"",origParentPaddingTop:"",origParentPaddingRight:"",origParentPaddingBottom:"",origParentPaddingLeft:"",windowWidth:0,audioID:"",audioObj:"",radioReaderAjaxInterval:"",totalRadioStationsNo:0,ajaxReturnedRadioStationsNo:0,lastfm:"",isFlashNeeded:!0,myFlashObject:"",rndNum:0,prevVolumeVal:1,myregexp:/^http:\/\/(.*):(.*)\/(.*)$/,myregexp_radiojar:/^http:\/\/(.*)\/(.*)$/,ip:"",port:"",mount_point:"",now_playing_current_k:-1,now_playing_found:!1,now_playing_arr_lenght:0,now_playing_arr:["stats?sid=1",
 "7.html","status-json.xsl","status.xsl"],history_current_k:0,history_arr:["played.html"]};a.sticky||(a.startMinified=!1);a.showOnlyPlayButton&&(a.startMinified=!1,a.showFacebookBut=!1,a.showVolume=!1,a.showTwitterBut=!1,a.showRadioStation=!1,a.showTitle=!1,a.showHistoryBut=!1,a.showHistory=!1,a.playerWidth=k.width()+2*c.playHorizontalPadding,a.historyPadding=0);a.origWidth=a.playerWidth;c.temp_showHistoryBut=a.showHistoryBut;a.grabLastFmPhoto&&(d=new LastFMCache,c.lastfm=new LastFM({apiKey:a.lastFMApiKey,
 apiSecret:a.lastFMSecret,cache:d}));c.now_playing_arr_lenght=Object.keys(c.now_playing_arr).length;c.audioID=b.attr("id");c.isFlashNeeded=V(c);-1!=B&&(c.isFlashNeeded=!0);a.showFacebookBut&&(window.fbAsyncInit=function(){FB.init({appId:a.facebookAppID,version:"v2.8",status:!0,cookie:!0,xfbml:!0})},function(a,b,c){var d=a.getElementsByTagName(b)[0];a.getElementById(c)||(a=a.createElement(b),a.id=c,a.src="//connect.facebook.com/en_US/sdk.js",d.parentNode.insertBefore(a,d))}(document,"script","facebook-jssdk"),
 x.click(function(){FB.ui({method:"feed",name:a.facebookShareTitle,caption:a.radio_name,description:a.facebookShareDescription,link:document.URL,picture:a.facebookShareImage},function(a){})}));a.showTwitterBut&&l.click(function(){window.open("https://twitter.com/intent/tweet?url="+document.URL+"&text="+a.radio_name,"Twitter","status = 1, left = 430, top = 270, height = 550, width = 420, resizable = 0")});N("block",c,a,e,H,w,D,E,k,z,A,y,p,b,q,C,n,u,g,h,v,t,r,m,l,x);c.audioPlayerHeight=q.height()+u.height()+
 h.height();a.showOnlyPlayButton&&(c.audioPlayerHeight=k.height()+2*c.playVerticalPadding);e.height(c.audioPlayerHeight);if(a.startMinified||a.showOnlyPlayButton)c.historyInitialHeight=0;c.wrapperHeight=c.audioPlayerHeight+c.historyInitialHeight+a.historyTopPos;a.showHistory&&a.showHistoryOnInit||(c.wrapperHeight=c.audioPlayerHeight);C.css({border:a.playerBorderSize+"px solid "+a.playerBorderColor,width:e.width()+"px",height:c.wrapperHeight+"px"});a.centerPlayer&&C.css({margin:"0 auto"});var w=f(".thumbsHolderWrapper",
 e),E=f(".historyPadding",e),D=f(".thumbsHolderVisibleWrapper",e),H=f(".thumbsHolder",e);c.audio6_html5_sliderVertical=f(".slider-vertical",e);E.css({padding:a.historyPadding+"px"});D.append('<div class="readingData">'+a.translateReadingData+"</div>");n.width(a.playerWidth-2*a.historyPadding);n.html(a.historyTranslate);n.css({color:a.historyTitleColor});a.showHistory||w.css({opacity:0});a.showHistoryOnInit||w.css({opacity:0,"margin-top":"-20px"});w.css({width:e.width()+"px",top:c.audioPlayerHeight+
 a.historyTopPos+"px",left:"0px",background:a.historyBgColor});D.width(e.width());a.sticky&&(C.addClass("audio6_html5_sticky_div"),v.click(function(){var d=500;if(c.isMinified){c.isMinified=!1;v.removeClass("AudioOpenBut");var f="block";c.temp_showHistoryBut=a.showHistoryBut;c.audioPlayerHeight=parseInt(a.playerWidth/a.origWidth*a.imageHeight,10)+u.height()+h.height();var B=0>w.css("margin-top").substring(0,w.css("margin-top").length-2)?c.audioPlayerHeight:c.audioPlayerHeight+w.height()+a.historyTopPos}else c.isMinified=
 !0,v.addClass("AudioOpenBut"),f="none",c.audioPlayerHeight=u.height()+h.height(),B=c.audioPlayerHeight,c.temp_showHistoryBut=!1;N(f,c,a,e,H,w,D,E,k,z,A,y,p,b,q,C,n,u,g,h,v,t,r,m,l,x);q.css({display:f});a.startMinified?(d=0,a.startMinified=!1):d=500;w.css({display:f,top:c.audioPlayerHeight+a.historyTopPos+"px"});c.gen_total_images>a.numberOfThumbsPerScreen&&c.audio6_html5_sliderVertical.css({display:f,top:c.audioPlayerHeight+a.historyTopPos+2*a.historyPadding+2+n.height()+"px"});C.animate({height:B},
 d,"easeOutQuad",function(){})}));r.slider({value:a.initialVolume,step:.05,orientation:"horizontal",range:"min",max:1,animate:!0,slide:function(b,d){a.initialVolume=d.value;c.isFlashNeeded?c.myFlashObject.myAS3function(J(c,a,H,e),a.initialVolume):document.getElementById(c.audioID).volume=d.value},stop:function(a,b){}});document.getElementById(c.audioID).volume=a.initialVolume;r.css({background:a.volumeOffColor});f(".ui-slider-range",r).css({background:a.volumeOnColor});k.click(function(){var b=c.isFlashNeeded?
 !k.hasClass("AudioPause"):document.getElementById(c.audioID).paused;U();0==b?(c.isFlashNeeded?c.myFlashObject.myAS3function("_pause_radio_stream_",a.initialVolume):document.getElementById(c.audioID).pause(),k.removeClass("AudioPause")):(c.isFlashNeeded?c.myFlashObject.myAS3function("_play_radio_stream_",a.initialVolume):(document.getElementById(c.audioID).src=J(c,a,H,e),document.getElementById(c.audioID).load(),document.getElementById(c.audioID).play()),k.addClass("AudioPause"))});t.click(function(){0>
 w.css("margin-top").substring(0,w.css("margin-top").length-2)?(aux_opacity=1,aux_display="block",aux_margin_top="0px",aux_height=c.audioPlayerHeight+w.height()+a.historyTopPos,w.css({display:aux_display}),c.gen_total_images>a.numberOfThumbsPerScreen&&c.audio6_html5_sliderVertical.css({opacity:1,display:"block"})):(aux_opacity=0,aux_display="none",aux_margin_top="-20px",c.gen_total_images>a.numberOfThumbsPerScreen&&c.audio6_html5_sliderVertical.css({opacity:0,display:"none"}),aux_height=c.audioPlayerHeight);
 w.css({"z-index":-1});w.animate({opacity:aux_opacity,"margin-top":aux_margin_top},500,"easeOutQuad",function(){w.css({display:aux_display,"z-index":"auto"})});C.animate({height:aux_height},500,"easeOutQuad",function(){})});m.click(function(){document.getElementById(c.audioID).muted?(document.getElementById(c.audioID).muted=!1,m.removeClass("VolumeButtonMuted"),c.isFlashNeeded&&(a.initialVolume=c.prevVolumeVal,c.myFlashObject.myAS3function(J(c,a,H,e),a.initialVolume))):(document.getElementById(c.audioID).muted=
 !0,m.addClass("VolumeButtonMuted"),c.isFlashNeeded&&(c.prevVolumeVal=a.initialVolume,a.initialVolume=0,c.myFlashObject.myAS3function(J(c,a,H,e),a.initialVolume)))});w.swipe({swipeStatus:function(b,d,e,g,h,k){"up"!=e&&"down"!=e||0==g||(currentScrollVal=c.audio6_html5_sliderVertical.slider("value"),currentScrollVal="up"==e?currentScrollVal-1.5:currentScrollVal+1.5,c.audio6_html5_sliderVertical.slider("value",currentScrollVal),f("html, body").off("touchstart touchmove").on("touchstart touchmove",function(a){a.preventDefault()}),
 L(currentScrollVal,c,a,H))},threshold:100,maxTimeThreshold:500,fingers:"all",allowPageScroll:"none",preventDefaultEvents:!1});c.isFlashNeeded&&(c.rndNum=parseInt(998999*Math.random()+1E3),e.append("<div id='swfHolder"+c.rndNum+"'></div>"),swfobject.addDomLoadEvent(function(){c.myFlashObject=swfobject.createSWF({data:a.pathToAjaxFiles+"flash_player.swf",width:"0",height:"0"},{flashvars:"streamUrl="+a.radio_stream+"&autoPlay="+a.autoPlay+"&initialVolume="+a.initialVolume},"swfHolder"+c.rndNum)}),a.autoPlay&&
 k.addClass("AudioPause"));T(c,a,H,e,k,z,A,y,p,b,q,D,w,E,C,n,v);-1==I.indexOf("ipad")&&-1==I.indexOf("iphone")&&-1==I.indexOf("ipod")&&-1==I.indexOf("webos")||k.removeClass("AudioPause");var G=function(){""==c.origParentFloat&&(c.origParentFloat=e.parent().css("float"),c.origParentPaddingTop=e.parent().css("padding-top"),c.origParentPaddingRight=e.parent().css("padding-right"),c.origParentPaddingBottom=e.parent().css("padding-bottom"),c.origParentPaddingLeft=e.parent().css("padding-left"));a.playerWidth!=
 a.origWidth||a.playerWidth>f(window).width()?e.parent().css({"float":"none","padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0}):e.parent().css({"float":c.origParentFloat,"padding-top":c.origParentPaddingTop,"padding-right":c.origParentPaddingRight,"padding-bottom":c.origParentPaddingBottom,"padding-left":c.origParentPaddingLeft});var d=e.parent().parent().width();if(e.width()!=d){a.playerWidth=a.origWidth>d?d:a.origWidth;if(e.width()!=a.playerWidth){N("block",c,a,e,H,w,D,E,k,z,
 A,y,p,b,q,C,n,u,g,h,v,t,r,m,l,x);c.audioPlayerHeight=q.height()+u.height()+h.height();c.isMinified&&(c.audioPlayerHeight=u.height()+h.height());e.height(c.audioPlayerHeight);c.wrapperHeight=c.audioPlayerHeight+w.height()+a.historyTopPos;if(!a.showHistory||!a.showHistoryOnInit||c.isMinified||0>w.css("margin-top").substring(0,w.css("margin-top").length-2))c.wrapperHeight=c.audioPlayerHeight;C.css({width:e.width()+"px",height:c.wrapperHeight+"px"});n.width(a.playerWidth-2*a.historyPadding);w.css({width:e.width()+
 "px",top:c.audioPlayerHeight+a.historyTopPos+"px"});D.width(e.width());K(c,a,e,H,w,D,E,k,z,A,y,p,b,q,C,n)}a.playerWidth<f(window).width()&&e.parent().css({"float":c.origParentFloat,"padding-top":c.origParentPaddingTop,"padding-right":c.origParentPaddingRight,"padding-bottom":c.origParentPaddingBottom,"padding-left":c.origParentPaddingLeft})}},F=!1;f(window).resize(function(){doResizeNow=!0;-1!=B&&9==B&&0==c.windowWidth&&(doResizeNow=!1);c.windowWidth==f(window).width()?(doResizeNow=!1,a.windowCurOrientation!=
 window.orientation&&-1!=navigator.userAgent.indexOf("Android")&&(a.windowCurOrientation=window.orientation,doResizeNow=!0)):c.windowWidth=f(window).width();a.responsive&&doResizeNow&&(!1!==F&&clearTimeout(F),F=setTimeout(function(){G()},300))});a.responsive&&G()})};f.fn.audio6_html5.defaults={radio_stream:"http://194.232.200.150:80/;",radio_name:"Idobi Anthm",playerWidth:335,imageHeight:335,skin:"whiteControllers",initialVolume:1,autoPlay:!0,loop:!0,playerBg:"#000000",volumeOffColor:"#454545",volumeOnColor:"#ffffff",
 timerColor:"#ffffff",songTitleColor:"#ffffff",authorTitleColor:"#ffffff",lineSeparatorColor:"#636363",radioStationColor:"#ffffff",frameBehindTextColor:"#000000",frameBehindButtonsColor:"#454545",playerBorderSize:0,playerBorderColor:"#000000",sticky:!1,startMinified:!1,showOnlyPlayButton:!1,centerPlayer:!1,showFacebookBut:!0,facebookAppID:"",facebookShareTitle:"HTML5 Radio Player With History - Shoutcast and Icecast",facebookShareDescription:"A top-notch responsive HTML5 Radio Player compatible with all major browsers and mobile devices.",
 facebookShareImage:"",showVolume:!0,showTwitterBut:!0,showRadioStation:!0,showTitle:!0,showHistoryBut:!0,showHistory:!0,showHistoryOnInit:!0,translateReadingData:"reading history...",historyTranslate:"HISTORY - latest played songs",historyTitleColor:"#858585",historyTopPos:0,historyBgColor:"#ebebeb",historyRecordBgColor:"transparent",historyRecordBottomBorderColor:"transparent",historyRecordSongColor:"#000000",historyRecordSongBottomBorderColor:"#d0d0d0",historyRecordAuthorColor:"#6d6d6d",numberOfThumbsPerScreen:3,
 historyPadding:16,responsive:!0,historyRecordTitleLimit:25,historyRecordAuthorLimit:36,nowPlayingInterval:35,grabLastFmPhoto:!0,pathToAjaxFiles:"",noImageAvailable:"noimageavailable.jpg",lastFMApiKey:"6d38069793ab51b1f7f010d8f4d77000",lastFMSecret:"5f1bb73c21038e2ed7125c9ed6205cb8",origWidth:0,isSliderInitialized:!1,isProgressInitialized:!1,isPlaylistSliderInitialized:!1}})(jQuery);
