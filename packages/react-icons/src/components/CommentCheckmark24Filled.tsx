import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentCheckmark24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.02 3A6.5 6.5 0 0022 11.2v3.55c0 1.8-1.46 3.25-3.25 3.25h-5.79l-5.38 3.82A1 1 0 016 21v-3h-.75A3.25 3.25 0 012 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77zm5.48-2a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm2.65 3.15l-4.1 4.09L14.9 6.7a.5.5 0 00-.8.6l1.5 2a.5.5 0 00.75.05l4.5-4.5a.5.5 0 00-.7-.7z" fill={primaryFill} /></svg>;
};

export default CommentCheckmark24Filled;