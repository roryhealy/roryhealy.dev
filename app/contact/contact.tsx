'use client';

import React from 'react';
import * as Form from '@radix-ui/react-form';

import IconRow, { Icons } from '@/components/icons/icons';
import { DisplayMode } from '@/components/displaymode/displaymode';

export default function ContactPage() {
  return (
    <div className='bg-custom-grey-2 flex flex-col items-center w-[35%] h-[85%] text-custom-white'>
      <h2 className='font-bold text-4xl uppercase mt-10'>Contact Me</h2>

      <Form.Root className='w-4/5 flex flex-col flex-1 gap-y-5 justify-center'>
        <div className='flex justify-between'>
          <Form.Field name='name' className='flex flex-col gap-y-2 w-[45%]'>
            <Form.Label>Name</Form.Label>
            <Form.Message match='valueMissing'>Please enter your name</Form.Message>
            <Form.Control type='text' className='h-8 bg-custom-white text-custom-grey-1 rounded' />
          </Form.Field>

          <Form.Field name='email' className='flex flex-col gap-y-2 w-[45%]'>
            <Form.Label>Email</Form.Label>
            <Form.Message match='valueMissing'>Please enter your email</Form.Message>
            <Form.Control type='email' className='h-8 bg-custom-white text-custom-grey-1 rounded' />
          </Form.Field>
        </div>

        <Form.Field name='message' className='flex flex-col gap-y-2'>
          <Form.Label>Message</Form.Label>
          <Form.Message match='valueMissing'>Please enter your message</Form.Message>
          <Form.Control type='text' className='h-60 bg-custom-white text-custom-grey-1 rounded-md' />
        </Form.Field>

        <Form.Submit className='bg-custom-blue-2 w-20 h-8 rounded place-self-end text-custom-grey-1'>
          Submit
        </Form.Submit>
      </Form.Root>

      <IconRow
        icons={[Icons.Github, Icons.Gitea, Icons.Mail]}
        size={50}
        className='mb-10'
        displayMode={DisplayMode.Dark}
      />
    </div>
  );
}
