'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faMobileButton } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
const Sidebar: React.FC = () => {

    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link: string) => {
      setActiveLink(link);
    };
    return (
        <div className={styles.sidebar}>
            <div className={`${styles.links} ${activeLink === 'blog' ? styles.active : ''}`}>
                <FontAwesomeIcon icon={faNewspaper} />
                <Link href="/blog" onClick={() => handleLinkClick('blog')}>
                    Новости
                </Link> 
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div className={`${styles.links} ${activeLink === 'devices' ? styles.active : ''}`}>
                <FontAwesomeIcon icon={faMobileButton} />
                <Link href="/devices" onClick={() => handleLinkClick('devices')}>
                    Устройства
                </Link>
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div className={`${styles.links} ${activeLink === 'orderstatus' ? styles.active : ''}`}>
                <FontAwesomeIcon icon={faScrewdriverWrench} />
                <Link href="/orderstatus" onClick={() => handleLinkClick('orderstatus')}>
                    Статус ремонта
                </Link>
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div className={`${styles.links} ${activeLink === 'about' ? styles.active : ''}`}>
                <FontAwesomeIcon icon={faMoneyBill} />
                <Link href="/about" onClick={() => handleLinkClick('about')}>
                    Тип оплаты
                </Link>
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div className={`${styles.links} ${activeLink === 'about' ? styles.active : ''}`}>
                <FontAwesomeIcon icon={faComment} />
                <Link href="/about" onClick={() => handleLinkClick('about')}>
                    Помошь?
                </Link>
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
        </div>
    );
};

export default Sidebar;
