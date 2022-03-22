export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1250 },
    items: 5.5,
  },
  smallDestop: {
    breakpoint: { max: 1250, min: 1024 },
    items: 4.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 630 },
    items: 2.5,
  },
  smallTable: {
    breakpoint: { max: 630, min: 464 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 300 },
    items: 1,
  },
};

export const breakPoint = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 360, itemsToShow: 2, itemsToScroll: 1 },
  { width: 640, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1024, itemsToShow: 5, itemsToScroll: 2 },
  { width: 1280, itemsToShow: 6, itemsToScroll: 2 },
];
