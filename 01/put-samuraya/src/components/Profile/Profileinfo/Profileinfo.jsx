import React from 'react';

import s from './Profileinfo.module.css';

const Profileinfo = () => {

    return (
        <div className={s.content}>
              <img src='https://ekb.rakovgallery.ru/media/Catalog/Product/2020-11-19/f70e02b658b48cc3c564cb18e94a0c5b.jpg'/>

            <div className={s.descriptionBlock}>
                ava + description

            </div>
        </div>
    )
}

export default Profileinfo;