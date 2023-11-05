import {
    atom,
    useRecoilValue,
    useRecoilState,
    useSetRecoilState,
  } from "recoil";
  
  const isMobileState = atom<boolean>({
    key: "isMobile",
    default: false,
  });

  export const useIsMobileState = () => useRecoilState(isMobileState);
  export const useIsMobileValue = () => useRecoilValue(isMobileState);
  export const useIsMobileWrite = () => useSetRecoilState(isMobileState);
  
  const isLandingState = atom<boolean>({
    key: "isLanding",
    default: false,
  });

  export const useIsLandingState = () => useRecoilState(isLandingState);
  export const useIsLandingValue = () => useRecoilValue(isLandingState);
  export const useIsLandingWrite = () => useSetRecoilState(isLandingState);
  