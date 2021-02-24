import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarLineHorizontal324Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.2 3.1c-.49-1-1.92-1-2.41 0L8.43 7.88l-5.27.77a1.35 1.35 0 00-.75 2.3l3.81 3.72-.9 5.25a1.35 1.35 0 001.96 1.42l5.07-2.66a.75.75 0 00-.7-1.33l-4.8 2.52.87-5.03c.07-.43-.07-.88-.4-1.2L3.68 10.1l5.05-.74c.44-.06.82-.34 1.02-.74L12 4.04l2.49 5.04c.12.26.38.42.67.42h6.09a.75.75 0 000-1.5h-5.62L13.2 3.1z" fill={primaryFill} /><path d="M14.5 12.75c0-.41.34-.75.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M14.5 16.75c0-.41.34-.75.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
};

export default StarLineHorizontal324Regular;