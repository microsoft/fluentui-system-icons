import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AnimalRabbit28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.18 5.55l6.56 6.55a4.3 4.3 0 01-4.04 7.24v.24A2.42 2.42 0 0118.3 22H15.5v-.83A3.17 3.17 0 0012.34 18h-1.6a.75.75 0 000 1.5h1.6c.91 0 1.66.75 1.66 1.67V22H7.4A2.4 2.4 0 015 19.58v-3.15c0-.23.01-.46.04-.68h-.17a2.88 2.88 0 112.68-3.93 5.39 5.39 0 012.87-.82h4.85c.73 0 1.42.14 2.06.4.2-.33.43-.61.72-.9l-2.4-2.4a1.8 1.8 0 112.53-2.55z" fill={primaryFill} /></svg>;
};

export default AnimalRabbit28Filled;