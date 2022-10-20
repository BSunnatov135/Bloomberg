import styles from './galleryitem.module.css'

function GalleryItem ({category, image, title, time}) {
return (
    <div className={styles.GalleryContainer}>
        <img className={styles.GalleryImage} src={image}></img>
        <section className={styles.GalleryCategory}>{category}</section>
        <div className={styles.GalleryTitle}>
        {title}
        </div>
        <div className={styles.GalleryTime}>{time}</div>
    </div>
)}
export default GalleryItem;