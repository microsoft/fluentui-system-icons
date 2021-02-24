import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SportSoccer20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.34 3.2a7.02 7.02 0 013.33 0L10 4.17 8.34 3.2zm-1.25.43l2.41 1.4v1.7L6.73 8.7l-1.56-.57-.62-2.51a7.02 7.02 0 012.54-1.98zM3.8 6.75l.4 1.58-1.17 1.03c.08-.94.35-1.82.77-2.61zm-.77 3.94l1.83-1.62 1.55.56 1.04 3.3L6.73 14H4.25a6.96 6.96 0 01-1.22-3.3zM5.1 15h1.55l.51 1.41A7.01 7.01 0 015.1 15zm3.27 1.82l-.81-2.25.7-1.06h3.47l.72 1.06-.82 2.25a7.02 7.02 0 01-3.26 0zm4.47-.41l.51-1.4h1.55a7.02 7.02 0 01-2.06 1.4zm2.9-2.4h-2.47l-.72-1.08 1.02-3.29 1.57-.56 1.83 1.62a6.96 6.96 0 01-1.22 3.3zm1.23-4.64l-1.16-1.03.4-1.58c.4.8.68 1.68.76 2.6zm-1.51-3.74l-.63 2.5-1.58.57-2.75-1.95v-1.7l2.4-1.4c1 .45 1.88 1.13 2.56 1.98zM7.4 9.45L10 7.6l2.59 1.84-.96 3.05H8.37L7.4 9.45z" fill={primaryFill} /></svg>;
};

export default SportSoccer20Regular;