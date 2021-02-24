import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlbumAdd24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6c0-1.1.9-2 2-2h1v7.17a6.49 6.49 0 00-3 1.64V6z" fill={primaryFill} /><path d="M16 8.5h-4a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h4a.5.5 0 00.5-.5V9a.5.5 0 00-.5-.5z" fill={primaryFill} /><path d="M12.5 20H20a2 2 0 002-2V6a2 2 0 00-2-2H6.5v7a6.5 6.5 0 016 9zM10 9c0-1.1.9-2 2-2h4a2 2 0 012 2v1a2 2 0 01-2 2h-4a2 2 0 01-2-2V9z" fill={primaryFill} /><path d="M6.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.5 8.5V18h2.5a.5.5 0 000-1H7v-2.5a.5.5 0 10-1 0V17H3.5a.5.5 0 000 1H6v2.5a.5.5 0 101 0z" fill={primaryFill} /></svg>;
};

export default AlbumAdd24Filled;