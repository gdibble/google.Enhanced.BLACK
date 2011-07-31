// ==UserScript==

	// @name		Google i&Search Dark + Enhancements
	// @description		Make Google Search & iGoogle Hompage Dark, plus Enhancements
	// @version		1.5.1
	// @date		2007-10-31
	// @source		http://userscripts.org/scripts/show/12917
	// @identifier		http://userscripts.org/scripts/source/12917.user.js

	// @author		gabedibble <gdibble@gmail.com>
	// @namespace		http://userscripts.org/people/24894

	// @include		http://*.google.*/*

// ==/UserScript==
var SCRIPT = {
	name:		"Google i&Search Dark + Enhancements",
	namespace:	"http://userscripts.org/people/24894",
	description:	"Make Google Search & iGoogle Hompage Dark, plus Enhancements",
	source:		"http://userscripts.org/scripts/show/12917",
	identifier:	"http://userscripts.org/scripts/source/12917.user.js",
	version:	"1.5.1",
	date: (new Date( 2007,10,31 )).valueOf()
};


// Change Log:
	// Version 1.0.0	Initial Release
	// Version 1.0.1	Added Enhancements for Gm-Script Google Search Sidebar
	// Version 1.1.0	Fixed Google News Search Results
	// Version 1.1.1	Logo fixes for Google News; iGoogle module header enhancements
	// Version 1.1.2	Added support for Gm-Script User Script Updates
	// Version 1.1.3	Fixed color scheme on Google News Homepage; Rearranged functions
	// Version 1.1.4	Added Removal Of Right Side Ads; Fixed Search Results no match response
	// Version 1.1.5	Removed Search Results sponsored linx; Fixed refine results txt
	// Version 1.2.0	Added Video Results Enhancements; Rounded News left headline; Fixed nav bar
	// Version 1.2.1	Updated iGoogle I'm Feeling Lucky & Cancel buttons, Module Settings updates
	// Version 1.2.2	Fixed Google Home & Images logos; Fixed Video bg, time txt; Fixed News logo
	// Version 1.2.3	Fixed iGoogle Home logo; Setup block; Search linx position, Settings txt
	// Version 1.2.4	Fixed iGoogle skins box; News spacing, Headers, Show morefewer linx, Alerts txt
	// Version 1.2.5	Fixed Google Search & Image Home non-search logos; Fixed Preferences
	// Version 1.2.6	Fixed Search more pop layer; Fixed iGoogle module inner detail txt
	// Version 1.2.7	Fixed iGoogle Dialogs; Module selection page & delete confirmation box
	// Version 1.3.0	Major Code Optimization & a few minor txt fixes
	// Version 1.4.0	Added Maps Enhancements
	// Version 1.4.1	Fixed iGoogle txt & skin box; Video filter txt; News Image Version & AFP.google
	// Version 1.4.2	Changed visited link color to be grey-blue; Fixed iGoogle module bg
	// Version 1.4.3	Moved black Google logo into script-code (only 3.8k)
	// Version 1.5.0	Major Code Optimization & a few minor bg fixes
	// Version 1.5.1	Refixed iGoogle Add Stuff (old disabled); Fixed more linx; Images size alert


// To Do:
	// !!! Add Groups support
	// !! Add Products/Froogle support
	// ! Add Code support
	// Add Blogs support
	// Add Books support
	// Add Translation support
	// Add Patents support
	// Add Scholar support
	// Add User Script Command to turn On/Off 3.14 Hack


	// Feel free to leave suggestions/criticism on the UserScript Page or via email; THANX




