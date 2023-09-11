'use client';

import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

export default function Projects() {
  return (
    <Tabs.Root defaultValue='tab1' className='bg-custom-grey-2 flex flex-col w-[90%] h-[80%]'>
      <Tabs.List className='flex border-b-2 border-b-custom-blue-2'>
        <Tabs.Trigger value='tab1' className='flex-1 p-3'>
          Workout Buddy
        </Tabs.Trigger>
        <Tabs.Trigger value='tab2' className='flex-1 p-3 border-l-2 border-x-custom-blue-2'>
          The Myrtle Tree
        </Tabs.Trigger>
        <Tabs.Trigger value='tab3' className='flex-1 p-3 border-l-2 border-x-custom-blue-2'>
          MyGlucose
        </Tabs.Trigger>
        <Tabs.Trigger value='tab4' className='flex-1 p-3 border-l-2 border-x-custom-blue-2'>
          roryhealy.dev
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value='tab1'>
        <p>Workout Buddy</p>
      </Tabs.Content>

      <Tabs.Content value='tab2'>
        <p>The Myrtle Tree</p>
      </Tabs.Content>

      <Tabs.Content value='tab3'>
        <p>MyGlucose</p>
      </Tabs.Content>

      <Tabs.Content value='tab4'>
        <p>roryhealy.dev</p>
      </Tabs.Content>
    </Tabs.Root>
  );
}
