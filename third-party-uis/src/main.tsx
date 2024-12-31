import React from "react";
import ReactDOM from "react-dom/client";
import AppNav from "./AppNav.tsx";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Route, Routes } from "react-router";
import Swiper from "./swiper/Swiper.tsx";
import GsapIndex from "./Gsap/GsapIndex.tsx";
import FramerMotionIndex from "./framer-motion/FramerMotionIndex.tsx";
import ToastifyIndex from "./Toastify/ToastifyIndex.tsx";
import AosIndex from "./aos/AosIndex.tsx";
import NextUiIndex from "./NextUI/NextUiIndex.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppNav />}>
            <Route path="swiper" element={<Swiper />} />
            <Route path="gsap" element={<GsapIndex />} />
            <Route path="framer-motion" element={<FramerMotionIndex />} />
            <Route path="toastify" element={<ToastifyIndex />} />
            <Route path="aos" element={<AosIndex />} />
            <Route path="next-ui" element={<NextUiIndex />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
