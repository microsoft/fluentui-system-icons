import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableSettings24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 21h2.52a6.47 6.47 0 01-.85-5H9.5v5zM21 9.5v2.52a6.47 6.47 0 00-5-.85V9.5h5zm-6.5 0v2.23a6.53 6.53 0 00-2.77 2.77H9.5v-5h5zM21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5zm-6.5-5h-5v5h5V3zM8 3H6.25A3.25 3.25 0 003 6.25V8h5V3zM3 9.5v5h5v-5H3zM3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3zm11.28-2.02a2 2 0 01-1.44 2.5l-.59.14a5.73 5.73 0 000 1.8l.55.13a2 2 0 011.45 2.51l-.19.63c.44.39.94.7 1.49.93l.49-.52a2 2 0 012.9 0l.5.52a5.28 5.28 0 001.48-.91l-.2-.69a2 2 0 011.44-2.5l.59-.14a5.72 5.72 0 000-1.8l-.55-.13a2 2 0 01-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 01-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7zM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
};

export default TableSettings24Filled;