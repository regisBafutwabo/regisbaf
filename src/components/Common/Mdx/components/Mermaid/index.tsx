'use client';
// TODO: fix mermaid views
import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
  const [svgContent, setSvgContent] = useState<string>('');
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMermaid = async () => {
      try {
        mermaid.initialize({
          startOnLoad: true,
          theme: 'default',
          securityLevel: 'loose',
          themeVariables: {
            fontSize: '16px',
          },
        });

        const { svg } = await mermaid.render('mermaid-svg', chart);
        setSvgContent(svg);
      } catch (error) {
        console.error('Mermaid initialization failed:', error);
      }
    };

    initializeMermaid();
  }, [chart]);

  if (!svgContent) {
    return <div>Loading diagram...</div>;
  }

  return (
    <div
      ref={mermaidRef}
      className="mermaid-diagram"
      dangerouslySetInnerHTML={{ __html: svgContent }}
      style={{
        backgroundColor: 'transparent',
        margin: '1rem 0',
      }}
    />
  );
}
