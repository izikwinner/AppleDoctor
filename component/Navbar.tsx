// Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link href="/">
          Привет, Абдумумин
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.search}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder='Поиск'/>
        </div>
        <div className={styles.cart}>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>12</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
