const productData = [
    {
        id: 1,
        name: 'VISCARIA',
        price: '$199.00',
        img: {
            front: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788163250/viscaria-front.jpg',
            top: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788317204/viscaria-top.jpg',
            side: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788317144/viscaria-side.jpg'
        },
        intro: 'VISCARIA is a classic offensive blade featuring five wooden plies and two ALC fiber layers. It offers an excellent balance of speed, stability, and feel, making it suitable for a wide range of attacking techniques. It is especially well suited to players who rely on powerful topspin and aggressive play.'
    },
    {
        id: 2,
        name: '樊振东 ALC',
        price: '$219,00',
        img: {
            front: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788405137/fzd-front.jpg',
            top: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788405137/fzd-top.jpg',
            side: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788405137/fzd-side.jpg'
        },
        intro: 'Fan Zhendong ALC combines five-ply wood with two ALC fiber layers and is inspired by Fan Zhendong’s aggressive playing style. It provides strong stability and rebound for attacking and counter-attacking play, while maintaining a reliable feel during fast exchanges. It is ideal for players seeking power without sacrificing control.'
    },
    {
        id: 3,
        name: '水谷隼 ALC',
        price: '$219,00',
        img: {
            front: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788419523/sgs-front.jpg',
            top: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788419524/sgs-top.jpg',
            side: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788419523/sgs-side.jpg'
        },
        intro: 'This Mizutani Jun-inspired blade is designed for modern offensive table tennis. It combines carbon technology with a balanced playing feel, offering speed, stability, and control. Its versatile characteristics suit players who combine powerful topspin with precise placement and varied attacking techniques.'
    },
    {
        id: 4,
        name: 'Apolonia',
        price: '$199.00',
        img: {
            front: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420218/alponia-front.jpg',
            top: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420219/alponia-top.jpg',
            side: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420218/alponia-side.jpg'
        },
        intro: 'APOLONIA ZLC was developed with Portuguese player Tiago Apolonia. Its inner ZLC fiber construction provides stability and strong spin potential while maintaining a controlled touch. It is particularly suitable for players who combine powerful topspin with consistent rallies and precise placement.'
    },
    {
        id: 5,
        name: 'FALCIMA',
        price: '$99,00',
        img: {
            front: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420219/falcima-front.jpg',
            top: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420219/falcima-top.jpg',
            side: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420219/falcima-side.jpg'
        },
        intro: 'FALCIMA is an offensive shakehand blade offering a balanced combination of speed, control, and ease of use. It is suitable for players developing their attacking techniques and learning to generate more spin and power. Its manageable response makes it a practical choice for players progressing toward a more aggressive style.'
    },
    {
        id: 6,
        name: 'HADROW',
        price: '$99,00',
        img: {
            front: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420219/hadrow-front.jpg',
            top: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420220/hadrow-top.jpg',
            side: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420219/hadrow-side.jpg'
        },
        intro: 'HADRAW 5 is a five-ply all-wood offensive blade combining natural wood feel with moderate rebound. Its relatively thin construction helps players generate spin while providing enough speed for offensive play. It is a good choice for players who appreciate the distinctive touch of an all-wood blade.'
    },
    {
        id: 7,
        name: '林昀儒 SUPER ALC',
        price: '$219,00',
        img: {
            front: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420220/ljr-front.jpg',
            top: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420220/ljr-top.jpg',
            side: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420220/ljr-side.jpg'
        },
        intro: 'Lin Yun-Ju SUPER ALC uses Butterfly’s advanced SUPER ALC fiber technology for modern offensive play. It offers a strong combination of speed, spin, and stability while maintaining precision during attacking exchanges. It is particularly suitable for technically skilled players who move quickly between aggressive attacks and controlled rallies.'
    },
    {
        id: 8,
        name: 'OUTERFORCE INNER ALC',
        price: '$199,00',
        img: {
            front: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420220/outforce-front.jpg',
            top: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420221/outforce-top.jpg',
            side: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420220/outforce-side.jpg'
        },
        intro: 'OUTERFORCE INNER ALC combines ALC fiber technology with an inner-fiber construction for modern offensive play. It provides a balanced combination of rebound, stability, and feel, making it suitable for topspin-oriented players. The blade offers reliable performance during fast rallies while retaining control for precise placement and spin variation.'
    },
    {
        id: 9,
        name: 'VISCARIA SUPER ALC',
        price: '$239,00',
        img: {
            front: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420221/viscaria-super-alc-front.jpg',
            top: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420221/viscaria-super-alc-top.jpg',
            side: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420221/viscaria-super-alc-side.jpg'
        },
        intro: 'VISCARIA SUPER ALC builds on the classic VISCARIA design with Butterfly’s advanced SUPER ALC fiber. It delivers a powerful and stable response while maintaining the balanced characteristics of the VISCARIA family. It is well suited to players seeking high speed and spin potential for aggressive topspin and counter-attacking play.'
    },
    {
        id: 10,
        name: '张本智和 INNERFORCE SUPER ALC',
        price: '$219,00',
        img: {
            front: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420221/zbzh-front.jpg',
            top: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420221/zbzh-top.jpg',
            side: 'https://res.cloudinary.com/khxje4tw/image/upload/v1788420221/zbzh-side.jpg'
        },
        intro: 'Harimoto Tomokazu Innerforce SUPER ALC combines an inner-fiber construction with Butterfly’s advanced SUPER ALC material. It emphasizes a balance of power, spin, stability, and control. The blade is designed for modern topspin players who need strong performance while maintaining precision during close-to-table attacking play.'
    }
];






export default productData;


