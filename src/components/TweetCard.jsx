import React, { useRef, useState } from 'react'
import styles from '../styles/Card.module.css'
import UserImage from './icons/UserImage'
import Upload from './icons/Upload'

import { blobToData } from '../helpers/blobToData'
import { toPng } from 'html-to-image'

const TweetCard = () => {

  const [avatar, setAvatar] = useState();
  const [dataName, setDataName] = useState('Tu name');

  const uploadAvatar = async e => {
    const objAvatar = e.target.files[0];
    setAvatar(await blobToData(objAvatar))
    //console.log(objAvatar)
  }

  const ref = useRef(null);
  const downloadImage = async e => {
    const dataUrl = await toPng(ref.current);
    const link = document.createElement('a')
    link.download = "cardcitof.png"
    link.href = dataUrl
    link.click();
  }

  return (
    <>
        <div className={styles.hero} >
          <h1>CREA TÚ ENFP CARD</h1>
          <section className={styles.content_img} ref={ref} >
            <h1 className={styles.content_h1}>{dataName}</h1>
            <picture className={styles.userImage} >
              { avatar ? <img src={avatar} alt="sube tu foto para el simp card" /> : <UserImage/> }
            </picture>
          </section>
        </div>
        <div className={styles.formInputs} >
          <div className={styles.container} >
            <form>
              <span className={styles.inputAddPhoto}>
                <h2>Tu mejor pose:</h2>
                <label htmlFor="file" className={styles.div_file} >
                  <label htmlFor="file">Añadir Foto</label>
                  <input id='file' type="file" onChange={uploadAvatar} accept='.png, .jpg, .svg, .jepg'/>
                  <Upload />
                </label>
              </span>
              <span className={styles.inputDataName}>
                <h2>Tu nombrecitop:</h2>
                  <input type="text" value={dataName} onChange={e => setDataName(e.target.value)} id="" placeholder='Tu nombre precioso' />
              </span>
              <button className={styles.btnDownload} type='button' onClick={downloadImage} >
                Descargar ENFP CARD
              </button>
            </form>
          </div>
        </div>
        <div className={styles.copy} ><a href="https://portfoliorodgz-designer.vercel.app/">© - richarodz</a></div>
    </>
  )
}

export default TweetCard