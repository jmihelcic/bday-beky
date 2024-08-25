'use client';
import { Fredoka } from 'next/font/google';
import { RiddlesProvider } from './context';
import { Screens } from './screens/Screens';

const font = Fredoka({ subsets: ['latin'], weight: ['400', '500'] });

export default function Home() {
  return (
    <main className={font.className}>
      <RiddlesProvider>
        <Screens />
      </RiddlesProvider>
    </main>
  );
}
