import styles from './Error.module.css'

const Error = ({ alert }) => {
    return (
        <div className={styles.error} style={{ display: alert }}>
            <h5>{alert}</h5>
        </div>
    )
}

export default Error
