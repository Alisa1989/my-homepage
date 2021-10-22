import React from "react";
import {
  Button,
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardTitle,
  CardText,
  Col,
} from "reactstrap";

function NewsItem(props) {
  console.log(props);
  const { news } = props;
  return (
    <Col xs="6" md="4" xl="3">
      <Card>
        <CardImg top width="100%" src={news.urlToImage} alt="article" />
        <CardBody>
          <CardTitle tag="h5">{news.source.name}</CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
          <CardText>{news.title}</CardText>
          <a href={news.url} target="_blank" > 
            <Button color="info">
              <small className="text-muted">To Article</small>
            </Button>
          </a>
        </CardBody>
      </Card>
    </Col>
    
  );
}

export default NewsItem;
