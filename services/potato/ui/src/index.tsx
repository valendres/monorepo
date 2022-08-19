import { defineReactMicroFrontend } from '@valendres/react-micro-frontend';
import { lazy, LazyExoticComponent } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { RootProvider } from '~containers/root-provider';
import { trpc } from '~utils/trpc';
import styles from './styles.scss';

const trpcClient = trpc.createClient({
  url: 'http://localhost:8081/trpc',
  fetch: (url, options) =>
    fetch(url, {
      ...options,
      credentials: 'include',
    }),
});
const queryClient = new QueryClient();

const defineLazyReactMicroFrontend = (
  customElementName: string,
  Root: LazyExoticComponent<any>,
) => {
  defineReactMicroFrontend(
    customElementName,
    (_, element) => (
      <RootProvider
        shadowRoot={element.shadowRoot!}
        trpcClient={trpcClient}
        queryClient={queryClient}
      >
        <Root />
      </RootProvider>
    ),
    {
      shadow: true,
      styles: [styles],
      fonts: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOrigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
        },
      ],
    },
  );
};

defineLazyReactMicroFrontend(
  'potato-main',
  lazy(() => import('~roots/main')),
);

defineLazyReactMicroFrontend(
  'potato-summary-card',
  lazy(() => import('~roots/summary-card')),
);

defineLazyReactMicroFrontend(
  'potato-launch-button',
  lazy(() => import('~roots/launch-button')),
);
