import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NoteAdd24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM7 7v2.5a.5.5 0 01-1 0V7H3.5a.5.5 0 010-1H6V3.5a.5.5 0 011 0V6h2.5a.5.5 0 010 1H7z" fill={primaryFill} /><path d="M6.5 13a6.5 6.5 0 005.48-10h5.77C19.55 3 21 4.46 21 6.25V13h-4.75A3.25 3.25 0 0013 16.25V21H6.25A3.25 3.25 0 013 17.75v-5.77A6.47 6.47 0 006.5 13z" fill={primaryFill} /><path d="M20.56 14.5l-6.06 6.06v-4.31c0-.97.78-1.75 1.75-1.75h4.31z" fill={primaryFill} /></svg>;
};

export default NoteAdd24Filled;