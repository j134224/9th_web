import { useState } from 'react';
import NavBar from "./NavBar";
import ThemeContent from './ThemeContent';
import { ThemeProvider } from './context/ThemProvider';

export default function ContextPage() : Element {
    return (
        <ThemeProvider>
            <div className='flex flex-col item-center justify-center min-h-screen'>
                <NavBar></NavBar>
                <ThemeContent></ThemeContent>
            </div>
        </ThemeProvider>
    );
}