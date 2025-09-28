
import clsx from 'clsx';
import { Theme, ThemeProvider, useTheme } from './context/ThemProvider';

export default function ThemeContent () : Element {

    const { toggleTheme } = useTheme();

    const isLightMode = theme === THEME.LIGHT;
    return (
        <div
        className={clsx(
            'p-4 h-dvh w-full',
            isLightMdde ? 'bg-white' : 'bg-gray-800'
        )}>
        <h1
        className = {clsx(
            'text-wxl font-bold',
            isLightMode ? 'text-black' : 'text-white'
        )}>
            Theme Content
        </h1>
        <p className={clsx(('mt-2', isLightMode ? 'text-black' : 'text-white'))}>
        hahahahahahahaha
        </p>
        </div>
    );

}