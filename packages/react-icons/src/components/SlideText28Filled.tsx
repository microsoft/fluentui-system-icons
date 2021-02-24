import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideText28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.75A3.75 3.75 0 015.75 4h16.5A3.75 3.75 0 0126 7.75v12.5A3.75 3.75 0 0122.25 24H5.75A3.75 3.75 0 012 20.25V7.75zM7.73 9c-.4 0-.73.33-.73.73v.04c0 .4.33.73.73.73h5.54c.4 0 .73-.33.73-.73v-.04c0-.4-.33-.73-.73-.73H7.73zM7 13.73v.04c0 .4.33.73.73.73h10.54c.4 0 .73-.33.73-.73v-.04c0-.4-.33-.73-.73-.73H7.73c-.4 0-.73.33-.73.73zM7.73 17c-.4 0-.73.33-.73.73v.04c0 .4.33.73.73.73h7.54c.4 0 .73-.33.73-.73v-.04c0-.4-.33-.73-.73-.73H7.73z" fill={primaryFill} /></svg>;
};

export default SlideText28Filled;