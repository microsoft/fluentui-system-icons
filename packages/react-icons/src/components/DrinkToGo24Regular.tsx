import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DrinkToGo24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.72 2.22a.75.75 0 011.06 1.06L15.56 4.5h2.19c.32 0 .6.2.7.5l1.26 3.5c.17.49-.2 1-.71 1h-1.04l-1.6 10.05A2.89 2.89 0 0113.4 22h-2.8c-1.5 0-2.76-.99-2.97-2.44L6.04 9.5H5a.75.75 0 01-.7-1L5.53 5c.11-.3.4-.5.71-.5h7.19l2.28-2.28zm.72 7.28H7.56l1.56 9.84c.1.7.69 1.16 1.48 1.16h2.8c.8 0 1.38-.47 1.48-1.17l1.56-9.83zm.78-3.5H6.78l-.72 2h11.88l-.72-2z" fill={primaryFill} /></svg>;
};

export default DrinkToGo24Regular;