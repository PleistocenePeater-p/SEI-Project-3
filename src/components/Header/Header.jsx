import { Header, Segment, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function PageHeader({ user, handleLogout }) {
  return (
    <Segment clearing>
      <Header as="h4" floated="left">
        <Link to="/">
          <Icon name="home"></Icon>
        </Link>
        </Header>

      <Header as="h4" floated="right">
        <Link to="" onClick={handleLogout} floated="right">
          Logout
        </Link>
        </Header>
    </Segment>
  );
}
