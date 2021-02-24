import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClosedCaption16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.18 5.7a1.8 1.8 0 012.07.35.5.5 0 01-.7.7.8.8 0 00-.93-.15C9.34 6.74 9 7.14 9 8c0 .86.34 1.26.62 1.4.3.15.68.1.93-.15a.5.5 0 01.7.7 1.8 1.8 0 01-2.07.35C8.46 9.94 8 9.14 8 8s.46-1.94 1.18-2.3z" fill={primaryFill} /><path d="M7.25 6.05a1.8 1.8 0 00-2.07-.35C4.46 6.06 4 6.86 4 8s.46 1.94 1.18 2.3c.7.35 1.52.2 2.07-.35a.5.5 0 10-.7-.7.8.8 0 01-.93.15C5.34 9.26 5 8.86 5 8c0-.86.34-1.26.62-1.4a.8.8 0 01.93.15.5.5 0 00.7-.7z" fill={primaryFill} /><path d="M1 5.5A2.5 2.5 0 013.5 3h9A2.5 2.5 0 0115 5.5v5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 10.5v-5zM3.5 4C2.67 4 2 4.67 2 5.5v5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-9z" fill={primaryFill} /></svg>;
};

export default ClosedCaption16Regular;