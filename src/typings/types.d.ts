interface Title {
  text: string;
}

interface Link {
  text: string;
  href: string;
}

interface Social {
  href: string;
  username?: string;
}

type FooterRow = Array<Link>;

interface FooterStyleOverride {
  footer: string;
  columns: string;
  divider: string;
  subFooter: string;
  copyright: string;
  siteInfo: string;
  link: string;
}

interface FooterProps {
  rows?: FooterRow;
  siteDev?: string;
  termsHref?: string;
  sitemapHref?: string;
  stylesOveeride?: FooterStyleOverride;
}