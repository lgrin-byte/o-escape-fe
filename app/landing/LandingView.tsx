"use client";

import Component1 from "@/components/landing/Component1";
import Component2 from "@/components/landing/Component2";
import Component3 from "@/components/landing/Component3";
import Component4 from "@/components/landing/Component4";
import Component5 from "@/components/landing/Component5";
import Component6 from "@/components/landing/Component6";
import Component8 from "@/components/landing/Component8";
import Component9 from "@/components/landing/Component9";
import React, { useState, useEffect, useRef } from "react";

import Component1Mobile from "@/components/landing/Component1Mobile";
import Component2Mobile from "@/components/landing/Component2Mobile";
import Component3Mobile from "@/components/landing/Component3Mobile";
import Component4Mobile from "@/components/landing/Component4Mobile";
import Component5Mobile from "@/components/landing/Component5Mobile";
import Component6Mobile from "@/components/landing/Component6Mobile";
import Component8Mobile from "@/components/landing/Component8Mobile";
import Component9Mobile from "@/components/landing/Component9Mobile";
import Component7 from "@/components/landing/Component7";
import { useIsMobileValue } from "@/components/atoms/mobile.atom";
import * as S from "./LandingView.styled";
import Btn from "../components/landing/Btn";

// import HomeView from "./HomeView";
type Props = Record<string, any>;
function LandingView(props: Props) {
  const isMobile = useIsMobileValue();

  const { buttonProps } = props;

  const [showBtn, setShowBtn] = useState(false); // Btn 컴포넌트의 가시성 상태
  const component1Ref = useRef<HTMLElement | null>(null);
  const component9Ref = useRef<HTMLElement | null>(null); // Component9의 참조 추가

  const handleScroll = () => {
    if (component1Ref.current) {
      const rect1 = component1Ref.current.getBoundingClientRect();
      setShowBtn(rect1.bottom < 0);
    }

    if (component9Ref.current) {
      const rect9 = component9Ref.current.getBoundingClientRect();
      if (rect9.top <= window.innerHeight) {
        // Component9가 화면에 보이면 버튼 숨기기
        setShowBtn(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트되면 이벤트 리스너를 정리
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <S.Wrapper>
        <S.LogoWrapper>
          <S.Logo />
        </S.LogoWrapper>
        {showBtn && <Btn />} {/* 조건부 렌더링을 통해 Btn 컴포넌트를 표시 */}
        {/* buttonProps를 전달하고 ref를 설정하여 DOM 요소를 참조합니다. */}
        {isMobile ? (
          <S.MobileWrapper>
            <Component1Mobile ref={component1Ref} {...buttonProps} />
            <Component2Mobile />
            <Component3Mobile />
            <Component4Mobile />
            <Component5Mobile />
            <Component6Mobile />
            <Component7 />

            <Component8Mobile />
            <Component9Mobile />
          </S.MobileWrapper>
        ) : (
          <>
            <Component1 ref={component1Ref} {...buttonProps} />
            <Component2 />
            <Component3 />
            <Component4 />
            <Component5 />
            <Component6 />
            <Component7 />
            <Component8 />
            <Component9 ref={component9Ref} {...buttonProps} />
          </>
        )}
        {/* <Button {...buttonProps}>지금 무료로 시작하기</Button> */}
      </S.Wrapper>
      <S.Footer> Copyright © 2023 Next room</S.Footer>
    </div>
  );
}

export default LandingView;
