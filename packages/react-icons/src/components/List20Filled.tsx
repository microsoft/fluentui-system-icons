import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const List20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.26 15.02a.75.75 0 01.1 1.49H2.83a.75.75 0 01-.1-1.49h9.53zm5.02-5.52a.75.75 0 01.1 1.49H2.83a.75.75 0 01-.1-1.49H17.27zm-4.02-6.05a.75.75 0 01.1 1.5H2.83a.75.75 0 01-.1-1.5h10.53z" fill={primaryFill} /></svg>;
};

export default List20Filled;