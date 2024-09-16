import React, { useRef, useState } from 'react'
import styles from '../styles/Card.module.css'
import { toPng } from 'html-to-image'

const TweetCard = () => {
  const [dataName, setDataName] = useState('Tu name');

  const ref = useRef(null);
  const downloadImage = async e => {
    const dataUrl = await toPng(ref.current);
    const link = document.createElement('a')
    link.download = "waifutu.png"
    link.href = dataUrl
    link.click();
  }

  return (
    <>
        <div className={styles.hero} >
          <h1>CREA TÚ CARD</h1>
          <section className={styles.content_img} ref={ref} >
            <h1 className={styles.content_h1}>{dataName}</h1>
          </section>
        </div>
        <div className={styles.formInputs} >
          <div className={styles.container} >
            <form>
              <span className={styles.inputDataName}>
                <h2>Tu nombrecito:</h2>
                  <input type="text" value={dataName} onChange={e => setDataName(e.target.value)} id="" placeholder='Tu nombre precioso' />
              </span>
              <button className={styles.btnDownload} type='button' onClick={downloadImage} >
                Descargar CARD
              </button>
            </form>
          </div>
        </div>
        <div className={styles.copy} ><a href="https://portfoliorodgz-designer.vercel.app/">© - richarodz</a></div>
    </>
  )
}

export default TweetCard