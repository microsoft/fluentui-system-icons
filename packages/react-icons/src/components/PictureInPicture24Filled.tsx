import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PictureInPicture24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 12.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M2 7.75A3.75 3.75 0 015.75 4h12.5A3.75 3.75 0 0122 7.75v8.5A3.75 3.75 0 0118.25 20H5.75A3.75 3.75 0 012 16.25v-8.5zM9.5 9C8.67 9 8 9.67 8 10.5v5c0 .27.07.52.2.73l3.4-3.6c.48-.53 1.31-.53 1.8-.01L17.58 17A1.5 1.5 0 0019 15.5v-5c0-.83-.67-1.5-1.5-1.5h-8zm6 8l-3-3.16L9.53 17h5.97z" fill={primaryFill} /></svg>;
};

export default PictureInPicture24Filled;