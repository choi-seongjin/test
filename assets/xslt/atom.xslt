<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
<xsl:output method="html" encoding="utf-8" />
<xsl:template match="/atom:feed">
	<xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html &gt;</xsl:text>
	<html>
	<head>
		<xsl:text disable-output-escaping="yes"><![CDATA[
		
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Seongjin Choi @UMN</title>

<link rel="stylesheet" type="text/css" href="https://choi-seongjin.github.io/test/assets/css/styles_feeling_responsive.css">



<script src="https://choi-seongjin.github.io/test/assets/js/modernizr.min.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js"></script>
<script>
	WebFont.load({
		google: {
			families: ['Lato:400,700,400italic:latin', 'Volkhov::latin']
		}
	});
</script>

<noscript>
	<link href='http://fonts.googleapis.com/css?family=Lato:400,700,400italic%7CVolkhov' rel='stylesheet'
		type='text/css'>
</noscript>


<!-- Search Engine Optimization -->
<meta name="description" content="UMN Choi Lab — Seongjin Choi, Assistant Professor, CEGE, University of Minnesota Twin Cities. Research on urban mobility data analytics, spatiotemporal AI, generative intelligence, vision-language-action models, and LLM-powered traffic management.">

<meta name="google-site-verification" content="Vk0IOJ2jwG_qEoG7fuEXYqv0m2rLa8P778Fi_GrsgEQ">

<meta name="msvalidate.01" content="0FB4C028ABCF07C908C54386ABD2D97F">



<link rel="canonical" href="https://choi-seongjin.github.io/test/assets/xslt/atom.xslt">


<!-- Facebook Open Graph -->
<meta property="og:title" content="Atom Feed (Styled)">
<meta property="og:description" content="UMN Choi Lab — Seongjin Choi, Assistant Professor, CEGE, University of Minnesota Twin Cities. Research on urban mobility data analytics, spatiotemporal AI, generative intelligence, vision-language-action models, and LLM-powered traffic management.">
<meta property="og:url" content="https://choi-seongjin.github.io/test/assets/xslt/atom.xslt">
<meta property="og:locale" content="en_EN">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Seongjin Choi @UMN">


<meta property="article:author" content="https://www.facebook.com/phlow.media">



<!-- Twitter -->
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="phlow">
<meta name="twitter:creator" content="phlow">
<meta name="twitter:title" content="Atom Feed (Styled)">
<meta name="twitter:description" content="UMN Choi Lab — Seongjin Choi, Assistant Professor, CEGE, University of Minnesota Twin Cities. Research on urban mobility data analytics, spatiotemporal AI, generative intelligence, vision-language-action models, and LLM-powered traffic management.">



<link type="text/plain" rel="author" href="https://choi-seongjin.github.io/test/humans.txt">





	<link rel="icon" sizes="32x32" href="https://choi-seongjin.github.io/test/assets/img/favicon-32x32.png">

	<link rel="icon" sizes="192x192" href="https://choi-seongjin.github.io/test/assets/img/touch-icon-192x192.png">

	<link rel="apple-touch-icon-precomposed" sizes="180x180" href="https://choi-seongjin.github.io/test/assets/img/apple-touch-icon-180x180-precomposed.png">

	<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://choi-seongjin.github.io/test/assets/img/apple-touch-icon-152x152-precomposed.png">

	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://choi-seongjin.github.io/test/assets/img/apple-touch-icon-144x144-precomposed.png">

	<link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://choi-seongjin.github.io/test/assets/img/apple-touch-icon-120x120-precomposed.png">

	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://choi-seongjin.github.io/test/assets/img/apple-touch-icon-114x114-precomposed.png">

	
	<link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://choi-seongjin.github.io/test/assets/img/apple-touch-icon-76x76-precomposed.png">

	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://choi-seongjin.github.io/test/assets/img/apple-touch-icon-72x72-precomposed.png">

	<link rel="apple-touch-icon-precomposed" href="https://choi-seongjin.github.io/test/assets/img/apple-touch-icon-precomposed.png">	

	<meta name="msapplication-TileImage" content="https://choi-seongjin.github.io/test/assets/img/msapplication_tileimage.png">

	<meta name="msapplication-TileColor" content="#fabb00">





<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-BMGWQHPTL8"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag() { dataLayer.push(arguments); }
	gtag('js', new Date());

	gtag('config', 'G-BMGWQHPTL8');
</script>


		]]></xsl:text>
	</head>
	<body id="top-of-page">
		<xsl:text disable-output-escaping="yes"><![CDATA[
		
<div id="navigation" class="sticky">
  <nav class="top-bar" role="navigation" data-topbar data-options="scrolltop: false">
    <ul class="title-area">
      <li class="name">
      <h1 class="hide-for-large-up"><a href="https://choi-seongjin.github.io/test" class="icon-tree"> Seongjin Choi @UMN</a></h1>
    </li>
       <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
      <li class="toggle-topbar toggle-topbar-click menu-icon"><a><span>Nav</span></a></li>
    </ul>
    <section class="top-bar-section">

      <ul class="left">
        

              

          
          

            
            
              <li><a  href="https://choi-seongjin.github.io/test/">Home</a></li>
              <li class="divider"></li>

            
            
          
        

              

          
          

            
            
              <li><a  href="https://choi-seongjin.github.io/test/about/">About</a></li>
              <li class="divider"></li>

            
            
          
        

              

          
          

            
            
              <li><a  href="https://choi-seongjin.github.io/test/team/">Team</a></li>
              <li class="divider"></li>

            
            
          
        

              

          
          

            
            
              <li><a  href="https://choi-seongjin.github.io/test/research/">Research</a></li>
              <li class="divider"></li>

            
            
          
        

              

          
          

            
            
              <li><a  href="https://choi-seongjin.github.io/test/publications/">Publications</a></li>
              <li class="divider"></li>

            
            
          
        

              

          
          

            
            
              <li><a  href="https://choi-seongjin.github.io/test/teaching/">Teaching</a></li>
              <li class="divider"></li>

            
            
          
        

              

          
          

            
            
              <li><a  href="https://choi-seongjin.github.io/test/news/">News</a></li>
              <li class="divider"></li>

            
            
          
        

              

          
          

            
            
              <li><a  href="https://choi-seongjin.github.io/test/datacode/">Data &amp; Code</a></li>
              <li class="divider"></li>

            
            
          
        

              

          
          

            
            
              <li><a  href="https://choi-seongjin.github.io/test/contact/">Contact</a></li>
              <li class="divider"></li>

            
            
          
        
        
      </ul>
      
      

      <ul class="right">
        

              



          
          
        

              



          
          
        

              



          
          
        

              



          
          
        

              



          
          
        

              



          
          
        

              



          
          
        

              



          
          
        

              



          
          
        
        
      </ul>
     
    </section>
  </nav>
</div><!-- /#navigation -->

		

<div id="masthead-no-image-header">
	<div class="row">
		<div class="small-12 columns">
			<a id="logo" href="https://choi-seongjin.github.io/test/" title="Seongjin Choi @UMN – Seongjin Choi">
				<img src="https://choi-seongjin.github.io/test/assets/img/logo.png"
					alt="Seongjin Choi @UMN – Seongjin Choi">
			</a>
		</div><!-- /.small-12.columns -->
	</div><!-- /.row -->
</div><!-- /#masthead -->








		


<div class="alert-box warning text-center"><p>This <a href="https://en.wikipedia.org/wiki/RSS" target="_blank">Atom feed</a> is meant to be used by <a href="https://en.wikipedia.org/wiki/Template:Aggregators" target="_blank">RSS reader applications and websites</a>.</p>
</div>



		]]></xsl:text>
		<header class="t30 row">
	<p class="subheadline"><xsl:value-of select="atom:subtitle" disable-output-escaping="yes" /></p>
	<h1>
		<xsl:element name="a">
			<xsl:attribute name="href">
				<xsl:value-of select="atom:id" />
			</xsl:attribute>
			<xsl:value-of select="atom:title" />
		</xsl:element>
	</h1>
