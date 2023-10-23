import { useContext } from "react";
import { ProfileContext } from "../App";
import { Col, Image, Nav, Row, Tab, TabContainer } from "react-bootstrap";

export default function ImageGrid() {
  const imagesPost = useContext(ProfileContext).posts.map((post) => post.image);
  const imagesReel = useContext(ProfileContext).reels.map((reel) => reel.image);
  const imagesTagged = useContext(ProfileContext).taggeds.map(
    (tagged) => tagged.image
  );

  const renderImagesPost = () => {
    return imagesPost.map((imageUrl, index) => (
      <Col md={4} key={index} className="mb-4">
        <Image src={imageUrl} fluid />
      </Col>
    ));
  };

  const renderImagesReel = () => {
    return imagesReel.map((imageUrl, index) => (
      <Col md={4} key={index} className="mb-4">
        <Image src={imageUrl} fluid />
      </Col>
    ));
  };

  const renderImagesTagged = () => {
    return imagesTagged.map((imageUrl, index) => (
      <Col md={4} key={index} className="mb-4">
        <Image src={imageUrl} fluid />
      </Col>
    ));
  };

  return (
    //   <Tabs
    //     defaultActiveKey="posts"
    //     id="tabs"
    //     className="mb-4 nav-tabs-underline"
    //     variant="underline"
    //     style={{
    //       justifyContent: "center",
    //       borderBottom: "1px solid lightgray",
    //     }}
    //   >
    //     <Tab eventKey="posts" title="POSTS">
    //       <Row>{renderImagesPost()}</Row>
    //     </Tab>

    //     <Tab eventKey="reels" title="REELS">
    //       <Row>{renderImagesReel()}</Row>
    //     </Tab>

    //     <Tab eventKey="tagged" title="TAGGED">
    //       <Row>{renderImagesTagged()}</Row>
    //     </Tab>
    //   </Tabs>
    // );

    <TabContainer id="tabs" defaultActiveKey="posts">
      <Nav className="mb-4 tabContainer">
        <Nav.Item>
          <Nav.Link eventKey="posts" className="navLink fw-medium">
            <i className="bi bi-grid-3x3"></i>
            <span className="ms-2">POSTS</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="reels" className="navLink fw-medium">
            <i className="bi bi-collection-play"></i>
            <span className="ms-2">REELS</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tagged" className="navLink fw-medium">
            <i className="bi bi-person-square"></i>
            <span className="ms-2">TAGGED</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="posts">
          <Row>{renderImagesPost()}</Row>
        </Tab.Pane>
        <Tab.Pane eventKey="reels">
          <Row>{renderImagesReel()}</Row>
        </Tab.Pane>
        <Tab.Pane eventKey="tagged">
          <Row>{renderImagesTagged()}</Row>
        </Tab.Pane>
      </Tab.Content>
    </TabContainer>
  );
}
