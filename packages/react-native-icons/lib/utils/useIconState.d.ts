/// <reference types="react" />
import { FluentIconsProps } from "./FluentIconsProps.types";
export declare const useIconState: <TBaseAttributes extends import("react").HTMLAttributes<HTMLElement> | import("react").SVGAttributes<SVGElement> = import("react").SVGAttributes<SVGElement>>(props: FluentIconsProps<TBaseAttributes>) => Pick<FluentIconsProps<TBaseAttributes>, "title" | "filled" | "className" | Exclude<keyof TBaseAttributes, "primaryFill">>;
