'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import sunSVG from '../public/images/sun.svg';
import moonSVG from '../public/images/moon.svg';

enum Mode {
  Light,
  Dark
}

interface DisplayMode {
  current: Mode;
  icon: any;
  alt: string;
}

const darkDisplayMode: DisplayMode = {
  current: Mode.Dark,
  icon: sunSVG,
  alt: 'Sun icon'
};

const lightDisplayMode: DisplayMode = {
  current: Mode.Light,
  icon: moonSVG,
  alt: 'Moon icon'
};

export default function DisplayModeButton() {
  const [displayMode, setDisplayMode] = useState(darkDisplayMode);

  const modeSwitch = () => {
    if (displayMode.current === Mode.Dark) {
      setDisplayMode(lightDisplayMode);
    } else if (displayMode.current === Mode.Light) {
      setDisplayMode(darkDisplayMode);
    } else {
      throw new TypeError('Invalid displayMode set.');
    }
  };

  return (
    <Image src={displayMode.icon} alt={displayMode.alt} className='w-10 h-10 cursor-pointer' onClick={modeSwitch} />
  );
}
