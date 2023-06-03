import React from 'react';
import styles from './styles.module.scss';


interface NavigationGraphicsI{
    currentPage:number,
    maxPage:number,
    action:(page:number) => void
}

const PaginationGraphics = (props:NavigationGraphicsI) => {

    const {currentPage,maxPage,action} = props;

    return(
        <div className={styles.main}>
            <strong onClick={() => {currentPage > 1 && action(currentPage -1)}} className={`${currentPage <= 1 && styles.disabled }`}>{'<'}</strong>
            <p>{currentPage}</p>
            <strong onClick={() => {currentPage < maxPage && action(currentPage +1)}} className={`${currentPage === maxPage && styles.disabled }`}>{'>'}</strong>

        </div>
    )
}

export default PaginationGraphics