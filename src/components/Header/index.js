import styles from './header.module.css'

function Header () {
    return (
        <nav className={styles.NavbarContainer}>
          <div className={styles.NavbarTop}>
            <div className={styles.NavbarTop_Left}>
                <a href='#' className={styles.NavbarTopLink}>
                    <div className={styles.NavbarTop_Logo}>
                        <h1 className={styles.NavbarTop_LogoText}>Bloomberg</h1>  
                        <div className={styles.NavbarTopEdition}>Europe Edition</div>
                    </div>  
                </a>
            </div>
            <div className={styles.NavbarTopRight}>
                <a className={styles.NavbarTopRightLink} href='#'>
                    Sign in
                </a>
                <a className={styles.NavbarTopRightSubscribe} href='#'>
                    Subscribe
                </a>
                <a className={styles.NavbarTopRightSearch} href='#'>
                    <div className={styles.NavbarTopRightSearchIcon}></div>
                </a>
            </div>
          </div>
          <div className={styles.Navigation}>
            <div className={styles.NavigationLeft}><b>Live Now</b></div>
            <div className={styles.NavigationMain}>
                <div className={styles.NaviItem}><a href='#'>Markets</a></div>
                <div className={styles.NaviItem}><a href='#'>Technology</a></div>
                <div className={styles.NaviItem}><a href='#'>Politics</a></div>
                <div className={styles.NaviItem}><a href='#'>Wealth</a></div>
                <div className={styles.NaviItem}><a href='#'>Pursuits</a></div>
                <div className={styles.NaviItem}><a href='#'>Opinion</a></div>
                <div className={styles.NaviItem}><a href='#'>Businessweek</a></div>
                <div className={styles.NaviItem}><a href='#'>Equality</a></div>
                <div className={styles.NaviItem}><a href='#'>Green</a></div>
                <div className={styles.NaviItem}><a href='#'>CityLab</a></div>
                <div className={styles.NaviItem}><a href='#'>Crypto</a></div>
            </div>
            <div className={`${styles.NaviItem} ${styles.NavRight}`}>
                <a href='#'>More</a>   
            </div>
          </div>
        </nav>
    );
}
export default Header;