import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Navigation() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div id="list-example" className="list-group custom-list-group">
      <ListGroup as="ul" className="custom-list-group-no-bg">
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active-link"
          onSetActive={() => setActiveLink('about')}
        >
          <ListGroup.Item as="a">
            <div className={`link-item${activeLink === 'about' ? ' active' : ''}`}>
              <div className="divider"></div>
              ABOUT
            </div>
          </ListGroup.Item>
        </Link>
        <Link
          to="experiences"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active-link"
          onSetActive={() => setActiveLink('experiences')}
        >
          <ListGroup.Item as="a">
            <div className={`link-item${activeLink === 'experiences' ? ' active' : ''}`}>
              <div className="divider"></div>
              EXPERIENCES
            </div>
          </ListGroup.Item>
        </Link>
        <Link
          to="project"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active-link"
          onSetActive={() => setActiveLink('project')}
        >
          <ListGroup.Item as="a">
            <div className={`link-item${activeLink === 'project' ? ' active' : ''}`}>
              <div className="divider"></div>
              PROJECT
            </div>
          </ListGroup.Item>
        </Link>
      </ListGroup>
    </div>
  );
}

export default Navigation;
