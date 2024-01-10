import { useEffect } from "react";

export const useScrolling = (handler) => {
    useEffect(() => {
		document.addEventListener('scroll', handler)
		return () => document.removeEventListener('scroll', handler)
	}, []);
}