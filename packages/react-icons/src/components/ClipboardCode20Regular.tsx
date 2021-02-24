import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClipboardCode20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v5.88a1.5 1.5 0 00-1-.38V4.5a.5.5 0 00-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 01-1.41-1H5.5a.5.5 0 00-.5.5v12c0 .28.22.5.5.5h3.96l.4.47c.3.35.72.53 1.14.53H5.5A1.5 1.5 0 014 16.5v-12C4 3.67 4.67 3 5.5 3h1.59zM8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M15.49 11.64a.5.5 0 10-.97-.28l-2 7a.5.5 0 10.97.28l2-7z" fill={primaryFill} /><path d="M11.38 13.32a.5.5 0 10-.76-.65l-1.5 1.75a.5.5 0 000 .65l1.5 1.75a.5.5 0 10.76-.65l-1.22-1.42 1.22-1.43z" fill={primaryFill} /><path d="M16.67 16.88a.5.5 0 01-.05-.71l1.22-1.42-1.22-1.43a.5.5 0 01.76-.65l1.5 1.75a.5.5 0 010 .65l-1.5 1.75a.5.5 0 01-.7.06z" fill={primaryFill} /></svg>;
};

export default ClipboardCode20Regular;