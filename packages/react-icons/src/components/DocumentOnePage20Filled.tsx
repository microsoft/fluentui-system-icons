import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentOnePage20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-9zm7.09 5H7.5a.5.5 0 01-.09-1h5.09a.5.5 0 01.09 1zm0 3.5H7.5a.5.5 0 01-.09-1h5.09a.5.5 0 01.09 1zm0 3.5H7.5a.5.5 0 01-.09-1h5.09a.5.5 0 01.09 1z" fill={primaryFill} /></svg>;
};

export default DocumentOnePage20Filled;