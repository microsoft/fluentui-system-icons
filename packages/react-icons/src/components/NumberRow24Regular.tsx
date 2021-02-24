import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NumberRow24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 4a2.75 2.75 0 012.75 2.75v10.5A2.75 2.75 0 018.75 20h-4A2.75 2.75 0 012 17.25V6.75A2.75 2.75 0 014.75 4h4zm0 1.5h-4c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25zM19.25 4A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20h-4a2.75 2.75 0 01-2.75-2.75V6.75A2.75 2.75 0 0115.25 4h4zm0 1.5h-4c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25zM6 9v6a.75.75 0 001.5 0V9A.75.75 0 006 9zm11.5.75v1.5h-1.25a.75.75 0 00-.75.75v3c0 .41.34.75.75.75h2a.75.75 0 000-1.5H17v-1.5h1.25c.41 0 .75-.34.75-.75V9a.75.75 0 00-.75-.75h-2a.75.75 0 000 1.5h1.25z" fill={primaryFill} /></svg>;
};

export default NumberRow24Regular;