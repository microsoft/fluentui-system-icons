import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ContentSettings20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 013 14.5v-9zM5.5 4C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5h-9z" fill={primaryFill} /><path d="M9 14.5v-6a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v6c0 .28.22.5.5.5h3a.5.5 0 00.5-.5zM6 14V9h2v5H6z" fill={primaryFill} /><path d="M10.5 8a.5.5 0 100 1h4a.5.5 0 100-1h-4z" fill={primaryFill} /><path d="M10.42 15.94a2 2 0 000-2.88l-.15-.14c.17-.49.41-.94.72-1.33l.2.06a2 2 0 002.51-1.45l.07-.3a4.38 4.38 0 011.46 0l.07.3a2 2 0 002.51 1.45l.2-.06c.3.4.55.84.72 1.33l-.15.14a2 2 0 000 2.88l.15.14a4.7 4.7 0 01-.72 1.33l-.2-.06a2 2 0 00-2.51 1.45l-.07.3a4.37 4.37 0 01-1.46 0l-.07-.3a2 2 0 00-2.51-1.45l-.2.06a4.7 4.7 0 01-.72-1.33l.15-.14zm5.3-1.44c0-.7-.54-1.27-1.22-1.27-.68 0-1.23.57-1.23 1.27 0 .7.55 1.27 1.23 1.27.68 0 1.23-.57 1.23-1.27z" fill={primaryFill} /></svg>;
};

export default ContentSettings20Regular;