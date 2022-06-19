import React from 'react';
import styles from './Footer.module.scss';

interface SocialsProps {
  twitter?: {
    href: string;
    username?: string;
  };
  github?: {
    href: string;
    username?: string;
  };
  linkedIn?: {
    href: string;
    username?: string;
  };
}

export const Socials: React.FC<SocialsProps> = ({
  twitter,
  github,
  linkedIn,
}) => {
  return (
    <div className={styles.social}>
      {twitter && (
        <a
          className={styles.twitter}
          href={`https://twitter.com/${twitter?.href}`}
          title={`Twitter @${twitter?.username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* twitter icon goes here */}
        </a>
      )}

      {github && (
        <a
          className={styles.github}
          href={`https://github.com/${github?.href}`}
          title={github?.username && `GitHub @${github?.username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* github icon goes here */}
        </a>
      )}

      {linkedIn && (
        <a
          className={styles.linkedin}
          href={`https://www.linkedin.com/in/${linkedIn?.href}`}
          title={`LinkedIn ${linkedIn?.username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* linked in icon goes here */}
        </a>
      )}
    </div>
  );
};
