import styles from './Home.module.css'

export default function Home() {
    return (
        <>
            <div className={styles.imgContainer}>
                <div className={styles.intro}>
                    <div>Fan Zhendong ALC — Power and Precision</div>
                    <div>The Fan Zhendong ALC is designed for players who seek a balance of speed, power, and control. Ideal for an offensive playing style, it supports aggressive topspin attacks, quick counterattacks, and precise ball placement. Whether playing close to the table or from mid-distance, this blade offers a versatile option for players looking to combine attacking power with consistent performance. Pair it with your preferred rubbers to build a setup that matches your playing style.</div>
                </div>
                <img 
                    src="https://res.cloudinary.com/khxje4tw/image/upload/v1788317861/fanzhendong.jpg" 
                    alt="fanzhendong" 
                />
            </div>

        </>

    )
}