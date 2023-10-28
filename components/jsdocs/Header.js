import weather from '../cssdocs/Header.module.css'
import { RiMenu4Line } from 'react-icons/ri';
import { SiWebflow } from 'react-icons/si';

export default function Header() {
    return (
        <div className={weather.primary}>
            <div className={weather.header_icons}> <SiWebflow /> </div>
            <div className={weather.header_icons}> <RiMenu4Line /> </div>
        </div>
    )
}