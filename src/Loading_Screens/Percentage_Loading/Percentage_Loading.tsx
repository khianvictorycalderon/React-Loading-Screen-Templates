import { useEffect, useState } from "react"
import styles from './Percentage_Loading_CSS.module.css'

interface PercentageLoadingProps {
    IsDoneLoading: boolean;
    Theme?: "light" | "dark";
}

export default function PercentageLoading({
    IsDoneLoading,
    Theme = "light"
}: PercentageLoadingProps) {
    const [percentage, setPercentage] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        let interval: number;
        let timeout: number;

        if (!IsDoneLoading) {
            setShow(true);
            setPercentage(0);
            interval = window.setInterval(() => {
                setPercentage((prev) => {
                    if (prev < 98) {
                        return Math.min(prev + Math.floor(Math.random() * 8) + 3, 98);
                    }
                    return prev;
                });
            }, 100);
        } else {
            interval = window.setInterval(() => {
                setPercentage((prev) => {
                    if (prev < 100) {
                        return Math.min(prev + 5, 100); // fast increase
                    }
                    return prev;
                });
            }, 50);

            timeout = window.setTimeout(() => {
                setShow(false);
            }, Math.floor(Math.random() * 2000) + 1000);
        }

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [IsDoneLoading]);

    return (
        <div className={`
            ${styles.box}
            ${Theme === "dark" ? styles.dark : styles.light}
            ${!show ? styles.hidden : ''}
        `}>
            <div className={styles.barContainer}>
                <div className={styles.bar} style={{ width: `${percentage}%` }}></div>
            </div>
            <div className={styles.percentageText}>{percentage}%</div>
        </div>
    )
}
