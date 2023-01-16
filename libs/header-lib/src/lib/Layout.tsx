import React, { useEffect } from "react";
import { useSubscribeEvent, useDispatchEvent } from "custom-event-with-subscribers-react";
import { useNavigate } from 'react-router-dom';

const SUBSCRIBE_EVENT = "change-route";

function getUrlWithLocalStorage(): string | null {
  const data = localStorage.getItem(SUBSCRIBE_EVENT);

  if (!data) return null;
  const urlObj = JSON.parse(data);
  return urlObj.url;
}

// Wrapper with watcher router angular
const Layout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const { state } = useSubscribeEvent(SUBSCRIBE_EVENT);
  const dispatch = useDispatchEvent();

  useEffect(() => {
    const newUrl = getUrlWithLocalStorage();
    if (newUrl) {
      navigate(newUrl);
      localStorage.removeItem(SUBSCRIBE_EVENT);
    }
  }, [state?.url]);

  useEffect(() => {
    dispatch("change-route-react", { url: window.location.pathname });
  }, [window.location.pathname]);

  return (
    <div className="layout">
      { children }
    </div>
  );
};

export default Layout;
