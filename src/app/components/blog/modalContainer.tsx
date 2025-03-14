'use client';
import React from 'react';
import { ReactNode, useState } from 'react';
interface ModalContainerProps {
  ModalTrigger: React.ComponentType<{ onClick: () => void }>;
  Modal: React.ComponentType<{ isOpen: boolean; onClose: () => void }>;
  children?: ReactNode;
  className?: string;
}

const ModalContainer = ({ ModalTrigger, Modal, children, className }: ModalContainerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={className}>
      <ModalTrigger onClick={() => setIsOpen(true)}/>
      {children}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
export default ModalContainer;
