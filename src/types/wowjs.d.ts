declare module 'wowjs' {
  const WOW: any;
  export default WOW;
}

declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}