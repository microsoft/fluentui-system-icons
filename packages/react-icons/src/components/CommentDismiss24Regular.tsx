import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentDismiss24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.02 3c-.3.46-.53.97-.7 1.5H5.24c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75H7.5v3.75l5.01-3.75h6.24c.97 0 1.75-.78 1.75-1.75v-2.48a6.52 6.52 0 001.5-1.08v3.56c0 1.8-1.46 3.25-3.25 3.25h-5.74L8 21.75a1.25 1.25 0 01-2-1V18h-.75A3.25 3.25 0 012 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77zm5.48-2a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-2.78 2.59l-.07.06-.06.07a.5.5 0 000 .56l.06.07 2.14 2.15-2.14 2.15-.06.07a.5.5 0 000 .56l.06.07.07.06c.17.12.4.12.56 0l.07-.06 2.15-2.14 2.15 2.14.07.06c.17.12.4.12.56 0l.07-.06.06-.07a.5.5 0 000-.56l-.06-.07-2.14-2.15 2.14-2.15.06-.07a.5.5 0 000-.56l-.06-.07-.07-.06a.5.5 0 00-.56 0l-.07.06-2.15 2.14-2.15-2.14-.07-.06a.5.5 0 00-.49-.04l-.07.04z" fill={primaryFill} /></svg>;
};

export default CommentDismiss24Regular;