import React from 'react';

import styles from './Footer.module.scss';

type FooterRow = Array<Link>;

interface FooterProps {
  rows?: FooterRow;
  siteDev?: string;
  termsHref?: string;
  sitemapHref?: string;
}

export const Footer: React.FC<FooterProps> = ({
  rows,
  siteDev,
  termsHref,
  sitemapHref,
}) => {
  return (
    <footer className={styles.footer}>
      {rows && <div className={styles.columns}></div>}
      {/* {data?.allSection?.[0]?.sectionBlocks?.map((block) =>
          block?.heading == "Footer Logo" ? (
            <div className={`${styles.column} ${styles.footerIcon}`} key={block?._key}>
              <Image
                src={footer?.footerIcon?.url || "/images/icon.png"}
                alt={""}
                width={150}
                height={150}
                className={styles.image}
              />
            </div>
          ) : (
            <div className={styles.column} key={block?._key}>
              <PortableText value={block?.descriptionRaw} />
            </div>
          )
        )} */}
      <hr className={styles.divider} />
      <div className={styles.subFooter}>
        <div className={styles.copyright}>
          Copyright© {new Date().getFullYear()} {siteDev}
        </div>
        <div className={styles.siteInfo}>
          {termsHref && (
            <>
              <span>Read our </span>
              <a href={termsHref} className={styles.link}>
                Terms and Conditons of Trade
              </a>
            </>
          )}

          {sitemapHref && (
            <>
              <span>| </span>
              <a href={sitemapHref} className={styles.link}>
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