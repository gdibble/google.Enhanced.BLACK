// ==UserScript==
	// @name		google Enhanced BLACK
	// @description		This Google Black script enhances all Google service pages with an inverted color-scheme for reduced eye fatigue; it also removes ads & clutter and improves page layout and readability by widening search results
	// @version		2.2.1
	// @date		2009-07-12
	// @source		http://userscripts.org/scripts/show/12917
	// @identifier		http://userscripts.org/scripts/source/12917.user.js
	// @author		gabedibble <gdibble@gmail.com>
	// @namespace		http://userscripts.org/people/24894
	// @include		http://*.google.*/*
	// @include		https://www.google.*/accounts/*
	// @include		https://services.google.*/*
	// @include		https://www.google.*/voice*
	// @exclude		http://*.google.*/custom*
// ==/UserScript==



var scriptVersion = 1247430934203;   //alert(Date.now());


var scriptFileURL = "http://userscripts.org/scripts/source/12917.user.js";
var scriptHomepageURL = "http://userscripts.org/scripts/show/12917";




// Change Log:
	// v1.0.0	Initial Release
	// v1.0.1	Added Enhancements for Gm-Script Google Search Sidebar
	// v1.1.0	Fixed Google News Search Results
	// v1.1.1	Logo fixes for Google News; iGoogle module header enhancements
	// v1.1.2	Added support for Gm-Script User Script Updates [removed as of v1.9.0]
	// v1.1.3	Fixed color scheme on Google News Homepage; Rearranged functions
	// v1.1.4	Added Removal Of Right Side Ads; Fixed Search Results no match response
	// v1.1.5	Removed Search Results sponsored linx; Fixed refine results txt
	// v1.2.0	Added Video Results Enhancements; Rounded News left headline; Fixed nav bar
	// v1.2.1	Updated iGoogle I'm Feeling Lucky & Cancel buttons, Module Settings updates
	// v1.2.2	Fixed Google Home & Images logos; Fixed Video bg, time txt; Fixed News logo
	// v1.2.3	Fixed iGoogle Home logo; Setup block; Search linx position, Settings txt
	// v1.2.4	Fixed iGoogle skins box; News spacing, Headers, Show morefewer linx, Alerts txt
	// v1.2.5	Fixed Google Search & Image Home non-search logos; Fixed Preferences
	// v1.2.6	Fixed Search more pop layer; Fixed iGoogle module inner detail txt
	// v1.2.7	Fixed iGoogle Dialogs; Module selection page & delete confirmation box
	// v1.3.0	Major Code Optimization & a few minor txt fixes
	// v1.4.0	Added Maps Enhancements
	// v1.4.1	Fixed iGoogle txt & skin box; Video filter txt; News Image v& AFP.google
	// v1.4.2	Changed visited link color to be grey-blue; Fixed iGoogle module bg
	// v1.4.3	Moved black Google logo into script-code (only 3.8k)
	// v1.5.0	Major Code Optimization & a few minor bg fixes
	// v1.5.1	Refixed iGoogle Add Stuff (old disabled); Fixed more linx; Images size alert
	// v1.5.2	Fixed iGoogle Make your own gadget pages, Add Stuff search results
	// v1.6.0	Added Code Enhancements; Fixed Maps popup txt & removed Sponsored Linx
	// v1.6.1	Refixed AP/AFP.google News
	// v1.6.2	Changed Maps results color to be visible if also selected, My Maps fixes
	// v1.6.3	Removed Google Search Sponsored Linx!
	// v1.7.0	Added Support Enhancements; Toolbar Enhancements; Firefox Tools Enhancements +
	// v1.7.1	Updated txt-field color; Updated Maps highlight colors & Print-page layout
	// v1.7.2	Fixed iGoogle modules: Gmail linx & txt, YouTube bg; Excluded /custom
	// v1.7.3	Fixed iGoogle add tab dialog & new tab txt, Add Stuff menu headers & added msg
	// v1.7.4	Fixed Google Search Result desc-txt, Image Labeler bg, News Results txt
	// v1.7.5	Fixed iGoogle header bar bg
	// v1.7.6	Fixed Google Result txt, Advanced Search & Footer Tools; Experimental Enhancements
	// v1.7.7	Added Firefox Start Enhancements
	// v1.8.0	Quick update for Google Updates; Added Products; Minor fixes for Experimental/Maps
	// v1.8.1	Removed Google Search, Maps & Shopping Sponsored Links; fixed Shopping logo
	// v1.8.2	ReEnhanced Firefox Start, fixed Google Search & Intnl logo, Widened search results
	// v1.8.3	Enhanced top menu, results link colors & changed font to Trebuchet MS; MonkeyBarrel moved
	// v1.8.4	Enhanced News quote box; Updated Search paging & Shopping txt color
	// v1.8.5	Fixed visited linx; Updated Google Preferences & Support; Hid iGoogle CQ-modl ads
	// v1.8.6	Added iGoogle & Sign in link to header-bar; Fixed News & Shopping logos; Updated sidebar
	// v1.8.7	Improved added iGoogle & Sign in linx with conditional logic
	// v1.8.8	Resolved iGoogle & Sign in linx layout between FF2 & FF3
	// v1.8.9	Fixed iGoogle page layout & color scheme
	// v1.9.0	Auto-update added: THANX Mindeye! Thanx to Margot&Psidre for inspiration to fix layout =)
	// v1.9.1	Improved runtime to enhance Google first, then check for script-updates [&updatedName!]
	// v2.0.0	Added some Groups Enhancements; fixed Google Preferences layout
	// v2.0.1	Fixed Web Advanced Search page and iGoogle Add Stuff directory, module page & Create
	// v2.0.2	Fixed News menu and other layout elements (thanks Dan!)
	// v2.0.3	Fixed search results width (expansion), News And Video fixes & updates
	// v2.0.4	Tightened up header elements on Web, Images, News & Video search; Fixed News logo & form
	// v2.0.5	Fixed News head link positioning
	// v2.0.6	Fixed Web search result txt (thanks Makarielis & Justini) and News/Video headers
	// v2.0.7	Fixed Logos; Search Suggest, Results & Footer, Pref-txt; Shopping desc; iG txt & icon
	// v2.0.8	Improved Search Suggest bgs; Fixed Video header & footer; Google Search Sidebar headers
	// v2.0.9	Fixed Images safe search dropdown menu; Fixed News left-menu & right-side video headers
	// v2.1.0	Added some Google Voice Enhancements; Fixed Google international site logos
	// v2.1.1	Improved international logo support
	// v2.1.2	Fixed Images logo, Img Size Indicator & Alert; Minor update to Firefox start-page
	// v2.1.3	Fixed Experimental; Improved Intl. support: Fixed UK Google homepage & search results
	// v2.1.4	Optimized Brute Force CSS-override fucntionality: faster & lighter; Updated Experimental
	// v2.1.5	Improved Google Voice all thanks to godsyn
	// v2.1.6	Enhanced Google Login pages; Updated Search Suggest bg
	// v2.1.7	Enhanced Translate; Updated Google Web Search Language Tools, Search Within & Feedback
	// v2.1.8	Fixed iGoogle Login, iGoogle header-link per international domains; Videos headers
	// v2.1.9	Fixed Logos, iGoogle & Web header-linx, iG Create box & Weather module
	// v2.2.0	Enhanced Patents; Fixed Logo & Experimental keyboard >; Fixed Translate txt; Voice @inc
	// v2.2.1	Fixed Patents search results; Fixed Web Advanced Search


// To Do:
	// !! Add Trends support
	// ! Add Labs support
	// Add iGoogle Graphical Themes support
	// Add to Products/Froogle support
	// Add to Support Enhancements
	// Add to Help Central Enhancements
	// Add to Code Enhancements
	// Add to Notebook Enhancements
	// Add to Experimental Enhancements
	// Add to Groups Enhancements
	// Add to Voice Enhancements
	// Add Blogs support
	// Add Books support
	// Add Patents support
	// Add Scholar support
	// Add Earth support
	// Add User Script Command to launch Options panel
	// Add Option: Turn On/Off 3.14 Hack
	// Add Option: Font Choice dropdown
	// Add Option: Link color selections
	// Test functionality of custom background-color and G.logo


	// Feel free to leave suggestions/criticism on the UserScript Page or via email (see above); THANX!




