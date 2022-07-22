import React from 'react';

import styles from './Footer.module.scss';

export const Footer: React.FC<FooterProps> = ({
  rows,
  siteDev,
  termsHref,
  sitemapHref,
  stylesOveeride,
}) => {
  return (
    <footer className={stylesOveeride?.footer || styles.footer}>
      {rows && (
        <div className={stylesOveeride?.columns || styles.columns}></div>
      )}
      <hr className={stylesOveeride?.divider || styles.divider} />
      <div className={stylesOveeride?.subFooter || styles.subFooter}>
        <div className={stylesOveeride?.copyright || styles.copyright}>
          Copyright© {new Date().getFullYear()} {siteDev}
        </div>
        <div className={stylesOveeride?.siteInfo || styles.siteInfo}>
          {termsHref && (
            <>
              <span>Read our </span>
              <a
                href={termsHref}
                className={stylesOveeride?.link || styles.link}
              >
                Terms and Conditons of Trade
              </a>
            </>
          )}

          {sitemapHref && (
            <>
              <span>| </span>
              <a
                href={sitemapHref}
                className={stylesOveeride?.link || styles.link}
              >
                Sitemap
              </a>
            </>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
