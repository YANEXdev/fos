export default function MainAlert({show, type, message, title}: any) {
    const getStyles = () => {
        switch (type) {
            case 'error': return require('./error.module.css');
            case 'success': return require('./success.module.css');
            default: return require('./error.module.css');
        }
    }

    const styles = getStyles()

    return show ? (
        <>
            <div className={styles.alertBox}>
                <p>
                    {message}
                </p>
            </div>
        </>
    ) : null

}