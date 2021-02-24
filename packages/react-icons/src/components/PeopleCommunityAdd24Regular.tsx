import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleCommunityAdd24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2h-.1a.5.5 0 00-.4.4V17h-2.6a.5.5 0 00-.4.4v.19c.04.2.2.36.4.4H17v2.6c.04.2.2.36.4.4h.19a.5.5 0 00.4-.4v-2.6h2.61a.5.5 0 00.4-.4v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.5l-.01-.1a.5.5 0 00-.4-.4h-.1zm-5.48 0c-.3.46-.54.96-.7 1.5H9.24a.25.25 0 00-.25.25v1c0 .97.61 1.54 2.07 1.7.08.54.22 1.06.42 1.54-2.55-.14-4-1.22-4-3.24v-1c0-.97.8-1.75 1.76-1.75h2.77zm-3.9-5a4 4 0 00-.1 1.5H3.76a.25.25 0 00-.25.25v1c0 1.17.88 1.75 3.06 1.75.47 0 .87-.02 1.21-.07-.56.36-.99.91-1.17 1.57h-.04C3.66 15 2 13.91 2 11.75v-1c0-.92.7-1.68 1.6-1.75H8.12zM12 7a3 3 0 110 6 3 3 0 010-6zm8.25 2c.96 0 1.75.78 1.75 1.75v.96c.02.37-.01.7-.1 1.01-.41-.39-.89-.72-1.4-1v-.97a.25.25 0 00-.25-.25h-4.28a4.03 4.03 0 00-.1-1.5h4.38zM12 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM6.5 2a3 3 0 110 6 3 3 0 010-6zm11 0a3 3 0 110 6 3 3 0 010-6zm-11 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm11 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
};

export default PeopleCommunityAdd24Regular;