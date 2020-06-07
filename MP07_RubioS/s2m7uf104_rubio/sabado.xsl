<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>

				<meta charset="UTF-8"/>
				<title></title>
				<link href="primavera.css" rel="stylesheet" type="text/css"/>
			</head>
			<body>
				<h2>primavera sound</h2>
					<ul id="menu">
							<li><a href="index.xml">Home</a></li>
							<li><a href="miercoles.xml">miercoles</a></li>
							<li><a href="jueves.xml">jueves</a></li>
							<li><a href="viernes.xml">viernes</a></li>
							<li><a href="sabado.xml">sabado</a></li>
					</ul>
					<ul id="lateral">
							<xsl:for-each select="primavera/grup">
								<xsl:if test="Dia='sábado 30 de mayo'">
										<li><a href="#{id}"><xsl:value-of select="Artista"/></a></li>
								</xsl:if>
							</xsl:for-each>
					</ul>
				<div id="contingut">
					<xsl:for-each select="primavera/grup">

							<xsl:if test="Dia='sábado 30 de mayo'">
								<div id="grup" style="background-image:url({image}); background-size:cover; background-repeat:no-repeat;">
		            	<div id="txt" style="background-color:rgba(255,0,255,0.5)">
				            <h2 id="{id}"><xsl:value-of select="Artista"/></h2>
				            <h3><xsl:value-of select="Dia"/></h3>
				            <h3><xsl:value-of select="Lloc"/></h3>
										<h4><xsl:value-of select="Titol"/></h4>
		          		</div>
								</div>
					</xsl:if>
				</xsl:for-each>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
