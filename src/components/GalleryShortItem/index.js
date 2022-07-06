import styles from './galleryshortitem.module.css'

function GalleryShortItem ({category, image, title}) {
return (
    <div className={styles.GalleryContainer}>
         <img className={styles.GalleryImage} src={image}></img>
        <section className={styles.GalleryCategory}>{category}</section>
        <div className={styles.GalleryTitle}>
        {title}
        </div>
        
    </div>
)}
export default GalleryShortItem;