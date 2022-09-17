import React from "react";
import PhotoAlbum from "react-photo-album";
import photos from "./photos";
import { Container } from "app/components";

export default function Arts() {
  return (
    <Container>
      <PhotoAlbum layout="masonry" photos={photos} />
    </Container>
  );
}
