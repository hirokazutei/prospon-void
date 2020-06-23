/* @flow */
import React, { CSSProperties, useState } from "react";
import symbol from "../../symbol";
import { Button } from "../atom/Button";
import Space from "../atom/Space";
import { Title } from "../atom/Text";
import Divider from "../atom/Divider";
import { useStore } from "../../store";
import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect"
import {Menu, MenuItem} from "@material-ui/core";

type StyleKey = "header" | "titleContainer" | "buttonContainer";

const styles: Record<StyleKey, CSSProperties> = {
  header: {
    alignContent: "flex-end",
    justifyContent: "space-between",
    backgroundColor: symbol.COLOR.background,
    boxShadow: `0px 0px 20px ${symbol.COLOR.backgroundOffset}`,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    maxHeight: 35,
  },
  titleContainer: { flex: 1 },
  buttonContainer: {
    flexDirection: "row",
    display: "flex",
  },
};

const Header = () => {
  const [anchorEl, setAnchorE1]= useState<true|false>(false);

  console.log(typeof anchorEl)
  const handleClick=()=>{
    setAnchorE1(true)
  }
  const handleClose=()=>{
    setAnchorE1(false)
  }
  const { actions } = useStore();
  const showInfoModal = () => {
    actions.showInfoModal();
    setAnchorE1(false)
  };
  const showDonateModal = () => {
    actions.showDonateModal();
    setAnchorE1(false)
  };
  const showContactModal = () => {
    actions.showContactModal();
    setAnchorE1(false)
  };

  return (
<div>
<MobileView>
  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
    Menu
  </Button>
  <Menu
      id="simple-menu"
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
  >
    <MenuItem onClick={showInfoModal}>ABOUT</MenuItem>
    <MenuItem onClick={showContactModal}>CONTACT</MenuItem>
    <MenuItem onClick={showDonateModal}>DONATE</MenuItem>
  </Menu>
</MobileView>

<BrowserView>
    <Space.Inset style={styles.header} vertical="medium" horizontal="large">
      <div style={styles.titleContainer}>
        <Title><div className='h3'>VISAGE VOID</div></Title>
      </div>
      <div style={styles.buttonContainer}>
        <Button onClick={showInfoModal}>ABOUT</Button>
        <Space.Queue size="small" />
        <Divider.Vertical color="buttonText" />
        <Space.Queue size="small" />
        <Button onClick={showContactModal}>CONTACT</Button>
        <Space.Queue size="small" />
        <Divider.Vertical color="buttonText" />
        <Space.Queue size="small" />
        <Button onClick={showDonateModal}>DONATE</Button>
      </div>
    </Space.Inset>
</BrowserView></div>
  );
};

export default Header;
