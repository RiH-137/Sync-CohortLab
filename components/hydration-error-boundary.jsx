"use client";

import React from "react";

class HydrationErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Check if the error is related to hydration
    if (
      error?.message?.includes?.("Hydration") ||
      error?.message?.includes?.("hydration") ||
      error?.message?.includes?.("server HTML") ||
      error?.message?.includes?.("client")
    ) {
      return { hasError: true };
    }
    return null;
  }

  componentDidCatch(error, errorInfo) {
    // Log hydration errors for debugging
    if (process.env.NODE_ENV === "development") {
      console.warn("Hydration error caught:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // Render the children normally, hydration will fix itself on client
      return this.props.children;
    }

    return this.props.children;
  }
}

export default HydrationErrorBoundary;