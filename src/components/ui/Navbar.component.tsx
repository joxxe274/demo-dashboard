import React from 'react';

// components
import { NavLink } from 'react-router-dom'
import { Container } from 'components/containers';

// utils
import { conditionalClass, cssClassName, DASHBOARD_ROUTES } from 'utils';

// styles
import styles from 'styles/components/Navbar.module.scss';
import logo from 'assets/img/logo.png';
import { AnimateContainer } from 'react-animate-container';

export const NavbarComponent: React.FC = () => {
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <AnimateContainer.fadeInDown duration={.5} setOpacityNone={true} className={styles.navbar}>
        <Container className={[styles['navbar__container']]}>
          <div className={styles['navbar-logo']}>
            <img src={logo} alt="" />
          </div>

          <div className={cssClassName([
            styles['navbar-menu'],
            styles['navbar-menu--desktop'],
          ])}>
            
            {DASHBOARD_ROUTES.map(({ path, name }, index) => (
              <NavLink
                key={index}
                end
                className={({ isActive }) => conditionalClass(isActive, styles.active)}
                to={path}>{name}</NavLink>
            ))}

          </div>

          <div className={styles['navbar-avatar']}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          </div>
        </Container>
    </AnimateContainer.fadeInDown>
  );
};