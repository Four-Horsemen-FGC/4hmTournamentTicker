import { HStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { storage } from "../../index";
import { ThemeMenu } from "../ThemeMenu/ThemeMenu";

export const SetTheme = ({
  uid,
  destination,
  purpose,
  firestoreKey,
  ...props
}) => {
  const [images, setImages] = useState([]);
  const [imageNames, setImageNames] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const images = await storage
        .ref()
        .child(`${uid}/${destination}`)
        .listAll();
      images.items.forEach(async (item) => {
        const imageUrl = await item.getDownloadURL();
        console.log(item.name);
        setImageNames((currentState) => [item.name, ...currentState]);
        setImages((currentState) => [imageUrl, ...currentState]);
      });
    };
    getImages();
  }, []);

  return (
    <>
      <HStack height={100} spacing={3}>
        <ThemeMenu
          purpose={purpose}
          uid={uid}
          imgArray={images}
          imgNames={imageNames}
          firestoreKey={firestoreKey}
        />
      </HStack>
    </>
  );
};
