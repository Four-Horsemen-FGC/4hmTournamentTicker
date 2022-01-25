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
  // const [loadingState, setLoadingState] = useState(false);
  // console.log(loadingState);

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
        // setLoadingState(true);
      });
    };
    getImages();
  }, []);

  // let imagesToDisplay = images.map((item) => {
  //   return <Image borderRadius="md" src={item} />;
  // });

  // console.log(loadingState);
  return (
    <>
      <HStack height={100} spacing={3}>
        {/* {loadingState ? imagesToDisplay : <Spinner />} */}
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
