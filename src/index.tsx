import { RouterProvider } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { router } from './Router.js';

function main() {
  const rootEl = document.getElementById('root');

  if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);

    root.render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  }
}

main();
