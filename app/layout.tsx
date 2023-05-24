import '@styles/globals.css';

import Nav from '@components/Nav';

export const metadata = {
  title: 'AI Coach',
  description: 'Learn Effective Communication Strategies',
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
