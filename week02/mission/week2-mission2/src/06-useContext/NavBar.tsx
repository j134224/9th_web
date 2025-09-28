import { THEME, useTheme} from './context/ThemProvider';
import ThemeToggleButton from './ThemeToggleButton';
import clsx from 'clsx';


export default function NavBar () : Element {
    const { theme } = useState();

    const isLightMode = theme === THEME.LIGHT;

    return (
        <nav className={clsx(
            'p-4 w-full flex justify-end',
            isLightMode ? 'bg-white' : 'bg-gray-800'
        )}>
        <ThemeToggleButton></ThemeToggleButton>
        </nav>
    );
}