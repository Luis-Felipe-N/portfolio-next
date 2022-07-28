import styled from './style.module.scss'

export function Loading() {
    return (
        <div className={styled.loading}>
            <ul>
                <li className={styled.loading__dots_0}></li>
                <li className={styled.loading__dots_1}></li>
                <li className={styled.loading__dots_2}></li>
                <li className={styled.loading__dots_3}></li>
                <li className={styled.loading__dots_4}></li>
                <li className={styled.loading__dots_5}></li>
            </ul>
            <h3>Calma ae, mané!</h3>
        </div>
    )
}