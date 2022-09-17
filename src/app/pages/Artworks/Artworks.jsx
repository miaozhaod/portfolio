import React from "react";
import PhotoAlbum from "react-photo-album";
import photos from "./photos";
import { Container, Wrapper } from "app/components";

export default function Arts() {
  return (
    <Container>
      <section className="w-full max-w-screen-xl  pt-12 text-gray-600">
        In my spare time, you can find me doing these art works ...
      </section>
      <Wrapper>
        <PhotoAlbum layout="masonry" photos={photos} />
      </Wrapper>
    </Container>
  );
}
