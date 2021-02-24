import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocationDismiss24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.84 4.56a8.7 8.7 0 0112.52 12.1l-.2.21c-.92.92-2.45 2.41-4.6 4.49-.87.84-2.25.84-3.12 0L6.59 17.6l-.75-.74a8.7 8.7 0 010-12.31zm9.19 3.13l-.08-.08a.75.75 0 00-.89 0l-.09.08L12 9.66l-1.97-1.97-.08-.08a.75.75 0 00-.89 0l-.09.08-.07.08c-.2.26-.2.62-.01.88l.08.1 1.97 1.97-1.97 1.97-.07.08c-.2.26-.2.62-.01.88l.08.1.08.07c.26.2.62.2.89 0l.09-.07L12 11.78l1.97 1.97.08.07c.26.2.62.2.89 0l.09-.07.07-.09c.2-.26.2-.62.01-.88l-.08-.1-1.97-1.96 1.97-1.97.07-.09c.2-.26.2-.62.01-.88l-.08-.1-.08-.07.08.08z" fill={primaryFill} /></svg>;
};

export default LocationDismiss24Filled;