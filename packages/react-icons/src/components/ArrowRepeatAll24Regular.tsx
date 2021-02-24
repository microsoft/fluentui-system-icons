import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRepeatAll24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.61 2.47l-.08-.07a.75.75 0 00-.98.07l-.07.08c-.22.3-.2.72.07.98l1.97 1.98H8.27a6.51 6.51 0 00-4.58 10.92l.07.06a.75.75 0 001.08-1.03l-.2-.23A5 5 0 018.5 7.02h6.88l-1.83 1.84-.07.07c-.22.3-.2.72.07 1 .3.29.77.29 1.06 0l3.18-3.2.07-.08c.22-.3.2-.72-.07-.99l-3.18-3.19zm5.62 5.1a.75.75 0 00-1.05 1.07 5.01 5.01 0 01-3.68 8.41H8.56l1.9-1.9.08-.1c.2-.26.2-.63 0-.9l-.08-.07-.08-.08a.75.75 0 00-.9.01l-.08.07-3.18 3.2-.07.08c-.2.26-.2.63 0 .9l.07.08 3.18 3.19.09.07c.29.22.7.2.97-.07s.3-.7.07-.99l-.07-.07-1.9-1.91H15.73A6.51 6.51 0 0020.3 7.63l-.07-.07z" fill={primaryFill} /></svg>;
};

export default ArrowRepeatAll24Regular;