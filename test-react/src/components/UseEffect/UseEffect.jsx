import { useEffect, useState } from "react";



// export const WindowTracker = ()=>{
//   const [data, setData] = useState("")

//   useEffect(()=>{
//   console.log("salam");

//   return ()=>{
//     console.log("silindi");
//   }
// },[data]);

// return(
//   <h2>Ekran olcusu:</h2>
// )
// };





































// export const WindowTracker = () => {
//   const [size, setSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };
//     window.addEventListener('resize',handleResize);

//     return ()=>{
//       window.removeEventListener('resize',handleResize)
//     }
//   }, []);

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>Ekran olcusu:</h2>
//       <h1 >Width: {size.width}</h1>
//       <h1 >Height: {size.height}</h1>
//     </div>
//   );
// };

// export const LiveClock = () => {
//   const [time,setTime] = useState(new Date());

//   useEffect (()=>{
//     const timer = setInterval(()=>{
//       setTime(new Date());
//     },1000);
//     return()=>clearInterval(timer);
//   },[]);

//   return(
//     <div className={styles.container}>
//       <p className={styles.title}>Cari Saat</p>

//       <div className={styles.clockWrapper}>
//         <h1 className={styles.timeText}>
//           {time.toLocaleTimeString()}
//         </h1>
//       </div>
//     </div>
//   )
// }

// export const TextRotation = () => {
//   const [index, setIndex] = useState(0);
//   const texts = ["Salam","Necesen?","Sag ol"];

//   useEffect(()=>{
//     const interval = setInterval(()=>{
//       setIndex((prew)=> (prew === texts.length - 1 ? 0 : prew + 1));
//     },2000)
//     return ()=> clearInterval(interval);
//   },[])
//   return(
//     <div>
//       <h1>{texts[index]}</h1>
//     </div>
//   )
// }

// export const TextRotation = () => {
//     const [text, setText] = useState(0);
//     const texts = ["qelem", "boya", "defter"]
//     useEffect (()=>{
//         const interval = setInterval(()=>{
//             setText((prev)=>(prev+1)% texts.length)
//         },2000);
//          return () => {
//       clearInterval(interval);
//     };
//     },[])
//     return(
//         <div>
//         <h1>Text Rotation</h1>
//         <p>{texts[text]}</p>
//         </div>
//     )
// }
