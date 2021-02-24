import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowTrending24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 5.5h7.55l.1.01.1.03.06.03c.08.03.15.08.22.15l.04.04.04.06.06.09.04.09.02.06.01.07v.1l.01 7.52a.75.75 0 01-1.5.1v-5.8l-7.72 7.73a.75.75 0 01-.98.07l-.08-.07-2.97-2.97-5.47 5.47a.75.75 0 01-1.13-.98l.07-.08 6-6a.75.75 0 01.98-.07l.08.07 2.97 2.97L19.44 7h-5.7a.75.75 0 01-.74-.65v-.1c0-.38.28-.7.65-.74l.1-.01z" fill={primaryFill} /></svg>;
};

export default ArrowTrending24Regular;