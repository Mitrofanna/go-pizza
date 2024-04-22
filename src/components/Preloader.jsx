import ContentLoader from 'react-content-loader';

const Preloader = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="13" y="270" rx="8" ry="8" width="260" height="70" />
    <rect x="13" y="230" rx="8" ry="8" width="260" height="25" />
    <rect x="13" y="365" rx="8" ry="8" width="80" height="37" />
    <rect x="125" y="365" rx="10" ry="10" width="147" height="37" />
    <circle cx="143" cy="105" r="105" />
  </ContentLoader>
);

export default Preloader;
