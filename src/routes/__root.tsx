import globalsCss from '@/styles/globals.css?url';
import safariPersonaCss from '@/styles/safari-persona.css?url';

import { Toaster } from '@/components/ui/sonner';

import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router';
import { ReactNode } from 'react';

import NotFound from '@/components/core/not-found';
import CatchBoundary from '@/components/core/catch-boundary';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Plan, Book & Manage Safaris | Shuri Way',
      },
      {
        name: 'description',
        content:
          'All-in-one safari software for lodges, operators, travelers, and service providers, powered by AI.',
      },
      {
        name: 'keywords',
        content:
          'safari booking platform, safari itinerary builder, safari lodge software, safari travel planning, safari operations software, booking software for lodges, safari tour operator tools, lodge booking software, how to plan a safari itinerary, manage safari lodge availability, automate safari lodge bookings, safari trip builder for travel agents, direct booking platform for lodges, plan your own safari trip',
      },
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
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Outfit:wght@300;400;500;600&display=swap',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/logo.png',
      },
    ],
    links: [
      { rel: 'stylesheet', href: globalsCss },
      { rel: 'stylesheet', href: safariPersonaCss },
      { rel: 'icon', href: '/logo.png' },
    ],
  }),
  component: RootComponent,
  errorComponent: (props) => <CatchBoundary {...props} />,
  notFoundComponent: () => <NotFound />,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
      <Toaster richColors />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body className="font-inter">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
