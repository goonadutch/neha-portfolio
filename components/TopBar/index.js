import Link from 'next/link'
import styles from "./topbar.module.css"
import { topBarLinks } from "../config"

export default function TopBar() {
    return (
        <div className={styles.topBar}>
            {topBarLinks.map((link) => (
                <TopBarComponent key={link.title} title={link.title} value={link.url} />
            ))}
        </div>
    );
}

function TopBarComponent({title, value}) {
    return (
        <Link href={value}>
            <span className={styles.button}>{title}</span>
        </Link>
    );
}
