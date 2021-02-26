import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DualScreenSettings24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.27 2.98a2 2 0 01-1.44 2.5l-.58.14a5.73 5.73 0 000 1.8l.54.13a2 2 0 011.45 2.51l-.18.63c.44.4.94.7 1.48.93l.5-.52a2 2 0 012.9 0l.5.52a5.28 5.28 0 001.48-.91l-.2-.69a2 2 0 011.44-2.5l.59-.14a5.73 5.73 0 00-.01-1.8l-.54-.13a2 2 0 01-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.5.52a2 2 0 01-2.9 0l-.5-.52c-.53.22-1.03.53-1.47.9l.2.7zM16.5 8c-.8 0-1.45-.67-1.45-1.5S15.7 5 16.5 5c.8 0 1.45.67 1.45 1.5S17.3 8 16.5 8zm0 5A6.5 6.5 0 0022 9.96v10.29c0 .96-.78 1.75-1.75 1.75H13c-.09 0-.17 0-.26-.02V11.81A6.47 6.47 0 0016.5 13zm-.26 4.5h-1.6a.75.75 0 000 1.5H16.34a.75.75 0 000-1.5h-.1zM10 6.5L10 6H3.75C2.78 6 2 6.78 2 7.75v12.5C2 21.2 2.78 22 3.75 22H11l.25-.02V10.33A6.47 6.47 0 0110 6.5zm-.76 11h.1a.75.75 0 010 1.5H7.65a.75.75 0 010-1.5h1.6z" fill={primaryFill} /></svg>;
};

export default DualScreenSettings24Filled;