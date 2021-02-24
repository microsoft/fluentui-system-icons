import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Prohibited24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm6.52 4.54L6.54 18.52A8.5 8.5 0 0018.51 6.55zM12 3.5a8.5 8.5 0 00-6.52 13.96L17.46 5.48A8.47 8.47 0 0012 3.5z" fill={primaryFill} /></svg>;
};

export default Prohibited24Regular;