import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocalLanguage16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 2c.28 0 .5.22.5.5V5h.5a.5.5 0 010 1H13v4.5a.5.5 0 11-1 0v-8c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M7.5 3H10v1.25c0 .41-.16.7-.4.9-.25.22-.63.35-1.1.35a.5.5 0 000 1 2.7 2.7 0 001.74-.57c.48-.4.76-.98.76-1.68V2.5a.5.5 0 00-.5-.5h-3a.5.5 0 100 1z" fill={primaryFill} /><path d="M6.45 5.3a.5.5 0 00-.91 0l-3.5 8a.5.5 0 10.92.4L4.14 11h3.72l1.18 2.7a.5.5 0 00.92-.4l-3.5-8zm.97 4.7H4.58L6 6.75 7.42 10z" fill={primaryFill} /></svg>;
};

export default LocalLanguage16Regular;