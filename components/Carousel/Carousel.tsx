import { FC, ReactNode } from 'react'

import styles from './Carousel.module.css'

interface Props {
    children: ReactNode
}

const Carousel: FC<Props> = ({ children }: any) => {
    return (
        <div className={styles.main}>
            <div className={styles.slidesWrapper}>{children}</div>
            <div className={styles.navigationWrapper}>
                <button>{"<"}</button>
                <button>{">"}</button>
            </div>
        </div>
    );    
}

export default Carousel
