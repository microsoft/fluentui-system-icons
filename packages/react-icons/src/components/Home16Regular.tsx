import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Home16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.31 1.26a1 1 0 011.38 0l4.84 4.58c.3.28.47.68.47 1.1v5.56c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 019 12.5V10a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v2.5c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 012 12.5V6.93c0-.41.17-.8.47-1.09L7.3 1.26zM8 2L3.16 6.57a.5.5 0 00-.16.36v5.57c0 .28.22.5.5.5h2a.5.5 0 00.5-.5V10c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v2.5c0 .28.22.5.5.5h2a.5.5 0 00.5-.5V6.93a.5.5 0 00-.16-.36L8 1.99z" fill={primaryFill} /></svg>;
};

export default Home16Regular;