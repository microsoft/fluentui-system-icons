import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowAutofitWidth24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 6.24C20 5 19 4 17.75 4H6.25C5.01 4 4 5 4 6.24v4a.75.75 0 001.5 0v-4c0-.41.34-.75.75-.75h11.5c.41 0 .75.34.75.75v4a.75.75 0 001.5 0v-4z" fill={primaryFill} /><path d="M17.22 13.22a.75.75 0 01.98-.07l.08.07 2.37 2.37c.2.12.35.37.35.66 0 .25-.1.48-.28.61l-.07.05-2.37 2.37-.08.07c-.27.2-.62.2-.89.01l-.1-.08-.06-.08a.75.75 0 01-.01-.88l.08-.1L18.44 17h-3.88c-.31-.06-.56-.37-.56-.75s.25-.7.57-.74l.09-.01h3.78l-1.22-1.22-.07-.08a.75.75 0 01.07-.98z" fill={primaryFill} /><path d="M6.78 13.22c.27.27.3.69.07.98l-.07.08-1.22 1.22h3.78c.37 0 .66.34.66.75 0 .38-.25.7-.57.75H5.56l1.22 1.22c.27.27.3.69.07.98l-.07.08a.75.75 0 01-.98.08l-.08-.08-2.37-2.36a.77.77 0 01-.35-.67c0-.28.14-.53.35-.66l2.37-2.37c.3-.29.77-.29 1.06 0z" fill={primaryFill} /></svg>;
};

export default ArrowAutofitWidth24Regular;