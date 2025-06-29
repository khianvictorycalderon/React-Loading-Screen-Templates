import styles from './Plain_Loading_CSS.module.css'

export interface PlainLoadingProps {
    IsDoneLoading: boolean;
    Theme?:
        | "light"
        | "dark"
        | "amber"
        | "emerald"
        | "red"
        | "blue"
        | "green"
        | "yellow"
        | "indigo"
        | "purple"
        | "pink"
        | "gray";
}

export default function PlainLoading({
    IsDoneLoading,
    Theme = "light"
}: PlainLoadingProps) {
    return (
        <div className={`
            ${styles.box}
            ${Theme && styles[Theme]}
            ${IsDoneLoading ? styles.hidden : ''}
        `}>
            <div className={Theme == "light" ? styles.spinner_black : styles.spinner}></div>
        </div>
    )
}