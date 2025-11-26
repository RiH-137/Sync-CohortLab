"use client";

import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const ClerkUserButton = ({ appearance, afterSignOutUrl }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />;
  }

  return (
    <UserButton
      appearance={appearance}
      afterSignOutUrl={afterSignOutUrl}
    />
  );
};

export default ClerkUserButton;