import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Glasses20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.19 4a2 2 0 00-1.52.7l-3.3 3.82c-.23.27-.37.6-.37.98v3A2.5 2.5 0 004.5 15h2A2.5 2.5 0 009 12.5V11h2v1.5a2.5 2.5 0 002.5 2.5h2a2.5 2.5 0 002.5-2.5v-3c0-.43-.18-.82-.47-1.09l-3.2-3.72A2 2 0 0012.8 4H12a.5.5 0 100 1h.81a1 1 0 01.76.35L15.86 8H12.5c-.83 0-1.5.67-1.5 1.5v.5H9v-.5C9 8.67 8.33 8 7.5 8H4.14l2.29-2.65A1 1 0 017.19 5H8a.5.5 0 100-1h-.81zM8 9.5v3c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 013 12.5v-3c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5zm4 3v-3c0-.28.22-.5.5-.5h4a.5.5 0 01.32.11l.05.07c.08.08.13.2.13.32v3c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 01-1.5-1.5z" fill={primaryFill} /></svg>;
};

export default Glasses20Regular;