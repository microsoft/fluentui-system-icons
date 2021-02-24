import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ContentSettings20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 2.5A2.75 2.75 0 002.5 5.25v9.5a2.75 2.75 0 002.75 2.75h4.64c-.3-.46-.53-.96-.68-1.5H5.25C4.56 16 4 15.44 4 14.75V7h12v2.2c.54.16 1.04.4 1.5.69V5.25a2.75 2.75 0 00-2.75-2.75h-9.5z" fill={primaryFill} /><path d="M9 8.5v6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-6c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5zM6 9v5h2V9H6z" fill={primaryFill} /><path d="M10.5 8a.5.5 0 100 1h4a.5.5 0 100-1h-4z" fill={primaryFill} /><path d="M10.42 13.06a2 2 0 010 2.88l-.15.14c.17.49.41.94.72 1.33l.2-.06a2 2 0 012.51 1.45l.07.3a4.38 4.38 0 001.46 0l.07-.3a2 2 0 012.51-1.45l.2.06c.3-.4.55-.84.72-1.33l-.15-.14a2 2 0 010-2.88l.15-.14a4.7 4.7 0 00-.72-1.33l-.2.06a2 2 0 01-2.51-1.45l-.07-.3a4.38 4.38 0 00-1.46 0l-.07.3a2 2 0 01-2.51 1.45l-.2-.06c-.3.4-.55.84-.72 1.33l.15.14zm4.08 2.7c-.68 0-1.23-.56-1.23-1.26s.55-1.27 1.23-1.27c.68 0 1.23.57 1.23 1.27 0 .7-.55 1.27-1.23 1.27z" fill={primaryFill} /></svg>;
};

export default ContentSettings20Filled;