// export class SplitText {
//     private element: HTMLElement;
//     private originalHTML: string;
//     public words: HTMLElement[] = [];
//     public lines: HTMLElement[] = [];
  
//     constructor(element: HTMLElement | null, options: { type: string }) {
//       if (!element) throw new Error('Element is required');
//       this.element = element;
//       this.originalHTML = element.innerHTML;
  
//       if (options.type.includes('words')) {
//         this.splitWords();
//       }
//       if (options.type.includes('lines')) {
//         this.splitLines();
//       }
//     }
  
//     private splitWords() {
//       const words = this.element.textContent?.split(/\s+/) || [];
//       this.element.innerHTML = words
//         .map(word => `<span class="split-word">${word}</span>`)
//         .join(' ');
//       this.words = Array.from(this.element.getElementsByClassName('split-word')) as HTMLElement[];
//     }
  
//     private splitLines() {
//       const lines = this.element.innerHTML.split('<br>');
//       this.element.innerHTML = lines
//         .map(line => `<span class="split-line">${line}</span>`)
//         .join('');
//       this.lines = Array.from(this.element.getElementsByClassName('split-line')) as HTMLElement[];
//     }
  
//     public revert() {
//       this.element.innerHTML = this.originalHTML;
//     }
//   }

import React, { useEffect, useRef, useState } from 'react';

const SplitText = ({ element, options }) => {
  const [words, setWords] = useState([]);
  const [lines, setLines] = useState([]);
  const [originalHTML, setOriginalHTML] = useState('');
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;
    const originalHTML = elementRef.current.innerHTML;
    setOriginalHTML(originalHTML);

    if (options.type.includes('words')) {
      splitWords(originalHTML);
    }

    if (options.type.includes('lines')) {
      splitLines(originalHTML);
    }
  }, [element, options]);

  const splitWords = (originalHTML) => {
    const words = elementRef.current.textContent.split(/\s+/);
    elementRef.current.innerHTML = words
      .map((word) => `<span class="split-word">${word}</span>`)
      .join(' ');
    setWords(Array.from(elementRef.current.getElementsByClassName('split-word')));
  };

  const splitLines = (originalHTML) => {
    const lines = elementRef.current.innerHTML.split('<br>');
    elementRef.current.innerHTML = lines
      .map((line) => `<span class="split-line">${line}</span>`)
      .join('');
    setLines(Array.from(elementRef.current.getElementsByClassName('split-line')));
  };

  const revert = () => {
    if (elementRef.current) {
      elementRef.current.innerHTML = originalHTML;
    }
  };

  return (
    <div ref={elementRef}>
      {/* The content is dynamically updated here */}
    </div>
  );
};

export default SplitText;
