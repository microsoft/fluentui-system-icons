import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DismissCircle16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zm0 1a5 5 0 100 10A5 5 0 008 3zM5.84 5.97l.06-.07a.5.5 0 01.63-.06l.07.06L8 7.3l1.4-1.4a.5.5 0 01.63-.06l.07.06c.18.17.2.44.06.63l-.06.07L8.7 8l1.4 1.4c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06L8 8.7l-1.4 1.4a.5.5 0 01-.63.06l-.07-.06a.5.5 0 01-.06-.63l.06-.07L7.3 8 5.9 6.6a.5.5 0 01-.06-.63l.06-.07-.06.07z" fill={primaryFill} /></svg>;
};

export default DismissCircle16Regular;