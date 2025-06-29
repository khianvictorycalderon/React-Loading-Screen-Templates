import styles from './Plain_Loading_CSS.module.css'

interface PlainLoadingProps {
    IsDoneLoading: boolean;
    Theme?: "light" | "dark";
}

export default function PlainLoading({
    IsDoneLoading,
    Theme = "light"
}: PlainLoadingProps) {
    return (
        <div className={`
            ${styles.box} 
            ${Theme === "dark" ? styles.dark : styles.light} 
            ${IsDoneLoading ? styles.hidden : ''}
        `}>
            <div className={styles.spinner}></div>
        </div>
    )
}
