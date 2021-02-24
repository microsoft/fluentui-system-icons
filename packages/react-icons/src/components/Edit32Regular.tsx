import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Edit32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M27.31 4.69a4 4 0 010 5.65L12.54 25.12a5 5 0 01-2.32 1.31l-4.58 1.15a1 1 0 01-1.22-1.22l1.15-4.58a5 5 0 011.31-2.32L21.66 4.69a4 4 0 015.65 0zm-7.07 4.24L8.3 20.87a3 3 0 00-.8 1.4l-.73 2.96 2.96-.74a3 3 0 001.4-.79l11.94-11.94-2.83-2.83zm2.83-2.83l-1.41 1.41 2.82 2.83 1.42-1.41a2 2 0 00-2.83-2.83z" fill={primaryFill} /></svg>;
};

export default Edit32Regular;