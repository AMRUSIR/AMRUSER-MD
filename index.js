// CURRENTLY RUNNING ON BETA VERSION!!
/**
   * MIT License
* 
   * Copyright (c) 2022 prince-rudh.
* 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
* 
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
*/

                                                                                                                                                                                                                                                                           function _0x1149(){const _0x144c74=['Connected...','notify','sendButtonText','connectionClosed','Session\x20File\x20is\x20Currept,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','messages','isBuffer','./lib/exif','ignore','\x0aFN:','Connection\x20TimedOut,\x20Reconnecting...','sendTextWithMentions','5300603afyzhE','store','pino','./config','owner','sendText','set','includes','ext','./lib/myfunc','file-type','keys','endsWith','\x0aitem5.X-ABLabel:YouTube\x0aEND:VCARD','asSticker','private','getFile','matchAll','CB:call','subject','sendMessage','msg','WhatsApp','creds.update','statusCode','insta','chat','stringify','youtube','₢ᴘʀɪɴᴄᴇ\x20ʀᴜᴅʜ','json','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','yargs/yargs','server','readViewOnce','downloadAndSaveMediaMessage','call-creator','\x0aitem3.URL:','relayMessage','Safari','international','status@broadcast','user','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','remoteJid','audio','concat','Message','node-fetch','setStatus','restartRequired','297309eAFYUT','../src/','verifiedName','writeFileSync','type','connection.update','promises','cMod','watchFile','unwatchFile','text','APIKeys','@hapi/boom','unlink','sendVideo','length','waUploadToServer','3999984RLSVfQ','mimetype','badSession','startsWith','author','content','asDocument','40593664iFfIge','image','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','decodeJid','tag','path','test','\x20Contact','message','close','downloadMediaMessage','document','6965300rvISmB','updateBlockStatus','writeFile','BEGIN:VCARD\x0aVERSION:3.0\x0aN:PRINCE\x20RUDH\x0aFN: PRINCE\x0aitem1.TEL;waid=','status','base64','resolve','sticker','mail','connectionLost','withoutContact','5363084siKDcw','0@s.whatsapp.net','serializeM','replace','Unknown\x20DisconnectReason:\x20','name','silent','@broadcast','sendImageAsSticker','sendVideoAsSticker','\x0aitem1.X-ABLabel:WhatsApp\x0aitem2.EMAIL;type=INTERNET:','viewOnceMessage','sendFontact','redBright','entries','push','\x0aitem1.X-ABLabel:WhatsApp\x0aitem2.EMAIL;type=INTERNET: princerudh3@gmail.com\x0aitem3.URL:https://www.instagram.com/princerudh/\x0aitem3.X-ABLabel:Instagram\x0aitem4.URL:https://github.com/prince-rudh//\x0aitem4.X-ABLabel:GitHub\x0aitem5.URL:','messages.upsert','key','query','child','logout','participant','imageMessage','public','fromObject','APIs','readFileSync','caption','getName','./rudh','alloc','ephemeralMessage','./session.rudh.json','categories','getNumber','from','split','existsSync','worktype','string','output','chalk','groupMetadata','video','cache','WebMessageInfo','fromBuffer','then','28zlOxqn','152469ZBtdkK','mtype','https://pastebin.com/raw/','Connection\x20closed,\x20reconnecting....','contacts','@s.whatsapp.net','offer','5f4ilKJVJG-0xbJTXesajw64LgSAAo-L','log','viewOnce','packname','BAE5','fromMe','contextInfo','contacts.update','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First'];_0x1149=function(){return _0x144c74;};return _0x1149();}const _0x2dc328=_0x176d;(function(_0x4bbb13,_0x3d817b){const _0x152cda=_0x176d,_0x33ee81=_0x4bbb13();while(!![]){try{const _0x5c19b3=-parseInt(_0x152cda(0x7d))/0x1+parseInt(_0x152cda(0x7c))/0x2*(-parseInt(_0x152cda(0xcc))/0x3)+-parseInt(_0x152cda(0xfb))/0x4+-parseInt(_0x152cda(0xf0))/0x5+parseInt(_0x152cda(0xdd))/0x6+-parseInt(_0x152cda(0x99))/0x7+parseInt(_0x152cda(0xe4))/0x8;if(_0x5c19b3===_0x3d817b)break;else _0x33ee81['push'](_0x33ee81['shift']());}catch(_0x306226){_0x33ee81['push'](_0x33ee81['shift']());}}}(_0x1149,0xad50d),require(_0x2dc328(0x9c)));const {default:rudhConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require('@adiwajshing/baileys'),fetch=require(_0x2dc328(0xc9)),pino=require(_0x2dc328(0x9b)),{Boom}=require(_0x2dc328(0xd8)),fs=require('fs'),yargs=require(_0x2dc328(0xb9)),chalk=require(_0x2dc328(0x75)),FileType=require(_0x2dc328(0xa3)),path=require(_0x2dc328(0xe9)),PhoneNumber=require('awesome-phonenumber'),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x2dc328(0x94)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x2dc328(0xa2)),PastebinAPI=require('pastebin-js'),pastebin=new PastebinAPI(_0x2dc328(0x84));function _0x176d(_0x270d2b,_0x2d80a5){const _0x114962=_0x1149();return _0x176d=function(_0x176dbe,_0x311f4a){_0x176dbe=_0x176dbe-0x70;let _0x2a99ec=_0x114962[_0x176dbe];return _0x2a99ec;},_0x176d(_0x270d2b,_0x2d80a5);}let remsession=global['session'],pastbin=atob(''+remsession);fetch(_0x2dc328(0x7f)+pastbin)['then'](_0x14dbc9=>_0x14dbc9[_0x2dc328(0xb7)]())[_0x2dc328(0x7b)](_0x2b1120=>{const _0x3c943a=_0x2dc328;!fs[_0x3c943a(0x71)](_0x3c943a(0x11c))&&fs[_0x3c943a(0xcf)]('./session.rudh.json',JSON[_0x3c943a(0xb4)](_0x2b1120));})['catch'](_0x4dbb68=>{console['log'](_0x4dbb68);});let developerName=_0x2dc328(0xb6),idmail=global[_0x2dc328(0xf8)],instagramID=global[_0x2dc328(0xb2)],GitHubID=global['github'],YouTubeID=global[_0x2dc328(0xb5)],worktype=global[_0x2dc328(0x72)];global['api']=(_0x370489,_0x19f58b='/',_0x57b945={},_0x1b6475)=>(_0x370489 in global['APIs']?global['APIs'][_0x370489]:_0x370489)+_0x19f58b+(_0x57b945||_0x1b6475?'?'+new URLSearchParams(Object[_0x2dc328(0x109)]({..._0x57b945,..._0x1b6475?{[_0x1b6475]:global[_0x2dc328(0xd7)][_0x370489 in global[_0x2dc328(0x115)]?global[_0x2dc328(0x115)][_0x370489]:_0x370489]}:{}})):'');const store=makeInMemoryStore({'logger':pino()[_0x2dc328(0x10f)]({'level':'silent','stream':_0x2dc328(0x9a)})});setTimeout(()=>{const _0x1d445b=_0x2dc328,{state:_0x4abd01,saveState:_0x2f22cc}=useSingleFileAuthState(_0x1d445b(0x11c));async function _0x3bd6d5(){const _0x2fa580=_0x1d445b;let _0x3f2163=[0x3,0xca2,0x9];const _0x24d514=rudhConnect({'logger':pino({'level':_0x2fa580(0x101)}),'printQRInTerminal':![],'browser':['ᴘʀɪɴᴄᴇ\x20ʀᴜᴅʜ-ᴍᴅ',_0x2fa580(0xc0),'1.0.0'],'auth':_0x4abd01,'version':_0x3f2163});return store['bind'](_0x24d514['ev']),_0x24d514['ws']['on'](_0x2fa580(0xab),async _0x28aeba=>{const _0x27e643=_0x2fa580,_0x5ee068=_0x28aeba[_0x27e643(0xe2)][0x0]['attrs'][_0x27e643(0xbd)];if(_0x28aeba[_0x27e643(0xe2)][0x0][_0x27e643(0xe8)]==_0x27e643(0x83)){let _0x5ec274=await _0x24d514['sendContact'](_0x5ee068,global[_0x27e643(0x9d)]);_0x24d514[_0x27e643(0xad)](_0x5ee068,{'text':'You\x20are\x20automatically\x20Blocked!Don\x27t\x20call\x20bot!Please\x20contact\x20the\x20owner\x20to\x20open\x20it!'},{'quoted':_0x5ec274}),await sleep(0x1f40),await _0x24d514[_0x27e643(0xf1)](_0x5ee068,'block');}}),_0x24d514['ev']['on'](_0x2fa580(0x10c),async _0x2c0716=>{const _0x47a3f6=_0x2fa580;try{mek=_0x2c0716[_0x47a3f6(0x92)][0x0];if(!mek[_0x47a3f6(0xec)])return;mek[_0x47a3f6(0xec)]=Object[_0x47a3f6(0xa4)](mek[_0x47a3f6(0xec)])[0x0]===_0x47a3f6(0x11b)?mek[_0x47a3f6(0xec)][_0x47a3f6(0x11b)][_0x47a3f6(0xec)]:mek[_0x47a3f6(0xec)];if(mek['key']&&mek[_0x47a3f6(0x10d)][_0x47a3f6(0xc5)]===_0x47a3f6(0xc2))return;if(!_0x24d514[_0x47a3f6(0x113)]&&!mek[_0x47a3f6(0x10d)][_0x47a3f6(0x89)]&&_0x2c0716[_0x47a3f6(0xd0)]===_0x47a3f6(0x8e))return;if(mek[_0x47a3f6(0x10d)]['id'][_0x47a3f6(0xe0)](_0x47a3f6(0x88))&&mek['key']['id'][_0x47a3f6(0xdb)]===0x10)return;m=smsg(_0x24d514,mek,store),require(_0x47a3f6(0x119))(_0x24d514,m,_0x2c0716,store);}catch(_0x24ffa7){console[_0x47a3f6(0x85)](_0x24ffa7);}}),_0x24d514[_0x2fa580(0xe7)]=_0x48fc9d=>{const _0x2dc439=_0x2fa580;if(!_0x48fc9d)return _0x48fc9d;if(/:\d+@/gi[_0x2dc439(0xea)](_0x48fc9d)){let _0x555ffa=jidDecode(_0x48fc9d)||{};return _0x555ffa[_0x2dc439(0xc3)]&&_0x555ffa[_0x2dc439(0xba)]&&_0x555ffa['user']+'@'+_0x555ffa[_0x2dc439(0xba)]||_0x48fc9d;}else return _0x48fc9d;},_0x24d514['ev']['on'](_0x2fa580(0x8b),_0x1b77d8=>{const _0x12887a=_0x2fa580;for(let _0xce2aa4 of _0x1b77d8){let _0x3a8d9c=_0x24d514['decodeJid'](_0xce2aa4['id']);if(store&&store[_0x12887a(0x81)])store[_0x12887a(0x81)][_0x3a8d9c]={'id':_0x3a8d9c,'name':_0xce2aa4[_0x12887a(0x8e)]};}}),_0x24d514['getName']=(_0x37a3c8,_0x5f416c=![])=>{const _0x2901d7=_0x2fa580;id=_0x24d514[_0x2901d7(0xe7)](_0x37a3c8),_0x5f416c=_0x24d514[_0x2901d7(0xfa)]||_0x5f416c;let _0x5f2c10;if(id[_0x2901d7(0xa5)]('@g.us'))return new Promise(async _0x4db81a=>{const _0x4d72e3=_0x2901d7;_0x5f2c10=store[_0x4d72e3(0x81)][id]||{};if(!(_0x5f2c10[_0x4d72e3(0x100)]||_0x5f2c10[_0x4d72e3(0xac)]))_0x5f2c10=_0x24d514[_0x4d72e3(0x76)](id)||{};_0x4db81a(_0x5f2c10[_0x4d72e3(0x100)]||_0x5f2c10[_0x4d72e3(0xac)]||PhoneNumber('+'+id['replace']('@s.whatsapp.net',''))[_0x4d72e3(0x11e)](_0x4d72e3(0xc1)));});else _0x5f2c10=id===_0x2901d7(0xfc)?{'id':id,'name':_0x2901d7(0xaf)}:id===_0x24d514[_0x2901d7(0xe7)](_0x24d514['user']['id'])?_0x24d514[_0x2901d7(0xc3)]:store['contacts'][id]||{};return(_0x5f416c?'':_0x5f2c10[_0x2901d7(0x100)])||_0x5f2c10['subject']||_0x5f2c10[_0x2901d7(0xce)]||PhoneNumber('+'+_0x37a3c8['replace'](_0x2901d7(0x82),''))['getNumber'](_0x2901d7(0xc1));},_0x24d514['sendContact']=async(_0x416c3f,_0x151a40,_0x1a3704='',_0xbe9da5={})=>{const _0xe38792=_0x2fa580;let _0x1a82cd=[];for(let _0x4bad65 of _0x151a40){_0x1a82cd[_0xe38792(0x10a)]({'displayName':await _0x24d514[_0xe38792(0x118)](_0x4bad65+_0xe38792(0x82)),'vcard':_0xe38792(0xb8)+await _0x24d514[_0xe38792(0x118)](_0x4bad65+_0xe38792(0x82))+_0xe38792(0x96)+await _0x24d514['getName'](_0x4bad65+'@s.whatsapp.net')+'\x0aitem1.TEL;waid='+_0x4bad65+':'+_0x4bad65+_0xe38792(0x105)+idmail+_0xe38792(0xbe)+instagramID+'\x0aitem3.X-ABLabel:Instagram\x0aitem4.URL:'+GitHubID+'/\x0aitem4.X-ABLabel:GitHub\x0aitem5.URL:'+YouTubeID+_0xe38792(0xa6)});}_0x24d514[_0xe38792(0xad)](_0x416c3f,{'contacts':{'displayName':_0x1a82cd['length']+_0xe38792(0xeb),'contacts':_0x1a82cd},..._0xbe9da5},{'quoted':_0x1a3704});},_0x24d514[_0x2fa580(0x107)]=async(_0x12e684,_0x5077ef,_0x3ecd78='',_0x52d7ee={})=>{const _0x46b491=_0x2fa580;let _0x54d462=[];for(let _0x5f4d74 of _0x5077ef){_0x54d462['push']({'displayName':_0x46b491(0xb6),'vcard':_0x46b491(0xf3)+_0x5f4d74+':'+_0x5f4d74+_0x46b491(0x10b)+YouTubeID+_0x46b491(0xa6)});}_0x24d514[_0x46b491(0xad)](_0x12e684,{'contacts':{'displayName':_0x46b491(0xb6),'contacts':_0x54d462},..._0x52d7ee},{'quoted':_0x3ecd78});},_0x24d514[_0x2fa580(0xca)]=_0x4fab0c=>{const _0x424746=_0x2fa580;return _0x24d514[_0x424746(0x10e)]({'tag':'iq','attrs':{'to':_0x424746(0x82),'type':_0x424746(0x9f),'xmlns':_0x424746(0xf4)},'content':[{'tag':_0x424746(0xf4),'attrs':{},'content':Buffer[_0x424746(0x11f)](_0x4fab0c,'utf-8')}]}),_0x4fab0c;},worktype===_0x2fa580(0x113)&&(_0x24d514[_0x2fa580(0x113)]=!![]),worktype===_0x2fa580(0xa8)&&(_0x24d514[_0x2fa580(0x113)]=![]),_0x24d514[_0x2fa580(0xfd)]=_0x369567=>smsg(_0x24d514,_0x369567,store),_0x24d514['ev']['on'](_0x2fa580(0xd1),async _0x13a668=>{const _0x4f6657=_0x2fa580,{connection:_0x53326f,lastDisconnect:_0x13be95}=_0x13a668;if(_0x53326f===_0x4f6657(0xed)){let _0xa1da05=new Boom(_0x13be95?.['error'])?.[_0x4f6657(0x74)][_0x4f6657(0xb1)];if(_0xa1da05===DisconnectReason[_0x4f6657(0xdf)])console[_0x4f6657(0x85)](_0x4f6657(0x91)),_0x24d514[_0x4f6657(0x110)]();else{if(_0xa1da05===DisconnectReason[_0x4f6657(0x90)])console['log'](_0x4f6657(0x80)),_0x3bd6d5();else{if(_0xa1da05===DisconnectReason[_0x4f6657(0xf9)])console['log'](_0x4f6657(0xe6)),_0x3bd6d5();else{if(_0xa1da05===DisconnectReason['connectionReplaced'])console['log'](_0x4f6657(0x8c)),_0x24d514[_0x4f6657(0x110)]();else{if(_0xa1da05===DisconnectReason['loggedOut'])console[_0x4f6657(0x85)](_0x4f6657(0xc4)),_0x24d514[_0x4f6657(0x110)]();else{if(_0xa1da05===DisconnectReason[_0x4f6657(0xcb)])console[_0x4f6657(0x85)]('Restart\x20Required,\x20Restarting...'),_0x3bd6d5();else{if(_0xa1da05===DisconnectReason['timedOut'])console[_0x4f6657(0x85)](_0x4f6657(0x97)),_0x3bd6d5();else _0x24d514['end'](_0x4f6657(0xff)+_0xa1da05+'|'+_0x53326f);}}}}}}}console[_0x4f6657(0x85)](_0x4f6657(0x8d),_0x13a668);}),_0x24d514['ev']['on'](_0x2fa580(0xb0),_0x2f22cc),_0x24d514['send5ButImg']=async(_0x3ee4b9,_0x4cb5f7='',_0x4dea2d='',_0x152e34,_0x29ed77=[],_0x53d9ed={})=>{const _0x398281=_0x2fa580;let _0x4a53a9=await prepareWAMessageMedia({'image':_0x152e34},{'upload':_0x24d514[_0x398281(0xdc)]});var _0x482786=generateWAMessageFromContent(m[_0x398281(0xb3)],proto[_0x398281(0xc8)][_0x398281(0x114)]({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x4a53a9[_0x398281(0x112)],'hydratedContentText':_0x4cb5f7,'hydratedFooterText':_0x4dea2d,'hydratedButtons':_0x29ed77}}}),_0x53d9ed);_0x24d514[_0x398281(0xbf)](_0x3ee4b9,_0x482786[_0x398281(0xec)],{'messageId':_0x482786[_0x398281(0x10d)]['id']});},_0x24d514[_0x2fa580(0x8f)]=(_0x2a87c7,_0x5665d2=[],_0x178c1f,_0x5bcc46,_0x36c9a0='',_0x1ca6f3={})=>{const _0x2210bf=_0x2fa580;let _0x1e18f1={'text':_0x178c1f,'footer':_0x5bcc46,'buttons':_0x5665d2,'headerType':0x2,..._0x1ca6f3};_0x24d514[_0x2210bf(0xad)](_0x2a87c7,_0x1e18f1,{'quoted':_0x36c9a0,..._0x1ca6f3});},_0x24d514[_0x2fa580(0x9e)]=(_0xb8bd03,_0x5425dd,_0x321245='',_0x359377)=>_0x24d514[_0x2fa580(0xad)](_0xb8bd03,{'text':_0x5425dd,..._0x359377},{'quoted':_0x321245}),_0x24d514['sendImage']=async(_0x4deea7,_0x2eebd6,_0x778eb0='',_0x203459='',_0x33f30c)=>{const _0x11c053=_0x2fa580;let _0x10d843=Buffer[_0x11c053(0x93)](_0x2eebd6)?_0x2eebd6:/^data:.*?\/.*?;base64,/i[_0x11c053(0xea)](_0x2eebd6)?Buffer[_0x11c053(0x11f)](_0x2eebd6[_0x11c053(0x70)]`,`[0x1],_0x11c053(0xf5)):/^https?:\/\//[_0x11c053(0xea)](_0x2eebd6)?await await getBuffer(_0x2eebd6):fs['existsSync'](_0x2eebd6)?fs['readFileSync'](_0x2eebd6):Buffer[_0x11c053(0x11a)](0x0);return await _0x24d514[_0x11c053(0xad)](_0x4deea7,{'image':_0x10d843,'caption':_0x778eb0,..._0x33f30c},{'quoted':_0x203459});},_0x24d514[_0x2fa580(0xda)]=async(_0x4ed8eb,_0x46f483,_0x5948c8='',_0x6e46ce='',_0x579e0e=![],_0x279068)=>{const _0x3d215c=_0x2fa580;let _0x2e4e5f=Buffer[_0x3d215c(0x93)](_0x46f483)?_0x46f483:/^data:.*?\/.*?;base64,/i[_0x3d215c(0xea)](_0x46f483)?Buffer[_0x3d215c(0x11f)](_0x46f483[_0x3d215c(0x70)]`,`[0x1],_0x3d215c(0xf5)):/^https?:\/\//['test'](_0x46f483)?await await getBuffer(_0x46f483):fs[_0x3d215c(0x71)](_0x46f483)?fs[_0x3d215c(0x116)](_0x46f483):Buffer[_0x3d215c(0x11a)](0x0);return await _0x24d514[_0x3d215c(0xad)](_0x4ed8eb,{'video':_0x2e4e5f,'caption':_0x5948c8,'gifPlayback':_0x579e0e,..._0x279068},{'quoted':_0x6e46ce});},_0x24d514['sendAudio']=async(_0x3c7030,_0x4d9b78,_0x39b84e='',_0x701607=![],_0x48b088)=>{const _0x49a4f4=_0x2fa580;let _0x21c2bd=Buffer[_0x49a4f4(0x93)](_0x4d9b78)?_0x4d9b78:/^data:.*?\/.*?;base64,/i[_0x49a4f4(0xea)](_0x4d9b78)?Buffer[_0x49a4f4(0x11f)](_0x4d9b78['split']`,`[0x1],_0x49a4f4(0xf5)):/^https?:\/\//[_0x49a4f4(0xea)](_0x4d9b78)?await await getBuffer(_0x4d9b78):fs[_0x49a4f4(0x71)](_0x4d9b78)?fs['readFileSync'](_0x4d9b78):Buffer['alloc'](0x0);return await _0x24d514['sendMessage'](_0x3c7030,{'audio':_0x21c2bd,'ptt':_0x701607,..._0x48b088},{'quoted':_0x39b84e});},_0x24d514[_0x2fa580(0x98)]=async(_0x4bd858,_0x31414c,_0x30a7c6,_0x4af667={})=>_0x24d514[_0x2fa580(0xad)](_0x4bd858,{'text':_0x31414c,'contextInfo':{'mentionedJid':[..._0x31414c[_0x2fa580(0xaa)](/@(\d{0,16})/g)]['map'](_0x26d878=>_0x26d878[0x1]+'@s.whatsapp.net')},..._0x4af667},{'quoted':_0x30a7c6}),_0x24d514[_0x2fa580(0x103)]=async(_0x2365f3,_0x50144a,_0x214083,_0x18b316={})=>{const _0x49a181=_0x2fa580;let _0x3371c5=Buffer[_0x49a181(0x93)](_0x50144a)?_0x50144a:/^data:.*?\/.*?;base64,/i['test'](_0x50144a)?Buffer[_0x49a181(0x11f)](_0x50144a[_0x49a181(0x70)]`,`[0x1],_0x49a181(0xf5)):/^https?:\/\//[_0x49a181(0xea)](_0x50144a)?await await getBuffer(_0x50144a):fs[_0x49a181(0x71)](_0x50144a)?fs[_0x49a181(0x116)](_0x50144a):Buffer[_0x49a181(0x11a)](0x0),_0x3d1a1e;return _0x18b316&&(_0x18b316[_0x49a181(0x87)]||_0x18b316['author'])?_0x3d1a1e=await writeExifImg(_0x3371c5,_0x18b316):_0x3d1a1e=await imageToWebp(_0x3371c5),await _0x24d514[_0x49a181(0xad)](_0x2365f3,{'sticker':{'url':_0x3d1a1e},..._0x18b316},{'quoted':_0x214083}),_0x3d1a1e;},_0x24d514[_0x2fa580(0x104)]=async(_0x563f00,_0x36e8d6,_0x40ddce,_0x15fb6e={})=>{const _0x4defb9=_0x2fa580;let _0x2d3403=Buffer[_0x4defb9(0x93)](_0x36e8d6)?_0x36e8d6:/^data:.*?\/.*?;base64,/i[_0x4defb9(0xea)](_0x36e8d6)?Buffer[_0x4defb9(0x11f)](_0x36e8d6['split']`,`[0x1],_0x4defb9(0xf5)):/^https?:\/\//[_0x4defb9(0xea)](_0x36e8d6)?await await getBuffer(_0x36e8d6):fs[_0x4defb9(0x71)](_0x36e8d6)?fs[_0x4defb9(0x116)](_0x36e8d6):Buffer[_0x4defb9(0x11a)](0x0),_0x4997d0;return _0x15fb6e&&(_0x15fb6e['packname']||_0x15fb6e[_0x4defb9(0xe1)])?_0x4997d0=await writeExifVid(_0x2d3403,_0x15fb6e):_0x4997d0=await videoToWebp(_0x2d3403),await _0x24d514['sendMessage'](_0x563f00,{'sticker':{'url':_0x4997d0},..._0x15fb6e},{'quoted':_0x40ddce}),_0x4997d0;},_0x24d514[_0x2fa580(0xbc)]=async(_0x33f2bb,_0x1244fd,_0xaa6a13=!![])=>{const _0x4631a1=_0x2fa580;let _0x1278e7=_0x33f2bb[_0x4631a1(0xae)]?_0x33f2bb[_0x4631a1(0xae)]:_0x33f2bb,_0x302b40=(_0x33f2bb[_0x4631a1(0xae)]||_0x33f2bb)[_0x4631a1(0xde)]||'',_0x4f8119=_0x33f2bb['mtype']?_0x33f2bb['mtype'][_0x4631a1(0xfe)](/Message/gi,''):_0x302b40['split']('/')[0x0];const _0x2b0912=await downloadContentFromMessage(_0x1278e7,_0x4f8119);let _0x2016ea=Buffer[_0x4631a1(0x11f)]([]);for await(const _0x491d3d of _0x2b0912){_0x2016ea=Buffer['concat']([_0x2016ea,_0x491d3d]);}let _0x21c1f8=await FileType[_0x4631a1(0x7a)](_0x2016ea);return trueFileName=_0xaa6a13?_0x1244fd+'.'+_0x21c1f8[_0x4631a1(0xa1)]:_0x1244fd,await fs[_0x4631a1(0xcf)](trueFileName,_0x2016ea),trueFileName;},_0x24d514[_0x2fa580(0xee)]=async _0x38b888=>{const _0x6a145b=_0x2fa580;let _0x952792=(_0x38b888[_0x6a145b(0xae)]||_0x38b888)[_0x6a145b(0xde)]||'',_0x683527=_0x38b888[_0x6a145b(0x7e)]?_0x38b888['mtype'][_0x6a145b(0xfe)](/Message/gi,''):_0x952792[_0x6a145b(0x70)]('/')[0x0];const _0x26c46d=await downloadContentFromMessage(_0x38b888,_0x683527);let _0x1d838c=Buffer[_0x6a145b(0x11f)]([]);for await(const _0x450ff9 of _0x26c46d){_0x1d838c=Buffer[_0x6a145b(0xc7)]([_0x1d838c,_0x450ff9]);}return _0x1d838c;},_0x24d514['sendMedia']=async(_0x1e92ee,_0x458704,_0x24bd66='',_0x2df780='',_0xc29c1f='',_0x35476d={})=>{const _0x312d2c=_0x2fa580;let _0x2aae02=await _0x24d514[_0x312d2c(0xa9)](_0x458704,!![]),{mime:_0x440b30,ext:_0x3f2948,res:_0x4c8e1b,data:_0x358c1f,filename:_0x307ad3}=_0x2aae02;if(_0x4c8e1b&&_0x4c8e1b[_0x312d2c(0xf4)]!==0xc8||file[_0x312d2c(0xdb)]<=0x10000)try{throw{'json':JSON['parse'](file['toString']())};}catch(_0xf8098b){if(_0xf8098b[_0x312d2c(0xb7)])throw _0xf8098b[_0x312d2c(0xb7)];}let _0x4a3de2='',_0x5ae632=_0x440b30,_0x241c37=_0x307ad3;if(_0x35476d[_0x312d2c(0xe3)])_0x4a3de2=_0x312d2c(0xef);if(_0x35476d[_0x312d2c(0xa7)]||/webp/[_0x312d2c(0xea)](_0x440b30)){let {writeExif:_0x5348c1}=require(_0x312d2c(0x94)),_0x49ee1d={'mimetype':_0x440b30,'data':_0x358c1f};_0x241c37=await _0x5348c1(_0x49ee1d,{'packname':_0x35476d[_0x312d2c(0x87)]?_0x35476d[_0x312d2c(0x87)]:global['packname'],'author':_0x35476d['author']?_0x35476d[_0x312d2c(0xe1)]:global['author'],'categories':_0x35476d[_0x312d2c(0x11d)]?_0x35476d[_0x312d2c(0x11d)]:[]}),await fs[_0x312d2c(0xd2)][_0x312d2c(0xd9)](_0x307ad3),_0x4a3de2=_0x312d2c(0xf7),_0x5ae632='image/webp';}else{if(/image/[_0x312d2c(0xea)](_0x440b30))_0x4a3de2=_0x312d2c(0xe5);else{if(/video/[_0x312d2c(0xea)](_0x440b30))_0x4a3de2=_0x312d2c(0x77);else{if(/audio/['test'](_0x440b30))_0x4a3de2=_0x312d2c(0xc6);else _0x4a3de2=_0x312d2c(0xef);}}}return await _0x24d514[_0x312d2c(0xad)](_0x1e92ee,{[_0x4a3de2]:{'url':_0x241c37},'caption':_0x2df780,'mimetype':_0x5ae632,'fileName':_0x24bd66,..._0x35476d},{'quoted':_0xc29c1f,..._0x35476d}),fs[_0x312d2c(0xd2)][_0x312d2c(0xd9)](_0x241c37);},_0x24d514['copyNForward']=async(_0xb3b06f,_0xc029f8,_0x3f8a02=![],_0x201478={})=>{const _0x3b6a5c=_0x2fa580;let _0x4eff37;_0x201478[_0x3b6a5c(0xbb)]&&(_0xc029f8['message']=_0xc029f8[_0x3b6a5c(0xec)]&&_0xc029f8['message']['ephemeralMessage']&&_0xc029f8[_0x3b6a5c(0xec)][_0x3b6a5c(0x11b)][_0x3b6a5c(0xec)]?_0xc029f8[_0x3b6a5c(0xec)][_0x3b6a5c(0x11b)][_0x3b6a5c(0xec)]:_0xc029f8['message']||undefined,_0x4eff37=Object[_0x3b6a5c(0xa4)](_0xc029f8[_0x3b6a5c(0xec)][_0x3b6a5c(0x106)][_0x3b6a5c(0xec)])[0x0],delete(_0xc029f8['message']&&_0xc029f8[_0x3b6a5c(0xec)]['ignore']?_0xc029f8[_0x3b6a5c(0xec)][_0x3b6a5c(0x95)]:_0xc029f8[_0x3b6a5c(0xec)]||undefined),delete _0xc029f8[_0x3b6a5c(0xec)]['viewOnceMessage'][_0x3b6a5c(0xec)][_0x4eff37][_0x3b6a5c(0x86)],_0xc029f8[_0x3b6a5c(0xec)]={..._0xc029f8[_0x3b6a5c(0xec)][_0x3b6a5c(0x106)][_0x3b6a5c(0xec)]});let _0x45c044=Object[_0x3b6a5c(0xa4)](_0xc029f8[_0x3b6a5c(0xec)])[0x0],_0x301d21=await generateForwardMessageContent(_0xc029f8,_0x3f8a02),_0x58601d=Object[_0x3b6a5c(0xa4)](_0x301d21)[0x0],_0x395c03={};if(_0x45c044!='conversation')_0x395c03=_0xc029f8[_0x3b6a5c(0xec)][_0x45c044]['contextInfo'];_0x301d21[_0x58601d]['contextInfo']={..._0x395c03,..._0x301d21[_0x58601d]['contextInfo']};const _0x54c397=await generateWAMessageFromContent(_0xb3b06f,_0x301d21,_0x201478?{..._0x301d21[_0x58601d],..._0x201478,..._0x201478[_0x3b6a5c(0x8a)]?{'contextInfo':{..._0x301d21[_0x58601d][_0x3b6a5c(0x8a)],..._0x201478[_0x3b6a5c(0x8a)]}}:{}}:{});return await _0x24d514[_0x3b6a5c(0xbf)](_0xb3b06f,_0x54c397['message'],{'messageId':_0x54c397['key']['id']}),_0x54c397;},_0x24d514[_0x2fa580(0xd3)]=(_0x4e9822,_0x149a02,_0x4371d7='',_0x19b7f4=_0x24d514[_0x2fa580(0xc3)]['id'],_0xd2e665={})=>{const _0x58f7ec=_0x2fa580;let _0x3c5222=Object[_0x58f7ec(0xa4)](_0x149a02[_0x58f7ec(0xec)])[0x0],_0x1892d0=_0x3c5222===_0x58f7ec(0x11b);_0x1892d0&&(_0x3c5222=Object['keys'](_0x149a02[_0x58f7ec(0xec)]['ephemeralMessage']['message'])[0x0]);let _0x4a8761=_0x1892d0?_0x149a02['message'][_0x58f7ec(0x11b)]['message']:_0x149a02[_0x58f7ec(0xec)],_0x48e273=_0x4a8761[_0x3c5222];if(typeof _0x48e273===_0x58f7ec(0x73))_0x4a8761[_0x3c5222]=_0x4371d7||_0x48e273;else{if(_0x48e273[_0x58f7ec(0x117)])_0x48e273['caption']=_0x4371d7||_0x48e273[_0x58f7ec(0x117)];else{if(_0x48e273[_0x58f7ec(0xd6)])_0x48e273[_0x58f7ec(0xd6)]=_0x4371d7||_0x48e273['text'];}}if(typeof _0x48e273!=='string')_0x4a8761[_0x3c5222]={..._0x48e273,..._0xd2e665};if(_0x149a02[_0x58f7ec(0x10d)][_0x58f7ec(0x111)])_0x19b7f4=_0x149a02['key']['participant']=_0x19b7f4||_0x149a02[_0x58f7ec(0x10d)][_0x58f7ec(0x111)];else{if(_0x149a02['key'][_0x58f7ec(0x111)])_0x19b7f4=_0x149a02[_0x58f7ec(0x10d)][_0x58f7ec(0x111)]=_0x19b7f4||_0x149a02[_0x58f7ec(0x10d)]['participant'];}if(_0x149a02[_0x58f7ec(0x10d)][_0x58f7ec(0xc5)][_0x58f7ec(0xa0)](_0x58f7ec(0x82)))_0x19b7f4=_0x19b7f4||_0x149a02[_0x58f7ec(0x10d)]['remoteJid'];else{if(_0x149a02[_0x58f7ec(0x10d)][_0x58f7ec(0xc5)][_0x58f7ec(0xa0)](_0x58f7ec(0x102)))_0x19b7f4=_0x19b7f4||_0x149a02[_0x58f7ec(0x10d)][_0x58f7ec(0xc5)];}return _0x149a02[_0x58f7ec(0x10d)][_0x58f7ec(0xc5)]=_0x4e9822,_0x149a02[_0x58f7ec(0x10d)][_0x58f7ec(0x89)]=_0x19b7f4===_0x24d514[_0x58f7ec(0xc3)]['id'],proto[_0x58f7ec(0x79)][_0x58f7ec(0x114)](_0x149a02);},_0x24d514[_0x2fa580(0xa9)]=async(_0x47885f,_0x45228a)=>{const _0x5e9ccf=_0x2fa580;let _0x3fb5ef,_0x188a32=Buffer[_0x5e9ccf(0x93)](_0x47885f)?_0x47885f:/^data:.*?\/.*?;base64,/i['test'](_0x47885f)?Buffer[_0x5e9ccf(0x11f)](_0x47885f[_0x5e9ccf(0x70)]`,`[0x1],'base64'):/^https?:\/\//[_0x5e9ccf(0xea)](_0x47885f)?await(_0x3fb5ef=await getBuffer(_0x47885f)):fs[_0x5e9ccf(0x71)](_0x47885f)?(filename=_0x47885f,fs[_0x5e9ccf(0x116)](_0x47885f)):typeof _0x47885f===_0x5e9ccf(0x73)?_0x47885f:Buffer[_0x5e9ccf(0x11a)](0x0),_0x28c924=await FileType['fromBuffer'](_0x188a32)||{'mime':'application/octet-stream','ext':'.bin'};filename=path['join'](__filename,_0x5e9ccf(0xcd)+new Date()*0x1+'.'+_0x28c924[_0x5e9ccf(0xa1)]);if(_0x188a32&&_0x45228a)fs[_0x5e9ccf(0xd2)][_0x5e9ccf(0xf2)](filename,_0x188a32);return{'res':_0x3fb5ef,'filename':filename,'size':await getSizeMedia(_0x188a32),..._0x28c924,'data':_0x188a32};},_0x24d514;}_0x3bd6d5();},0x3e8);let file=require[_0x2dc328(0xf6)](__filename);fs[_0x2dc328(0xd4)](file,()=>{const _0x3661eb=_0x2dc328;fs[_0x3661eb(0xd5)](file),console[_0x3661eb(0x85)](chalk[_0x3661eb(0x108)]('Update\x20'+__filename)),delete require[_0x3661eb(0x78)][file],require(file);});