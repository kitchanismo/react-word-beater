!function(s){function e(e){for(var t,r,a=e[0],n=e[1],o=e[2],i=0,l=[];i<a.length;i++)r=a[i],u[r]&&l.push(u[r][0]),u[r]=0;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t]);for(p&&p(e);l.length;)l.shift()();return d.push.apply(d,o||[]),c()}function c(){for(var e,t=0;t<d.length;t++){for(var r=d[t],a=!0,n=1;n<r.length;n++){var o=r[n];0!==u[o]&&(a=!1)}a&&(d.splice(t--,1),e=i(i.s=r[0]))}return e}var r={},u={0:0},d=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=s,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var n=0;n<t.length;n++)e(t[n]);var p=a;d.push([123,1]),c()}({120:function(e,t,r){e.exports=r.p+"media/correct.553b258171193dba2cbd915043f92fe2.mp3"},121:function(e,t,r){e.exports=r.p+"media/gameover.4a5a2fae6ac11096c345a4d88a666ac5.mp3"},122:function(e,t,r){e.exports=r.p+"media/happy.e0e231ef16c54cd8ce3a601393f8ad4d.mp3"},123:function(e,t,r){r(124),e.exports=r(296)},295:function(e,t,r){},296:function(e,t,r){"use strict";r.r(t);var Z=r(0),$=r.n(Z),a=r(118),n=r.n(a),o=r(119),i=r.n(o);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ee=function(e){var t=e.music,r=e.isLoop,a=void 0!==r&&r,n=e.volume,o=void 0===n?1:n,i=e.autoplay,l=void 0!==i&&i,s=d(Object(Z.useState)(!l),2),c=s[0],u=s[1];Object(Z.useEffect)(function(){t.volume=o,t.autoplay=l,t.loop=a},[]),Object(Z.useEffect)(function(){c?t.pause():t.play()},[c]);return{isMuted:c,setIsMuted:u,onPlay:function(){u(!1),t.play()},onStop:function(){t.pause(),t.currentTime=0}}},l=r(120),s=r.n(l),c=r(121),u=r.n(c),p=r(122),h=r.n(p),w=new Audio(u.a),m=new Audio(h.a),te=new Audio(s.a);function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var re=function(e){var a,t,r,n,o,i,l,s,c=e.onQuit,u=e.onTryAgain,d=e.data,p=d.score,h=d.level,m=(a=p,t=k(Object(Z.useState)(0),2),r=t[0],n=t[1],o=k(Object(Z.useState)(0),2),i=o[0],l=o[1],s=function(e,t){localStorage.setItem("wordBeaterStats",JSON.stringify({highScore:e,lastScore:t}))},Object(Z.useEffect)(function(){if(localStorage.wordBeaterStats){var e=JSON.parse(localStorage.getItem("wordBeaterStats"));l(e.lastScore),n(e.highScore)}},[]),Object(Z.useEffect)(function(){if(localStorage.wordBeaterStats){var e=JSON.parse(localStorage.getItem("wordBeaterStats")),t=e.highScore||0,r=t<a?a:t;n(r),l(e.lastScore),s(r,a)}else s(a,a)},[a]),{highScore:r,lastScore:i}),f=m.highScore,g=m.lastScore,y=ee({music:w}),b=y.onPlay,v=y.onStop;return Object(Z.useEffect)(function(){return b(),function(){return v()}},[]),$.a.createElement("div",{className:"beater__gameover fadeIn"},$.a.createElement("h1",{className:"beater__gameover-title"},"Game Over"),$.a.createElement("div",{className:"beater__gameover-summary"},$.a.createElement("h2",null,"Final Score:"),$.a.createElement("h2",null,p)),$.a.createElement("div",{className:"beater__gameover-summary"},$.a.createElement("h2",null,"Level Reached:"),$.a.createElement("h2",null,h)),!!f&&$.a.createElement("div",{className:"beater__gameover-summary"},$.a.createElement("h2",null,"High Score:"),$.a.createElement("h2",null,f)),!!g&&$.a.createElement("div",{className:"beater__gameover-summary"},$.a.createElement("h2",null,"Previous Score:"),$.a.createElement("h2",null,g)),$.a.createElement("div",{className:"beater__main-actions"},$.a.createElement("button",{className:"button--primary button--big",onClick:function(){return u()}},"Try Again"),$.a.createElement("button",{className:"button--secondary button--big",onClick:function(){return c()}},"Quit")))};function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ae=function(t){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"des",a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1e3,e=f(Object(Z.useState)("des"===r?t:0),2),n=e[0],o=e[1];return Object(Z.useEffect)(function(){var e=setInterval(function(){if("des"===r){if(n<=0)return void clearInterval(e);o(function(e){return e-1})}else{if(t<=n)return void clearInterval(e);o(function(e){return e+1})}},a);return function(){return clearInterval(e)}}),[n,o]},g=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"],ne=function(r){var e=function(e){return Math.floor(Math.random()*e)},a=function(){return g[e(g.length)]},t=function(){return r&&1<r.maxLength?function(){for(var e,t=!1;!t;)(e=a()).length<=r.maxLength&&(t=!0);return e}():a()};if(void 0===r)return t();"number"==typeof r&&(r={exactly:r}),r.exactly&&(r.min=r.exactly,r.max=r.exactly),"number"!=typeof r.wordsPerString&&(r.wordsPerString=1),"function"!=typeof r.formatter&&(r.formatter=function(e){return e}),"string"!=typeof r.separator&&(r.separator=" ");for(var n=r.min+e(r.max+1-r.min),o=[],i="",l=0,s=0;s<n*r.wordsPerString;s++)l===r.wordsPerString-1?i+=r.formatter(t(),l):i+=r.formatter(t(),l)+r.separator,l++,(s+1)%r.wordsPerString==0&&(o.push(i),i="",l=0);return"string"==typeof r.join&&(o=o.join(r.join)),o},oe=function(){var e=["nice!","awesome!","excellent!","fantastic!","incredible!","marvelous!","wonderful!","incredible!","amazing!","impressive!","wowowee!","perfect!"];return e[Math.floor(Math.random()*e.length)]};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ie(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function le(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function se(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var _=function(n){return function(e){var t=E(Object(Z.useState)(!1),2),r=t[0],a=t[1];return r?$.a.createElement(n,v({onSetStart:a},e)):$.a.createElement("div",{className:"beater__main fadeIn"},$.a.createElement("h1",{className:"beater__main-title"},"Word Beater"),$.a.createElement("p",{className:"beater__main-subtitle"},"Do you have what is takes to become the fastest and accurate typist? Type every single word correctly in a given time limit to become a word beater master!"),$.a.createElement("button",{className:"button--primary button--big",onClick:function(){return a(!0)}},"Start Game"),$.a.createElement("div",{className:"copyright"},$.a.createElement("span",null,"Music used in this game is not mine, downloaded from  ",$.a.createElement("a",{href:"https://zedge.net",target:"_blank"},"Zedge"),"  and  ",$.a.createElement("a",{href:"https://www.youtube.com/watch?v=OrPEoqp4sjg",target:"_blank"},"Alumo Music on Youtube"))))}}(function(n){return function(e){var t=b(ae(3),2),r=t[0],a=t[1];return r<=0?$.a.createElement(n,y({onSetCount:a},e)):$.a.createElement($.a.Fragment,null,$.a.createElement("div",{className:"beater__countdown"},$.a.createElement("h1",null,"Game will start in "),$.a.createElement("h1",{className:"beater__countdown-count"},r),$.a.createElement("br",null),$.a.createElement("p",null,"Get ready!")))}}(function(e){var t,r,a,n,o,i,l,s,c,u,d,p,h,m,f=ce(Object(Z.useState)(void 0),2),g=f[0],y=f[1],b=ce(Object(Z.useState)(""),2),v=b[0],w=b[1],k=(r=(t={typedWord:v,currentWord:g}).typedWord,a=t.currentWord,n=ie(Object(Z.useState)(!1),2),o=n[0],i=n[1],Object(Z.useEffect)(function(){i(r===a)},[r,a]),{isMatched:o}).isMatched,E=(P={isMatched:k},q=P.isMatched,z=le(Object(Z.useState)(0),2),B=z[0],W=z[1],R=le(Object(Z.useState)(1),2),D=R[0],G=R[1],H=le(Object(Z.useState)(10),2),V=H[0],F=H[1],J=le(Object(Z.useState)(20),2),K=J[0],Q=J[1],U=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:10;Q(e),G(t),F(r)},Object(Z.useEffect)(function(){q&&(4490<=B?U(3,6,25):3990<=B?U(6,5,20):2490<=B?U(9,4,20):1490<=B?U(12,3,20):40<=B&&U(15,2,15),W(B+V)),console.log(V)},[q]),{score:B,level:D,points:V,timerBase:K,onReset:function(){F(10),G(1),W(0),Q(20)}}),_=E.score,S=E.points,O=E.level,x=E.timerBase,j=E.onReset,A=(s=(l={isMatched:k,points:S}).isMatched,c=l.points,u=Object(Z.useRef)(null),d=Object(Z.useRef)(null),p=se(Object(Z.useState)(oe()),2),h=p[0],m=p[1],Object(Z.useEffect)(function(){if(s){m(oe());var e=document.createElement("span"),t=document.createElement("h2");e.className="plus",e.textContent="+".concat(c),t.className="showGreet",t.textContent="★ ".concat(h," ★"),u.current.appendChild(e),d.current.appendChild(t),setTimeout(function(){u.current.removeChild(e),d.current.removeChild(t)},1e3)}},[s]),{greetingWrapper:d,pointsWrapper:u}),N=A.pointsWrapper,T=A.greetingWrapper,L=ce(ae(x),2),I=L[0],M=L[1],C=ee({music:te}).onPlay;var P,q,z,B,W,R,D,G,H,V,F,J,K,Q,U;Object(Z.useEffect)(function(){y(ne())},[]),Object(Z.useEffect)(function(){k&&(w(""),y(ne()),M(x),C())},[k]);var X=Object(Z.useRef)(null);if(I<=0)return $.a.createElement(re,{data:{score:_,level:O},onQuit:function(){e.onSetStart(!1),w(""),j()},onTryAgain:function(){e.onSetCount(3),w(""),j()}});var Y={1:["#fff","rgba(255, 255, 255, .4)"],2:["#488ca1","rgba(72, 140, 161, .4)"],3:["#99da00","rgba(153, 218, 0, .4)"],4:["#F9E606","rgba(249, 230, 6, .4)"],5:["#ED06FB","rgba(237, 6, 251, .4)"],6:["#9B1BEA","rgba(155, 27, 234, .4)"]};return $.a.createElement("div",{className:"beater__game fadeIn"},$.a.createElement("div",{className:"beater__game-wrapper"},$.a.createElement("div",{className:"beater__game-greet",ref:T}),$.a.createElement("div",{className:"beater__game-current"},$.a.createElement("p",null,"TYPE THE WORD"),$.a.createElement("h1",{ref:X},g)),$.a.createElement("div",{className:"beater__game-widgets"},$.a.createElement("div",{className:"beater__game-widgets-wrapper"},$.a.createElement("span",null,"Level"),$.a.createElement("h2",{style:{color:Y[O][0],textShadow:"0 0 15px ".concat(Y[O][1])}},O)),$.a.createElement("div",{className:"beater__game-widgets-wrapper"},$.a.createElement("span",null,"Time"),$.a.createElement("h2",{className:I<=3?"timeRunningOut":null},I)),$.a.createElement("div",{className:"beater__game-widgets-wrapper"},$.a.createElement("span",null,"Score"),$.a.createElement("div",{ref:N},$.a.createElement("h2",null,_)))),$.a.createElement("input",{autoFocus:!0,className:"beater__game-input",onChange:function(e){var t=e.target.value.toLowerCase().trim();t.length>g.length||w(t)},onKeyUp:function(e){var t=e.target.value,r=new RegExp(t,"g");X.current.innerHTML=g,""!==t.trim()&&(X.current.innerHTML=g.replace(r,function(e){return'<span class="matched">'.concat(e,"</span>")}))},placeholder:"Start Typing Now!",type:"text",value:v})))}));function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var O=function(e){return S(ae(2),1)[0]<=0?e.children:$.a.createElement("div",{className:"loader",id:"loader"},$.a.createElement("div",{className:"loader__head"},$.a.createElement("div",{className:"first-indicator"}),$.a.createElement("div",{className:"second-indicator"})),$.a.createElement("h4",null,"Loading"))},x=function(){var e=ee({music:m,isLoop:!0,volume:.1,autoplay:!0}),t=e.isMuted,r=e.setIsMuted;return $.a.createElement("div",{className:"beater__audio-control"},$.a.createElement("span",null,"MUSIC"),$.a.createElement("div",{className:"beater__audio-control-wrapper",onClick:function(){return r(!t)},style:{background:t?"rgba(255, 255, 255, .2)":"rgba(153,218,0, .2)"}},$.a.createElement("div",{className:"beater__audio-control-toggle",style:{transform:t?"translateX(0)":"translateX(100%)",background:t?"#cacaca":"#99da00"}})))},j=function(){return $.a.createElement(O,null,$.a.createElement(x,null),$.a.createElement(_,null))};r(294),r(295);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}if(i.a.load({google:{families:["Muli: 400, 700, 900"]}}),"serviceWorker"in navigator){if(navigator.serviceWorker.register("/sw.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.log("SW registration failed: ",e)}),!window.__ALLOW_REACT_DEVTOOLS__&&window.__REACT_DEVTOOLS_GLOBAL_HOOK__&&"object"===N(window.__REACT_DEVTOOLS_GLOBAL_HOOK__))for(var T=Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__),L=0;L<T.length;L++){var I=A(T[L],2),M=I[0],C=I[1];window.__REACT_DEVTOOLS_GLOBAL_HOOK__[M]="function"==typeof C?function(){}:null}delete window.__ALLOW_REACT_DEVTOOLS__}n.a.render($.a.createElement(j,null),document.getElementById("app"))}});