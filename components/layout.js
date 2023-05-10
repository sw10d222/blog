import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "components/my-navbar";
import { useTheme } from "hooks/use-theme";
export default ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={theme.type}>
      <Container>
        <MyNavbar />
        <div className="blog-detail-page">
          <div className={`page-wrapper`}>{children}</div>
        </div>
        <footer className="page-footer">
          <div>
            <a href="https://www.facebook.com/MisterJansan" target="_blank">Facebook </a>
            {" | "}
            <a href="https://www.youtube.com/SW10D222" target="_blank" >Youtube</a>
            {" | "}
            <a href="https://www.instagram.com/misterjantsan/" target="_blank" >Instagram</a>
          </div>
        </footer>
      </Container>
      <style jsx global>
        {`
          html,
          body {
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
          }
        `}
      </style>
    </div>
  );
};
