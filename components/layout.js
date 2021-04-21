import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "components/my-navbar";

export default ({ children }) => {
  return (
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
  );
};
