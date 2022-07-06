import styles from './weekendsitem.module.css'

function NewsItem ({category, title}) {
return (
    <article className={styles.WeekendsItemContainer}>
        <section className={styles.WeekendsItemCategory}>{category}</section>
        <div className={styles.WeekendsItemTitle}>
        {title}
        </div>
    </article>
)}
export default NewsItem;