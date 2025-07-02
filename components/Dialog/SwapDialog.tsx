import React, { FC } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from '@heroui/react';
import { FaArrowDown } from 'react-icons/fa';

import { Token } from '@/types';

interface ConfirmSwapModalProps {
  isOpen: boolean;
  onClose: () => void;
  fromToken: Token;
  toToken: Token;
}

export const ConfirmSwapModal: FC<ConfirmSwapModalProps> = ({
  isOpen,
  onClose,
  fromToken,
  toToken,
}) => {
  return (
    <Modal backdrop="blur" isOpen={isOpen} size="sm" onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Confirm Swap</ModalHeader>
            <ModalBody>
              <Input className="w-full" label={fromToken.symbol} placeholder="0.00" size="lg" />
              <div className="flex items-center justify-center my-4">
                <FaArrowDown />
              </div>
              <Input className="w-full" label={toToken.symbol} placeholder="0.00" size="lg" />
            </ModalBody>
            <ModalFooter>
              <div className="flex w-full gap-2">
                <Button className="w-full bg-emerald-400">Confirm</Button>
                <Button className="w-full" color="warning" variant="light" onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
