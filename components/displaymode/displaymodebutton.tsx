'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { DisplayMode } from './displaymode';

export interface IDisplayModeButton {
  size?: number;
}

export default function DisplayModeButton({ size }: IDisplayModeButton) {
  const [displayMode, setDisplayMode] = useState(DisplayMode.Dark);
  const defaultIconSize = 40;

  switch (displayMode) {
    case DisplayMode.Dark:
      return (
        <Image
          src='images/dark/sun.svg'
          alt='Enable light mode'
          width={size ? size : defaultIconSize}
          height={size ? size : defaultIconSize}
          className='cursor-pointer'
          onClick={() => setDisplayMode(DisplayMode.Light)}
        />
      );

    case DisplayMode.Light:
      return (
        <Image
          src='images/light/moon.svg'
          alt='Enable dark mode'
          width={size ? size : defaultIconSize}
          height={size ? size : defaultIconSize}
          className='cursor-pointer'
          onClick={() => setDisplayMode(DisplayMode.Dark)}
        />
      );

    default:
      return;
  }
}
