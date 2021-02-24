import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRepeatAll16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.9 5.24a3.99 3.99 0 01-2.7 6.75L10 12H6.7l1.16 1.15c.17.17.19.44.05.64l-.05.07a.5.5 0 01-.64.05l-.07-.05-2-2a.5.5 0 01-.06-.64l.06-.07 2-2a.5.5 0 01.76.63l-.05.07L6.7 11H10a3 3 0 003-2.82V8a3 3 0 00-.87-2.1.5.5 0 01.69-.72l.07.06zM8.77 2.09l.07.05 2 2 .06.08a.5.5 0 010 .56l-.05.07-2 2-.08.06a.5.5 0 01-.56 0l-.07-.05-.06-.07a.5.5 0 010-.57l.06-.07L9.29 5H6a3 3 0 00-3 2.82V8c0 .82.33 1.56.86 2.1a.5.5 0 01-.71.7A4 4 0 015.8 4h3.5L8.14 2.85l-.06-.07a.5.5 0 01.7-.7z" fill={primaryFill} /></svg>;
};

export default ArrowRepeatAll16Regular;