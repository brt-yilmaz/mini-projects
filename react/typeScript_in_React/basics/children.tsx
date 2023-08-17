// @ts-nocheck

// There are two common paths to describing the children of a component :

interface ModalRendererProps {
  title: string;
  children: React.ReactNode;
}

// or

interface ModalRendererProps {
  title: string;
  children: React.ReactElement;
}