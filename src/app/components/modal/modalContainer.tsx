'use client';
import React from 'react';
import { ReactNode, useState } from 'react';

interface BaseTriggerProps {
    onClick: () => void;
  }

interface ModalContainerProps<T extends BaseTriggerProps> {
  ModalTrigger: React.ComponentType<T>;
  triggerProps?: Partial<T>
  Modal: React.ComponentType<{ isOpen: boolean; onClose: () => void }>;
  children?: ReactNode;
  className?: string;
}

const ModalContainer = <T extends BaseTriggerProps>({ ModalTrigger, triggerProps, Modal, children, className }: ModalContainerProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const combinedProps = {
    ...(triggerProps || {}),
    onClick: () => setIsOpen(true),
  } as T;
  return (
    <div className={className}>
      <ModalTrigger {...combinedProps} onClick={() => setIsOpen(true)}/>
      {children}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
export default ModalContainer;
