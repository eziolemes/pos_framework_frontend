import styles from './Button.module.css';
import classNames from 'classnames';

export default function Button({ children, ...props }) {

    const classes = classNames({
        [styles.button]: true,
        [styles.danger]: props.danger,
        [styles.warning]: props.warning,
        [styles.success]: props.success
    })

    return (
        <button className={classes}>
            {children}
        </button>
    )
}