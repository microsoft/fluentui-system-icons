import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FoodEgg24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 12.25c0-.41.34-.75.75-.75a.75.75 0 000-1.5C11.01 10 10 11 10 12.25a.75.75 0 001.5 0z" fill={primaryFill} /><path d="M13.5 2a8.38 8.38 0 00-7.29 4.5c-.24.43-.6.8-1.05 1.1A7.38 7.38 0 002 13.76C2 17.7 4.97 21 8.75 21c.32 0 .64-.02.95-.07.87-.13 1.8 0 2.57.38A6.75 6.75 0 0021.9 14a3.14 3.14 0 01-.03-1.07c.1-.54.14-1.1.14-1.66C22 6.22 18.26 2 13.5 2zm3.75 10.5a4.75 4.75 0 11-9.5 0 4.75 4.75 0 019.5 0z" fill={primaryFill} /></svg>;
};

export default FoodEgg24Filled;