import EmptyBlock from '../components/EmptyBlock';

const NotFound: React.FC = () => {
  return (
    <>
      <EmptyBlock />
      <h3 className="empty__block-link">Данная страница отсутствует.</h3>
    </>
  );
};

export default NotFound;