var googleEnhancedBLACK; function enhanceGoogle() {googleEnhancedBLACK =


// General Google Page Enhancements
	/* page bg */			"BODY   {background-color:#000 !important; color:#fff;}" +
	/* link color */		"A, SPAN.i, .linkon   {color:#36f !important;}" +
	/* visited link color */	"A:visited   {color:#369 !important;}" +
	/* inner txt color */		"DIV, TD   {color:#000 !important;}" +
	/* bold txt color */		"B   {color:#fff !important;}" +
	/* google bar txt */		"DIV#gbar SPAN   {color:#999;}" +
	/* top logos */			"#logo SPAN, DIV#regular_logo, TABLE[align='center'] TBODY TR TD DIV#logo, #search .logo, #wrapper #header   {width:150px; height:55px; background:transparent url('" + googleLogoBLACK + "') no-repeat scroll 0% !important;}" +
	/* search input */		"INPUT[type=text], INPUT[name='q']   {background-color:#333; color:#fff; padding:2px; border:solid 1px #ccc; font-weight:bold; color:#ff0;}" +
	/* submit btns */		"INPUT[type=submit], INPUT[value='Cancel'], INPUT[value='Save'], BUTTON, INPUT#stxemailsend   {background-color:#333; border:solid 1px #ccc; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px; color:#fff; cursor:pointer;}" +
	/* submit btn hover */		"INPUT[type=submit]:hover   {background-color:#36f; color:#fff;}" +
	/* home & images logo img */	"IMG[width='276']   {height:0px; padding-top:65px; background:transparent url('" + googleLogoBLACK + "') no-repeat scroll bottom center !important;}" +
	/* more pop layer */		"SPAN#more, #gbar .gb2   {background-color:#333 !important; border-right:solid 1px #a2bae7; border-bottom:solid 1px #a2bae7; color:#333 !important;}" +
	/* google alerts txt */		"P[style='margin-left: 9px;'], SPAN[style='font-size: medium;']   {color:#999;}" +
	/* mainbody txt */		"DIV.mainbody, TD.j, DIV.empty, DIV.empty DIV   {color:#999 !important;}" +
	/* remove footers */		"#footer, #footer_promos, #footerwrap, P FONT[size='-2'], TABLE[class='t n bt'][width='100%'][cellpadding='2'], DIV[align='center'][style='white-space: nowrap;'], FONT[class='p'][size='-1'], FONT[size='-1'][color='#6f6f6f'], DIV.div-copyright   {display:none;}" +

	// Preferences
		/* pre title line */	"TABLE TBODY TR TD[bgcolor='#3366cc']   {display:none;}" +
		/* title header txt */	"TABLE TBODY TR TD[bgcolor='#e5ecf9'] FONT B   {color:#999 !important;}" +
		/* headers */		"TABLE TBODY TR TD[bgcolor='#e5ecf9'], TABLE TBODY TR[bgcolor='#e5ecf9']   {background-color:#000;}" +


// iGoogle Homepage Enhancements
	/* search btn spacing */	".gseain INPUT[type=submit], INPUT[name='btnG'], INPUT[name='btnI']   {margin-top:5px; margin-right:30px; margin-left:30px;}" +
	/* lucky,save,send btn hover */	"INPUT#btnI:hover, INPUT[name='btnI']:hover, INPUT[value='Save']:hover, SPAN#button_0 BUTTON:hover, INPUT#stxemailsend:hover   {background-color:#090; color:#fff;}" +
	/* setup block */		"DIV.setup_div   {background-color:#333; border:solid 1px #ccc; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
	/* setup title txt */		"DIV.setup_title_welcome, DIV.setup_promo, DIV.setup_promo_subtext   {color:#999 !important;}" +
	/* tabs */			"#tabs UL LI   {-moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
	/* module delete conf.box */	"DIV#undel_box   {background-color:#333; border:1px solid #ff0; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px; color:#ff0 !important;}" +
	/* skins box title */		"H2.modtitle_s   {background-color:#feffc5; border:0; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
	/* skins box title txt */	"H2.modtitle_s B   {color:#000 !important;}" +
	/* skins box body */		"DIV#skinbox_b   {background-color:#000; border:solid 1px #feffc5 !important;}" +
	/* skins box themes */		"DIV.skinthsel B, DIV.skinth B   {color:#000 !important;}" +
	/* dialog box */		"TABLE.dialog TBODY TR TD DIV   {background-color:#333 !important; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;;}" +
	/* dialog box txt */		"LABEL[for='share_userprefs'], TABLE#email TBODY TR TD, TABLE#email TBODY TR TD DIV   {color:#999 !important;}" +
	/* dialog box btns */		"TABLE.dialog TBODY TR TD DIV#buttons   {padding-bottom:10px;}" +
	/* module border */		".modbox, .modbox_e   {background-color:#000; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* module bg */			".modboxin, .modboxin IFRAME HTML BODY   {background-color:#fff !important;}" +
	/* module border */		".modboxin, .modboxin_s, .modtitle   {border:0px none !important;}" +
	/* module area bg */		"#modules   {background-color:#000;}" +
	/* module title bg */		".modtitle   {-moz-border-radius-topleft:14px; -moz-border-radius-topright:14px; background-color:#333;}" +
	/* module title txt */		".modtitle_text,.mtlink   {color:#999 !important;}" +
	/* module settings line */	"DIV.meditbox   {margin-top:0; border:0;}" +
	/* module settings txt */	"DIV.meditbox DIV, DIV.meditbox TD, DIV.meditbox SPAN, DIV.meditbox NOBR   {color:#999 !important;}" +
	/* module inner detail txt */	".modboxin FONT   {color:#000 !important;}" +
	/* cancel btn hover */		"INPUT[value='Cancel']:hover, SPAN#button_1 BUTTON:hover   {background-color:#990000 !important; color:#fff !important;}" +

	// Add Stuff
		/* header */		"#wrapper #header   {width:inherit;}" +
		/* header box */	"#wrapper #header .header_title   {background-color:#333; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px; color:#000 !important;}" +
		/* gadget txt */	"#wrapper #container #gadget-info TABLE TBODY TR TD, #wrapper #container #comments DIV   {color:#999 !important;}" +
		/* screenshot border */	"#wrapper #container #gadget-info TABLE TBODY TR TD.screenshot-box IMG   {border:0;}" +
		/* sidebar item head */	"#wrapper #sidebar DIV.module H3   {background:#333; padding-bottom:5px; border:0; -moz-border-radius-topleft:14px; -moz-border-radius-topright:14px; color:#000;}" +
		/* sidebar item */	"#wrapper #sidebar DIV.module   {background:#000; padding-bottom:20px; border:0; moz-border-radius-bottomleft:14px; -moz-border-radius-bottomright:14px; color:#999 !important;}" +
		///* google logo img */	"TABLE[align='center'] TBODY TR.gadget-details TD DIV#logo IMG[src='/ig/images/igoogle_logo_sm.gif']   {display:none;}" +
		///* header box */	"TABLE[width='100%'].header, TABLE[bgcolor='#e5ecf9']   {background-color:#333; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px; color:#000 !important;}" +
		///* header title */	"TABLE[width='100%'].header B, TABLE[style='border-top: 1px solid rgb(51, 102, 204);'] TBODY TR TD B   {color:#000 !important;}" +
		///* sidebar s-item */	"TD.categories TABLE TBODY TR TD.catsel   {background:#333 !important; -moz-border-radius-topleft:14px; -moz-border-radius-bottomleft:14px;}" +
		///* sidebar item */	"TD.categories TABLE TBODY TR TD.cat-label, TD.categories TABLE TBODY TR TD.catnotsel   {background-color:#000;}" +
		///* module info txt */	"TABLE[cellpadding='6'][align='left'][valign='top'] TD[width='600'] DIV   {color:#fff !important;}" +
		///* module preview */	"TD[valign='top'][style='border: 1px solid rgb(187, 204, 237); padding: 6px; font-size: 82%;']   {border:0 !important;}" +
		///* module info */	"TABLE[cellpadding='6'][align='left'][valign='top'] TD[width='600']   {background-color:#000;}" +


// Google Search Results Page Enhancements
	/* search header bar */		"TABLE[class='t bt']   {background-color:#333; border:0; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* search header bar */		"TABLE[class='ft t bb bt']   {border:0; border-top:1px}" +
	/* result-area width */		"DIV#res   {width:73% !important;}" +
	/* remove sponsored linx */	"DIV#tads   {display:none;}" +
	/* refine results txt */	"TABLE#po TBODY TR TD   {color:#999 !important;}" +
	/* result-area txt */		"DIV#res P, DIV#res .j   {color:#999 !important;}" +
	/* description width */		"TD.j   {width:100% !important;}" +
	/* description color */		"FONT   {color:#999;}" +
	/* result spacing */		".g   {margin:2em 0pt;}" +
	/* bottom related txt */	".r   {color:#aaa;}" +
	/* nav bar */			"#navbar   {position:relative; left:33%; width:400px;}" +
	/* footer logo(s) */		"#navbar DIV,#navbar IMG   {height:0px; background:none;}" +
	/* footer bg */			"CENTER TABLE[class='ft t bb bt'] TD[align='center']   {background-color:#000 !important;}" +


// Images Results Enhancements
	/* sizes alert */		"DIV[style='padding: 16px 0pt;'] CENTER SPAN[style='padding: 4px; background-color: rgb(255, 255, 153);']   {padding:5px !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* sizes alert txt */		"DIV[style='padding: 16px 0pt;'] CENTER SPAN[style='padding: 4px; background-color: rgb(255, 255, 153);'] FONT   {color:#333;}" +
	/* sizes alert highlight */	"DIV[style='padding: 16px 0pt;'] CENTER SPAN[style='padding: 4px; background-color: rgb(255, 255, 153);'] FONT B   {color:#000 !important;}" +


// Video Results Enhancements
	/* logo img */			"A#logoimg IMG   {display:none;}" +
	/* logo container */		"TD.td-logo   {height:65px; background:transparent url('" + googleLogoBLACK + "') no-repeat scroll 0% !important;}" +
	/* filter option txt */		"TD[style='padding: 0pt;'] SPAN.filter-prefix, TD[style='padding: 0pt;'] LABEL.filter-option   {color:#999;}" +
	/* section header */		"DIV.div-section-header   {background-color:#333; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* section header txt */	"TD.td-section-header-left B   {color:#000 !important;}" +
	/* home video time */		"DIV.div-video-text   {color:#090 !important;}" +
	/* search type */		"TABLE.table-header TABLE[bgcolor='white'], DIV.menu-normalsb   {border:0; background-color:#000;}" +
	/* results header */		"TABLE#resultsheadertable   {background-color:#333; border:0; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* results header title */	"TABLE#resultsheadertable TD[valign='baseline'] B   {position:relative; top:1px; left:2px; color:#000 !important;}" +
	/* result item */		"DIV.SearchResultItem   {width:100%; margin:2em 0pt;}" +
	/* result item details */	"TD.MetaData DIV.Details   {color:#999 !important;}" +
	/* result item description */	"TD.MetaData DIV.Snippet   {color:#aaa !important;}" +
	/* result item uri */		"TD.MetaData DIV.URL   {color:#090 !important;}" +
	/* footer nav table */		"TABLE#pagenavigatortable   {width:400px !important;}" +
	/* footer logo(s) */		"TABLE#pagenavigatortable TD IMG, TABLE#pagenavigatortable TD A.imglink, TABLE#pagenavigatortable TD BR   {display:none;}" +
	/* search again */		"DIV#searchagain   {border:0; background-color:#000;}" +


// News Results Enhancements
	/* search table */		"TABLE[width='1%']   {position:relative; top:1px; background-color:#000; width:100% !important;}" +
	/* logo img */			"IMG[src='/images/logo_sm.gif'], IMG[src='images/news.gif'], IMG[width='150'][height='58'][alt='Go to Google News Home']   {visibility:hidden;}" +
	/* logo img link */		"TABLE[width='1%'] TBODY TR TD[valign='top'],TABLE[align='center'] TBODY TR TD TABLE TBODY TR TD[valign='bottom']   {height:65px; background:transparent url('" + googleLogoBLACK + "') no-repeat scroll 0% !important;}" +
	/* more pop layer */		"SPAN#more, #gbar .gbard, #gbar .gb2   {background-color:#333 !important; border-right:solid 1px #a2bae7; border-bottom:solid 1px #a2bae7; color:#333 !important;}" +
	/* top stories txt */		"TABLE[width='100%'] .ks   {color:#999 !important;}" +
	/* left nav bg */		".leftnav TABLE TABLE TBODY TR TD[nowrap='']   {background-color:#000;}" +
	/* left nav spacing */		".leftnav TABLE TABLE TBODY TR TD[bgcolor='#fff']   {display:none;}" +
	/* left headline */		"DIV.hd   {background:#333; -moz-border-radius-topleft:14px; -moz-border-radius-bottomleft:14px;}" +
	/* show morefewer linx */	"TABLE[bgcolor='#efefef'][style='border: 1px solid rgb(0, 0, 153);']   {background-color:#000;}" +
	/* section header */		"DIV#section-header   {background-color:#333 !important; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* search header r1col1 */	"TABLE[width='1%'] TBODY TR TD[valign='top'] TABLE TBODY TR TD,TABLE[width='100%'] TBODY TR TD[bgcolor='#efefef']    {background:#000 none !important;}" +
	/* search header r1col2 */	"TABLE[width='1%'] TBODY TR TD[valign='top'] TABLE TBODY TR TD A   {position:relative; top:12px;}" +
	/* search header barL */	"TABLE TBODY TR TD[width='60%']   {background-color:#333; border:0; -moz-border-radius-topleft:14px; -moz-border-radius-bottomleft:14px;}" +
	/* search header barL txt*/	"TABLE TBODY TR TD[width='60%'] FONT   {color:#000;}" +
	/* search header barR */	"TABLE TBODY TR TD[width='40%']   {background-color:#333; border:0; -moz-border-radius-topright:14px; -moz-border-radius-bottomright:14px;}" +
	/* result spacing */		"DIV.mainbody TABLE TBODY TR TD[align='left'] TABLE[cellspacing='7'][cellpadding='2']   {margin:0.5em 0pt;}" +
	/* personalize header */	"#cust_link_tbl {background-color:#333; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +

	// Image Version
		/* cell container */	"TD#ImageSection TABLE TBODY TR TD   {padding:5px;}" +
		/* cells */		"TD#ImageSection TABLE TBODY TR TD DIV[style='border: 1px solid rgb(255, 255, 255); padding: 7px 7px 4px; white-space: nowrap; width: 104px;']   {background-color:#333; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
		/* img container */	"DIV.divnohighlightnoie   {border:0 none !important;}" +
		/* img container */	"DIV.divnohighlightnoie IMG.centerimagenonie   {position:relative; left:-5px;}" +
		/* rightBar */		"DIV#RightBarContent DIV   {background-color:#000 !important;}" +


// AFP.google News Enhancements
	/* body txt */			"BODY#body.rich DIV#container TABLE TBODY TR TD   {color:#999 !important;}" +
	/* article title */		"BODY#body.rich DIV#container TABLE#article TBODY TR TD H1   {color:#fff;}" +


// Maps Enhancements
	/* logo img */			"IMG[alt='Go to Google Maps Home']   {display:none;}" +
	/* help linx */			"DIV.helplinks DIV   {background-color:#000 !important; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* mapping tabs */		"TABLE#paneltabs TBODY TR TD   {background-color:#000 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
	/* mapping tab txt */		"TABLE#paneltabs TBODY TR TD.tabOff A DIV, TABLE#paneltabs TBODY TR TD.tabOn A DIV   {font-weight:bold; color:#999 !important;}" +
	/* send panel container */	"DIV.sdb   {margin:5px; background-color:#000 !important; border:3px solid #f90 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* send panel inner */		"DIV.sdb DIV.c, DIV.sdb DIV.c DIV DIV   {border:0 !important; background-color:#000 !important; color:#999 !important;}" +
	/* link to this page panel */	"DIV#le   {background-color:#000 !important; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* link to panel txt */		"DIV#le TABLE.letbl TBODY TR TD   {color:#999 !important;}" +
	/* results area */		"DIV#hp DIV, DIV#hp TABLE TR TD, DIV#panel DIV DIV, DIV#panel DIV TABLE TBODY TR TD, DIV#page DIV, DIV#page TABLE TBODY TR TD   {color:#999 !important;}" +
	/* highlight */			"FONT[color='red']   {color:#f00;}" +
	/* map points */		"TABLE.ddwpt_table TD   {background-color:#333;}" +
	/* search logo(s) */		"DIV.n DIV.imgn IMG   {display:none;}" +
	/* print directions */		"DIV.segmentdiv TABLE TBODY TR TD   {background-color:#000;}" +
	/* legal & navtech blocks */	"DIV.legal, DIV.cprt   {display:none;}" +


// Gm-Script Google Search Sidebar Enhancements - http://userscripts.org/scripts/show/11888
	/* sidebar width */		"#searchPlus   {width:26% !important; float:right !important;}" +
	/* sidebar txt */		"#searchPlus DIV P, .luna-Ent td   {color:#fff !important;}" +
	/* sidebar header */		"#searchPlus H1   {background-color:#333; border:0; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
	/* sidebar header link */	"#searchPlus H1 A   {color:#000 !important;}";




// Remove Right-side Ads
iframe=document.getElementsByTagName("iframe");
for(var iii=0; iii<iframe.length; iii++){if(iframe[iii].src.indexOf("pagead2.googlesyndication.com/pagead/ads")!=-1){iframe[iii].height=0;iframe[iii].width=0;};};

// Add Style
if (typeof GM_addStyle != "undefined") {GM_addStyle(googleEnhancedBLACK);}
else if (typeof addStyle != "undefined") {addStyle(googleEnhancedBLACK);}
else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.innerHTML = googleEnhancedBLACK;
		heads[0].appendChild(node); 
	};
};

}; var googleLogoBLACK = "data:image/jpeg;base64,"+
	"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%3D";


// User Script Updates - http://userscripts.org/scripts/show/2296
function updateCheck() {try {(unsafeWindow || window.wrappedJSObject || window).UserScriptUpdates.requestAutomaticUpdates(SCRIPT);} catch (ex) {};};


// RUN!!!
enhanceGoogle();
updateCheck();