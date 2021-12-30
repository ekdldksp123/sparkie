import { ReactNode, useMemo } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    elementId: string,
    child: ReactNode,
}

export const Portal:React.FC<PortalProps> = ({elementId, child}:PortalProps) => {
    const rootElement = useMemo(() => document.getElementById(elementId),[elementId]) as HTMLElement;
    return createPortal(child, rootElement);
}