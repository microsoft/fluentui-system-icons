import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Print48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.25 8h15.5a3.25 3.25 0 013.24 3.07l.01.18V14h1.75c2.9 0 5.25 2.35 5.25 5.25v13.5c0 1.8-1.46 3.25-3.25 3.25H35v1.75c0 1.8-1.46 3.25-3.25 3.25h-15.5A3.25 3.25 0 0113 37.75V36H9.25A3.25 3.25 0 016 32.75v-13.5C6 16.35 8.35 14 11.25 14H13v-2.75a3.25 3.25 0 013.07-3.24l.18-.01zm15.5 20.5h-15.5a.75.75 0 00-.75.75v8.5c0 .41.34.75.75.75h15.5c.41 0 .75-.34.75-.75v-8.5a.75.75 0 00-.75-.75zm5-12h-25.5a2.75 2.75 0 00-2.75 2.75v13.5c0 .41.34.75.75.75H13v-4.25c0-1.8 1.46-3.25 3.25-3.25h15.5c1.8 0 3.25 1.46 3.25 3.25v4.25h3.75c.41 0 .75-.34.75-.75v-13.5a2.75 2.75 0 00-2.75-2.75zm-5-6h-15.5c-.38 0-.7.28-.74.65l-.01.1V14h17v-2.75c0-.38-.28-.7-.65-.74l-.1-.01z" fill={primaryFill} /></svg>;
};

export default Print48Regular;