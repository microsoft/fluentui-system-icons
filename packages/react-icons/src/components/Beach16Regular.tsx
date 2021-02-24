import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Beach16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.91 1.56a4.18 4.18 0 00-5.69 1.52l-.15.26a.5.5 0 00.18.68L8.9 5.54 7.27 8.4a4.9 4.9 0 00-3.46 2.4 1.5 1.5 0 011.09.17 3.7 3.7 0 012.9-1.6 3.7 3.7 0 012.92 1.6 1.5 1.5 0 011.09-.17A4.91 4.91 0 008.4 8.4l1.36-2.36 2.84 1.63a.5.5 0 00.68-.18l.15-.26a4.14 4.14 0 00-1.53-5.67zM7.2 3.4a3.18 3.18 0 013.42-1.31 6.26 6.26 0 00-2.28 1.97L7.19 3.4zm3.03.1c.28-.22.6-.41 1.03-.61.05.4.06.74.02 1.07-.06.44-.2.9-.53 1.48L9.2 4.56a5.1 5.1 0 011.02-1.06zm2.45 3.05l-1.06-.61a4.67 4.67 0 00.67-2.8c.77.94.96 2.27.39 3.4zM4.6 12.09a.5.5 0 00-.96.04c-.12.51-.35.78-.6.94A2 2 0 012 13.3a.5.5 0 100 1c.5 0 1.07-.08 1.56-.38.24-.15.46-.34.63-.58a2.41 2.41 0 003.62-.02 2.41 2.41 0 003.67-.04 2.8 2.8 0 002.14 1.02.5.5 0 000-1c-.72 0-1.43-.47-1.67-1.2a.5.5 0 00-.95 0 1.42 1.42 0 01-2.72.05.5.5 0 00-.94 0 1.42 1.42 0 01-2.73-.06z" fill={primaryFill} /></svg>;
};

export default Beach16Regular;