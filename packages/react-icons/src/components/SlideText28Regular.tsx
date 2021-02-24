import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideText28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.73 9c-.4 0-.73.33-.73.73v.04c0 .4.33.73.73.73h5.54c.4 0 .73-.33.73-.73v-.04c0-.4-.33-.73-.73-.73H7.73z" fill={primaryFill} /><path d="M7.73 13c-.4 0-.73.33-.73.73v.04c0 .4.33.73.73.73h10.54c.4 0 .73-.33.73-.73v-.04c0-.4-.33-.73-.73-.73H7.73z" fill={primaryFill} /><path d="M7 17.73c0-.4.33-.73.73-.73h7.54c.4 0 .73.33.73.73v.04c0 .4-.33.73-.73.73H7.73a.73.73 0 01-.73-.73v-.04z" fill={primaryFill} /><path d="M5.75 4A3.75 3.75 0 002 7.75v12.5A3.75 3.75 0 005.75 24h16.5A3.75 3.75 0 0026 20.25V7.75A3.75 3.75 0 0022.25 4H5.75zM3.5 7.75c0-1.24 1.01-2.25 2.25-2.25h16.5c1.24 0 2.25 1 2.25 2.25v12.5c0 1.24-1 2.25-2.25 2.25H5.75c-1.24 0-2.25-1-2.25-2.25V7.75z" fill={primaryFill} /></svg>;
};

export default SlideText28Regular;