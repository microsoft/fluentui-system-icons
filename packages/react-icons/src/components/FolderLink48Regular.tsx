import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderLink48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.45 28.5h2.8a1.25 1.25 0 01.13 2.5h-3.13a4.75 4.75 0 10.25 9.5h2.75a1.25 1.25 0 01.13 2.5h-3.13A7.25 7.25 0 0118 35.99v-.24a7.25 7.25 0 017.01-7.25h.44zm11.05 0h.25A7.25 7.25 0 0144 35.51V36a7.25 7.25 0 01-7 7l-.25.01h-3.13a1.25 1.25 0 010-2.5h3.13a4.75 4.75 0 00.22-9.5h-3.35a1.25 1.25 0 010-2.5h2.88zM17.06 9c.83 0 1.64.28 2.3.78l.17.15 2.59 2.26c.19.17.42.27.67.3l.15.01h17.31c2 0 3.64 1.57 3.74 3.55l.01.2v13.76a9.3 9.3 0 00-2.5-2.2V16.25c0-.65-.5-1.18-1.12-1.24l-.13-.01h-17.4l-2.13 2.61A3.75 3.75 0 0118.04 19l-.23.01H6.5v16.25c0 .65.5 1.18 1.12 1.24l.13.01h8.28c.07.87.26 1.71.56 2.5H7.75c-2 0-3.64-1.57-3.74-3.55l-.01-.2v-22.5c0-2 1.57-3.64 3.55-3.74l.2-.01h9.31zm19.69 25.5a1.25 1.25 0 01.13 2.5H25.25a1.25 1.25 0 01-.13-2.5h11.63zm-19.69-23H7.75c-.65 0-1.18.5-1.24 1.12l-.01.13v3.75h11.31c.33 0 .64-.13.88-.36l.09-.1 1.63-2.01-2.53-2.22a1.25 1.25 0 00-.67-.3l-.15-.01z" fill={primaryFill} /></svg>;
};

export default FolderLink48Regular;