</header>
<ul class="accordion row" data-accordion="">
	<xsl:for-each select="atom:entry">
		<li class="accordion-navigation">
			<xsl:variable name="slug-id">
				<xsl:call-template name="slugify">
					<xsl:with-param name="text" select="atom:id" />
				</xsl:call-template>
			</xsl:variable>
			<xsl:element name="a">
				<xsl:attribute name="href"><xsl:value-of select="concat('#', $slug-id)"/></xsl:attribute>
				<xsl:value-of select="atom:title"/>
				<br/>
				<small><xsl:value-of select="atom:updated"/></small>
			</xsl:element>
			<xsl:element name="div">
				<xsl:attribute name="id"><xsl:value-of select="$slug-id"/></xsl:attribute>
				<xsl:attribute name="class">content</xsl:attribute>
				<h1>
					<xsl:element name="a">
						<xsl:attribute name="href"><xsl:value-of select="atom:id"/></xsl:attribute>
						<xsl:value-of select="atom:title"/>
					</xsl:element>
				</h1>
				<xsl:value-of select="atom:content" disable-output-escaping="yes" />
			</xsl:element>
		</li>
	</xsl:for-each>
</ul>

		<xsl:text disable-output-escaping="yes"><![CDATA[
		<div id="up-to-top" class="row">
  <div class="small-12 columns" style="text-align: right;">
    <a class="iconfont" href="#top-of-page">&#xf108;</a>
  </div><!-- /.small-12.columns -->
</div><!-- /.row -->


<footer id="footer-content" class="bg-grau">
  <div id="subfooter">
    <nav class="row">
      <section id="subfooter-left" class="small-12 medium-6 columns credits">
        <p>Seongjin Choi @University of Minnesota, Twin Cities <br> Original source created by <a href="http://phlow.de/">Phlow</a> with <a href="http://jekyllrb.com/" target="_blank">Jekyll</a> based on <a href="http://phlow.github.io/feeling-responsive/">Feeling Responsive</a>.</p>
      </section>

      <!-- <section id="subfooter-right" class="small-12 medium-6 columns">
        <ul class="inline-list social-icons">
          
          <li><a href="http://linkedin.com/in/seongjin-choi-852b2b198" target="_blank" class="icon-linkedin"
              title="LinkedIn Profile"></a></li>
          
        </ul>
      </section> -->
    </nav>
  </div><!-- /#subfooter -->
</footer>
		


<script src="https://choi-seongjin.github.io/test/assets/js/javascript.min.js"></script>












		]]></xsl:text>
	</body>
	</html>
</xsl:template>
<xsl:template name="slugify">
	<xsl:param name="text" select="''" />
	<xsl:variable name="dodgyChars" select="' ,.#_-!?*:;=+|&amp;/\\'" />
	<xsl:variable name="replacementChar" select="'-----------------'" />
	<xsl:variable name="lowercase" select="'abcdefghijklmnopqrstuvwxyz'" />
	<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
	<xsl:variable name="lowercased"><xsl:value-of select="translate( $text, $uppercase, $lowercase )" /></xsl:variable>
	<xsl:variable name="escaped"><xsl:value-of select="translate( $lowercased, $dodgyChars, $replacementChar )" /></xsl:variable>
	<xsl:value-of select="$escaped" />
</xsl:template>
</xsl:stylesheet>
