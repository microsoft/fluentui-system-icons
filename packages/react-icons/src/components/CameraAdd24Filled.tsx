import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CameraAdd24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2h-.09a.5.5 0 00-.4.4l-.01.1V17h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V18h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.6a.5.5 0 00-.41-.4h-.09zM13.92 2.5c.8 0 1.54.43 1.94 1.11L16.68 5h2.07C20.55 5 22 6.45 22 8.25v4.56a6.48 6.48 0 00-5.72-1.7 4.5 4.5 0 10-5.25 5.78 6.51 6.51 0 001 4.11H5.24A3.25 3.25 0 012 17.75v-9.5C2 6.45 3.46 5 5.25 5h2.08l.88-1.42a2.25 2.25 0 011.91-1.08h3.8zM12 9.5a3 3 0 012.85 2.06 6.52 6.52 0 00-3.51 3.87A3 3 0 0112 9.5z" fill={primaryFill} /></svg>;
};

export default CameraAdd24Filled;