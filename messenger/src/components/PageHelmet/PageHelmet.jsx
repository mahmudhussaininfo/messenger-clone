import { Helmet } from "react-helmet";

const PageHelmet = ({ title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          rel="shortcut icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1200px-Facebook_Messenger_logo_2020.svg.png"
          type="image/x-icon"
        />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </>
  );
};

export default PageHelmet;
