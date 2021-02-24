import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentQuestionMark24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.5 20a.5.5 0 01-.5.5h-5.73a6.52 6.52 0 01-1.08 1.5H18a2 2 0 002-2V9.83a2 2 0 00-.59-1.42L13.6 2.6a.5.5 0 00-.05-.04 2.07 2.07 0 00-.34-.25l-.05-.03-.05-.03-.16-.09c-.2-.08-.41-.12-.63-.14h-.06a.6.6 0 00-.08-.01H6a2 2 0 00-2 2v7.5c.47-.2.98-.34 1.5-.42V4c0-.27.22-.5.5-.5h6V8c0 1.1.9 2 2 2h4.5v10zm-5-15.38l3.88 3.88H14a.5.5 0 01-.5-.5V4.62zM1 17.5a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zm4.75 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM4.5 16a2 2 0 114 0c0 .73-.21 1.14-.75 1.7l-.27.28-.11.12c-.29.32-.37.53-.37.9a.5.5 0 01-1 0c0-.73.21-1.14.75-1.7l.27-.28.11-.12c.29-.32.37-.53.37-.9a1 1 0 10-2 0 .5.5 0 01-1 0z" fill={primaryFill} /></svg>;
};

export default DocumentQuestionMark24Regular;