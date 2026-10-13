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

            <div className={styles.imgContainer2}>
                <img 
                    src="https://res.cloudinary.com/khxje4tw/image/upload/v1788317774/qiaoben.jpg" 
                    alt="Honoka Hashimoto" 
                />
                <div className={styles.intro2}>
                    <div>Honoka Hashimoto</div>
                    <div>Honoka Hashimoto is a Japanese professional table tennis player born on July 5, 1998, in Aichi Prefecture, Japan. She is famous for her defensive playing style, especially her excellent chopping technique. Playing right-handed with a shakehand grip, she uses heavy backspin, precise placement, and variations in spin to frustrate aggressive opponents. Hashimoto has achieved significant success in international competitions, including winning women's singles and doubles titles at the 2017 Croatia Open. Known for her patience, consistency, and tactical intelligence, Hashimoto is one of the most distinctive defensive players in Japanese women's table tennis.</div>
                </div>

            </div>

        </>

    )
}