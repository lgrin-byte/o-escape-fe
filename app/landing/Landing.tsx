"use client"

import "@/style/reset.css";
import { useIsLandingWrite } from "@/components/atoms/mobile.atom";
import { useEffect } from "react";
import LandingView from "./LandingView";

function Landing() {
  const setIsLanding = useIsLandingWrite();

  useEffect(() => {
    setIsLanding(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const buttonProps = {
    type: "submit",
    variant: "contained",
  };

  const LandingViewProps = {
    buttonProps,
  };

  return <LandingView {...LandingViewProps} />;
}

export default Landing;
