import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TargetEdit24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 14a2 2 0 100-4 2 2 0 000 4zm-6-2a6 6 0 1111.99.37l-2.66 2.66A4.48 4.48 0 0012 7.5a4.5 4.5 0 103.03 7.83l-2.54 2.53-.12.13H12A6 6 0 016 12zm6-8.5a8.5 8.5 0 018.44 7.51 3.3 3.3 0 011.53.24A10 10 0 1011 21.95c0-.18.02-.36.06-.54l.24-.94A8.5 8.5 0 0112 3.5zm7.1 9.17l-5.9 5.9c-.35.34-.59.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
};

export default TargetEdit24Regular;