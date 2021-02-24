import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ThumbLike16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.03 1.92c.21-.52.8-1.08 1.55-.87.6.17.97.52 1.2 1 .2.44.25.96.26 1.46a7.5 7.5 0 01-.24 1.74c-.06.26-.12.51-.19.74h1.38a2 2 0 011.92 2.56l-1.36 4.65a2.5 2.5 0 01-3.15 1.68L4.05 13.2A2 2 0 012.77 12l-.52-1.4a2 2 0 01.86-2.42l1.87-1.1.02-.01.1-.09c.1-.07.23-.2.4-.4.35-.39.82-1.03 1.3-2.04.2-.44.37-.78.53-1.1.25-.5.46-.92.7-1.52zm-2.51 6l-.02.01-1.88 1.11a1 1 0 00-.43 1.22l.52 1.38a1 1 0 00.64.6l5.35 1.68c.8.26 1.65-.2 1.89-1l1.36-4.65A1 1 0 0012 6.99H9.93a.5.5 0 01-.48-.67c.1-.28.26-.77.38-1.3.13-.54.22-1.08.2-1.49 0-.47-.05-.82-.16-1.06a.78.78 0 00-.56-.45c-.04-.02-.1-.01-.16.03a.54.54 0 00-.19.25c-.25.63-.5 1.11-.76 1.65-.16.3-.32.63-.5 1.01a9.52 9.52 0 01-1.45 2.29 5.05 5.05 0 01-.7.65l-.02.02h-.01z" fill={primaryFill} /></svg>;
};

export default ThumbLike16Regular;