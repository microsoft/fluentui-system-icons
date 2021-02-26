import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleSettings20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10c.1 0 .2 0 .3.02a5.5 5.5 0 00-1.8 6.79c-.6.12-1.27.19-2 .19C4.09 17 2 15.55 2 13.5V12c0-1.1.9-2 2-2h7zm6-3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM7.5 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm4.57 9.44a2 2 0 01-1.43 2.48l-.47.12a4.7 4.7 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.73 4.73 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
};

export default PeopleSettings20Filled;