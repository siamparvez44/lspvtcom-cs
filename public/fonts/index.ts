import { Be_Vietnam_Pro } from 'next/font/google';
import localFont from 'next/font/local';

export const displayFont = localFont({
  src: [
    {
      path: './baron-neue/BaronNeue-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './baron-neue/BaronNeue-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './baron-neue/BaronNeue-Bold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './baron-neue/BaronNeue-BoldItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './baron-neue/BaronNeue-Black.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './baron-neue/BaronNeue-BlackItalic.otf',
      weight: '700',
      style: 'italic',
    }
  ],
  display: 'swap',
  variable: '--font-display',
});

export const bodyFont = Be_Vietnam_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-body',
});
