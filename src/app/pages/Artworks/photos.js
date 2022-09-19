import AComosus from "app/assets/arts/A-comosus.png";
import Cat from "app/assets/arts/Cat.png";
import IceDream from "app/assets/arts/Icedream.jpg";
import Landscape from "app/assets/arts/Landscape.png";
import Earth from "app/assets/arts/Earth.png";
import Panda from "app/assets/arts/Panda.png";
import SheepBlue from "app/assets/arts/sheep_blue.jpg";
import SheepGreen from "app/assets/arts/sheep_green.jpg";
import SheepYellow from "app/assets/arts/sheep_yellow.jpg";
import Sky from "app/assets/arts/Sky.png";
import CuanDixia from "app/assets/arts/CuanDiXia.png";
import GongYe from "app/assets/arts/GongYe.png";
import Sweet from "app/assets/arts/Sweet.png";
import NongJiaLe from "app/assets/arts/NongJiaLe.png";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const resources = [
  { src: AComosus, width: 1080, height: 1524 },
  { src: Sky, width: 1080, height: 1920 },
  { src: IceDream, width: 1080, height: 1080 },
  { src: Landscape, width: 1080, height: 1080 },
  { src: Cat, width: 1080, height: 1524 },
  { src: SheepGreen, width: 1080, height: 1080 },
  { src: Earth, width: 1080, height: 1080 },
  { src: SheepBlue, width: 1080, height: 1080 },
  { src: Panda, width: 1080, height: 1524 },
  { src: SheepYellow, width: 1080, height: 1080 },
  { src: CuanDixia, width: 1080, height: 765 },
  { src: GongYe, width: 1080, height: 1524 },
  { src: Sweet, width: 1080, height: 765 },
  { src: NongJiaLe, width: 1080, height: 765 },
];

const photos = resources.map((photo) => ({
  src: photo.src,
  width: photo.width,
  height: photo.height,
  images: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: photo.src,
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;
