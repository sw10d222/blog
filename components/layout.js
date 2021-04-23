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
            <a href="#">Facebook </a>
            {" | "}
            <a href="#">Youtube</a>
            {" | "}
            <a href="#">Instagram</a>
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
