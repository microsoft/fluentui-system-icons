import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const QuestionCircle48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4a20 20 0 110 40 20 20 0 010-40zm.25 28a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0-19A6.37 6.37 0 0018 19.25a1.25 1.25 0 002.47.25l.02-.12.02-.32a3.88 3.88 0 013.74-3.56A3.87 3.87 0 0128 19.25c0 1.19-.42 2.04-1.62 3.4l-.2.23-1.03 1.1c-1.64 1.77-2.32 2.99-2.31 4.78a1.25 1.25 0 002.44.35l.03-.12.02-.12v-.13l.01-.16c.04-.8.4-1.49 1.28-2.5l.19-.22 1.01-1.08c1.91-2.06 2.68-3.41 2.68-5.53A6.36 6.36 0 0024.25 13z" fill={primaryFill} /></svg>;
};

export default QuestionCircle48Filled;