import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MapDrive16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 5a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M2.5 2C1.67 2 1 2.67 1 3.5v3c0 .27.22.5.5.5h6.01v1H6.5a.5.5 0 00-.5.5V10H5a.5.5 0 00-.5.5v1h-3a.5.5 0 000 1h3v1c0 .28.22.5.5.5h6a.5.5 0 00.5-.5v-1h3a.5.5 0 000-1h-3v-1a.5.5 0 00-.5-.5h-1V8.5a.5.5 0 00-.5-.5h-.99V7h5.99a.5.5 0 00.5-.5v-3c0-.83-.67-1.5-1.5-1.5h-11zM2 3.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5V6H2V3.5zM7 9h2v1.5c0 .28.22.5.5.5h1v2h-5v-2h1a.5.5 0 00.5-.5V9z" fill={primaryFill} /></svg>;
};

export default MapDrive16Regular;