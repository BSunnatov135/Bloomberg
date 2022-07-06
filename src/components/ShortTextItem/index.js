import styles from './shorttextitem.module.css'

function ShortTextItem ({category, title, time}) {
return (
    <article className={styles.TextItemContainer}>
        <section className={styles.TextItemCategory}>{category}</section>
        <div className={styles.TextItemTitle}>
        {title}
        </div>
    </article>
)}
export default ShortTextItem;