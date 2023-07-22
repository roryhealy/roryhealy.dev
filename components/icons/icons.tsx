import React from 'react';
import Image from 'next/image';

import { DisplayMode } from '@/components/displaymode/displaymode';

export enum Icons {
  Github = 'github',
  Gitea = 'gitea',
  Mail = 'mail'
}

export interface IIconRow {
  icons: Icons[];
  className?: string;
  size?: number;
  displayMode?: DisplayMode;
}

export default function IconRow({ icons, className, size, displayMode }: IIconRow) {
  const defaultIconSize: number = 100;

  function iconToImage(icon: Icons) {
    switch (icon) {
      case Icons.Gitea:
        return (
          <a href='https://git.roryhealy.dev'>
            <Image
              src={displayMode == DisplayMode.Dark ? 'images/dark/gitea.svg' : 'images/light/gitea.svg'}
              alt='Gitea logo'
              width={size ? size : defaultIconSize}
              height={size ? size : defaultIconSize}
            />
          </a>
        );
      case Icons.Github:
        return (
          <a href='https://github.com/roryhealy'>
            <Image
              src={displayMode == DisplayMode.Dark ? 'images/dark/github.svg' : 'images/light/github.svg'}
              alt='Gitea logo'
              width={size ? size : defaultIconSize}
              height={size ? size : defaultIconSize}
            />
          </a>
        );
        case Icons.Mail:
          return (
            <a href='mailto:roryhealy@proton.me'>
              <Image
                src={displayMode == DisplayMode.Dark ? 'images/dark/mail.svg' : 'images/light/mail.svg'}
                alt='Email me'
                width={size ? size : defaultIconSize}
                height={size ? size : defaultIconSize}
              />
            </a>
          );
      default:
        return;
    }
  }

  return <div className={`flex gap-x-10 ${className}`}>{icons.map((icon) => iconToImage(icon))}</div>;
}
