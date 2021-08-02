import styles from './styles.module.scss';

interface SubscribeButtonIndexProps {
  priceId: string;
}

export function SubscribeButtonIndex({ priceId }: SubscribeButtonIndexProps) {
  return (
    <button
      type="button"
      className={styles.subscribeButton}>
        Subscribe now
      </button>
  )
}