import {useTheme} from './context/ThemProvider';
import clsx form 'clsx';

export default function ThemeToggleButton () : Element {
    const { toggleTheme } = useState();

    const isLightMode = theme === THEME.LIGHT;

    return (<button onClick={toggleTheme}
        className={clsx('')}>{isLightMode ? 'Dark' : 'Light'}</button>);
}