import React, { useEffect, useRef } from "react";
// @ts-ignore
import { useSubscribeEvent, useDispatchEvent } from "custom-event-with-subscribers-react";
import { useNavigate } from 'react-router-dom';

// Wrapper with watcher router angular
const Layout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { state } = useSubscribeEvent("change-route");
  const dispatch = useDispatchEvent();

  const isMount = useRef<boolean | null>(null);

  useEffect(() => {
    isMount.current = true;
    if (isMount.current && state.url) {
      navigate(state.url);
    }
    return () => {
      isMount.current = false;
    };
  }, [state?.url]);

  useEffect(() => {
    if (isMount.current) {
      dispatch("change-route-react", { url: window.location.pathname });
    }
  }, [window.location.pathname, isMount.current]);

  return (
    <div className="layout">
      { children }
    </div>
  );
};

export default Layout;
