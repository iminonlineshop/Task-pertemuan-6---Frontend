import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
    return(
        <div className={styles.container}>
            <section className={styles.addmovieform}>
                <div className={styles.addmovieform__left}>
                    <img className={styles.addmovieform__image} src="https://picsum.photos/600/400" alt=""></img>
                </div>
                <div className={styles.addmovieform__right}>
                    <h2 className={styles.addmovieform__title}>Add Movie Form</h2>
                    <form>
                        <div className={styles.addmovieform__group}>
                            <label   className={styles.addmovieform__label} htmlFor="title">Title</label>
                            <input   className={styles.addmovieform__input} type="text" id="title"/>
                        </div>
                        <div className={styles.addmovieform__group}>
                            <label   className={styles.addmovieform__label} htmlFor="title">Date</label>
                            <input   className={styles.addmovieform__input} type="text" id="date"/>
                        </div>
                        <div className={styles.addmovieform__group}>
                            <button className={styles.addmovieform__button}>Add  Movie</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;