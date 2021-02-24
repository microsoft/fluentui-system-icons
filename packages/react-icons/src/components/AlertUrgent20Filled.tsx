import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlertUrgent20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.47 12.25a5.16 5.16 0 119.42-4.2l1.22 2.75 1.67 1.62c.38.37.27 1-.22 1.22l-9.73 4.33a.75.75 0 01-1.05-.65L3.68 15l-1.21-2.75z" fill={primaryFill} /><path d="M8.83 17.34a1.49 1.49 0 002.68-1.2l-2.68 1.2z" fill={primaryFill} /><path d="M12.09 4.73a.5.5 0 01.69-.14 6.17 6.17 0 012.91 4.91.5.5 0 11-1 0c0-.13 0-.26-.02-.39a5.17 5.17 0 00-2.45-3.69.5.5 0 01-.13-.7z" fill={primaryFill} /><path d="M12.58 2.24a.5.5 0 01.68-.16c2.46 1.5 4.58 3.8 4.74 7.9a.5.5 0 11-1 .04c-.14-3.68-2-5.7-4.26-7.1a.5.5 0 01-.16-.68z" fill={primaryFill} /></svg>;
};

export default AlertUrgent20Filled;