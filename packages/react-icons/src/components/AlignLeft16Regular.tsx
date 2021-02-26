import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignLeft16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 1.5a.5.5 0 011 0v13a.5.5 0 01-1 0v-13zm3.75.5C4.78 2 4 2.78 4 3.75v1.5C4 6.22 4.78 7 5.75 7h6.5C13.22 7 14 6.22 14 5.25v-1.5C14 2.78 13.22 2 12.25 2h-6.5zM5 3.75c0-.41.34-.75.75-.75h6.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-6.5A.75.75 0 015 5.25v-1.5zM5.75 9C4.78 9 4 9.78 4 10.75v1.5c0 .97.78 1.75 1.75 1.75h4.5c.97 0 1.75-.78 1.75-1.75v-1.5C12 9.78 11.22 9 10.25 9h-4.5zM5 10.75c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-4.5a.75.75 0 01-.75-.75v-1.5z" fill={primaryFill} /></svg>;
};

export default AlignLeft16Regular;