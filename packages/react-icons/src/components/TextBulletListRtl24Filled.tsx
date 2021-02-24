import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBulletListRtl24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.5 15.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4 .5H3a1 1 0 00-.12 2H16.5a1 1 0 00.12-2h-.12zm4-5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4 .5H3a1 1 0 00-.12 2H16.5a1 1 0 00.12-2h-.12zm4-5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4 .5H3a1 1 0 00-.12 1.99H16.5A1 1 0 0016.62 6h-.12z" fill={primaryFill} /></svg>;
};

export default TextBulletListRtl24Filled;