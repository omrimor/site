"use client";

import { Sandpack } from "@codesandbox/sandpack-react";
import { HTML, CSS, Tailwind } from "./sandpack-files";
import { Component, ReactNode, Suspense } from "react";

class ErrorBoundary extends Component<
  { fallback: ReactNode; children?: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: ReactNode; children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="px-4 py-3 border border-red-700 bg-red-200 rounded p-1 text-sm flex items-center text-red-900 mb-8">
          <div className="w-full callout">{this.props.fallback}</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function LiveCode({ example }: { example: string }) {
  let files;

  if (example === "html") {
    files = {
      "/styles.css": {
        code: CSS,
        active: true,
      },
      "/index.html": HTML,
    };
  } else if (example === "tailwind") {
    files = {
      "/index.html": Tailwind,
    };
  }

  return (
    <Suspense fallback={null}>
      <ErrorBoundary
        fallback={"Oops, there was an error loading the CodeSandbox."}
      >
        <Sandpack theme="auto" template="static" files={files} />
      </ErrorBoundary>
    </Suspense>
  );
}
