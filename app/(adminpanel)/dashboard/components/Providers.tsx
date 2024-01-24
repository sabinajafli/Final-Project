'use client'
import { ThemeProvider } from 'next-themes';
import ThemeSwitcher from './ThemeSwitcher';

export default function Providers(){
  return (
    <ThemeProvider attribute="class">
      <ThemeSwitcher />
    </ThemeProvider>
  );
}