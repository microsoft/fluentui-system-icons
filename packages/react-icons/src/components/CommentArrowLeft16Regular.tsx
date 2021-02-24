import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentArrowLeft16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.85-.35A.5.5 0 008 5.5a.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L9.71 6h2.79a.5.5 0 000-1H9.7l1.15-1.15a.5.5 0 00-.7-.7l-2 2z" fill={primaryFill} /><path d="M3.5 3h2.1c.18-.36.4-.7.66-1H3.5A2.5 2.5 0 001 4.5v5A2.5 2.5 0 003.5 12H4v1.94c0 .84 1 1.3 1.63.74L8.69 12h3.81A2.5 2.5 0 0015 9.5v-.84c-.29.41-.63.78-1.02 1.1A1.5 1.5 0 0112.5 11H8.31L5 13.9V11H3.5A1.5 1.5 0 012 9.5v-5C2 3.67 2.67 3 3.5 3z" fill={primaryFill} /></svg>;
};

export default CommentArrowLeft16Regular;