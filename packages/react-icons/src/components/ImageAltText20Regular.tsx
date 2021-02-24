import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ImageAltText20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 1a2 2 0 00-2 2v4c0 1.1.9 2 2 2h5a2 2 0 002-2V3a2 2 0 00-2-2H3zm.5 5h4a.5.5 0 010 1h-4a.5.5 0 010-1zM3 3.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M3 14v-4h1v4c0 .37.1.72.28 1.02l4.67-4.59a1.5 1.5 0 012.1 0l4.67 4.59c.18-.3.28-.65.28-1.02V6a2 2 0 00-2-2h-3V3h3a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3zm3 2h8a2 2 0 001.01-.27l-4.66-4.58a.5.5 0 00-.7 0l-4.66 4.58A2 2 0 006 16z" fill={primaryFill} /><path d="M12.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm.5-1.5a.5.5 0 10-1 0 .5.5 0 001 0z" fill={primaryFill} /></svg>;
};

export default ImageAltText20Regular;