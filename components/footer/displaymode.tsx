'use client';

import React, { useState } from 'react';
import Image from 'next/image';

enum Mode {
  Light,
  Dark
}

export interface IDisplayModeButton {
  size?: number;
}

export default function DisplayModeButton({ size }: IDisplayModeButton) {
  const [displayMode, setDisplayMode] = useState(Mode.Dark);
  const defaultIconSize = 40;

  switch (displayMode) {
    case Mode.Dark:
      return (
        <Image
          src='images/dark/sun.svg'
          alt='Enable light mode'
          width={size ? size : defaultIconSize}
          height={size ? size : defaultIconSize}
          className='cursor-pointer'
          onClick={() => setDisplayMode(Mode.Light)}
        />
      );

    case Mode.Light:
      return (
        <Image
          src='images/light/moon.svg'
          alt='Enable dark mode'
          width={size ? size : defaultIconSize}
          height={size ? size : defaultIconSize}
          className='cursor-pointer'
          onClick={() => setDisplayMode(Mode.Dark)}
        />
      );

    default:
      return;
  }
}
