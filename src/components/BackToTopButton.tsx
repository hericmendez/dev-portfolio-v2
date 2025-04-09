import React, { useEffect, useRef, useState } from 'react';

const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = document.querySelector('.content-scroll') as HTMLElement;
    scrollContainerRef.current = container;

    const handleScroll = () => {
      if (container.scrollTop > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollContentToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.focus();
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <span
      onClick={scrollContentToTop}
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',


        zIndex: 999,
        opacity: 0.7,
        textAlign: 'center',
        color: 'white',
        display: showButton ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'opacity 0.4s',
      }}
      className="rpgui-button"
    >
      VOLTAR AO TOPO
    </span>
  );
};

export default BackToTopButton;