var googleEnhancedBLACK; function enhanceGoogle() {googleEnhancedBLACK =


// General Google Page enhancements
	/* Global font override */	"*   {font-family:Trebuchet MS, Verdna;}" +
	/* page bg */			"BODY   {background:#000 none !important; color:#fff;}" +
	/* link color */		"A, #gbar A.gb1, #gbar A.gb2, #gbar A.gb3, SPAN.i, .linkon, #codesiteContent A, TABLE.mmhdr TBODY TR TD.mmttlinactive SPAN, TABLE TBODY TR TD TABLE TBODY TR TD A   {color:#6495ed !important;}" +
	/* visited linx */		"A:visited   {color:#406b80 !important;}" +
	/* results visited linx */	"DIV#res A:visited   {font-size:0.8em !important;}" +
	/* inner txt color */		"DIV, TD   {color:#000 !important;}" +
	/* bold txt color */		"B   {color:#fff !important;}" +
	/* google bar txt */		"#gbar SPAN   {color:#999;}" +
	/* google bar txt */		"#gbar DIV.gb1   {background-color:#c9d7f1 !important;}" +
	/* google bar txt */		"#gbar DIV.gb2   {padding-top:0; padding-bottom:0; background-color:#c9d7f1 !important;}" +
	/* google bar linx */		"#gbar A.gb1, #gbar B.gb1, #gbar A.gb3   {position:relative; bottom:0.2em; font-weight:bold; font-size:1.15em;}" +
	/* top logos */			"#logo SPAN, DIV#regular_logo, TABLE[align='center'] TBODY TR TD DIV#logo, #search .logo, #wrapper #header, TABLE[width='100%'][cellpadding='2'] TBODY TR TD[width='1%'][valign='top'], #gc-header #logo, #header #logo, TABLE[style='margin: 0px 0px -6px 0pt; padding: 0px; width: 100%;'] TD[style='width: 153px;'], TABLE[align='center'] TBODY TR TD[width='155'][rowspan='2'], TABLE[align='center'] TBODY TR[valign='middle'] TD[width='135'], BODY[bgcolor='#ffffff'][topmargin='3'] CENTER TABLE[width='725'] TBODY TR TD TABLE[cellspacing='1'] TBODY TR TD[height='1'][bgcolor='#666666'], BODY > TABLE[width='100%'][style='direction: ltr;'] > TBODY > TR > TD, BODY > TABLE[width='100%'] > TBODY > TR > TD[width='100%'][style='padding-left: 15px;'], BODY.siteowners > TABLE[width='96%'] > TBODY > TR > TD[width='1%'], BODY > CENTER > DIV > TABLE[width='739'] > TBODY > TR > TD[width='100%'], BODY[bgcolor='#ffffff'] > TABLE[cellpadding='5'][align='center'] > TBODY > TR[valign='middle'] > TD[width='1%'], TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD[width='1%'][valign='top'], BODY.search > TABLE[width='95%'] > TBODY > tr[valign='top'] > TD[width='1%'], BODY > DIV#container > DIV#header > DIV[style='float: left; width: 155px;'], BODY > TABLE[width='100%'][height='100%'][style='margin-bottom: 1px;'] > TBODY > TR > TD[valign='top'] > TABLE[width='100%'][cellspacing='2'] > TBODY > TR > TD[width='1%'], BODY[onload='sf()'] > CENTER > FORM > TABLE#frame > TBODY > TR > TD > TABLE[width='100%'] > TBODY > TR > TD[width='100%'] > TABLE > TBODY > TR > TD[width='100%'] > TABLE > TBODY > TR > TD > DIV[style='margin: 5px 0pt 4px 4px; background: transparent url(/images/firefox/sprite.png) no-repeat scroll 0pt -95px; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial; height: 23px; width: 80px;'], A#logo, A#glogo, BODY.answer_page TABLE.header_table > TBODY > TR > TD.header_logo_td, CENTER > H1#ps-logo, BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > CENTER > TABLE > TBODY TR > TD[align='left'] > TABLE > TBODY > TR > TD[valign='top'] > DIV, BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD[valign='top'] > DIV, BODY > TABLE[width='100%'][cellspacing='2'][cellpadding='0'][border='0'][style='margin-top: 1em;'] > TBODY > TR > TD[width='1%'], BODY > DIV#wrapper > DIV#header_logo, BODY.hp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > DIV.search > DIV#browse-header > TABLE > TBODY > TR:first-child > TD:first-child, BODY.serp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > DIV.search > DIV#search-header, BODY.sp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > DIV.search > DIV#browse-header > TABLE > TBODY > TR:first-child > TD:first-child, BODY > CENTER > DIV#videoheader > TABLE.table-header > TBODY > TR > TD.td-logo, BODY#search-results-body > DIV#videoheader > TABLE.table-header > TBODY > TR > TD.td-logo, BODY > DIV > DIV#videoheader > TABLE > TBODY > TR > TD:first-child, BODY > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > DIV.search > DIV#page-header > TABLE > TBODY > TR > TD:first-child, BODY > FORM[name='f'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'][style='clear: left;'] > TBODY > TR > TD:first-child, BODY > DIV#whole > TABLE[cellspacing='0'][cellpadding='0'][border='0'][style='font-size: medium;'] > TBODY > TR > TD, BODY > TABLE[cellspacing='0'][cellpadding='0'][border='0'][style='font-size: medium;'] > TBODY > TR > TD, DIV[style='background: transparent url(/intl/en_com/images/logo_plain.png) no-repeat scroll 0% 0%; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial; height: 110px; width: 276px;'], BODY[vlink='#551a8b'] > DIV#xjsd, BODY > FORM > TABLE#sft > TBODY > TR > TD.tc, BODY > SPAN#main > CENTER > DIV#xjsd, BODY > DIV[style='clear: both;'] > CENTER > TABLE[cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD, BODY > DIV#top_search_bar > DIV[style='padding: 1px 10px 0px 6px; float: left;'], BODY > TABLE[cellspacing='0'][cellpadding='0'][border='0'][style='clear: both;'] > TBODY > TR > TD[valign='top'][rowspan='2']   {width:150px !important; height:55px !important; background:transparent url('" + googleLogoBLACK + "') no-repeat scroll 0% !important; font-size:0;}" +
	/* large logo hide */		"BODY > CENTER IMG[onload='window.lol&&lol()']#logo, BODY > CENTER DIV[onload='window.lol&&lol()']#logo, BODY > SPAN#main > CENTER > SPAN#body > CENTER > IMG#logo   {visibility:hidden;}" +
	/* new intl logo mover */	"BODY[vlink='#551a8b'] > DIV#xjsd, BODY > SPAN#main > CENTER > DIV#xjsd   {position:absolute; top:100px; left:0; width:100% !important; background-position:center !important;}" +
	/* search input */		"INPUT[type='text'], INPUT[name='q']   {background:#333 none !important; color:#fff; padding:2px; border:solid 1px #ccc; font-weight:bold; color:#ff0 !important;}" +
	/* submit btns */		"INPUT[type='submit'], INPUT[value='Cancel'], INPUT[value='Save'], BUTTON, INPUT#stxemailsend, INPUT[value='Discard'], BUTTON[type='submit'], INPUT[value='Download'], INPUT[value='Add it now']   {background-color:#333; border:solid 1px #ccc; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px; color:#fff !important; cursor:pointer;}" +
	/* submit btn hover */		"INPUT[type='submit']:hover, BUTTON[type='submit']:hover   {background-color:#36f; color:#fff;}" +
	/* home international txt */	"DIV[style='background: transparent url(/intl/en_com/images/logo_plain.png) no-repeat scroll 0% 0%; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial; height: 110px; width: 276px;'] > DIV[style='color: rgb(102, 102, 102); font-size: 16px; font-weight: bold; left: 208px; position: relative; top: 78px;']   {top:-18px !important; left:180px !important; color:#fff !important;}" +
	/* more pop layer */		"SPAN#more, #gbar .gb2   {background-color:#333 !important; border-right:solid 1px #a2bae7; border-bottom:solid 1px #a2bae7; color:#333 !important;}" +
	/* google alerts txt */		"P[style='margin-left: 9px;'], SPAN[style='font-size: medium;']   {color:#999;}" +
	/* mainbody txt */		"DIV.mainbody, TD.j, DIV.empty, DIV.empty DIV, BODY#gsr DIV, BODY#gsr TD   {color:#999 !important;}" +
	/* remove footers */		"#footer, #footer_promos, #footerwrap, P FONT[size='-2'], TABLE[class='t n bt'][width='100%'][cellpadding='2'], DIV[align='center'][style='white-space: nowrap;'], FONT[class='p'][size='-1'], FONT[size='-1'][color='#6f6f6f'], DIV.div-copyright, SPAN.copyr, DIV.content DIV.footer, DIV#footarea, TABLE[width='99%'][cellpadding='3'][bgcolor='#c3d9ff'][align='center'][style='margin-bottom: 5px;'], CENTER > DIV[style='padding: 2px;'] > FONT[size='-1'], CENTER > CENTER > P > FONT[size='-1'], BODY.search > DIV[align='center'] > SMALL > FONT[size='-1'][face='Arial, sans-serif'], BODY > TABLE[width='100%'][height='100%'][style='margin-bottom: 1px;'] > TBODY > TR > TD[valign='top'] > CENTER > FONT[size='-1'], BODY > CENTER > TABLE[width='100%'][cellspacing='0'][cellpadding='2'][border='0'] *, DIV[class='padt10 padb10'] > TABLE[width='100%'] > TBODY > TR > TD[class='fontsize1 padt5'][align='center'], BODY[marginheight='3'][bgcolor='#ffffff'][dir='ltr'][topmargin='3'] > CENTER > FONT[size='-1'], BODY > DIV[style='width: 100%; clear: both;'] > FORM[name='langform'] > DIV[align='center'] > FONT[size='-1']   {display:none;}" +

	// Preferences
		/* pre title line */	"BODY[vlink='#551a8b'][text='#000000'][link='#0000cc'][bgcolor='#ffffff'][alink='#ff0000'] > DIV[style='width: 100%; clear: both;'] > FORM > TABLE TBODY TR TD[bgcolor='#3366cc'], BODY> DIV[style='width: 100%; clear: both;'] > FORM > TABLE TBODY TR TD[bgcolor='#3366cc']   {display:none;}" +
		/* title header txt */	"BODY[vlink='#551a8b'][text='#000000'][link='#0000cc'][bgcolor='#ffffff'][alink='#ff0000'] > DIV[style='width: 100%; clear: both;'] > FORM > TABLE TBODY TR TD[bgcolor='#e5ecf9'] FONT B   {color:#999 !important;}" +
		/* headers */		"BODY[vlink='#551a8b'][text='#000000'][link='#0000cc'][bgcolor='#ffffff'][alink='#ff0000'] > DIV[style='width: 100%; clear: both;'] > FORM > TABLE TBODY TR TD[bgcolor='#e5ecf9'], TABLE TBODY TR[bgcolor='#e5ecf9'], TABLE > TBODY > TR > TD[bgcolor='#e5ecf9']   {background-color:#000;}" +
		/* global borders */	"BODY[vlink='#551a8b'][text='#000000'][link='#0000cc'][bgcolor='#ffffff'][alink='#ff0000'] > DIV[style='width: 100%; clear: both;'] > FORM > TABLE > TBODY > TR > TD[bgcolor='#cbdced']   {display:none;}" +
		/* page txt */		"BODY[vlink='#551a8b'][text='#000000'][link='#0000cc'][bgcolor='#ffffff'][alink='#ff0000'] > DIV[style='width: 100%; clear: both;'] > FORM H1, BODY[vlink='#551a8b'][text='#000000'][link='#0000cc'][bgcolor='#ffffff'][alink='#ff0000'] > DIV[style='width: 100%; clear: both;'] > FORM H2, BODY[vlink='#551a8b'][text='#000000'][link='#0000cc'][bgcolor='#ffffff'][alink='#ff0000'] > DIV[style='width: 100%; clear: both;'] > FORM LABEL, TABLE#gsea_table > TBODY > TR > TD DIV   {color:#ccc !important;}" +
		/* subscribed links */	"BODY[vlink='#551a8b'][text='#000000'][link='#0000cc'][bgcolor='#ffffff'][alink='#ff0000'] > DIV[style='width: 100%; clear: both;'] > FORM > TABLE > TBODY > TR > TD[valign='top'] > IFRAME[src='http://www.google.com/coop/sl/pref']   {padding-left:9px; background-color:#fff; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +


// iGoogle Homepage enhancements
	/* header */			"#guser, #guser *, #gbar, #gbar *   {background:#000 !important; font-family:Trebuchet MS, Verdna !important;}" +
	/* search btn spacing */	".gseain INPUT[type='submit'], INPUT[name='btnG'], INPUT[name='btnI']   {margin-top:5px; margin-right:30px; margin-left:30px;}" +
	/* go btns hover */		"INPUT#btnI:hover, INPUT[name='btnI']:hover, INPUT[value='Save']:hover, SPAN#button_0 BUTTON:hover, INPUT#stxemailsend:hover, INPUT[value='Submit Issue']:hover, INPUT[value='Download']:hover, INPUT[value='Add it now']:hover, INPUT[value='Add it now'], INPUT[value='Save Preferences']:hover, INPUT[value='Save Preferences ']:hover   {background-color:#090; color:#fff;}" +
	/* setup block */		"DIV.setup_div   {background-color:#333; border:solid 1px #ccc; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
	/* setup title txt */		"DIV.setup_title_welcome, DIV.setup_promo, DIV.setup_promo_subtext, DIV#promo   {color:#999 !important;}" +
	/* create cntnr */		"FORM#_setup > DIV#box   {border:0 none;}" +
	/* create heading */		"FORM#_setup > DIV#box > DIV#box_heading   {background-color:#222; color:#fff !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
	/* create body */		"FORM#_setup > DIV#box > DIV#box_body   {background-color:#333; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* create body txt */		"FORM#_setup > DIV#box > DIV#box_body DIV, FORM#_setup > DIV#box > DIV#box_body TD   {color:#ccc !important;}" +
	/* nav top gradient 1 */	"#nhdrwrapinner > .gradient > B   {background-color:#171717;}" +
	/* nav top gradient 2 */	"#nhdrwrapinner > .gradient > B > B   {background-color:#252525;}" +
	/* nav top gradient 3 */	"#nhdrwrapinner > .gradient > B > B > B   {background-color:#333;}" +
	/* nav container */		"TABLE > TBODY > TR > TD#col1   {width:134px; background-color:#333; border-color:#333;}" +
	/* nav bg */			"#full_nav   {background-color:#333;}" +
	/* nav tab color */		"#full_nav H2   {color:#6495ed;}" +
	/* nav separators */		"#full_nav .topline, #full_nav .bottomline   {visibility:hidden;}" +
	/* nav first tab */		"#full_nav #section0_contents.selected_section_contents   {margin-top:20px;}" +
	/* nav selected tab */		"#full_nav .leftselectedtab   {background-color:#000; -moz-border-radius-topleft:14px; -moz-border-radius-bottomleft:14px;}" +
	/* nav non selected tab */	"#full_nav .leftunselectedtab   {background-color:#333;}" +
	/* nav non selected tab */	"#full_nav .leftselectedtab, #full_nav .leftunselectedtab, #full_nav .bottom_nav   {border:0 none;}" +
	/* remove nav selection rnds */	"#full_nav B[class='rnd_tab left_rounded_only']   {visibility:hidden;}" +
	/* alert / promo box */		"DIV#undel_box, .header_promo   {background-color:#333; border:1px solid #ff0; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px; color:#ff0 !important;}" +
	/* alert / promo box link */	"DIV#undel_box A, .header_promo A   {color:#f00 !important;}" +
	/* skins box title */		"H2.modtitle_s   {background-color:#feffc5; border:0; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
	/* skins box title txt */	"H2.modtitle_s B   {color:#000 !important;}" +
	/* skins box body */		"DIV#skinbox_b   {background-color:#000; border:solid 1px #feffc5 !important;}" +
	/* skins box themes */		"DIV.skinthsel B, DIV.skinth B   {color:#000 !important;}" +
	/* dialog box */		"TABLE.dialog TBODY TR TD DIV   {background-color:#333 !important; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;;}" +
	/* dialog box txt */		"LABEL[for='share_userprefs'], TABLE#email TBODY TR TD, TABLE#email TBODY TR TD DIV   {color:#999 !important;}" +
	/* dialog box btns */		"TABLE.dialog TBODY TR TD DIV#buttons   {padding-bottom:10px;}" +
	/* add tab dialog */		"BODY.mozilla> DIV#IG_PU_box TABLE.dialog TBODY TR TD DIV.outerborder DIV   {color:#999 !important;}" +
	/* new tab txt */		"#modules > TABLE[width='98%'][cellspacing='10'][align='center'] > TBODY > TR > TD > DIV[align='center'][style='padding-bottom: 100px;']   {color:#999 !important;}" +
	/* module border */		".modbox, .modbox_e   {background-color:#000; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* module bg */			".modboxin, .modboxin IFRAME HTML BODY   {background-color:#fff !important;}" +
	/* module border */		".modboxin, .modboxin_s, .modtitle   {border:0 none !important;}" +
	/* module area container */	"TABLE > TBODY > TR > TD#col2   {background-color:#333; border:0 none;}" +
	/* module area header rndng */	"TABLE > TBODY > TR > TD#col2 > #rcbg   {display:none;}" +
	/* module area bg */		"#modules   {background-color:#000; -moz-border-radius-topleft:20px;}" +
	/* module area btm spacing */	"#modules > .yui-b   {margin-bottom:-0.3em; padding-top:0.2em;}" +
	/* module title rndng */	"B.rnd_modtitle   {display:none;}" +
	/* module title bg */		".modtitle   {-moz-border-radius-topleft:14px; -moz-border-radius-topright:14px; background-color:#333 !important;}" +
	/* module title txt */		".modtitle_text,.mtlink   {position:relative; top:1px; left:1px; color:#999 !important;}" +
	/* module options buttons */	".modtitle .v2enlargebox, .modtitle .v2ddbox, .modtitle .v2dragbox   {position:relative; top:2px; right:3px;}" +
	/* module settings line */	"DIV.meditbox   {margin-top:0; border:0;}" +
	/* module settings txt */	"DIV.meditbox DIV, DIV.meditbox TD, DIV.meditbox SPAN, DIV.meditbox NOBR   {color:#999 !important;}" +
	/* module inner detail txt */	".modboxin FONT   {color:#000 !important;}" +
	/* cancel btn hover */		"INPUT[value='Cancel']:hover, SPAN#button_1 BUTTON:hover, INPUT[value='Discard']:hover, INPUT[value='Delete Group']:hover   {background-color:#990000 !important; color:#fff !important;}" +

	// Module-specific Requests
		/* gmail */		"HTML > BODY > DIV > #modules A B   {color:#36a !important;}" +
		/* youtube video */	"HTML > BODY > DIV > DIV#middle, HTML > BODY > DIV > DIV#uppernav, HTML > BODY > DIV > DIV#searchFooter   {background-color:#fff;}" +
		/* confucius quotes */	"DIV#modules DIV#remote_56 > IFRAME#remote_iframe_56   {overflow:hidden !important; height:8em !important;}" +
		/* weather */		"DIV#modules DIV.w_box, DIV#modules DIV.w_box DIV   {height:8em; overflow:visible; font-size:11px;}" +

	// Add Stuff
		/* logo img */		"BODY > DIV#wrapper > DIV#header_logo > A > IMG.backlink_logo, TD[width='1%'] > A > IMG[src='http://img0.gmodules.com/ig/images/igoogle_logo_sm.gif']   {display:none;}" +
		/* header tabs */	"BODY > DIV#wrapper > DIV#header > UL.header_tab   {display:none;}" +
		/* body txt */		"BODY > DIV#wrapper *   {color:#ccc;}" +
		/* body header */	"BODY > DIV#wrapper > DIV.page_table > DIV.main_content > TABLE[width='99%'][cellspacing='0'] TD   {background:none #000 !important; color:#999 !important;}" +
		/* body header line */	"BODY > DIV#wrapper > DIV.page_table > DIV.main_content > TABLE[width='99%'][cellspacing='0']   {border-bottom:6px solid #333;}" +
		/* r-module top */	"BODY > DIV#wrapper > DIV.page_table > DIV.right_sidebar .module > H3, BODY > DIV#wrapper > DIV#sidebar > DIV.module > H3   {background-color:#333 !important; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; color:#ccc !important;}" +
		/* r-module bottom */	"BODY > DIV#wrapper > DIV.page_table > DIV.right_sidebar .module, BODY > DIV#wrapper > DIV#sidebar DIV.module   {min-height:34px; padding-bottom:5px; background-color:#333; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px; color:#000 !important;}" +
		/* r-module feat */	"BODY > DIV#wrapper > DIV#sidebar DIV#featured.module   {padding:0 7px 7px 7px;}" +
//		/* header box */	"#wrapper #header .header_title   {background-color:#333; border:0 !important; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px; color:#000 !important;}" +
//		/* menu headers */	"#wrapper #container #nav LI.navhead   {margin-top:25px; padding:0 3px 0 3px; background-color:#333; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; color:#000;}" +
//		/* gadget txt */	"#wrapper #container #gadget-info TABLE TBODY TR TD, #wrapper #container #comments DIV, #wrapper #container #pagehead, #wrapper #container #search_main DIV, #wrapper #container UL#nav, #wrapper #container DIV#main DIV   {color:#999 !important;}" +
//		/* added msg */		"#wrapper #container #main DIV DIV DIV[class='added fixedwidth'][style='display: block;']    {-moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
//		/* screenshot border */	"#wrapper #container #gadget-info TABLE TBODY TR TD.screenshot-box IMG   {border:0;}" +
//		/* sidebar item head */	"#wrapper #sidebar DIV.module H3   {background:#333; padding-bottom:5px; border:0; -moz-border-radius-topleft:14px; -moz-border-radius-topright:14px; color:#000;}" +
//		/* sidebar item */	"#wrapper #sidebar DIV.module   {background:#000; padding-bottom:20px; border:0; moz-border-radius-bottomleft:14px; -moz-border-radius-bottomright:14px; color:#999 !important;}" +
		/* makeyourown head */	"BODY > DIV#gm_blue_bar > TABLE > TBODY > TR > TD > TABLE > TBODY > TR > TD > DIV#bluebar   {background-color:#333; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
		/* makeyourown title */	"BODY > CENTER > DIV#gm_sign_in > TABLE > TBODY > TR > TD#gm_sign_in_steps > DIV:first-child, BODY > CENTER > DIV#gm_desc   {color:#fff !important;}" +
		/* makeyourown txt */	"BODY > CENTER > DIV#gm_sign_in > TABLE > TBODY > TR > TD#gm_sign_in_steps > DIV, BODY > CENTER > DIV#gm_sign_in > TABLE > TBODY > TR > TD#gm_sign_in_steps > DIV.gm_step, BODY > CENTER > DIV#gm_choices DIV, BODY > CENTER > DIV#gm_wizard DIV, BODY > CENTER > DIV#gm_wizard TD, BODY > CENTER > DIV#gm_send DIV, BODY > CENTER > DIV#gm_publish TD, BODY > CENTER > DIV#gm_publish DIV    {color:#999 !important;}" +
		/* makeyourown num */	"BODY > CENTER > DIV#gm_sign_in > TABLE > TBODY > TR > TD#gm_sign_in_steps > DIV.gm_step > SPAN.gm_num   {background:none #333; color:#fff;}" +
		/* makeyourown start */	"BODY > CENTER > DIV#gm_sign_in > TABLE > TBODY > TR > TD > DIV#gm_sign_in_box   {background-color:#333 !important; border:0 none; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +


// Google Search Results Page enhancements
	/* logo */			"BODY#gsr > DIV#header > FORM#tsf > TABLE#sft > TBODY > TR > TD > H1 > A#logo > IMG   {display:none;}" +
	/* search container */		"BODY#gsr > DIV#header > FORM#tsf > TABLE#sft > TBODY > TR > TD#sff > TABLE.ts, BODY#gsr > DIV#header > FORM#tsf > TABLE#sft > TBODY > TR > TD#sff > TABLE.ts > TBODY > TR > TD:first-child, BODY#gsr > DIV#header > FORM#tsf > TABLE#sft > TBODY > TR > TD#sff > TABLE.ts > TBODY > TR > TD > INPUT[name='q']   {width:80%;}" +
	/* search suggest bg */		".gac_m, .gac_m *, .google-ac-a, .google-ac-a *   {background-color:#222 !important; color:#999 !important;}" +
	/* search suggest hover */	".gac_b .gac_c, .gac_b .gac_c *, .google-ac-b, .google-ac-b *, .google-ac-e, .google-ac-e *   {background-color:#444 !important; color:#fff !important;}" +
	/* search within logo */	"TABLE[width='100%'] > TBODY > TR > TD[valign='top'] > A > IMG[width='200'][height='78'][alt='Google'], A#logo IMG[src='/images/experimental_sm.gif'], A#logo > IMG[width='150'][height='105'], A#logo > IMG[src='/images/nav_logo4.png']   {display:none;}" +
	/* search within txt */		"TABLE[width='100%'] > TBODY > TR > TD[valign='top'] > CENTER > FONT > b   {position:relative; top:68px;}" +
	/* search header bar */		"TABLE[class='t bt'], DIV#ssb   {padding-right:0.4em; padding-left:0.7em; background-color:#333; border:0; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* header bar experiment dd */	"DIV.std SPAN[style='background: rgb(255, 255, 255) none repeat scroll 0% 0%; float: right; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial; position: relative;']   {background-color:#000 !important;}" +
	/* search header bar */		"TABLE[class='ft t bb bt']   {border:0; border-top:1px}" +
	/* result-area width */		"DIV#res   {width:71% !important;}" +
	/* remove sponsored linx */	"DIV#tads   {display:none;}" +
	/* refine results txt */	"TABLE#po TBODY TR TD   {color:#999 !important;}" +
	/* sponsored linx */		"DIV#res DIV.ta, BODY#gsr > TABLE#mbEnd   {display:none;}" +
	/* result-area txt */		"DIV#res P, DIV#res .j, DIV.sml, DIV.std, DIV#res OL LI, DIV#res OL LI DIV   {color:#999 !important;}" +
	/* description width */		"TD.j, OL > LI.g > DIV.s   {width:100% !important; max-width:100% !important;}" +
	/* description color */		"FONT   {color:#999;}" +
	/* result spacing */		".g   {margin:0.5em 0; padding-bottom:1em; border-bottom:1px dotted #222;}" +
	/* bottom related txt */	".r   {color:#aaa;}" +
	/* bottom related selection */	"TABLE#brs.ts > TBODY > TR > TD > A > B   {color:#aaa !important;}" +
	/* nav bar */			"#navbar   {position:relative; left:33%; width:400px;}" +
	/* footer logo(s) */		"#navbar DIV,#navbar IMG, TABLE#nav SPAN#nf, TABLE#nav SPAN#nc, TABLE#nav SPAN.nr, TABLE#nav SPAN#nn, DIV#np, TABLE#nav > TBODY > TR[valign='top'] > TD.b > SPAN, TABLE#nav > TBODY > TR[valign='top'] > TD.cur > SPAN, TABLE#nav > TBODY > TR[valign='top'] > TD > A > SPAN.csb   {height:0px; background:none;}" +
	/* footer bg */			"TABLE[class='ft t bb bt'], DIV.clr > DIV#bsf, DIV.clr > P.blk, BODY#gsr > DIV > DIV#bsf   {background-color:#000 !important; border-top:0 none; border-bottom:0 none;}" +

	// Advanced Search
		/* header bar line */	"BODY > TABLE[width='100%'][cellspacing='2'][cellpadding='0'][border='0'][style='margin-top: 1em;'] > TBODY > TR > TD > TABLE[width='100%'][style='border-top: 1px solid rgb(51, 102, 204);']   {border-top:0 none !important;}" +
		/* header bar L */	"BODY > TABLE[width='100%'][cellspacing='2'][cellpadding='0'][border='0'][style='margin-top: 1em;'] > TBODY > TR > TD > TABLE[width='100%'][style='border-top: 1px solid rgb(51, 102, 204);'] > TBODY > TR > TD.page-title   {background-color:#333; border:0; -moz-border-radius-topleft:14px; -moz-border-radius-bottomleft:14px;}" +
		/* header bar R */	"TABLE[width='100%'][cellspacing='2'][cellpadding='0'][border='0'][style='margin-top: 1em;'] > TBODY > TR > TD > TABLE[width='100%'][style='border-top: 1px solid rgb(51, 102, 204);'] > TBODY > TR > TD[bgcolor='#d5ddf3'][align='right']   {background-color:#333; border:0; -moz-border-radius-topright:14px; -moz-border-radius-bottomright:14px;}" +
		/* title top */		"BODY > TABLE[width='100%'][cellspacing='0'][cellpadding='0'] > TBODY > TR > TD[align='center'] > TABLE[cellspacing='0'][cellpadding='0'][style='margin-top: 1em; width: 80%;'] > TBODY > TR > TD[align='left'] > DIV.outer-box > DIV.qbuilder-env, BODY > TABLE[width='100%'][cellspacing='0'][cellpadding='0'] > TBODY > TR > TD[align='center'] > TABLE[cellspacing='0'][cellpadding='0'][style='margin-top: 1em; width: 80%;'] > TBODY > TR > TD[align='left'] > DIV.outer-box > DIV.qbuilder-env *   {border-color:#333; background-color:#000 !important; color:#fff !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
		/* lower form */	"BODY > TABLE[width='100%'][cellspacing='0'][cellpadding='0'] > TBODY > TR > TD[align='center'] > TABLE[cellspacing='0'][cellpadding='0'][style='margin-top: 1em; width: 80%;'] > TBODY > TR > TD[align='left'] > DIV.outer-box > FORM[name='f'].block   {border-color:#333; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
		/* related box */	"BODY > TABLE[width='100%'][cellspacing='0'][cellpadding='0'] > TBODY > TR > TD[align='center'] > TABLE[cellspacing='0'][cellpadding='0'][style='width: 80%;'] > TBODY > TR > TD[align='left'] > DIV#related.block   {border-color:#333; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
//		/* refine box */	"TABLE[width='100%'][cellspacing='2'][cellpadding='0'][border='0'][style='margin-top: 1em;'] > TBODY > TR > TD > TABLE > TBODY > TR > TD[align='center'] > TABLE[style='margin-top: 1em; width: 80%;'] > TBODY > TR > TD[align='left'] > DIV.outer-box > *, BODY > TABLE[width='100%'][height='100%'][style='margin-bottom: 1px;'] > TBODY > TR > TD[valign='top'] > TABLE[width='100%'] > TBODY > TR > TD[align='center'] > TABLE[style='width: 80%;'] > TBODY > TR > TD[align='left'] > DIV#related   {border:0 none; background-color:#000;}" +
//		/* gen-query */		"TABLE[width='100%'][cellspacing='2'][cellpadding='0'][border='0'][style='margin-top: 1em;'] > TBODY > TR > TD > TABLE > TBODY > TR > TD[align='center'] > TABLE[style='margin-top: 1em; width: 80%;'] > TBODY > TR > TD[align='left'] > DIV.outer-box > DIV.qbuilder-env > DIV#gen-query   {border:0 none; background-color:#000; font-size:1.5em; font-weight:bold; color:#ff0 !important;}" +
//		/* page specific txt */	"BODY > TABLE[width='100%'][cellspacing='2'][cellpadding='0'][border='0'][style='margin-top: 1em;'] > TBODY > TR > TD > TABLE[width='100%'] > TBODY > TR > TD[align='center'] > TABLE[style='width: 80%;'] > TBODY > TR > TD[align='left'] > DIV#related > DIV > H3   {font-size:1.3em; color:#ff0 !important;}" +
		/* footer txt */	"BODY > CENTER:last-child > FONT[size='-1']   {display:none;}" +

	// Quality Form
		/* header bar */	"BODY[marginheight='3'][bgcolor='#ffffff'][topmargin='3'] > FORM > TABLE[width='100%'][cellpadding='2'] > TBODY > TR > TD[class='t bt']   {padding-left:10px; background-color:#333; border:0; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
		/* form box bg */	"BODY[marginheight='3'][bgcolor='#ffffff'][topmargin='3'] > FORM > BLOCKQUOTE > P > TABLE[cellpadding='10'][bgcolor='#cbdced']   {background-color:#000 !important;}" +
		/* bottom line */	"BODY[marginheight='3'][bgcolor='#ffffff'][topmargin='3'] > CENTER > DIV[class='t n bt'][style='padding: 2px;']   {display:none;}" +

	// Language Tools
		/* top line */		"BODY[vlink='#551a8b'][link='#0000cc'][bgcolor='#ffffff'][alink='#ff0000'][onload='ht();'] TABLE.header TD, BODY[vlink='#551a8b'][link='#0000cc'][bgcolor='#ffffff'][alink='#ff0000'] > TABLE > TBODY > TR > TD > TABLE.header > TBODY > TR > TD[bgcolor='#e5ecf9']   {border-top:0 none;}" +
		/* header bars */	"BODY[vlink='#551a8b'][link='#0000cc'][bgcolor='#ffffff'][alink='#ff0000'][onload='ht();'] H4, BODY[vlink='#551a8b'][link='#0000cc'][bgcolor='#ffffff'][alink='#ff0000'] H4   {background-color:#333; border:0; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
		/* search across box */	"BODY[vlink='#551a8b'][link='#0000cc'][bgcolor='#ffffff'][alink='#ff0000'][onload='ht();'] > TABLE[width='100%'][cellpadding='3'] > TBODY > TR[bgcolor='#ffffff'] > TD, BODY[vlink='#551a8b'][link='#0000cc'][bgcolor='#ffffff'][alink='#ff0000'] > TABLE[width='100%'][cellpadding='3'] > TBODY > TR[bgcolor='#ffffff'] > TD   {background-color:#000;}" +

	// Search Within expanded below in brute force enhancements

	// Feedback
		/* header bar */	"BODY > FORM > TABLE.qftbb > TBODY > TR > TD   {background-color:#333; border:0; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
		/* form txt */		"BODY > FORM > TABLE.ts > TBODY > TR > TD > TABLE.qflhs > TBODY > TR > TD   {color:#ccc !important;}" +
		/* answers box */	" BODY > FORM > TABLE.ts > TBODY > TR > TD > TABLE.qfrhs   {background-color:#555; border:0; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +

	// Help Central
		/* logo img */		"BODY.search > TABLE[width='95%'] > TBODY > tr[valign='top'] > TD[width='1%'] > A > IMG[width='143'][vspace='10'][height='59'][align='left']   {visibility:hidden;}" +
		/* header bg */		"BODY.search > TABLE[width='95%'] > TBODY > tr[valign='top'] > TD[width='99%'][valign='top'][bgcolor='#ffffff'], BODY.search > TABLE[width='95%'] > TBODY > tr[valign='top'] > TD[width='99%'][valign='top'][bgcolor='#ffffff'] > TABLE > TBODY > TR   {background-color:#000;}" +


// Custom Seach iFrame-edition
	/* iframe bgs */		"BODY[marginheight='2'][text='#000000'], BODY[marginheight='2'][text='#000000'] TABLE[width='1%']   {background-color:inherit !important;}" +
	/* iframe txt & linx */		"BODY[marginheight='2'][text='#000000'] A, BODY[marginheight='2'][text='#000000'] A B, BODY[marginheight='2'][text='#000000'] B   {color:inherit !important;}" +


// Images Results enhancements
	/* safe search dropdown */	"BODY > FORM > TABLE#sft > TBODY > TR > TD > TABLE.tb > TBODY > TR > TD.tc > FONT > DIV#ss-bar > DIV#ss-box   {background-color:#222;}" +
	/* safe search dd link */	"BODY > FORM > TABLE#sft > TBODY > TR > TD > TABLE.tb > TBODY > TR > TD.tc > FONT > DIV#ss-bar > DIV#ss-box > A *   {display:inline; margin:0;}" +
	/* safe search dd hover */	"BODY > FORM > TABLE#sft > TBODY > TR > TD > TABLE.tb > TBODY > TR > TD.tc > FONT > DIV#ss-bar > DIV#ss-box > A:hover > SPAN:nth-child(2)   {color:#fff !important;}" +
	/* safe search dd selected */	"BODY > FORM > TABLE#sft > TBODY > TR > TD > TABLE.tb > TBODY > TR > TD.tc > FONT > DIV#ss-bar > DIV#ss-box > A.ss-selected, BODY > FORM > TABLE#sft > TBODY > TR > TD > TABLE.tb > TBODY > TR > TD.tc > FONT > DIV#ss-bar > DIV#ss-box > A.ss-selected > SPAN:nth-child(2)   {background-color:#444; color:#fff !important;}" +
	/* sizes alert */		"DIV[style='padding: 16px 0pt;'] CENTER SPAN[style='padding: 4px; background-color: rgb(255, 255, 153);'], BODY > DIV#ImgCont > DIV#rstc > CENTER > SPAN   {padding:2px 7px 2px 7px !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* sizes alert txt */		"DIV[style='padding: 16px 0pt;'] CENTER SPAN[style='padding: 4px; background-color: rgb(255, 255, 153);'] FONT, BODY > DIV#ImgCont > DIV#rstc > CENTER > SPAN > FONT   {color:#777;}" +
	/* sizes alert highlight */	"DIV[style='padding: 16px 0pt;'] CENTER SPAN[style='padding: 4px; background-color: rgb(255, 255, 153);'] FONT B, BODY > DIV#ImgCont > DIV#rstc > CENTER > SPAN > FONT > B   {color:#000 !important;}" +
	/* g.image labeler */		"CENTER TABLE[cellpadding='10'][style='text-align: center;'] TBODY TR TD   {background-color:#000;}" +


// Video Results enhancements
	/* logo img */			"A#logoimg IMG   {display:none;}" +
	/* logo container */		"TD.td-logo   {height:65px; background:transparent url('" + googleLogoBLACK + "') no-repeat scroll 0% !important;}" +
	/* header/footer bgs */		"#videoheader, BODY#search-results-body DIV.div-footer   {background-color:#000 !important;}" +
	/* body txt */			"#main-container DIV, #slideout-player DIV   {color:#777 !important;}" +
	/* filter option txt */		"TD[style='padding: 0pt;'] SPAN.filter-prefix, TD[style='padding: 0pt;'] LABEL.filter-option   {color:#999;}" +
	/* section header */		"DIV.div-section-header, BODY > DIV#hotstuff > DIV.hot_videos_container > TABLE.hot_videos_title_bar, DIV.container DIV.mod_titlebar, DIV.container DIV.mod-header   {padding:0.1em 0 0.2em 0.4em !important; background-color:#333; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* section borders */		"BODY > DIV#hotstuff > DIV.hot_videos_container > TABLE.hot_videos_body > TBODY > TR > TD.embedded_player_container, BODY > CENTER > DIV.container > DIV > DIV.mod_content   {border:0 none;}" +
	/* section header txt */	"TD.td-section-header-left B   {color:#000 !important;}" +
	/* home video time */		"DIV.div-video-text   {color:#090 !important;}" +
	/* search type */		"TABLE.table-header TABLE[bgcolor='white'], DIV.menu-normalsb   {border:0; background-color:#000;}" +
	/* results header */		"TABLE#resultsheadertable, DIV#results-bar   {padding-right:0.4em; padding-left:0.7em; background-color:#333 !important; border-top:0 none !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* results header title */	"TABLE#resultsheadertable TD[valign='baseline'] B   {position:relative; top:1px; left:2px; color:#000 !important;}" +
	/* result item */		"DIV.SearchResultItem   {width:100%; margin:2em 0pt;}" +
	/* result item border */	"TD#search-results-td > DIV#search-results DIV.tv-res, TD#search-results-td > DIV#search-results DIV.rl-res   {border:0 none;}" +
	/* result item details */	"TD.MetaData DIV.Details, DIV.rl-metadata > DIV.rl-details   {color:#999 !important;}" +
	/* result item description */	"TD.MetaData DIV.Snippet, DIV.rl-metadata > DIV.rl-snippet, DIV.rl-metadata > DIV.rl-short-snippet   {color:#aaa !important;}" +
	/* result item uri */		"TD.MetaData DIV.URL, DIV.rl-metadata > SPAN.rl-domain   {color:#090 !important;}" +
	/* results message */		"TD#search-results-td > DIV#search-results > DIV.message   {color:#999 !important;}" +
	/* video related border */	"BODY#search-results-body > DIV#tv-table > TABLE > TBODY > TR > TD#tv-player-td > DIV#tv-player > DIV#tv-related   {border:0 none;}" +
	/* video data */		"BODY#search-results-body > DIV#tv-table > TABLE > TBODY > TR > TD#tv-player-td > DIV#tv-player > DIV#video-data-spacer > DIV#video-data   {background-color:#000;}" +
	/* footer nav table */		"TABLE#pagenavigatortable   {width:400px !important;}" +
	/* footer logo(s) */		"TABLE#pagenavigatortable TD IMG, TABLE#pagenavigatortable TD A.imglink, TABLE#pagenavigatortable TD BR, DIV#search-results > DIV#pagi > DIV > TABLE.gooooogle > TBODY > TR > TD.prev > A > DIV.nav_previous, DIV#search-results > DIV#pagi > DIV > TABLE.gooooogle > TBODY > TR > TD.prev > DIV.nav_first, DIV#search-results > DIV#pagi > DIV > TABLE.gooooogle > TBODY > TR > TD#current-page > DIV.nav_current, DIV#search-results > DIV#pagi > DIV > TABLE.gooooogle > TBODY > TR > TD.abs-page > A > DIV.nav_page, DIV#search-results > DIV#pagi > DIV > TABLE.gooooogle > TBODY > TR > TD.next > A > DIV.nav_next   {display:none;}" +
	/* search again */		"DIV#searchagain   {border:0; background-color:#000;}" +


// News Results enhancements
	/* header Google links */	"BODY.hp > DIV#gbar > NOBR, BODY.serp > DIV#gbar > NOBR, BODY.sp > DIV#gbar > NOBR   {position:relative; top:0.2em;}" +
	/* header iGoogle link */	"BODY.hp > DIV#gbar > NOBR > A[href='/ig'].gb1, BODY.serp > DIV#gbar > NOBR > A[href='/ig'].gb1, BODY.sp > DIV#gbar > NOBR > A[href='/ig'].gb1   {top:-1.3em !important;}" +
	/* search table */		"TABLE[width='1%']   {position:relative; top:1px; background-color:#000; width:100% !important;}" +
	/* search form input */		"BODY.serp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > DIV.search > DIV#search-header > FORM.search-form > *   {float:none;}" +
	/* logo imgs */			"IMG[src='/images/logo_sm.gif'], IMG[src='images/news.gif'], IMG[src='/images/news.gif'], IMG[width='150'][height='58'][alt='Go to Google News Home'], BODY.hp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > DIV.search > DIV#browse-header > TABLE > TBODY > TR > TD > A > IMG[width='205'][height='85'], BODY.sp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > DIV.search > DIV#browse-header > TABLE > TBODY > TR > TD > A > IMG[width='205'][height='85'], BODY.serp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > DIV.search > DIV#search-header > A > IMG[width='150'][height='58'], BODY.serp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > DIV.search > DIV#search-header > A > IMG[width='150'][height='55'], BODY > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > DIV.search > DIV#page-header > TABLE > TBODY > TR > TD:first-child > A > IMG    {visibility:hidden;}" +
	/* search logo adjustment */	"BODY.serp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > DIV.search > DIV#search-header   {height:65px !important; background-position:0 10px !important;}" +
	/* logo img link */		"TABLE[width='1%'] TBODY TR TD[valign='top'],TABLE[align='center'] TBODY TR TD TABLE TBODY TR TD[valign='bottom']   {height:65px; background:transparent url('" + googleLogoBLACK + "') no-repeat scroll 0% !important;}" +
	/* news sources txt */		"BODY[marginwidth='0'][marginheight='3'][bgcolor='white'][rightmargin='0'][leftmargin='0'][topmargin='3'] > TABLE[cellspacing='0'][cellpadding='0'][border='0'][align='center'][style='clear: both;'] > TBODY > TR > TD[valign='top'][nowrap=''] > FORM[name='f'] > B > FONT[size='-1'][color='#aa0033'], BODY.hp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > DIV.search > DIV#browse-header > TABLE > TBODY > TR > TD > FORM.search-form > DIV.search-label   {position:relative; top:5px; font-weight:normal; font-style:italic; color:#333 !important;}" +
	/* header bars */		"BODY.hp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > TABLE#main-table > TBODY > TR > TD > DIV.main > DIV#headline-wrapper > DIV.basic-title, BODY.hp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered DIV.bt-border, BODY.hp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > TABLE#main-table > TBODY > TR > TD > DIV.main > DIV#headline-wrapper TD, BODY.serp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > DIV.search-sub-header > DIV#_h, BODY.serp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > DIV.search-sub-header > DIV#_h DIV, BODY.sp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > TABLE#main-table > TBODY > TR > TD > DIV.main DIV#_h, DIV.blended-section2 > TABLE.blended-section2 > TBODY > TR > TD DIV.basic-title   {padding-right:0.4em; padding-left:0.4em; background-color:#333; border:0; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* top red line */		"BODY[marginwidth='0'][marginheight='3'][bgcolor='white'][rightmargin='0'][leftmargin='0'][topmargin='3'] > TABLE#topSection > TBODY > TR > TD[valign='top'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD[width='100%'][bgcolor='#aa0033'][colspan='2'], BODY[marginheight='2'][bgcolor='#ffffff'][topmargin='2'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD[width='100%'][bgcolor='#aa0033'][colspan='2'], BODY[marginheight='0'][bgcolor='#ffffff'][topmargin='0'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD[width='100%'][bgcolor='#aa0033'][colspan='2']   {display:none;}" +
	/* notify box */		"DIV#notifybox   {color:#000; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* top stories dropdown */	"BODY[marginwidth='0'][marginheight='3'][bgcolor='white'][rightmargin='0'][leftmargin='0'][topmargin='3'] > TABLE#topSection > TBODY > TR > TD[valign='top'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD[width='60%'][nowrap=''][bgcolor='#efefef'][style='padding-bottom: 0pt;'] > FONT.ks > FONT[size='-1'] > SELECT[name='ned']   {height:1.7em; background-color:#333; border: 1px solid #fff;}" +
	/* right alert box */		"BODY[marginwidth='0'][marginheight='3'][bgcolor='white'][rightmargin='0'][leftmargin='0'][topmargin='3'] > TABLE#topSection > TBODY > TR > TD[valign='top'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'][valign='top'] > TBODY > TR > TD[width='42%'][valign='top'] > DIV#cust_result > TABLE[width='100%'][cellspacing='5'][cellpadding='4'][border='0'][bgcolor='#ffff99'][align='center'][style='border: 1px solid rgb(204, 204, 204);']   {-moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* more pop layer */		"SPAN#more, #gbar .gbard, #gbar .gb2   {background-color:#333 !important; border-right:solid 1px #a2bae7; border-bottom:solid 1px #a2bae7; color:#333 !important;}" +
	/* top stories txt */		"TABLE[width='100%'] .ks   {color:#999 !important;}" +
	/* left nav bg */		".leftnav TABLE TABLE TBODY TR TD[nowrap=''], DIV.browse-sidebar > DIV.wrapper > DIV#left-nav-sections TABLE.nav, DIV.browse-sidebar > DIV.wrapper > DIV#left-nav-sections TABLE.nav-items, DIV.browse-sidebar > DIV.wrapper > DIV#left-nav-sections > TABLE.nav-items > TBODY > TR > TD.clickable, DIV.browse-sidebar > DIV.wrapper > DIV#left-nav-sections > TABLE.nav-items > TBODY > TR.item > TD   {background-color:#000 !important;}" +
	/* left nav frontpage link */	"DIV.sidebar > DIV.back-to-frontpage > A   {color:#6495ed !important;}" +
	/* left nav selected bg */	"BODY > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered DIV.browse-sidebar > DIV.wrapper > DIV#left-nav-sections > TABLE.nav-items > TBODY > TR.selected > TD DIV.title   {color:#fff !important;}" +
	/* left nav spacing */		".leftnav TABLE TABLE TBODY TR TD[bgcolor='#ffffff']   {display:none;}" +
	/* left nav line */		"BODY[marginwidth='0'][marginheight='3'][bgcolor='white'][rightmargin='0'][leftmargin='0'][topmargin='3'] > TABLE#topSection > TBODY > TR > TD[width='1'][height='1'][bgcolor='#cccccc']   {width:2px; background-color:#333;}" +
	/* left nav line alternate 1 */	"BODY[marginwidth='0'][marginheight='2'][bgcolor='#ffffff'][rightmargin='0'][leftmargin='0'][topmargin='2'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD.leftnav > DIV[style='border-right: 1px solid rgb(204, 204, 204);']   {border-right:2px solid #333 !important;}" +
	/* left nav line alternate 2 */	"BODY.hp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > TABLE#main-table > TBODY > TR > TD > DIV.main > DIV#headline-wrapper, BODY.sp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > TABLE#main-table > TBODY > TR > TD > DIV.main > DIV#headline-wrapper   {border-left-color:#333;}" +
	/* left nav borders (old) */	"BODY[marginwidth='0'][marginheight='3'][bgcolor='white'][rightmargin='0'][leftmargin='0'][topmargin='3'] > TABLE#topSection > TBODY > TR > TD.leftnav > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD > TABLE[width='100%'][cellspacing='1'][cellpadding='0'][border='0'][bgcolor='#cccccc'], BODY[marginwidth='0'][marginheight='2'][bgcolor='#ffffff'][rightmargin='0'][leftmargin='0'][topmargin='2'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD.leftnav > DIV[style='border-right: 1px solid rgb(204, 204, 204);'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD > TABLE[width='100%'][cellspacing='1'][cellpadding='0'][border='0'][bgcolor='#cccccc'], .leftnav TABLE TABLE TBODY TR TD[nowrap='']   {position:relative; right:-1px; background-color:#333 !important;}" +
	/* left nav borders */	"DIV.browse-sidebar > DIV.wrapper > DIV#left-nav-sections > TABLE.nav-items > TBODY > TR > TD[height='2'][bgcolor='white'][colspan='2']   {background-color:#333;}" +
	/* left headline */		"DIV.hd   {background:#333; -moz-border-radius-topleft:14px; -moz-border-radius-bottomleft:14px;}" +
	/* header title bg */		"BODY.hp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered DIV.basic-title   {background-color:#333;}" +
	/* header color bars */		"BODY.hp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered DIV.ls-wrapper DIV.bar   {display:none;}" +
	/* section headers */		"DIV#section-header, BODY.hp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered DIV.ls-wrapper DIV.basic-title   {padding-left:0.7em; background-color:#333 !important; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* more fewer linx (old) */	"TABLE[bgcolor='#efefef'][style='border: 1px solid rgb(0, 0, 153);']   {background-color:#000;}" +
	/* more fewer links new */		"BODY.hp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered DIV.ls-wrapper DIV.more-link, BODY.hp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered DIV.ls-wrapper DIV.fewer-link   {background-color:#222; -moz-border-radius-topright:8px; -moz-border-radius-topleft:8px; -moz-border-radius-bottomright:8px; -moz-border-radius-bottomleft:8px;}" +
	/* search header r1col1 */	"TABLE[width='1%'] TBODY TR TD[valign='top'] TABLE TBODY TR TD,TABLE[width='100%'] TBODY TR TD[bgcolor='#efefef']    {background:#000 none !important;}" +
	/* search header r1col2 */	"TABLE[width='1%'] TBODY TR TD[valign='top'] TABLE TBODY TR TD A   {position:relative; top:12px;}" +
	/* search header barL */	"TABLE TBODY TR TD[width='60%']   {background-color:#333; border:0; -moz-border-radius-topleft:14px; -moz-border-radius-bottomleft:14px;}" +
	/* search header barL txt*/	"TABLE TBODY TR TD[width='60%'] FONT   {color:#000;}" +
	/* search header barR */	"TABLE TBODY TR TD[width='40%']   {background-color:#333; border:0; -moz-border-radius-topright:14px; -moz-border-radius-bottomright:14px;}" +
	/* results area width */	"BODY.serp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > TABLE#main-table > TBODY > TR > TD > TABLE.left > TBODY > TR > TD.search-middle   {width:100%;}" +
	/* results area R-nav */	"BODY.serp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > TABLE#main-table > TBODY > TR > TD > TABLE.left > TBODY > TR > TD.right-nav   {display:none;}" +
	/* results nav r-side line */	"BODY.serp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > TABLE#main-table > TBODY > TR > TD.nav > DIV.sidebar   {border-color:#333;}" +
	/* results nav headline */	"BODY.serp > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered > TABLE#main-table > TBODY > TR > TD.nav > DIV.sidebar DIV.filter-label   {background-color:#333; padding-left:0.5em; color:#ccc !important; -moz-border-radius-topleft:14px; -moz-border-radius-bottomleft:14px;}" +
	/* quote box */			"DIV.qdetails DIV.qsnippet, DIV.quote-story DIV.quotesnippet   {padding-right:1.2em !important; padding-left:1.2em !important; -moz-border-radius-topright:8px; -moz-border-radius-topleft:8px; -moz-border-radius-bottomright:8px; -moz-border-radius-bottomleft:8px; text-align:justify; font-weight:bold;}" +
	/* quote arrow */		"DIV.qdetails DIV.qarrow   {border-right-color:#000; border-left-color:#000;}" +
	/* results txt */		"TABLE TBODY TR TD DIV[style='margin: 60px 22px;'], BODY > DIV#main-wrapper > DIV#main > DIV.background > DIV.centered DIV   {color:#999 !important;}" +
	/* result spacing */		"DIV.mainbody TABLE TBODY TR TD[align='left'] TABLE[cellspacing='7'][cellpadding='2']   {margin:0.5em 0pt;}" +
	/* footer search borders */	"CENTER > CENTER > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD[bgcolor='#3366cc'] IMG   {display:none;}" +
	/* footer search bg */		"CENTER > CENTER > TABLE[width='100%'][cellspacing='0'][cellpadding='3'][border='0'] > TBODY > TR > TD[bgcolor='#e5ecf9'][align='center'], BODY > DIV#main-wrapper > DIV.footer > DIV.bottom-search, BODY > DIV#main-wrapper > DIV.footer > DIV.bottom, BODY.serp > DIV#main-wrapper > DIV#pagination > TABLE > TBODY > TR > TD > A > DIV#start-prev, BODY.serp > DIV#main-wrapper > DIV#pagination > TABLE > TBODY > TR > TD > DIV#start, BODY.serp > DIV#main-wrapper > DIV#pagination > TABLE > TBODY > TR > TD > DIV#current, BODY.serp > DIV#main-wrapper > DIV#pagination > TABLE > TBODY > TR > TD > A > DIV.o, BODY.serp > DIV#main-wrapper > DIV#pagination > TABLE > TBODY > TR > TD > A > DIV#end-next   {border:0 none; background:#000 none;}" +
	/* footer seach borders */	"CENTER > CENTER > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD[bgcolor='#aa0033']   {display:none;}" +
	/* footer disclaimer */		"BODY.hp > DIV#main-wrapper > DIV.footer > DIV.footer-disclaimer   {color:#333 !important;}" +
	/* personalize header */	"#cust_link_tbl {background-color:#333; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
	/* personalize button */	"DIV.blended-section2 > DIV.column2 > SPAN > DIV#personalize   {background-color:#223; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* in the news top line */	"DIV.t-IN_THE_NEWS   {border-top-color:#333 !important;}" +
	/* in the news headline */	"DIV.t-IN_THE_NEWS > DIV.basic-title   {color:#ccc !important;}" +

	// Image Version
		/* cell container */	"TD#ImageSection TABLE TBODY TR TD   {padding:5px;}" +
		/* cells */		"TD#ImageSection TABLE TBODY TR TD DIV[style='border: 1px solid rgb(255, 255, 255); padding: 7px 7px 4px; white-space: nowrap; width: 104px;']   {background-color:#333; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
		/* img container */	"DIV.divnohighlightnoie   {border:0 none !important;}" +
		/* img container */	"DIV.divnohighlightnoie IMG.centerimagenonie   {position:relative; left:-5px;}" +
		/* rightBar */		"DIV#RightBarContent DIV   {background-color:#000 !important;}" +


	// AP/AFP.google News enhancements
		/* body txt */		"DIV DIV#hn-content DIV   {color:#999 !important;}" +
		/* article title */	"DIV DIV#hn-content DIV H1   {color:#fff;}" +
		/* footer */		"DIV DIV#hn-footer   {display:none;}" +


// Maps enhancements
	/* logo img */			"IMG[alt='Go to Google Maps Home'], BODY.firefox > DIV#header > DIV#search > FORM#q_form > DIV#logo IMG   {display:none;}" +
	/* help linx */			"DIV.helplinks DIV   {background-color:#000 !important; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* header txt */		"DIV#header SPAN   {color:#999;}" +
	/* mapping tabs */		"TABLE#paneltabs TBODY TR TD   {background-color:#000 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
	/* mapping tab txt */		"TABLE#paneltabs TBODY TR TD.tabOff A DIV, TABLE#paneltabs TBODY TR TD.tabOn A DIV   {font-weight:bold; color:#999 !important;}" +
	/* map popup txt */		"DIV.iw #basics DIV, DIV.gmnoprint DIV DIV DIV B  {color:#000 !important;}" +
	/* send panel container */	"DIV.sdb   {margin:5px; background-color:#000 !important; border:3px solid #f90 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* send panel inner */		"DIV.sdb DIV.c, DIV.sdb DIV.c DIV DIV   {border:0 !important; background-color:#000 !important; color:#999 !important;}" +
	/* link to this page panel */	"DIV#le   {background-color:#000 !important; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* link to panel txt */		"DIV#le TABLE.letbl TBODY TR TD   {color:#999 !important;}" +
	/* results area */		"DIV#hp DIV, DIV#hp TABLE TR TD, DIV#panel DIV DIV, DIV#panel DIV TABLE TBODY TR TD, DIV#page DIV, DIV#page TABLE TBODY TR TD   {color:#777 !important;}" +
	/* sponsored linx */		"TABLE > TBODY > TR > TD > TABLE.geoads, TABLE > TBODY > TR > TD > DIV.adsmessage, #panel .ads   {display:none;}" +
	/* searched term in title */	"TABLE.res TBODY TR TD DIV.name SPAN A SPAN B   {color:#aaa !important;}" +
	/* phone numbers */		"TABLE.res TBODY TR TD DIV SPAN.tel   {color:#090;}" +
	/* highlight */			"FONT[color='red']   {color:#f00;}" +
	/* map points */		"TABLE.ddwpt_table TD   {background-color:#333;}" +
	/* search logo(s) */		"DIV.n DIV.imgn IMG   {display:none;}" +
	/* legal & navtech blocks */	"DIV.legal, DIV.cprt   {display:none;}" +
	/* txt-view header */		"TABLE#titlebar   {border:0; background-color:#333; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* txt-view body width */	"#contentpanel > TABLE[style='margin-top: 0.2em;'], #contentpanel > TABLE[style='margin-top: 0.2em;'] TBODY TR.lr TD TABLE, #contentpanel > TABLE[style='margin-top: 0.2em;'] TBODY TR.lr TD TABLE TBODY TR TD:nth-child(3)    {width:99%;}" +
	/* txt-view footer block */	"#localfooter TABLE TBODY TR TD   {border:0; background-color:#000;}" +
	/* mymaps feat cont bg */	"DIV.mmheaderpane DIV DIV.mmboxheaderinactive, DIV.mmboxbody IFRAME HTML BODY   {background-color:#000 !important;}" +
	/* search results notice */	"DIV#resultspanel > DIV.local > DIV#localpanelnotices   {display:none;}" +

	// Print-page
		/*directions txt */	"DIV.segmentdiv TABLE TBODY TR TD   {background-color:#000;}" +
		/* title width */	"@media print{ #ph TD.phh   {width:100%;} }" +
		/* save trees msg */	"@media print{ #pnc.untouched #gmm_msg   {display:none;} }" +


// Shopping/Froogle enhancements
	/* logo img */			"A#glogo > IMG[width='150'][height='105'], CENTER > H1#ps-logo > IMG, BODY > FORM[name='f'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'][style='clear: left;'] > TBODY > TR > TD:first-child > A#glogo > IMG   {display:none;}" +
	/* header bar */		"TABLE[cellspacing='0'][cellpadding='0'][style='border-top: 1px solid rgb(68, 120, 212); background: rgb(234, 239, 250) none repeat scroll 0% 0%; width: 100%; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial;'], TABLE#ps-titlebar   {padding:0 0.3em 0.1em 0.3em; background-color:#333 !important; border:0 none !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* sponsored linx */		"DIV[style='padding-top: 11px;'] > DIV[style='font-size: small; background-color: rgb(255, 249, 221);'], BODY[vlink='#551a8b'][text='#000000'][marginheight='3'][link='#0000cc'][alink='#ff0000'][topmargin='3'] > TABLE[cellspacing='0'][cellpadding='0'][border='0'][bgcolor='#ffffff'][align='right'][style='']   {display:none;}" +
	/* search txt */		"TABLE.list FORM, TABLE.list SPAN.prod-detail, TABLE.list > TBODY > TR > TD.ol NOBR, TABLE.list > TBODY > TR > TD.ol SPAN   {color:#ccc;}" +
	/* search desc */		"TABLE.list > TBODY > TR > TD.ol   {color:#fff !important;}" +
	/* vertical ads */		"TABLE#ps-vertical-ads   {display:none;}" +
	/* footer search refinement */	"DIV.main-top > DIV#attr-div > TABLE.attr-table, DIV.main-top > DIV#attr-div > TABLE.attr-table LI   {color:#ccc;}" +
	/* footer logo(s) */		"TABLE DIV#nf, TABLE DIV#nc, TABLE DIV.nr, TABLE DIV#nn   {height:0px; background:none;}" +
	/* footer disclaimer */		"TABLE[width='65%'][align='center'] > TBODY > TR > TD[align='center'] > SPAN.disclaimer   {display:none;}" +
	/* footer search */		"BODY > TABLE[cellspacing='0'][cellpadding='3'][style='border-top: 1px solid rgb(68, 120, 212); border-bottom: 1px solid rgb(68, 120, 212); background: rgb(234, 239, 250) none repeat scroll 0% 0%; width: 100%; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial;'], BODY > TABLE#ps-footer   {background-color:#000 !important; border:0 none !important;}" +
	/* footer txt */		"BODY > TABLE[cellspacing='0'][cellpadding='3'][style='border-top: 1px solid rgb(68, 120, 212); border-bottom: 1px solid rgb(68, 120, 212); background: rgb(234, 239, 250) none repeat scroll 0% 0%; width: 100%; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial;'] > TBODY > TR > TD[align='center'] > FONT[size='-1'], BODY[vlink='#551a8b'][text='#000000'][marginheight='3'][link='#0000cc'][alink='#ff0000'][topmargin='3'] > CENTER > FONT[size='-1'], BODY > TABLE#ps-footer > TBODY > TR > TD[align='center'] > FONT[size='-1']   {display:none;}" +
	/* footer bg */			"BODY > DIV#ps-footer > DIV#ps-footer-bg   {background-color:#000 !important;}" +
	/* footer disclaimer */		"BODY > DIV#ps-footer > P.ps-disclaimer   {color:#777;}" +


// Groups enhancements
//   (commented out Groups enhancements are from older Groups code-revision. Updating...)//
//	/* mygroups panel */		"#myg_popup   {border:0 !important; background-color:#333 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* logo img */			"BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > CENTER > TABLE > TBODY TR > TD[align='left'] > TABLE > TBODY > TR > TD[valign='top'] > DIV > A > IMG   {display:none;}" +
//old	/* logo imgs */			"IMG[width='150'][height='55'][alt='Go to Google Groups Home'], IMG[width='150'][height='55'][src='/groups/img/3nb/groups_medium.gif'], IMG[width='132'][height='26'][style='position: relative; top: 1px;'][alt='Google Groups Home']   {display:none;}" +
	/* search header */		"BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > CENTER > TABLE > TBODY TR > TD[align='left'] > TABLE > TBODY > TR > TD[valign='top'] > DIV   {margin:20px;}" +
	/* top table borders */		"TABLE[width='100%'] > TBODY > TR[valign='top'] > TD[width='70%'][valign='top'][align='left'] > DIV > TABLE[width='450'][style='border-top: 1px solid rgb(119, 153, 221);'], BODY[bgcolor='white'] > TABLE[width='100%'] > TBODY > TR[valign='bottom'] > TD > TABLE[width='100%'] > TBODY > TR > TD[valign='center'][align='left'] > TABLE[width='100%'] > TBODY > TR > TD[bgcolor='#7799dd']   {border:0 !important; background-color:#000 !important;}" +
//	/* header bar bgs */		"TD[valign='center'][align='left'] > TABLE[width='100%'] > TBODY > TR[bgcolor='#e8eef7']   {background-color:#000;}" +
	/* header bars */		"TD[class='padt3 padb3 padl3 padr8'][bgcolor='#e8eef7'], TD[valign='center'][align='left'] > TABLE[width='100%'] > TBODY > TR[bgcolor='#e8eef7'] > TD   {padding-left:7px; background-color:#333; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* right table bg */		"#GHP_compact_my_groups > TABLE TBODY TR TD   {border:0 !important; background-color:#000;}" +
	/* right headers */		"TD[class='padt3 padb3 padl7'][style='border-top: 1px solid rgb(119, 153, 221);']   {border:0 !important; padding-left:7px; background-color:#333 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
//	/* number txt & bgs */		"DIV[class='padl0 padr0'] > DIV, DIV[class='padl0 padr0'] > DIV B   {background-color:#000 !important; color:#369 !important;}" +
//	/* number corners */		"DIV[class='padl0 padr0'] > DIV > TABLE   {display:none;}" +
	/* suggested for you bg */	"TABLE[width='450'][style='border-top: 1px solid rgb(119, 153, 221);'] > TBODY > TR > TD > TABLE > TBODY TR TD[width='40%'][valign='top']   {background-color:#000;}" +

	// Advanced Search
		/* logo img */		"BODY[marginheight='3'][bgcolor='#ffffff'][topmargin='3'] > TABLE[width='100%'][cellpadding='0'][border='0'] > TBODY > TR > TD[valign='middle'].tc > A#logo > IMG   {display:none;}" +
		/* header blue line */	"TABLE#advsearch-t   {border-top:0 none;}" +
		/* header bar */	"TABLE#advsearch-t > TBODY > TR > TD.page-title   {padding-left:7px; background-color:#333; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
		/* header about */	"TABLE#advsearch-t > TBODY > TR > TD.page-about   {display:none;}" +
		/* borders */		"TABLE.advsearch-s > TBODY > TR > TD > DIV.outer-box > DIV.qbuilder-env, TABLE.advsearch-s > TBODY > TR > TD > DIV.outer-box > FORM[name='f'].block, TABLE.advsearch-s > TBODY > TR > TD > FORM[name='msgid'].block   {background-color:#000 !important; border-color:#333;}" +
		/* top borders */	"TABLE.advsearch-s > TBODY > TR > TD > DIV.outer-box > DIV.qbuilder-env, TABLE.advsearch-s > TBODY > TR > TD > FORM[name='msgid'].block   {-moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
		/* bottom borders */	"TABLE.advsearch-s > TBODY > TR > TD > DIV.outer-box > FORM[name='f'].block, TABLE.advsearch-s > TBODY > TR > TD > FORM[name='msgid'].block   {-moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
		/* highlighted bgs */	"TABLE.advsearch-s > TBODY > TR > TD > DIV.outer-box > DIV.qbuilder-env > DIV#gen-query, TABLE.advsearch-s > TBODY > TR > TD > DIV.outer-box > FORM[name='f'].block > DIV > TABLE > TBODY > TR[bgcolor='#ffffff'], TABLE.advsearch-s > TBODY > TR > TD > FORM[name='msgid'].block > DIV > TABLE > TBODY > TR[bgcolor='#ffffff']   {background-color:#000; color:#fff !important;}" +

	// Browse Groups
		/* logo img */		"BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD[valign='top'] > DIV > A > IMG   {display:none;}" +
		/* top line */		"BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][bgcolor='#e8eef7'].tsh   {display:none;}" +
		/* search bars */	"BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'][bgcolor='#e8eef7']   {padding-left:7px; background-color:#333; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
		/* result txt */	"BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > DIV.padl1ex   {color:#ccc !important;}" +
		/* result item */	"BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > DIV.padl1ex > P   {padding-top:10px; border-top:1px solid #555;}" +
		/* pagination */	"BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > DIV.padl1ex > TABLE#bottom_marker > TBODY > TR[valign='bottom'] > TD[width='100%'] > DIV[dir='ltr'] > TABLE > TBODY > TR > TD IMG   {display:none;}" +
		/* pagination bg fix */	"BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > DIV.padl1ex > TABLE#bottom_marker > TBODY > TR[valign='bottom'] > TD[width='100%'] > DIV[dir='ltr'] > TABLE > TBODY > TR > TD   {background-image:none !important;}" +
		/* bottom search bg */	"BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'][bgcolor='#e8eef7'][style='margin-right: -5px;']   {background-color:#000;}" +
		/* bottom line */	"BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > DIV[style='border-bottom: 1px solid rgb(119, 153, 221);']   {display:none;}" +

	// My Profile
		/* header bar */	"BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][bgcolor='#e8eef7'][style='padding: 1px 0px 2px;']   {background-color:#333; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
		/* recent activity */	"BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > DIV.padl1ex > TABLE.padt10 > TBODY > TR > TD> TABLE > TBODY > TR#stats > TD[width='500'] *   {color:#000 !important;}" +
		/* activity box */	"BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > DIV.padl1ex > TABLE.padt10 > TBODY > TR > TD> TABLE > TBODY > TR#stats > TD[width='500'] TD[bgcolor='#e8eef7'], BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > DIV.padl1ex > TABLE.padt10 > TBODY > TR > TD> TABLE > TBODY > TR#stats > TD[width='500'] TD[bgcolor='#e8eef7'] > DIV, BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > DIV.padl1ex > TABLE.padt10 > TBODY > TR > TD> TABLE > TBODY > TR#stats > TD[width='500'] > DIV.wdth100 > DIV[style='border-top: 15px solid white; border-bottom: 10px solid white;'], BODY[marginheight='3'][bgcolor='white'][topmargin='3'] > DIV.padl1ex > TABLE.padt10 > TBODY > TR > TD> TABLE > TBODY > TR#stats > TD[width='500'] TABLE#stat_ftr > TBODY > TR > TD   {border-color:#000 !important; background-color:#000; color:#fff !important;}" +

//	// Create
//		/* step num */		"DIV[style='padding: 10px 158px;'] > TABLE > TBODY > TR > TD[width='16'][height='18'][align='center']   {color:#999 !important;}" +
//		/* page txt */		"TABLE.content > TBODY > TR > TD, DIV[style='padding: 10px 158px;'] > FORM[name='cr'] > DIV.boxttl, BODY[bgcolor='white'] > DIV[style='padding: 10px 158px;'], BODY[bgcolor='white'] > DIV[style='padding: 10px 158px;'] > DIV, BODY[bgcolor='white'] > DIV[style='padding: 10px 158px;'] > TABLE > TBODY > TR > TD, BODY[bgcolor='white'] > DIV[style='padding: 10px 158px;'] > TABLE > TBODY > TR > TD > DIV   {color:#999 !important;}" +
//		/* submit bar bg */	"TABLE.content > TBODY > TR > TD[valign='middle'][align='right'][style='background-color: rgb(232, 238, 247);']   {background-color:#000 !important;}" +
//		/* footer bar bg */	"BODY[bgcolor='white'] > DIV[style='background-color: rgb(232, 238, 247);']   {background-color:#000 !important;}" +
//
//	// Admin
//		/* group name bar */	"BODY[bgcolor='white'] > DIV[style='border-top: 1px solid rgb(119, 153, 221);'], BODY[bgcolor='white'] > DIV[style='padding: 4px 10px; background-color: rgb(232, 238, 247);'], BODY[bgcolor='white'] > DIV[style='border-top: 1px solid rgb(119, 153, 221);']   {border:0 !important; background-color:#000 !important;}" +
//		/* title bar */		"DIV.maincontheaderbox > DIV.secttlbarwrap > DIV.secttlbar   {background-color:#333; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
//		/* spacers */		"DIV.maincontheaderbox > DIV.secttlbarwrap > DIV > TABLE[width='100%'] > TBODY > TR, DIV.maincontheaderboxatt > DIV > TABLE[width='100%'] > TBODY > TR > TD[width='100%'][height='4'][bgcolor='#e8eeff'], DIV.maincontheaderboxatt > DIV > TABLE[width='100%'] > TBODY > TR > TD[width='100%'][height='4'][bgcolor='#c3d9ff'], DIV.maincontheaderboxatt DIV[style='background: transparent url(/groups/roundedcorners?c=c3d9ff&bc=white&w=4&h=4&a=af) repeat scroll 0px; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial; width: 4px; height: 4px;'], DIV.maincontheaderboxatt DIV[style='background: transparent url(/groups/roundedcorners?c=c3d9ff&bc=white&w=4&h=4&a=af) repeat scroll 0px 4px; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial; width: 4px; height: 4px;'], DIV.maincontheaderboxatt DIV[style='background: transparent url(/groups/roundedcorners?c=e8eeff&bc=white&w=4&h=4&a=af) repeat scroll 0px; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial; width: 4px; height: 4px;'], DIV.maincontheaderboxatt DIV[style='background: transparent url(/groups/roundedcorners?c=e8eeff&bc=white&w=4&h=4&a=af) repeat scroll 0px 4px; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial; width: 4px; height: 4px;']   {display:none;}" +
//		/* section headers */	"DIV.maincontheaderboxatt > DIV.sshdr   {padding:5px; background-color:#333 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
//		/* right panel */	"BODY[bgcolor='white'] > DIV.rf DIV   {background-color:#333 !important;}" +
//		/* right panel bttm */	"TABLE[class='wdth100 overflow-hide'] > TBODY > TR[valign='top'] > TD[style='background-color: rgb(232, 238, 247);']   {background-color:#000 !important;}" +
//		/* content border */	"TABLE[class='wdth100 overflow-hide'] > TBODY > TR[valign='top'] >  TD.overflow-hide   {border:0 !important;}" +
//		/* page txt */		"TD.overflow-hide > DIV.maincontheaderboxatt TABLE TBODY TR TD, TD.overflow-hide > DIV[style='text-align: center;'], DIV.mngcontentbox TABLE > TBODY > TR > TD, DIV.mngcontentbox DIV    {color:#999 !important;}" +
//		/* settings bgs */	"TABLE[class='wdth100 overflow-hide'] > TBODY > TR[valign='top'] >  TD.overflow-hide DIV.mnghdrttl, TABLE[class='wdth100 overflow-hide'] > TBODY > TR[valign='top'] >  TD.overflow-hide DIV.mngbottombox DIV, TD.padall6 > TABLE > TBODY > TR > TD > TABLE[width='500'][bgcolor='#ffffff']    {background-color:#000;}" +
//		/* settings spacers */	"TABLE[class='wdth100 overflow-hide'] > TBODY > TR[valign='top'] >  TD.overflow-hide > DIV.mngtabbox > DIV:first-child > TABLE[width='100%']   {display:none;}" +
//		/* settings actv itm */	"DIV.mngbottombox > DIV.mnghdrbtm > DIV > SPAN   {color:#fff;}" +
//		/* settings o-border */	"TABLE[class='wdth100 overflow-hide'] > TBODY > TR[valign='top'] >  TD.overflow-hide > DIV.mngbottombox   {border:0 !important;}" +
//		/* settings i-border */	"TABLE[class='wdth100 overflow-hide'] > TBODY > TR[valign='top'] >  TD.overflow-hide > DIV.mngbottombox > DIV.mngcontentbox   {border:3px solid #333; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +	


// Code enhancements
	/* logo imgs */			"#logo IMG[src='/images/code_sm.png'], TABLE[style='margin: 0px 0px -6px 0pt; padding: 0px; width: 100%;'] TD[style='width: 153px;'] IMG[src='/hosting/images/code_sm.png'], #logo IMG[src='http://code.google.com/images/code_sm.png']   {display:none;}" +
	/* search button bg */		".gsc-search-box .gsc-search-button   {background-color:#000;}" +
	/* search suggest */		".gsc-search-box .greytext   {background-color:#000 !important; color:#999 !important;}" +
	/* header bars */		"#gc-topnav, #gc-topnav H1, #header #title, TABLE.mainhdr, #issueheader, #issueheader TABLE TBODY TR TD, #makechanges DIV.h4   {padding-right:10px; background-color:#333; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px; color:#000 !important;}" +
	/* page txt */			"#gc-home DIV, #codesiteContent DIV, #body, #body DIV, #body TABLE TBODY TR TD DIV, #maincol DIV, #maincol DIV TABLE TBODY TR TD, #maincol P, #maincol H4, #issuemeta, #issuemeta TD, TABLE.issuepage TBODY TR TD[class='vt issuedescription'], DIV.content DIV, DIV.content DIV DIV DIV H2, DIV.content DIV DIV TABLE TBODY TR TD   {color:#999 !important;}" +
	/* section headers */		"DIV.g-unit H2, .g-c .column-title, #gc-toc UL.treelist LI H1, #gc-toc UL.treelist LI H2, #gc-pagecontent H1   {margin-top:10px; padding-top:2px; padding-left:4px; border:0; background-color:#333; -moz-border-radius-topleft:14px;-moz-border-radius-topright:14px;  color:#fff;}" +
	/* labels tables */		".g-c .labels-table DIV   {background-color:#333;}" +
	/* box bgs */			"#products-list, #preview-box   {border:0; background-color:#000;}" +
	/* project tabs */		"TABLE#mt TBODY TR TH   {background:#333 none; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
	/* project tab round bg */	"TABLE#mt TBODY TR TH DIV   {background-image:none !important;}" +
	/* project details */		"#codesiteContent TABLE.columns TBODY TR TD   {background-color:#000; color:#999 !important;}" +
	/* docs toc bg */		"#gc-toc UL.treelist LI UL LI   {background-color:inherit;}" +
	/* docs sidebar bg */		"#maincol .pmeta_bubble_bg, .rounded_ul, .rounded_ur, .rounded_ll, .rounded_lr, DIV[style='background: rgb(221, 248, 204) none repeat scroll 0%; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial; margin-bottom: 5px; table-layout: fixed;'], .vt DIV.tip   {background:#333 none !important; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* docs code bg */		"PRE   {background-color:#ccc;}" +
	/* downloads search bar */	"TABLE.st TBODY TR TD, TABLE.st TBODY TR TD DIV, TABLE.st TBODY TR TD DIV DIV SPAN   {background:#000 none !important; color:#999 !important;}" +
	/* downloads results table */	".bubble_bg, TABLE#resultstable TBODY TR TH, TABLE#resultstable TBODY TR TD   {border-bottom-color:#333; border-left-color:#333; background:#000;}" +
	/* org info block */		"#body TABLE TBODY TR TD DIV.extern_app   {background:#333 none; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* org info app list */		"#body DIV TABLE.applist   {background:#333 none; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* org info app details */	"#body DIV TABLE.applist TBODY TR TD   {color:#fff !important;}" +
	/* org info app text */		"#body DIV TABLE.applist TBODY TR TD DIV.app_text   {padding:10px; background:#000 none; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px; color:#fff !important;}" +
	/* alerts & messages */		"#codesiteContent P.note, #codesiteContent P.caution, #codesiteContent P.warning, #codesiteContent DIV.noticebox, #nowShowingDiv, DIV[class='bottom clearfix'] DIV.blog   {padding-top:4px; padding-bottom:5px; border:0; background:#333 none; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px; color:#fff;}" +
	/* collapsible bg */		"#gc-collapsible   {border:2px solid #333; background:#333 none !important;}" +
	/* footer bg */			"DIV#gc-footer   {background:#000 none;}" +


// Experimental enhancements
	/*   These two maintained for older G.versions, expanded below and in brute force enhancements: */
	/* logo img */			"BODY > DIV#container > DIV#header > DIV[style='float: left; width: 155px;'] IMG[width='150'][height='55']   {display:none;}" +
	/* content */			"BODY > DIV#container > DIV#content   {color:#999 !important;}" +

	/*   New web search results implementations: */
	/* right side drop menu */	"BODY#gsr > DIV#header > DIV.std > SPAN[style='background: rgb(255, 255, 255) none repeat scroll 0% 0%; float: right; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous; position: relative;']   {background-color:#555 !important; padding-right:0.25em; padding-left:0.25em; color:#fff !important; text-decoration:none; -moz-border-radius-topright:7px; -moz-border-radius-topleft:7px; -moz-border-radius-bottomright:7px; -moz-border-radius-bottomleft:7px;}" +
	/* right side drop menuLink */	"BODY#gsr > DIV#header > DIV.std > SPAN[style='background: rgb(255, 255, 255) none repeat scroll 0% 0%; float: right; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous; position: relative;'] A, BODY#gsr > DIV#header > DIV.std > SPAN[style='background: rgb(255, 255, 255) none repeat scroll 0% 0%; float: right; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous; position: relative;'] A U   {color:#fff !important; text-decoration:none !important;}" +
	/* right side drop menu drop */	"BODY#gsr > DIV#header > DIV.std > SPAN[style='background: rgb(255, 255, 255) none repeat scroll 0% 0%; float: right; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous; position: relative;'] > DIV#exp_info   {background-color:#333 !important;}" +
	/* keyboard chevron */		"BODY#gsr > DIV#res > DIV > OL > LI.g > IMG[src='/images/chevron.gif']   {padding:1px; background-color:#fff;}" +
	/* keyboard exp Key bg */	"BODY#gsr > TABLE.mbEnd   {margin-top:1em; margin-bottom:1em; background:#222 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* keyboard exp Key bar */	"BODY#gsr > TABLE.mbEnd > TBODY > TR > TD.std   {border-left:0 none !important;}" +
	/* keyboard exp Key title */	"BODY#gsr > TABLE.mbEnd > TBODY > TR > TD.std > CENTER.f   {color:#fff;}" +


// Support enhancements
	/* logo img */			"TABLE[align='center'] TBODY TR TD[width='155'][rowspan='2'] A IMG, TABLE[align='center'] TBODY TR[valign='middle'] TD[width='135'] IMG, BODY.answer_page TABLE.header_table > TBODY > TR > TD.header_logo_td > A[href='/'] > IMG[alt='Google']   {display:none;}" +
	/* header */			"TABLE[style='border-bottom: 1px solid rgb(37, 71, 157);'] TBODY TR TD, DIV#baseDiv > DIV.header_wrapper > TABLE.header_table *   {background-color:#000; color:#fff !important;}" +
	/* page title */		"TABLE[style='border-bottom: 1px solid rgb(37, 71, 157);'] TBODY TR TD.header H1   {color:#fff !important;}" +
	/* headline color */		"BODY.answer_page H2, BODY.answer_page H3, BODY.answer_page H4   {color:#ccc;}" +
	/* page txt */			"TABLE[style='border-bottom: 1px solid rgb(37, 71, 157);'] TBODY TR TD, TABLE TBODY TR TD TABLE TBODY TR TD *, TABLE TBODY TR TD P, #content, BODY.answer_page OL, BODY.answer_page FORM   {color:#999 !important;}" +
	/* head tabs */			"#tabs TABLE TBODY TR TD DIV   {border:0; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
	/* head tabs */			"#tabs TABLE TBODY TR TD DIV DIV.link A   {color:#000 !important;}" +
	/* answer name */		"TABLE TBODY TR TD H3.answername   {color:#fff !important;}" +
	/* info boxes */		"BODY.answer_page DIV.lightbulb, BODY.answer_page DIV.module   {-moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* info box module title bg */	"BODY.answer_page DIV.module > H2   {background-color:transparent; color:#ccc;}" +
	/* side bar headers */		"TABLE.smfont TBODY TR TD.module_hdr   {border:0; background:#333 none; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px;}" +
	/* side bar header txt */	"TABLE.smfont TBODY TR TD.module_hdr H4, TABLE.smfont TBODY TR TD.module_hdr H4 LABEL, TABLE.smfont TBODY TR TD.module_hdr B   {color:#000 !important;}" +
	/* side bar block bg */		"TABLE.smfont TBODY TR TD   {border:0 none #000 !important; background-color:#000;}" +
	/* bottom tools */		"TABLE TBODY TBODY TR TD[style='border-bottom: 1px solid rgb(204, 204, 204);'] B   {color:#fff !important;}" +
	/* bottom help box */		"TABLE.answerfooter   {border:0; background:#333 none; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* bottom help txt */		"TABLE.answerfooter TBODY TR TD DIV FONT, TABLE.answerfooter TBODY TR TD DIV FONT B, TABLE.answerfooter TBODY TR TD DIV FONT NOBR   {color:#fff !important;}" +
 

// Patents enhancements
	/* logo img */			"BODY > DIV[style='clear: both;'] > CENTER > TABLE[cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD > IMG, BODY > DIV#top_search_bar > DIV[style='padding: 1px 10px 0px 6px; float: left;'] > A > IMG#logo, BODY > TABLE[cellspacing='0'][cellpadding='0'][border='0'][style='clear: both;'] > TBODY > TR > TD[valign='top'][rowspan='2'] > A > IMG   {display:none;}" +
	/* titlebar */			"BODY > DIV#titlebar, BODY > TABLE#results_bar   {border:0 none !important; background-color:#333 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* titlebar txt */		"BODY > DIV#titlebar H1, BODY > DIV#titlebar SPAN   {color:#fff !important;}" +
	/* menu active */		"BODY > TABLE#viewport_table > TBODY > TR > TD#menu_td > DIV#menu_container > DIV#menu DIV.menu_content > DIV > DIV.sidebarnav > SPAN.nolink   {color:#fff;}" +
	/* headers */			"BODY > TABLE#viewport_table > TBODY > TR > TD#viewport_td H3   {border:0; background-color:#222 !important; color:#ccc; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* page txt */			"BODY > TABLE#viewport_table > TBODY > TR > TD#viewport_td > DIV.vertical_module_list_row TD, BODY > TABLE#viewport_table > TBODY > TR > TD#viewport_td DD, BODY > DIV.scontentarea DIV P, BODY > DIV.scontentarea > SPAN.big   {color:#ccc !important;}" +
	/* footer */			"BODY > DIV#footer_table > SPAN, BODY > DIV > DIV#footer_table > SPAN, BODY > DIV[align='center'] > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD.k   {display:none;}" +
	/* Advanced Search expanded below in brute force enhancements */
 

// Toolbar enhancements
	/* logo imgs */			"BODY[bgcolor='#ffffff'][topmargin='3'] CENTER TABLE[width='725'] TBODY TR TD IMG[width='143'][height='59'][src='../../../../common/toolbar_sm.gif'], TABLE[width='100%'][style='direction: ltr;'] TBODY TR TD A[href='http://toolbar.google.com'] IMG, BODY > TABLE[width='100%'] > TBODY > TR > TD > A[href='../../T4/'] IMG[width='143'][height='59'], BODY.siteowners > TABLE[width='96%'] > TBODY > TR > TD[width='1%'] > A > IMG, BODY.siteowners IMG[src='http://www.google.com/images/art.gif']   {display:none;}" +
	/* page title */		"BODY > TABLE[width='100%'][style='direction: ltr;'] > TBODY > TR > TD[width='100%'], BODY > TABLE[width='100%'][style='direction: ltr;'] > TBODY > TR > TD[width='100%'] TABLE TBODY TR TD   {background-image:none !important; color:#fff !important;}" +
	/* download box */		"BODY[bgcolor='#ffffff'][topmargin='3'] CENTER TABLE TBODY TR TD TABLE#download TBODY TR TD   {background-color:#000; border:0 !important;}" +
	/* bottom logo(s) */		"TABLE TBODY TR TD[nowrap='nowrap'] IMG[src='http://www.google.com/nav_first.gif'], TABLE TBODY TR TD[nowrap='nowrap'] IMG[src='http://www.google.com/nav_current.gif'], TABLE TBODY TR TD[nowrap='nowrap'] IMG[src='http://www.google.com/nav_page.gif'], TABLE TBODY TR TD[nowrap='nowrap'] IMG[src='http://www.google.com/nav_next.gif']   {display:none;}" +

	// API
		/* page title */	"BODY > TABLE[width='100%'] > TBODY > TR > TD[width='100%'][style='padding-left: 15px;'] TABLE TBODY TR TD FONT STRONG   {padding-left:131px; color:#fff !important;}" +
		/* start making btn */	"TABLE TBODY TR TD#content DIV#start_box   {border:1px solid #fff; background-color:#333; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" + 
		/* header bars */	"TABLE TBODY TR TD#content H2.header   {border:0; background:#333; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" + 
		/* page-code */		"TABLE TBODY TR TD#content PRE   {color:#000;}" + 
		/* page block bgs */	"TABLE TBODY TR TD#content DIV, BODY.siteowners TABLE TBODY TR TD   {background-color:#000 !important;}" +


// Firefox Tools enhancements
	/* logo img */			"BODY > CENTER > DIV > TABLE[width='739'] > TBODY > TR > TD[width='1%'] A IMG   {display:none;}" +
	/* page titlebar */		"BODY > CENTER > DIV > TABLE[width='739'] > TBODY > TR > TD[width='100%']   {width:100%; padding-left:151px; color:#fff;}" +
	/* page txt */			"BODY > CENTER > DIV > TABLE[width='100%'] > TBODY > TR > TD, BODY > CENTER > DIV > TABLE[width='100%'] > TBODY > TR > TD TABLE TBODY TR TD, BODY > CENTER > DIV[style='margin: 20px 30px; text-align: left; width: 740px;'] *   {color:#999 !important;}" +
	/* more header */		"BODY > CENTER > DIV > TABLE[width='100%'] > TBODY > TR > TD H3[style='border-bottom: 1px solid rgb(37, 71, 157); font-size: 17px; background-color: rgb(255, 255, 255); padding-bottom: 4px;']   {padding-left:7px; border:0 !important; background-color:#333 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px; color:#000;}" +
	/* right col block */		"BODY > CENTER > DIV > TABLE[width='100%'] > TBODY > TR > TD DIV.rightcol   {background-color:#333 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* install extension */		"BODY > CENTER > DIV[style='margin: 20px 30px; text-align: left; width: 740px;'] DIV.extension  {background-color:#333 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* extension whitelist */	"BODY > CENTER > DIV[style='margin: 20px 30px; text-align: left; width: 740px;'] DIV.whitelist  {border:2px solid #fff; background-color:#000; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +


// MonkeyBarrel Google enhancements
	/* shift down slightly */	"DIV[style='position: fixed; top: 10px; left: 10px; margin-bottom: 10px; background-color: transparent; z-index: 99999;']   {top:28px !important; left:2px !important;}" +


// Notebooks enhancements
	/* faq logo img */		"BODY[bgcolor='#ffffff'] > TABLE[cellpadding='5'][align='center'] > TBODY > TR[valign='middle'] > TD[width='1%'] > A[href='http://www.google.com/notebook'] > IMG   {display:none;}" +
	/* faq title block */		"BODY[bgcolor='#ffffff'] > TABLE[cellpadding='5'][align='center'] > TBODY > TR[valign='middle'] > TD > TABLE[width='100%'][bgcolor='#c3d9ff'][align='center'][style='margin-bottom: 5px;'] TBODY TR TD   {background-color:#000;}" +
	/* faq title block corners */	"BODY[bgcolor='#ffffff'] > TABLE[cellpadding='5'][align='center'] > TBODY > TR[valign='middle'] > TD > TABLE[width='100%'][bgcolor='#c3d9ff'][align='center'][style='margin-bottom: 5px;'] TBODY TR TD IMG   {display:none;}" +
	/* faq list txt */		"OL.answers LI UL.response LI, OL.response LI   {color:#999 !important;}" +


// Translate enhancements
	/* logo img */			"BODY > DIV#whole > TABLE[cellspacing='0'][cellpadding='0'][border='0'][style='font-size: medium;'] > TBODY > TR > TD[width='1%'][height='40'] > A > IMG, BODY > TABLE[cellspacing='0'][cellpadding='0'][border='0'][style='font-size: medium;'] > TBODY > TR > TD[width='1%'][height='40'] > A > IMG   {display:none;}" +
	/* logo-bar 2nd remove */	"BODY > DIV#whole > TABLE[cellspacing='0'][cellpadding='0'][border='0'][style='font-size: medium;'] > TBODY > TR > TD:nth-child(2), BODY > TABLE[cellspacing='0'][cellpadding='0'][border='0'][style='font-size: medium;'] > TBODY > TR > TD:nth-child(2)   {background-image:none !important;}" +
	/* head menu */			"BODY > DIV#whole > TABLE[cellspacing='0'][cellpadding='0'][border='0'][style='font-size: medium;'] > TBODY > TR > TD > DIV[style='margin: 4px 0pt; padding: 0pt;'] > TABLE > TBODY > TR > TD, BODY > TABLE[cellspacing='0'][cellpadding='0'][border='0'][style='font-size: medium;'] > TBODY > TR > TD > DIV[style='margin: 4px 0pt; padding: 0pt;'] > TABLE > TBODY > TR > TD   {background-color:#000; border:0 none;}" +
	/* head menu active */		"BODY > DIV#whole > TABLE[cellspacing='0'][cellpadding='0'][border='0'][style='font-size: medium;'] > TBODY > TR > TD > DIV[style='margin: 4px 0pt; padding: 0pt;'] > TABLE > TBODY > TR > TD.active, BODY > TABLE[cellspacing='0'][cellpadding='0'][border='0'][style='font-size: medium;'] > TBODY > TR > TD > DIV[style='margin: 4px 0pt; padding: 0pt;'] > TABLE > TBODY > TR > TD.active   {color:#fff !important;}" +
	/* headers */			"BODY > DIV#whole H1, BODY > DIV#whole H2, BODY > DIV#content H1, BODY[marginheight='3'][topmargin='3'] > H1   {background-color:#333 !important; color:#fff; padding-left:0.7em;-moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* page txt */			"BODY > DIV#whole > DIV#main > DIV, BODY > DIV#whole > DIV#main > DIV DIV, BODY > DIV#whole > FORM#text_form TD, BODY > DIV#content DIV, BODY > DIV#content TABLE > TBODY > TR > TD, BODY[marginheight='3'][topmargin='3'] > DIV.section, BODY[marginheight='3'][topmargin='3'] > DIV.section LI   {color:#ccc !important;}" +
	/* result txt */		"BODY > DIV#whole > FORM#text_form > TABLE#texttable > TBODY > TR > TD.almost_half_cell > DIV#result_box   {color:#fff !important;}" +
	/* boxes */			"BODY > DIV#whole > DIV#main >  DIV#alang, BODY[marginheight='3'][topmargin='3'] > DIV.section > TABLE > TBODY > TR > TD.main, BODY[marginheight='3'][topmargin='3'] > DIV.section > DIV#toolbar_float   {padding-top:0.7em; padding-bottom:0.5em; background-color:#191919; border:0 none; color:#ccc !important;padding-left:1em;-moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* footer */			"BODY > DIV#whole > DIV#foot, BODY > DIV#whole > DIV.footer, BODY > DIV#content > DIV.tab_footer, BODY > DIV.tab_footer   {display:none;}" +
	/* Translate Top Frame expanded below in brute force enhancements */


// Firefox Start enhancements
	/* search outer */		"FORM[name='f'] > TABLE#frame   {margin-top:50px; padding-left:20px; background-color:#fff; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* search inner */		"FORM[name='f'] > TABLE#frame > TBODY > TR > TD > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD[width='100%'] > TABLE[cellspacing='0'][cellpadding='0']   {margin:20px; padding: 0 13px 13px 20px; background-color:#000; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}" +
	/* search inner left-col */	"FORM[name='f'] > TABLE#frame > TBODY > TR > TD > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD[width='100%'] > TABLE[cellspacing='0'][cellpadding='0'] > TBODY > TR > TD > IMG[width='40'][height='1']   {display:none;}" +
	/* Google logo removal */	"BODY > CENTER > FORM > TABLE#frame > TBODY > TR > TD > TABLE > TBODY > TR > TD > TABLE > TBODY > TR > TD > TABLE > TBODY > TR > TD > DIV[title='Google']   {visibility:hidden;}" +
	/* orange search button */	"FORM[name='f'] > TABLE#frame > TBODY > TR > TD > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR > TD[width='100%'] > TABLE[cellspacing='0'][cellpadding='0'] > TBODY > TR > TD INPUT[type='submit']:hover   {background-color:#f60;}" +
	/* bottom tables */		"BODY[onload='sf()'] > CENTER > FORM > TABLE#frame > TBODY > TR > TD > TABLE[width='100%'] > TBODY > TR > TD > TABLE[width='100%'][cellpadding='4']   {display:none;}" +


// Gm-Script Google Search Sidebar enhancements - http://userscripts.org/scripts/show/11888
	/* sidebar width */		"#searchPlus   {width:26% !important; float:right !important;}" +
	/* sidebar txt */		"#searchPlus DIV P, .luna-Ent td   {color:#fff !important;}" +
	/* sidebar header */		"#searchPlus H1, DIV#gSearchSidebar H1   {margin-top:1em; background-color:#333 !important; border:0 !important; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; color:#fff;}" +
	/* sidebar header link */	"#searchPlus H1 A, DIV#gSearchSidebar H1 A   {color:#000 !important;}" +


// Script Update Message Box
	/* layout */			"#gsscriptVersionMessage   {position:fixed; top:0px; right:1px; width:470px; height:76px; z-index:99; overflow:auto; padding:10px; background-color:#C00040; outline:#aaa solid 1px; font-family:Trebuchet MS, Verdna; font-weight:bold; font-size:14px; color:#fff !important; text-align:center; cursor:default;}";



// BRUTE-FORCE for "less cooperative" sites (each URI validated)
	var style = document.createElement('style');
	    style.setAttribute('id', 'bruteForce');
	document.getElementsByTagName('head')[0].appendChild(style);
	var Ssheet = $('bruteForce').sheet;


	// Web: Advanced Search enhancements
	if (location.href.indexOf('.google.') > -1 && location.href.indexOf('/advanced_search?') > -1) {
		/* Global font */	Ssheet.insertRule("*   {font-family:Trebuchet MS, Verdna;}", 0);
		/* page bg */		Ssheet.insertRule("HTML,BODY   {background:#000 none !important; color:#ccc;}", 0);
		/* link color */	Ssheet.insertRule("A, #gbar A.gb1, #gbar A.gb2, #gbar A.gb3, SPAN.i, .linkon, #codesiteContent A, TABLE.mmhdr TBODY TR TD.mmttlinactive SPAN, TABLE TBODY TR TD TABLE TBODY TR TD A   {color:#6495ed !important;}", 0);
		/* visited linx */	Ssheet.insertRule("A:visited   {color:#406b80 !important;}", 0);

		/* logo img [replce] */	Ssheet.insertRule("BODY > FORM[name='f'] > TABLE[width='99%'][cellspacing='2'][cellpadding='0'][border='0'] > TBODY > TR:first-child > TD:first-child > A#logo > SPAN   {width:150px !important; height:55px !important; background:transparent url('" + googleLogoBLACK + "') no-repeat scroll 0% !important; font-size:0;}", 0);
		/* header */		Ssheet.insertRule("BODY > FORM[name='f'] > TABLE > TBODY > TR > TD > TABLE > TBODY > TR > TD[bgcolor='#3366cc'], BODY > FORM[name='f'] > TABLE > TBODY > TR > TD > TABLE > TBODY > TR > TD[bgcolor='#d5ddf3']   {background-color:#000;};", 0);
		/* outer box bg */	Ssheet.insertRule("TABLE[width='99%'] > TBODY > TR[bgcolor='#cbdced']   {background-color:#000 !important;}", 0);
		/* lower box bg */	Ssheet.insertRule("TABLE[width='99%'] > TBODY > TR[bgcolor='#cbdced'] > TD TABLE[width='100%'] > TBODY > TR[bgcolor='#ffffff'], TABLE[width='99%'] > TBODY > TR[bgcolor='#cbdced'] > TD > TABLE[width='100%'] > TBODY > TR[bgcolor='#ffffff'] TD, BODY > FORM[name='f'] > FONT > TABLE > TBODY > TR > TD, BODY > FORM[name='f'] > FONT > TABLE > TBODY > TR > TD TD   {background-color:#000 !important; color:#ccc !important;}", 0);
		/* top box bg */	Ssheet.insertRule("TABLE[width='99%'] > TBODY > TR[bgcolor='#cbdced'] > TD TABLE[width='100%'] > TBODY > TR[bgcolor='#cbdced'], TABLE[width='99%'] > TBODY > TR[bgcolor='#cbdced'] > TD > TABLE[width='100%'] > TBODY > TR[bgcolor='#cbdced'] TD, BODY > FORM[name='f'] > FONT > TABLE:nth-child(2) > TBODY > TR:first-child > TD:first-child   {padding-left:0.5em; background-color:#222 !important; color:#ccc !important;}", 0);
		/* footer */		Ssheet.insertRule("BODY > FORM[name='f'] > CENTER > FONT[face='arial,sans-serif'] > FONT[size='-1']   {display:none;}", 0);
	}


	// Web: Search Within enhancements
	if (location.href.indexOf('.google.') > -1 && location.href.indexOf('/swr?') > -1) {
		/* Global font */	Ssheet.insertRule("*   {font-family:Trebuchet MS, Verdna;}", 0);
		/* page bg */		Ssheet.insertRule("HTML,BODY   {background:#000 none !important; color:#ccc;}", 0);
		/* link color */	Ssheet.insertRule("A, #gbar A.gb1, #gbar A.gb2, #gbar A.gb3, SPAN.i, .linkon, #codesiteContent A, TABLE.mmhdr TBODY TR TD.mmttlinactive SPAN, TABLE TBODY TR TD TABLE TBODY TR TD A   {color:#6495ed !important;}", 0);
		/* visited linx */	Ssheet.insertRule("A:visited   {color:#406b80 !important;}", 0);

		/* logo img [hide] */	Ssheet.insertRule("BODY > FORM > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR:first-child > TD:first-child > A[href='/'] > IMG   {display:none;}", 0);
		/* logo img [insert] */	Ssheet.insertRule("BODY > FORM > TABLE[width='100%'][cellspacing='0'][cellpadding='0'][border='0'] > TBODY > TR:first-child > TD:first-child   {width:150px !important; height:55px !important; background:transparent url('" + googleLogoBLACK + "') no-repeat scroll 0% !important; font-size:0;}", 0);
		/* page txt */		Ssheet.insertRule("TD, DIV   {color:#ccc;}", 0);
		/* bold txt */		Ssheet.insertRule("TD B, DIV B   {color:#fff;}", 0);
		/* footer */		Ssheet.insertRule("BODY > CENTER > DIV[class='t n bt']   {display:none;}", 0);
	}


	// Translate: Top Frame enhancements
	if (location.href.indexOf('//translate.google.') > -1 && location.href.indexOf('/translate_n?') > -1) {
		/* Global font */	Ssheet.insertRule("*   {font-family:Trebuchet MS, Verdna;}", 0);
		/* page bg */		Ssheet.insertRule("HTML,BODY   {background:#000 none !important; color:#ccc;}", 0);
		/* link color */	Ssheet.insertRule("A, #gbar A.gb1, #gbar A.gb2, #gbar A.gb3, SPAN.i, .linkon, #codesiteContent A, TABLE.mmhdr TBODY TR TD.mmttlinactive SPAN, TABLE TBODY TR TD TABLE TBODY TR TD A   {color:#6495ed !important;}", 0);
		/* visited linx */	Ssheet.insertRule("A:visited   {color:#406b80 !important;}", 0);

		/* logo img [hide] */	Ssheet.insertRule("BODY > DIV[style='padding: 8px; white-space: nowrap;'] > DIV[style='float: left; font-size: 12px;'] > A > IMG   {display:none;}", 0);
		/* logo img [insert] */	Ssheet.insertRule("BODY > DIV[style='padding: 8px; white-space: nowrap;']   {padding-left:160px !important; width:150px !important; height:55px !important; background:transparent url('" + googleLogoBLACK + "') no-repeat scroll top left !important; font-size:0;}", 0);
		/* head table */	Ssheet.insertRule("BODY > TABLE[style='padding: 4px 8px; font-size: 12px;']   {position:absolute; bottom:0; left:160px; width:82%;}", 0);
	}


	// Voice enhancements
	if ((location.href.indexOf('http://www.google.com/googlevoice') > -1) || (location.href.indexOf('https://www.google.com/voice') > -1) || (location.href.indexOf('https%3A%2F%2Fwww.google.com%2Fvoice%2Faccount%2Fsignin%2F') > -1) || (location.href.indexOf('https://services.google.com/fb/forms/googlevoiceinvite/') > -1)) {
		/* Global font */	Ssheet.insertRule("*   {font-family:Trebuchet MS, Verdna;}", 0);
		/* page bg */		Ssheet.insertRule("HTML,BODY   {background:#000 none !important; color:#ccc;}", 0);
		/* link color */	Ssheet.insertRule("A, #gbar A.gb1, #gbar A.gb2, #gbar A.gb3, SPAN.i, .linkon, #codesiteContent A, TABLE.mmhdr TBODY TR TD.mmttlinactive SPAN, TABLE TBODY TR TD TABLE TBODY TR TD A   {color:#6495ed !important;}", 0);
		/* visited linx */	Ssheet.insertRule("A:visited   {color:#406b80 !important;}", 0);

		/* about header bar */	Ssheet.insertRule("P.highlight-box   {background-color:#333; border:0; color:#fff; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}", 0);

		/* invite headline */	Ssheet.insertRule("BODY[class='compact product']> H2   {margin-top:2em; color:#fff;}}", 0);

		/* login feat-txt */	Ssheet.insertRule("BODY> DIV.gc-mid > TABLE#gc-features > TBODY > TR > TD > DIV.gc-item-hd   {color:#fff;}}", 0);
		/* login signin boxO */	Ssheet.insertRule("BODY > DIV.gc-mid > DIV.gc-si-content > FORM#gaia_loginform > DIV#gaia_loginbox > TABLE.form-noindent   {background-color:#000; border:0; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}", 0);
		/* login signin boxI */	Ssheet.insertRule("BODY > DIV.gc-mid > DIV.gc-si-content > FORM#gaia_loginform > DIV#gaia_loginbox > TABLE.form-noindent > TBODY > TR > TD   {background-color:#333; color:#ccc; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}", 0);
		/* login invite bar */	Ssheet.insertRule("BODY > DIV#gc-signup-closed   {background-color:#333; border:0; color:#fff; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}", 0);

		/* admin bg */		Ssheet.insertRule("DIV.gc-header, .gc-inbox-sidebar-menu, #gc-view-main, .gc-footer, .g-section, .g-tpl-67-33, .gc-message, #gc-splitpane, #gc-sidebar-balance-header, .gc-bubble-mc   {background:#000 none !important; color:#ccc}", 0);
		/*  admin buttons */	Ssheet.insertRule(".goog-button-base-content, .gc-text, .goog-flat-menu-button-caption   {background:#333 none !important; color:#fff}", 0);
		/* admin callout  */	Ssheet.insertRule(".gc-message-transcript, .gc-message-callout, .gc-message-transcript-b, .gc-message-transcript-t, .gc-message-transcript-r, .gc-message-transcript-l, .gc-message-transcript-m, .gc-message-transcript-bl, .gc-message-transcript-br, .gc-message-transcript-tl, .gc-message-transcript-tr   {background:#333 none !important; color:#fff}", 0);
		/*  admin c.out txt */	Ssheet.insertRule(".goog-menuitem-content, .gc-inbox-no-items, .gc-inbox-page-range, .gc-user-tip .goog-inline-block, .goog-container, .g-section, LABEL, .gc-message-message-display *, .gc-quicksms > DIV, SPAN   {color:#fff !important}", 0);
		/*  admin sidebar */	Ssheet.insertRule(".goog-option-selected, #gc-inbox-sidebar-header, #gc-view-header, .goog-splitpane-handle, .gc-user-tip .goog-inline-block, .goog-menuitem   {background:#111 none}", 0);
		/*  admin menu */	Ssheet.insertRule(".goog-menuitem-highlight   {background:#333 none !important;}", 0);
	}


// Patents: Advanced Search enhancements
	if (location.href.indexOf('.google.') > -1 && location.href.indexOf('/advanced_patent_search?') > -1) {
		/* Global font */	Ssheet.insertRule("*   {font-family:Trebuchet MS, Verdna;}", 0);
		/* page bg */		Ssheet.insertRule("HTML,BODY   {background:#000 none !important; color:#ccc;}", 0);
		/* link color */	Ssheet.insertRule("A, #gbar A.gb1, #gbar A.gb2, #gbar A.gb3, SPAN.i, .linkon, #codesiteContent A, TABLE.mmhdr TBODY TR TD.mmttlinactive SPAN, TABLE TBODY TR TD TABLE TBODY TR TD A   {color:#6495ed !important;}", 0);
		/* visited linx */	Ssheet.insertRule("A:visited   {color:#406b80 !important;}", 0);

		/* logo img [hide] */	Ssheet.insertRule("BODY > FORM[name='f'] > TABLE:first-child > TBODY > TR > TD:first-child > A > IMG   {display:none;}", 0);
		/* logo img [insert] */	Ssheet.insertRule("BODY > FORM[name='f'] > TABLE:first-child > TBODY > TR > TD:first-child   {width:150px !important; height:55px !important; background:transparent url('" + googleLogoBLACK + "') no-repeat scroll 0% !important; font-size:0;}", 0);
		/* header bar L */	Ssheet.insertRule("BODY > FORM > TABLE > TBODY > TR > TD[rowspan='2'] > TABLE:nth-child(2), BODY > FORM > TABLE > TBODY > TR > TD[rowspan='2'] > TABLE:nth-child(2) TD:first-child   {background-color:#333; border:0 none !important; color:#ccc; -moz-border-radius-bottomleft:14px;}", 0);
		/* header bar R */	Ssheet.insertRule("BODY > FORM > TABLE > TBODY > TR > TD[rowspan='2'] > TABLE:nth-child(2), BODY > FORM > TABLE > TBODY > TR > TD[rowspan='2'] > TABLE:nth-child(2) TD:nth-child(2)   {padding-right:0.2em; background-color:#333; border:0 none !important; color:#ccc; -moz-border-radius-bottomright:14px;}", 0);
		/* body bg */		Ssheet.insertRule("BODY > FORM > TABLE TR[bgcolor='#cbdced'] TD   {background-color:#000; color:#fff;}", 0);
		/* inner bg */		Ssheet.insertRule("BODY > FORM > TABLE TR[bgcolor='#ffffff'] TD  {background-color:#000; color:#ccc;}", 0);
		/* footer */		Ssheet.insertRule("BODY > FORM > CENTER > FONT[face='arial,sans-serif'] > FONT[size='-1']   {display:none;}", 0);
	}


// Experimental enhancements
	if (location.href.indexOf('.google.') > -1 && location.href.indexOf('/experimental/') > -1) {
		/* Global font */	Ssheet.insertRule("*   {font-family:Trebuchet MS, Verdna;}", 0);
		/* page bg */		Ssheet.insertRule("HTML,BODY   {background:#000 none !important; color:#ccc;}", 0);
		/* link color */	Ssheet.insertRule("A, #gbar A.gb1, #gbar A.gb2, #gbar A.gb3, SPAN.i, .linkon, #codesiteContent A, TABLE.mmhdr TBODY TR TD.mmttlinactive SPAN, TABLE TBODY TR TD TABLE TBODY TR TD A   {color:#6495ed !important;}", 0);
		/* visited linx */	Ssheet.insertRule("A:visited   {color:#406b80 !important;}", 0);

		/* logo img [hide] */	Ssheet.insertRule("BODY > DIV#container > DIV#header > DIV[style='float: left; width: 155px;'] IMG[width='150'][height='55']   {display:none;}", 0);
		/* logo img [insert] */	Ssheet.insertRule("BODY > DIV#container > DIV#header > DIV[style='float: left; width: 155px;']   {width:150px !important; height:55px !important; background:transparent url('" + googleLogoBLACK + "') no-repeat scroll 0% !important; font-size:0;}", 0);
		/* page title */	Ssheet.insertRule("BODY > DIV#container > DIV#header > DIV > DIV.title   {color:#fff;}", 0);
		/* header & try out */	Ssheet.insertRule("BODY > DIV#container > DIV#content > TABLE.expheader > TBODY > TR > TD, BODY > DIV#container > DIV#content > TABLE.expheader > TBODY > TR > TD > SPAN, BODY > DIV#container > DIV#content > TABLE > TBODY > TR > TD.expdesc > TABLE > TBODY > TR[valign='middle'] > TD[bgcolor='#ffffcc'][style='padding: 5px;'], BODY > DIV#container > DIV#content > TABLE > TBODY > TR > TD.expdesc > TABLE > TBODY > TR > TD.corners_yellow > SPAN   {background:#333 none !important; border:0; color:#fff;}", 0);
		/* content */		Ssheet.insertRule("BODY > DIV#container > DIV#content   {color:#999 !important;}", 0);
		/* footer */		Ssheet.insertRule("BODY > DIV#container > DIV#footer   {display:none;}", 0);
	}


// Google Login enhancements
	if (location.href.indexOf('.google.') > -1 && (location.href.indexOf('/Login?') > -1 || (location.href.indexOf('/ServiceLogin?') > -1 && location.href.indexOf('&service=ig') > -1))) {
		/* Global font */	Ssheet.insertRule("*   {font-family:Trebuchet MS, Verdna;}", 0);
		/* page bg */		Ssheet.insertRule("HTML,BODY   {background:#000 none !important; color:#ccc;}", 0);
		/* link color */	Ssheet.insertRule("A, #gbar A.gb1, #gbar A.gb2, #gbar A.gb3, SPAN.i, .linkon, #codesiteContent A, TABLE.mmhdr TBODY TR TD.mmttlinactive SPAN, TABLE TBODY TR TD TABLE TBODY TR TD A   {color:#6495ed !important;}", 0);
		/* visited linx */	Ssheet.insertRule("A:visited   {color:#406b80 !important;}", 0);


		/* logo img [hide] */	Ssheet.insertRule("BODY[onload='gaia_setFocus();'] > DIV#main > DIV.header > A > IMG, BODY[onload='gaia_setFocus();'] > DIV#main > DIV#maincontent > TABLE > TBODY > TR > TD > DIV#rhs > DIV#rhs_login_signup_box > FORM#gaia_loginform > DIV#gaia_loginbox > TABLE.form-noindent > TBODY > TR > TD > DIV.loginBox > TABLE#gaia_table > TBODY > TR> TD > TABLE > TBODY > TR > TD > IMG, BODY[onload='gaia_setFocus();'].compact > H1 > IMG:first-child, BODY[onload='gaia_setFocus();'].compact > DIV#main > DIV.rightside > FORM#gaia_loginform > DIV#gaia_loginbox > TABLE.form-noindent > TBODY > TR > TD > DIV.loginBox > TABLE#gaia_table > TBODY > TR > TD > TABLE > TBODY > TR > TD> IMG:first-child   {display:none;}", 0);
		/* logo img [insert] */	Ssheet.insertRule("BODY[onload='gaia_setFocus();'] > DIV#main > DIV.header, BODY[onload='gaia_setFocus();'].compact > H1   {width:150px !important; height:55px !important; border:0 none; background:transparent url('" + googleLogoBLACK + "') no-repeat scroll 0% !important; font-size:0;}", 0);
		/* strong txt */	Ssheet.insertRule("BODY[onload='gaia_setFocus();'] > DIV#main > DIV#maincontent > TABLE > TBODY > TR > TD B:first-child, BODY[onload='gaia_setFocus();'].compact > DIV#main > H2, BODY[onload='gaia_setFocus();'].compact > DIV#main > P.icon > B   {color:#fff;}", 0);
		/* grey cntnrs */	Ssheet.insertRule("BODY[onload='gaia_setFocus();'] > DIV#main > DIV#maincontent > TABLE > TBODY > TR > TD > DIV#rhs > DIV#rhs_login_signup_box > FORM#gaia_loginform > DIV#gaia_loginbox > TABLE.form-noindent, BODY[onload='gaia_setFocus();'] > DIV#main > DIV#maincontent > TABLE > TBODY > TR > TD > DIV#rhs > DIV#rhs_login_signup_box > TABLE.form-noindent, BODY[onload='gaia_setFocus();'].compact > DIV#main > DIV.tip, BODY[onload='gaia_setFocus();'].compact > DIV#main > DIV.rightside > FORM#gaia_loginform > DIV#gaia_loginbox, BODY[onload='gaia_setFocus();'].compact > DIV#main > DIV.rightside > DIV.gaia_signupbox   {background-color:#333; border:0; text-align:center; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}", 0);
		/* inner boxes */	Ssheet.insertRule("BODY[onload='gaia_setFocus();'] > DIV#main > DIV#maincontent > TABLE > TBODY > TR > TD > DIV#rhs > DIV#rhs_login_signup_box > FORM#gaia_loginform > DIV#gaia_loginbox > TABLE.form-noindent > TBODY > TR > TD, BODY[onload='gaia_setFocus();'] > DIV#main > DIV#maincontent > TABLE > TBODY > TR > TD > DIV#rhs > DIV#rhs_login_signup_box > TABLE.form-noindent > TBODY > TR > TD, BODY[onload='gaia_setFocus();'].compact > DIV#main > DIV.rightside > FORM#gaia_loginform > DIV#gaia_loginbox > TABLE.form-noindent > TBODY > TR > TD, BODY[onload='gaia_setFocus();'].compact > DIV#main > DIV.rightside > FORM#gaia_loginform > DIV#gaia_loginbox, BODY[onload='gaia_setFocus();'].compact > DIV#main > DIV.rightside > DIV.gaia_signupbox > TABLE.form-noindent > TBODY > TR > TD   {background-color:#000; border:0; color:#fff; -moz-border-radius-topright:14px; -moz-border-radius-topleft:14px; -moz-border-radius-bottomright:14px; -moz-border-radius-bottomleft:14px;}", 0);
		/* footer */		Ssheet.insertRule("BODY[onload='gaia_setFocus();'] > DIV#main > DIV.footer, BODY[onload='gaia_setFocus();'].compact > DIV#main > DIV#about   {display:none;}", 0);
	}



// Modify Google Header Bar
var cGtld = location.host.substring(location.host.indexOf('.google.')+8,location.host.length); //current Google Top Level Domain
gHeaderBarCntnr = $("gbar");
gHdrUsrBarCntnr = $("guser");
gHeaderBarCntnrVoice = $("gc-gaia-bar");
//shift header-menu right for 'iGoogle' link insertion
 gHeaderBar = gHeaderBarCntnr.getElementsByTagName('nobr')[0];
  gHeaderBar.style.position = "relative";
  gHeaderBar.style.left = "4.8em";
//header-menu left-side 'iGoogle'/'Web' link insertion
if (location.href.indexOf('.google.' + cGtld + '/ig') > -1) {
	//create new 'iGoogle' B-tag
	iGheaderInsert = document.createElement('b');

	//create new 'Web' A-tag
	WEBheaderInsert = document.createElement('a');
	 WEBheaderInsert.href = "http://www.google." + cGtld + "/url?sa=p&pref=ig&pval=1&q=/webhp%3Frls%3Dig";
	 WEBheaderInsert.innerHTML = "Web";
	 WEBheaderInsert.className = "gb1";
	 WEBheaderInsert.setAttribute('style', 'float:left; position:relative; top:-1.6em; padding-left:0.15em;');

	 //hide old 'Web' B-tag
	 if (gHeaderBarCntnr.getElementsByTagName('nobr')[0].getElementsByTagName('b')[0]) gHeaderBarCntnr.getElementsByTagName('nobr')[0].getElementsByTagName('b')[0].setAttribute('style', 'visibility:hidden;');

	 //hide old right-side 'Classic Home' A-tag
	 if (gHdrUsrBarCntnr.getElementsByTagName('nobr')[0].getElementsByTagName('a')[0]) gHdrUsrBarCntnr.getElementsByTagName('nobr')[0].getElementsByTagName('a')[0].setAttribute('style', 'display:none;');

	 //shift 'account' slightly-right
	 if (gHdrUsrBarCntnr.getElementsByTagName('nobr')[0].getElementsByTagName('b')[0]) gHdrUsrBarCntnr.getElementsByTagName('nobr')[0].getElementsByTagName('b')[0].setAttribute('style', 'position:relative; left:1em;');
}
else {
	//create new 'iGoogle' A-tag
	iGheaderInsert = document.createElement('a');
	 iGheaderInsert.href = "http://www.google." + cGtld + "/ig";
}
 iGheaderInsert.innerHTML = "iGoogle";
 iGheaderInsert.className = "gb1";
 iGheaderInsert.setAttribute('style', 'float:left; position:relative; top:-1.6em;');
  gHeaderBar.insertBefore(iGheaderInsert, parent.firstChild);
  if (location.href.indexOf('.google.' + cGtld + '/ig') > -1) gHeaderBar.insertBefore(WEBheaderInsert, parent.firstChild);
//header-menu 'Sign in' link adjustments
 if (gHdrUsrBarCntnr || gHeaderBarCntnrVoice) gHdrUsrBar = gHdrUsrBarCntnr.getElementsByTagName('nobr')[0];
if ((!gHdrUsrBarCntnr) || (gHdrUsrBarCntnr && typeof gHdrUsrBar == "undefined")) {
	signInLink = document.createElement('a');
		 signInLink.innerHTML = "Sign in";
	 signInLink.href = "https://www.google." + cGtld + "/accounts/ServiceLogin?continue=http://www.google." + cGtld + "/ig&followup=http://www.google." + cGtld + "/ig&service=ig&passive=true";
	 signInLink.setAttribute('style', 'position:absolute; top:4px; right:8px; font-family:Trebuchet MS,Verdna;');
	  //adds Sign in link to right-side of Firefox start page (when signed out), or not News (body.hp, body.serp & body.sp)
	  if (document.body.className != "hp" && document.body.className != "serp" && document.body.className != "sp") gHeaderBarCntnr.appendChild(signInLink);
}
//header-menu right-side adjustments
if (gHdrUsrBarCntnr && typeof gHdrUsrBar == "object" && gHdrUsrBar.hasChildNodes()) for (iA=0; iA<gHdrUsrBar.getElementsByTagName('a').length; iA++) if (gHdrUsrBar.getElementsByTagName('a')[iA].innerHTML == "iGoogle") {
	//removes iGoogle link from right-side (when signed in)
	gHdrUsrBar.getElementsByTagName('a')[iA].style.display = "none";
	//if exists, shift Account name over (when signed in)
	if (gHdrUsrBar.getElementsByTagName('b')[0]) gHdrUsrBar.getElementsByTagName('b')[0].setAttribute('style', 'position:relative; left:0.8em;');
}



// Remove Right-side Ads
iframe = document.getElementsByTagName("iframe");
for(var iB=0; iB<iframe.length; iB++){if(iframe[iB].src.indexOf("pagead2.googlesyndication.com/pagead/ads") != -1){iframe[iB].height = 0; iframe[iB].width = 0;};};



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

//After all else, check for updates
scriptUpdateCheck();

}; var googleLogoBLACK = "data:image/jpeg;base64,"+
	"/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMwAA/+4AIUFkb2JlAGTAAAAAAQMAEAMDBgkAAAUhAAAHlQAACrz/2wCEAAgFBQUGBQgGBggLBwYHCw0KCAgKDQ8MDA0MDA8RDA0N" +
	"DQ0MEQ8REhMSEQ8XFxkZFxciISEhIiYmJiYmJiYmJiYBCAkJEA4QHRQUHSAaFRogJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJv/CABEIAEEAlgMBEQAC" +
	"EQEDEQH/xADXAAEAAgMBAQEAAAAAAAAAAAAABAUCAwYBBwgBAQADAQEBAAAAAAAAAAAAAAACAwQFAQYQAAICAgECBgEEAwEAAAAAAAECAAMRBAUhEhAgMDEiBhNAUDIUIyQVFhEAAgECBAIGBggH" +
	"AAAAAAAAAQIDABEhMRIEQRMQUWFxgSKRscEyQpIgMKFiciMUBUBQ8NGCM0MSAAIABQUBAQAAAAAAAAAAAAERABAgQCEwUDFRAmESEwEAAgIBBAAHAQEAAAAAAAABABEhMUEQUWFxIDBA8IGRsaFQ" +
	"/9oADAMBAAIRAxEAAAD8/gAAAAAAAAAsNFXsky2uoy3aapgAADoa6s4V83fpAE6yFrvy85zNvvvnr2VXfNhdWWZpsI2tE6PRDHRXb688jmyj1RrrOlMhfFvwVpe7c2vTTTcnfLnHdGy3xdXnNXM7" +
	"DnfQWFfE+f8AVz/V/nNvH/d8KKTOVZKw6qqfWgTprL8HhnLzq/peLznA60qXk7TVv+a+w5vo/PXWbodpxafmn0WPruddzf0XOu9VGjgaM6rNuX67mOn83HlSB76maacK5xqp5xns8lHlVuj7Lj75" +
	"pqk6K8tWfRltg4dDy/J7HlSAAAAAJuiqdtzxct8WmeiqYAAAAAAAAAAAAAAAAAAAAH//2gAIAQIAAQUB/SKmZ8YqBoy4PoN7IcjyKMm7p5MwtiA5haNZ2xWDALBTmWe1ftmd/jR/LaXDQLGGJUcw" +
	"yo4ms3dCMzT+L3rgazdb4DhUPTsz4g4mRarVlZX77PUp8TmIspBqfMpT5C3IavtV/ZRla27Zny/lM7z448CJ2iKuS3xlWxL0AbExMerW/aX7WmAI7ZP7X//aAAgBAwABBQH9IWxOsLEQHPoselZy" +
	"PITiVdfIEi1d0ZSJiYhEzDZiP7Ve3ZPwnHhb/Gg9JmJ1OyMRTg7QyH8LPapsy8dG/jqrmXj5C3A8cGsqwMf21+kvxYoWXWRvkMRjOzqr5NntrNiX1iwFCPL2CdvgDiFz45hOIvWPVmVnIxAxELk+" +
	"qy5C9yzJgGP2z//aAAgBAQABBQH9JRpWW1/6KynW47Yl1Rqs9D6+lNvLfYVoTkfJo6x2tvm7wb4CQScxNVzXr8fXsy2qyp6ePusp0+Fo3229PY07017GReG79b64oHPfYOvK/wBMotvFMNWyrRFc" +
	"4Oxa+U5aspsyrU2bhVpXf2/sJA3K7GrfldcbF33apdbZqseqz7etW3x32AIH4R/8/wBe7f8A0VtFex9n5ci3kxufiq8FYqxenkabtW+luOaxdzltg/8AQ3yu9UlTu/I7ubebevn+Nr1r7LPsPIo2" +
	"uu4TVyGrVp0fWCBzfKXNRzXIULvBqLl8gJBXd2QG2r2mSYjuhbYubwqutqZ+Q3bBoab7u3ttrUXavJOrbi/1tp7bHiW2JLNi6wepp7T6t9w1Nhvx69bX3NdZ+1//2gAIAQICBj8B2daGRiGLEmR8" +
	"wNH7Qpo8GR9dwjDE0bBHixcPbv/aAAgBAwIGPwHZ3TjRzDGgpAzdSFHyhjmS6ocKf682GObJbd//2gAIAQEBBj8B/hOax5cI+NvUOureeTtuF9hrSkrQycA+IPiLUUJvbq+pgimiWaORtJVr+win" +
	"jgjWGNMAq/Ri24/6MBfs40IIvLBD5UXs6LjOrmua/wCXEcmPHuHGtME45vBHGm/ccRRSQaWGYr9Q5EO2BtzXyJ6lAxJ7q5W03iHc/DFIpj1fhbEU0G4QxypmprmHyRnDW2Xh10dwu5iZFzA1XHhp" +
	"rbAHVZjj4HrqbvpWnblB8VFrsR12r9VBIJ4cmtgw7waYpMWkGS6e7j6eiFj94fMpHtok8ei8UTyD7oJqLbzKYjIwXzYZmuUg0wxDRGvUBhQdcCpuK2xXBtxoHz2rb7KLDb7eLSg9Z7zSyIdLobg9" +
	"orY/uNrSSomo/iGP21CsX+hECp/XbTofdKE+iodOWprfKaEcnuFwWHdjUzStpF/s6hRhguEbEk8ekMMxlVidM49dWdSO3hUOJChxeucraiDcHxobiLGQe+vGtKjGoliOG3CgN2qM6j3u2x3kA/Oh" +
	"49tqEaIS5NrWra/tsTa12carIwyLgY28aEUw1oMuulbZ6jzVBdyb2vjYWrbk4AFrn/E024T4WBBr9Tt8XOa8a8yEW+hcVbWbVi56LqbVix6NUbFG6xhRDSsb50m3Q2LnFjwAxJ9FNDtk1BMOY+JP" +
	"bbIVol80RwtR5R09Vu2vMxPfXlYirO5YfWrMmY9RwNcxJOWxzDD+1XaQSW+FQcfE0ZGzb+Wf/9oACAECAwE/EPpHy4jTzMEOY1T8lVaNY/DWEeB46DUW40xOUYgCyANGWKLq9pYDERLjCxxDSrpv" +
	"bAXTh66YlnRHUY2yhcFlRLHaVE2wBTA8bMM1HK8MpbUzM4sQrerKyNc6ffiNUktWMol7mogJtXmOvFMQFxRMLsiJ3iPKYiI4BfgFIU7ikW4gwJ0B3AuI1UYqIg7Pt4lSNQpEO4E182hgvRp/M31u" +
	"Lc/8z//aAAgBAwMBPxD6QsOYW8TibIYs+SwkjWPw1Lgornol9GS3BAwVsRp3CC+mINMRAVJmK30zC1UW3jrsgvSglCCXzhFJIXOsNUQaZkYsPeW35lt5ikMqsV9D1SyoWPKC2Slo03KLUiLUBAxS" +
	"w3BTGEqUYYDrib5hsJbPvvNsfBVx7EAdF0iOg1FQxcsLYeWEPngCa2bx+bipUsXLOIYo/wCZ/9oACAEBAwE/EPpHhFU6lNhyjfY7xB+Bjo1rCO7UU/UCAuSsfk2x0LQEcm57gtQoKO9vwvRVh2bL" +
	"8EHChT0DF+3b0NJQyMRWWu1g1hFckbqzC6yS3X43We6itV0myMNiEOwh9Z7l9+Fxc4TJ4aiXgr+wTCeSCKVUsEmyltPBG2PU/OYYeUUgNNSKx4fyUDGEJDVPHupQHHCW/axKCELIGyx6dDo0KL5B" +
	"/wBgaMavp6Z8hViX+CKQzqKABaZpIAaw375jGUieSVhUp/R/YPqZpl3n8m4oIA2ESxlNiQMYBH4gmwOTWAV9rM7n+HViyVRUifbQ5Bh+alRDxAvDAB2ijFrW1BWqoiq30funFdkh05efthiCua2X" +
	"kSOd/UKADlirL2fLDMSQsf2xDjVtevcyzj7kRT8kXfEF3gMbaSzxKE/BV3C0JrsgFchbMwpdtQrswPKcygeg8xT7AmgndwgJpK7wKwSz2vx3lp3JYlfBahE5JR7Hhyf7AEAOwx/IotbZaC+41BEU" +
	"O/PvoDPdKr/IZcwypfabhzGuIa36ENApedn4DxC1GYoUHgjne5dlIbFwaieyWO36lqeGCKp81aavE7hR+mPw57lX4YrhmX6QgVEtzXXB4+hv6v8A/9k%3D";



// Shortcut!
function $(id) {return document.getElementById(id);}

// Creates a new node with the given attributes and properties (be careful with XPCNativeWrapper limitations)
function createNode(type, attributes, props) {
	var node = document.createElement(type);
	if (attributes) {
		for (var attr in attributes) {
			node.setAttribute(attr, attributes[attr]);
		}
	}
	if (props) {
		for (var prop in props) {
			if (prop in node) node[prop] = props[prop];
		}
	}
	return node;
}

// Shortcut to sessionStorage (saved values will be discarded at the end of the browser session)
var sSt = unsafeWindow.sessionStorage;

// Shows/hides an update notice to the user (according to the boolean parameter scriptShowMessage)
// The scriptNewVersion parameters is used to display the new version number/date in Date.prototype.getTime() format
function scriptShowUpdateMessage(scriptShowMessage, scriptNewVersion) {
	// Gets the notice box and the script new version date in UTC format
	var messageDiv = $("gsscriptVersionMessage");
	var scriptNewVersionDate = (new Date(scriptNewVersion)).toUTCString();

	// Shows/creates/hides the update notice
	if (scriptShowMessage == false) {
		// Hides the notice if it exists
		if (messageDiv) messageDiv.style.display = "none";
	}
	else {
		// The notice shouldn't be shown/created if the user has chosen to hide it for this session
		if (sSt.gsscriptVersionNoticeHide) return;

		if (messageDiv) {
			// Shows the notice
			messageDiv.style.display = "";
		}
		else {
			// Creates the notice
			messageDiv = createNode("div", {id: "gsscriptVersionMessage", title: "A new version of google Enhanced BLACK is available"});
			messageDiv.innerHTML = "A new version of google Enhanced BLACK is available<br />" +
				"<span style='font-weight:normal; color:#f77; font-family:Trebuchet MS, Verdna;'>Updated: " + scriptNewVersionDate + "</span><br /><br />" +
				"<a style='position:absolute; top:67px; left:9px;' href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2654952' target='_blank'><img src='http://images2.rdefined.com/d/89712-1/jar.gif' title=' Tip  Jar  ' border=0 /></a>" +
				"<a style='color:#fcc !important; font-size:16px; font-family:Trebuchet MS, Verdna;' id='gsscriptVersionInstallUpdate' href='" + scriptFileURL + "' title='Install the script update now'><blink>INSTALL UPDATE</blink></a>" +
				" &nbsp;&middot;&nbsp; " +
				"<a style='color:#f99 !important; font-family:Trebuchet MS, Verdna;' href='" + scriptHomepageURL + "' target='_blank' title='Go to the google Enhanced BLACK UserScript page in a new tab'>Go to UserScript page</a>" +
				" &nbsp;&middot;&nbsp; " +
				"<a style='color:#fcc !important; font-family:Trebuchet MS, Verdna;' id='gsscriptVersionMessageHide' href='javascript:void(null)' title='Hide the notice for this session'>Hide notice</a>";
			document.body.appendChild(messageDiv);
			// Adds event listeners to the hide update-notice upon Install or Hide
			$("gsscriptVersionInstallUpdate").addEventListener("click", function(evt) {
				sSt.gsscriptVersionNoticeHide = "1"; // Sets a sessionStorage variable to prevent the notice to be shown for this session
				scriptShowUpdateMessage(false, null);
			}, false);
			$("gsscriptVersionMessageHide").addEventListener("click", function(evt) {
				sSt.gsscriptVersionNoticeHide = "1";
				scriptShowUpdateMessage(false, null);
			}, false);
		}
	}
}
// Checks if there is a new script version according to the version information in the script homepage
// The version information is in a line in the full description of the script: "<p>#[V:00000000]#</p>" (00000000 is the version number)
// If the request is successful and there is a new version available, a message to the user is displayed
function scriptCheckVersion() {
	GM_xmlhttpRequest({
		method: "GET",
		url: scriptHomepageURL,
		onload: function(evt) {
			if ((evt.readyState == 4) && (evt.status == 200)) {

				// Gets the remote version from the response and makes sure it is a number
				var responseMatch = evt.responseText.match(/<p>#\[V:(\d+)]#<\/p>/);
				var remoteVersion = (responseMatch === null) ? NaN : parseInt(responseMatch[1], 10);
				if (isNaN(remoteVersion)) return;

				// Saves the more recent version according to the server and shows the update notice if the server version is newer
				GM_setValue("scriptLastRemoteVersion", remoteVersion.toString());
				if (remoteVersion > scriptVersion) scriptShowUpdateMessage(true, remoteVersion);

			}
		}
	});
}
// Checks for script updates
function scriptUpdateCheck() {
	if (Date.now() - scriptLastCheck >= 86400000) {   // 86400000 == 1 day
		// At least a day has passed since the last check. Sends a request to check for a new script version
		GM_setValue("scriptLastCheck", Date.now().toString());
		scriptCheckVersion();
	}
	else {
		// If a new version was previously detected the notice will be shown to the user
		// This is to prevent that the notice will only be shown once a day (when an update check is scheduled)
		if (scriptLastRemoteVersion > scriptVersion) {
			scriptShowUpdateMessage(true, scriptLastRemoteVersion);
		}
	}
}
var scriptLastCheck = parseInt(GM_getValue("scriptLastCheck", "0"), 10);
	if (isNaN(scriptLastCheck)) scriptLastCheck = 0;
var scriptLastRemoteVersion = parseInt(GM_getValue("scriptLastRemoteVersion", scriptVersion.toString()), 10);
	if (isNaN(scriptLastRemoteVersion)) scriptLastRemoteVersion = scriptVersion;



// RUN!!!
enhanceGoogle();