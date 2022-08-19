import { css, keyframes } from '@emotion/react';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spin = css({});

export const app = css({
  textAlign: 'center',
  color: '#fff',
});

export const logo = css({
  animation: `${rotate} infinite 20s linear`,
});

export const header = css({});

export const link = css({
  color: '#61dafb',
});
