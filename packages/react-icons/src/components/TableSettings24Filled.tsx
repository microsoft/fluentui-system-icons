import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableSettings24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 21h2.52a6.47 6.47 0 01-.85-5H9.5v5zM21 9.5v2.52a6.47 6.47 0 00-5-.85V9.5h5zm-6.5 0v2.23a6.53 6.53 0 00-2.77 2.77H9.5v-5h5zM21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5zm-6.5-5h-5v5h5V3zM8 3H6.25A3.25 3.25 0 003 6.25V8h5V3zM3 9.5v5h5v-5H3zM3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3zm9.5-.37l.45.43a2 2 0 010 2.88l-.45.43c.2.57.5 1.1.85 1.57l.6-.18a2 2 0 012.52 1.45l.17.72a5.18 5.18 0 001.72 0l.17-.72a2 2 0 012.52-1.45l.6.18c.36-.47.65-1 .85-1.57l-.45-.43a2 2 0 010-2.88l.45-.43c-.2-.58-.5-1.1-.85-1.57l-.6.18a2 2 0 01-2.52-1.45l-.17-.72a5.17 5.17 0 00-1.72 0l-.17.72a2 2 0 01-2.52 1.45l-.6-.18c-.36.47-.65 1-.85 1.57zm5 3.37c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
};

export default TableSettings24Filled;