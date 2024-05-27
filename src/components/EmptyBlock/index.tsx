import styles from './EmptyBlock.module.scss';

const EmptyBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h2>К сожалению, ничего не найдено</h2>
    </div>
  );
};

export default EmptyBlock;
