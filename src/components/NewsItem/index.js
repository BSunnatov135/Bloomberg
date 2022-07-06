import styles from './newsitem.module.css'

function NewsItem ({category, title, time}) {
return (
    <article className={styles.NewsItemContainer}>
        <section className={styles.NewsItemCategory}>{category}</section>
        <div className={styles.NewsItemTitle}>
        {title}
        </div>
        <div className={styles.NewsItemTime}>{time}</div>
    </article>
)}
export default NewsItem;