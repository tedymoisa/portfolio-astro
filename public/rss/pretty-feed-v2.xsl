<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:webfeeds="http://webfeeds.org/rss/1.0">
  <xsl:output method="html" version="5.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title><xsl:value-of select="rss/channel/title"/></title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; line-height: 1.6; color: #333; max-width: 900px; margin: 2em auto; padding: 0 1em; }
          h1 { font-size: 2.5em; margin-bottom: 0.5em; }
          .channel-description { font-size: 1.2em; color: #666; margin-bottom: 2em; }
          .item { border-bottom: 1px solid #eee; padding-bottom: 1.5em; margin-bottom: 1.5em; }
          .item:last-child { border-bottom: none; }
          .item h2 { font-size: 1.5em; margin-bottom: 0.5em; }
          .item a { text-decoration: none; color: #007bff; }
          .item a:hover { text-decoration: underline; }
          .item-meta { font-size: 0.9em; color: #888; margin-bottom: 0.8em; }
          .item-description { margin-top: 0.5em; }
        </style>
      </head>
      <body>
        <h1>
          <a href="{rss/channel/link}">
            <xsl:value-of select="rss/channel/title"/>
          </a>
        </h1>
        <p class="channel-description"><xsl:value-of select="rss/channel/description"/></p>
        <xsl:for-each select="rss/channel/item">
          <div class="item">
            <h2>
              <a href="{link}">
                <xsl:value-of select="title"/>
              </a>
            </h2>
            <div class="item-meta">
              <xsl:value-of select="pubDate"/>
              <xsl:if test="author">
                <span> by <xsl:value-of select="author"/></span>
              </xsl:if>
            </div>
            <div class="item-description">
              <xsl:value-of select="description" disable-output-escaping="yes"/>
            </div>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>