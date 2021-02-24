import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleCheckmark20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.3 10.02L11 10H4a2 2 0 00-2 2v1.5C2 15.55 4.09 17 7.5 17c.73 0 1.4-.07 2-.2a5.48 5.48 0 011.8-6.78zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM11 5.5a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm8 9a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0l-2.65 2.64-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
};

export default PeopleCheckmark20Filled;