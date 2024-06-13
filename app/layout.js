import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Apple Clone',
  description: 'Apple Clone',
  icons: {
    icon: 'public/images/apple.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href="/images/apple.svg" sizes="any" />

        {children}
      </body>
    </html>
  );
}
