<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="4.0"
encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html>

    <head>
        <meta charset="UTF-8"/>
        <title>CCCB</title>
	      <link href="estils.css" rel="stylesheet" type="text/css"/>
        </head>

        <body>
        <h2>CCCB Centre de Cultura Contemporània de Barcelona</h2>
        <h2>Exposicions</h2><h2>Activitats</h2>


        <div class="Exposicions">

            <ul>
            <li><b>Per tema</b></li>
              <li>Art</li>
              <li>Ciència</li>
              <li>Cinema i audiovisuals</li>
              <li>Ciutat i espai públic</li>
              <li>Cultura</li>
              <li>Disseny</li>
              <li>Ecologia</li>
              <li>Filosofia</li>
              <li>Fotografia</li>
              <li>Història</li>
              <li>Innovació</li>
              <li>Literatura</li>
              <li>Periodisme</li>
              <li>Política</li>
              <li>Sociología</li>
              <li>Tecnologia</li>
            </ul>

            <ul>
            <li><b>Per any</b></li>
              <li>2018</li>
              <li>2017</li>
              <li>2016</li>
            </ul>
        </div>
        <div id="contingut">
            <xsl:for-each select="cccb/grup">
          

            </xsl:for-each>
        </div>
              <div class="peu">

              <p>CCCB Centre de Cultura Contemporània de Barcelona</p>
              <p>Montalegre, 5 - 08001 Barcelona</p>
              <p>Tel. 93 306 41 00 - Fax 93 306 41 01</p>
              <p>info@cccb.org</p>
            </div>
  </body>
  </html>
  </xsl:template>
</xsl:stylesheet>
