import Head from 'next/head';
import React, { useMemo } from 'react';

interface HeadMetaProps {
  titleUniq?: string;
  titleBrand: string;
  description: string;
  author?: string;
  themeColor?: string;
}

export const HeadMeta: React.FC<HeadMetaProps> = ({
  titleUniq = '',
  titleBrand,
  description,
  author,
  themeColor,
}) => {
  const title = useMemo(
    () => (titleUniq ? `${titleUniq} | ${titleBrand}` : titleBrand),
    []
  );
  // url ? null : (url = `https://${config.domain}`);
  // const metaImageHref = `https://${config.domain}/images/meta_image.PNG`;

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {author && <meta name="author" content={author} />}

      <meta property="og:type" content="Website" />
      <meta property="og:title" content={title} />
      {/* <meta name='image' content={metaImageHref} /> */}
      {/* <meta property='og:image' content={metaImageHref} /> */}
      <meta property="og:site_name" content={title} />
      {/* <meta property='og:url' content={url} />  */}

      {/* PWA and Icon Settings */}
      <meta name="theme-color" content={themeColor} />
      {/* <link rel='manifest' href='/manifest.json' />
      <link rel='shortcut icon' href='/icons/icon-192x192.png' />
      <link rel='icon' href='/icons/icon-192x192.png' />
      <link rel='apple-touch-icon' href='/icons/icon-192x192.png' />
      <link rel='apple-touch-icon-precomposed' href='/icons/icon-192x192.png' />
      <link rel='image_src' href='/icons/icon-512x512.png' /> */}

      {/* For eCommerce searches */}
      {/* <link rel='canonical' href={url} /> */}

      {/* Browser Compatibility */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

      {/* Robot Instructions */}
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default HeadMeta;
