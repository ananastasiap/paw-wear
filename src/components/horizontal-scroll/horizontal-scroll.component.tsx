import { FC, ReactNode } from "react";
import { HorizontalScrollBar } from "./horizontal-scroll.styles";

export type HorizontalScrollProps = {
  children: ReactNode;
}

export const HorizontalScroll: FC<HorizontalScrollProps> = ({ children }) => {
  return (
    <HorizontalScrollBar>
      {children}
    </HorizontalScrollBar>
  )
};