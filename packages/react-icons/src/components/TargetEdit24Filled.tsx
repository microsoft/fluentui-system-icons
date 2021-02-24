import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TargetEdit24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 14a2 2 0 100-4 2 2 0 000 4zm-6-2a6 6 0 1111.99.37l-5.5 5.5-.12.12H12a6 6 0 01-6-6zm6-4a4 4 0 100 8 4 4 0 000-8zm0-4a8 8 0 017.95 7.09 3.3 3.3 0 012.02.16A10 10 0 1011 21.95c0-.18.02-.36.06-.54l.36-1.43A8 8 0 0112 4zm7.1 8.67l-5.9 5.9c-.35.34-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
};

export default TargetEdit24Filled;