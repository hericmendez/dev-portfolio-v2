import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export function useMenuNavigation(
  navItems: { id: string; path: string }[],
  currentPath: string | undefined
) {
  const navigate = useNavigate();

  // Inicializa o índice focado com base na rota atual
  const [focusedIndex, setFocusedIndex] = useState(() => {
    const initialIndex = navItems.findIndex((item) => item.id === currentPath);
    return initialIndex >= 0 ? initialIndex : 0;
  });

  // Atualiza o índice de foco sempre que a rota (pathname) muda,
  // garantindo que o hook saiba qual item está ativo mesmo com cliques do mouse
  useEffect(() => {
    const newIndex = navItems.findIndex((item) => item.id === currentPath);
    if (newIndex >= 0) setFocusedIndex(newIndex);
  }, [currentPath, navItems]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        // Toca o efeito de movimentação e navega para o próximo item

        const nextIndex = (focusedIndex + 1) % navItems.length;
        setFocusedIndex(nextIndex);
        navigate(navItems[nextIndex].path);
      } else if (e.key === "ArrowUp") {
        // Toca o efeito de movimentação e navega para o item anterior

        const prevIndex = (focusedIndex - 1 + navItems.length) % navItems.length;
        setFocusedIndex(prevIndex);
        navigate(navItems[prevIndex].path);
      } 
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedIndex, navItems, navigate]);

  return focusedIndex;
}
