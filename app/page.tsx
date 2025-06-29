'use client';

import React from 'react';
import { Card, CardBody, CardFooter, Button, Divider } from '@heroui/react';

import { InputCard } from '@/components/InputCard';
import { ConfirmSwapModal } from '@/components/Dialog/SwapDialog';

export default function Home () {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <Card className='w-[400px]'>
        <CardBody>
          <InputCard chain='Qubic' fromTo={true} />
          <Divider className='my-4' />
          <InputCard chain='Solana' fromTo={false} />
        </CardBody>
        <CardFooter className='flex px-5'>
          <Button
            className='h-[40px] w-full rounded-md bg-[#61F0FE] text-[20px] text-white'
            onClick={() => setIsOpen(true)}
          >
            Swap
          </Button>
        </CardFooter>
        <ConfirmSwapModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      </Card>
    </section>
  );
}
