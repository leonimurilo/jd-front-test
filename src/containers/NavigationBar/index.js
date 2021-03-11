import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from "baseui/header-navigation";
import { Link } from "react-router-dom";
import { StyledLink } from "baseui/link";

export default function NavigationBar() {
  return (
    <HeaderNavigation>
      <NavigationList $align={ALIGN.left}>
        <NavigationItem>
          <StyledLink $as={Link} to="/">
            Mi Social
          </StyledLink>
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  );
}
