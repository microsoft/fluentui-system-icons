import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TagQuestionMark16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 12.88a.62.62 0 110 1.25.62.62 0 010-1.25zM12.5 2c.83 0 1.5.67 1.5 1.5v3.64c0 .09 0 .18-.02.26-.82-.79-1.9-1.3-3.11-1.39a.62.62 0 10-.71 0 5 5 0 00-3.83 7.75 1.5 1.5 0 01-.25-.2L2.44 9.93a1.5 1.5 0 010-2.12L7.8 2.44c.25-.25.57-.4.91-.43L8.86 2h3.64zm-2 6c1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 01-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.56-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 01-1 0C8.64 8.83 9.45 8 10.5 8z" fill={primaryFill} /></svg>;
};

export default TagQuestionMark16Filled;