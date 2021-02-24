import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Delete24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 1.75a3.25 3.25 0 013.24 3.07l.01.18h5.25a.75.75 0 01.1 1.5h-.9l-1.28 13.02a2.75 2.75 0 01-2.56 2.47l-.17.01H8.3c-1.35 0-2.5-.99-2.71-2.3l-.02-.18L4.29 6.5H3.5a.75.75 0 01-.74-.65l-.01-.1c0-.38.28-.7.65-.74L3.5 5h5.25c0-1.8 1.46-3.25 3.25-3.25zm6.2 4.75H5.8l1.27 12.87c.06.6.53 1.06 1.12 1.12l.12.01h7.38c.6 0 1.1-.42 1.22-1l.02-.13L18.2 6.5zm-4.45 2.75c.38 0 .7.28.74.65l.01.1v7a.75.75 0 01-1.5.1V10c0-.41.34-.75.75-.75zm-3.5 0c.38 0 .7.28.74.65l.01.1v7a.75.75 0 01-1.5.1V10c0-.41.34-.75.75-.75zm1.75-6c-.92 0-1.67.7-1.74 1.6l-.01.15h3.5c0-.97-.78-1.75-1.75-1.75z" fill={primaryFill} /></svg>;
};

export default Delete24Regular;