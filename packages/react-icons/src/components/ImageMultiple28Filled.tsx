import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ImageMultiple28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6c.9.58 1.5 1.6 1.5 2.75v10.5c0 2.9-2.35 5.25-5.25 5.25H8.75c-1.15 0-2.17-.6-2.74-1.5h13.24A3.75 3.75 0 0023 19.25v-13-.24zm-10.07 8.15l.1.08 7.42 7.29c-.5.3-1.08.48-1.7.48H6.25c-.62 0-1.2-.18-1.7-.48l7.42-7.3.09-.06a.75.75 0 01.77-.07l.1.06zM18.75 3C20.55 3 22 4.46 22 6.25v12.5c0 .63-.18 1.21-.49 1.7l-7.43-7.3-.13-.11c-.84-.7-2.06-.7-2.9 0l-.13.12-7.43 7.3c-.31-.5-.49-1.08-.49-1.71V6.25C3 4.45 4.46 3 6.25 3h12.5zM16.5 7.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill={primaryFill} /></svg>;
};

export default ImageMultiple28Filled;