import './globals.css';

import localFont from 'next/font/local';
const fontInter = localFont({
  src: './_font/Inter-VariableFont.ttf',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={fontInter.className}>
      <body className='bg-white text-neutral-950'>
        {children}
      </body>
    </html>
  );
}
