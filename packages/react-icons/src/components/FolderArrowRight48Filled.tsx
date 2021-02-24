import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderArrowRight48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M40.25 12.5c2 0 3.64 1.57 3.74 3.55l.01.2v7.8A12 12 0 0025.6 39l-17.85.01c-2 0-3.64-1.57-3.74-3.55l-.01-.2V19H18.03c.97-.07 1.89-.5 2.55-1.23l.14-.17 4.11-5.1h15.42zM36 23a10 10 0 110 20 10 10 0 010-20zm0 4.63l-.11.08-.1.08-.08.1a1 1 0 000 1.22l.08.1L38.6 32h-7.71a1 1 0 00-.87.88L30 33v.12a1 1 0 00.88.87L31 34h7.59l-2.8 2.8-.08.09a1 1 0 001.4 1.4l.1-.08 4.5-4.5.07-.09.05-.06.05-.08.03-.06.04-.1.02-.09.02-.11L42 33v-.08l-.02-.12-.03-.11-.02-.06-.05-.11-.05-.08-.04-.06-.04-.04-.04-.05-4.5-4.5-.1-.08a1 1 0 00-1.11-.08zM17.06 9c.83 0 1.64.28 2.3.78l.17.15 2.44 2.14-3.2 3.96-.09.1c-.2.2-.46.33-.74.36l-.14.01H4v-3.75c0-2 1.57-3.64 3.55-3.74l.2-.01h9.31z" fill={primaryFill} /></svg>;
};

export default FolderArrowRight48Filled;