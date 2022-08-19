import { FC, ReactNode } from 'react';

import * as styles from './Card.styles';

export type CardProps = {
  children: ReactNode;
  headingText?: ReactNode;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
};

export const Card: FC<CardProps> = ({
  children,
  headingText,
  headingLevel: HeadingLevel = 'span',
}) => (
  <article css={styles.container}>
    {headingText && (
      <HeadingLevel css={styles.heading}>{headingText}</HeadingLevel>
    )}
    <div>{children}</div>
  </article>
);
