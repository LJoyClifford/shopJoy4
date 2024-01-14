import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To shopJoy',
  description: 'We sell the best products for the best prices',
  keywords: 'electronics, buy electronics, affordable electroincs',
};

export default Meta;
