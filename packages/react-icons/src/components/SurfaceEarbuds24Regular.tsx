import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SurfaceEarbuds24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 10a6 6 0 11-1.68 11.76l-.44.18-.2.07-2.62.86a2.75 2.75 0 01-3.1-1l-.1-.14-.42-.68c-.63-1-.55-2.28.18-3.19l.12-.15 1.97-2.13.33-.32A6 6 0 0117 10zm-5.85 7.32l-1.3 1.41c-.36.38-.44.94-.21 1.4l.06.12.44.68c.28.45.81.67 1.32.55l.13-.03 1.85-.62a6 6 0 01-2.3-3.5zM17 11.5a4.5 4.5 0 00-4.13 2.7l-.06.16-.09.23-.07.24c-.05.18-.08.37-.1.56l-.04.29-.01.32v.21a4.5 4.5 0 002.64 3.89l.49.19.1.02.14.05.36.07.19.03a4.51 4.51 0 00.5.04H17a4.5 4.5 0 100-9zM7 1c.75 0 1.47.14 2.14.4l.8-.26a2.75 2.75 0 012.88.78l.13.15.13.19.52.8c.62.94.6 2.15-.05 3.09l-.13.16-.13.15-.3.3L13 7a6 6 0 11-6-6zM5.73 2.68l-.15.05a4.5 4.5 0 105.6 5.94 4.16 4.16 0 01-6.53-.53 4 4 0 011.08-5.46zm4.8-.15l-.14.04-2.95.94c-.25.07-.5.17-.72.32a2.5 2.5 0 00-.82 3.5 2.66 2.66 0 004.06.44l.13-.13 2.1-2.2.09-.1c.3-.38.36-.91.13-1.34l-.06-.12-.5-.78-.1-.12-.07-.09a1.25 1.25 0 00-1-.38l-.15.02zm.4 1.15l.07.1.25.36a.75.75 0 01-1.18.93l-.07-.1-.25-.36a.75.75 0 011.18-.93z" fill={primaryFill} /></svg>;
};

export default SurfaceEarbuds24Regular;