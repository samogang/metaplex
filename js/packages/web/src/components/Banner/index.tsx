import React from 'react';
import { useEffect } from 'react';

export const Banner = (props: {
  src: string;
  useBannerBg: boolean;
  headingText: string;
  subHeadingText: string;
  actionComponent?: JSX.Element;
  children?: React.ReactNode;
}) => {
  useEffect(() => {
    const mainBg = document.getElementById('main-bg');
    const gradient = document.getElementById('bg-gradient');
    if (mainBg && props.useBannerBg) {
      mainBg.style.backgroundImage = 'url("/bann.png")';
      mainBg.style.display = 'inline-block';
      if (gradient) {
        gradient.style.display = 'inline-block';
      }
    }

    return () => {
      const mainBg = document.getElementById('main-bg');
      const gradient = document.getElementById('bg-gradient');
      if (mainBg && props.useBannerBg) {
        mainBg.style.backgroundImage = '';
        mainBg.style.display = 'none';
      }
      if (gradient) gradient.style.display = 'none';
    };
  }, [props.src, props.useBannerBg]);

  return (
    <>
      <div id="mobile-banner">
        <img className="banner-img" src={"tb.png"} />
        <div className="banner-content">
        </div>
      </div>
      <div
        id={'current-banner'}
        style={{ backgroundImage: `url("/bann.png")` }}
      >
        <span id={'gradient-banner'}></span>
        <div id="banner-inner">
          
        </div>
      </div>
    </>
  );
};
