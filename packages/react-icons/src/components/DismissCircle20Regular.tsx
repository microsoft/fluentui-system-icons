import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DismissCircle20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zM7.8 7.11l.08.06L10 9.3l2.12-2.12a.5.5 0 01.64-.06l.07.06c.17.18.2.44.06.64l-.06.07L10.7 10l2.12 2.12c.17.17.2.44.06.64l-.06.07a.5.5 0 01-.64.06l-.07-.06L10 10.7l-2.12 2.12a.5.5 0 01-.64.06l-.07-.06a.5.5 0 01-.06-.64l.06-.07L9.3 10 7.17 7.88a.5.5 0 01-.06-.64l.06-.07a.5.5 0 01.64-.06z" fill={primaryFill} /></svg>;
};

export default DismissCircle20Regular;