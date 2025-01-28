'use client';
// TODO: fix mermaid views
import {
  useEffect,
  useState,
} from 'react';

import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      securityLevel: 'loose',
    });
    mermaid.contentLoaded();
  }, []);

  if (!isMounted) return null;

  return (
    <div className="mermaid" style={{ backgroundColor: 'transparent' }}>
      {chart}
    </div>
  );
}
