"use client";
import React, { useState, useEffect, useRef } from "react";

const Progress = ({ duration = 4200, finish = 85 }) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    const currentRef = progressRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isInViewport && percentage <= finish) {
      const interval = duration / 100;

      const easeOutQuad = (t: any) => t * (2 - t);

      let timeoutId: NodeJS.Timeout;

      const increment = () => {
        timeoutId = setTimeout(() => {
          const newPercentage = percentage + 1;
          const newDisplayedProgress = Math.round(
            easeOutQuad(newPercentage / finish) * finish,
          );
          setPercentage(newPercentage);
          setDisplayedProgress(newDisplayedProgress);
        }, interval);
      };

      increment();

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isInViewport, percentage, duration, finish]);

  return (
    <>
      <div
        ref={progressRef}
        className="progress-bg"
        data-pct={displayedProgress}
      >
        <div
          id="progress"
          className="progress-rate"
          data-value="75"
          style={{ width: `${displayedProgress}%` }}
        ></div>
        <div className="progress-count-wrap">
          <span className="progress-count counting" data-count="75">
            {displayedProgress}
          </span>
          <span className="counting-icons">%</span>
        </div>
      </div>
    </>
  );
};

export default Progress;
