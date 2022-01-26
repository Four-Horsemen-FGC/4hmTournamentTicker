import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";

import { db } from "../../index";

export const ThemeMenu = ({
  firestoreKey,
  imgArray,
  imgNames,
  purpose,
  uid,
  ...props
}) => {
  const updateThemeItem = async (url, destination) => {
    await db
      .collection("users")
      .doc(uid)
      .update({ [destination]: url });
  };

  const createMenuItems = (imgNames, imgArray) => {
    let result = [];
    for (let i = 0; i < imgNames.length; i++) {
      result.push(
        <MenuItemOption
          key={`${imgArray[i]}${i}`}
          value={imgNames[i]}
          onClick={() => updateThemeItem(imgArray[i], firestoreKey)}
        >
          {imgNames[i]}
        </MenuItemOption>
      );
    }
    return result;
  };

  return (
    <>
      <Menu>
        <MenuButton as={Button}>{purpose}</MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup type="radio">
            {createMenuItems(imgNames, imgArray)}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </>
  );
};
