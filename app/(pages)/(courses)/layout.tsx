import { Footer } from "@/components/layout/Footer";
import React from "react";

interface CourseRootLayoutProps {
  children: React.ReactNode;
}

const CourseRootLayout = ({ children }: CourseRootLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      {children}
      <Footer className="border-t" />
    </div>
  );
};

export default CourseRootLayout;
