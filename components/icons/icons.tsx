import React from 'react';
import Image from 'next/image';

export enum Icons {
  Github = 'github',
  Gitea = 'gitea'
}

export interface IIconRow {
  icons: Icons[];
  className?: string;
  size?: number;
}

export default function IconRow({ icons, className, size }: IIconRow) {
  const defaultIconSize: number = 100;

  function iconToImage(icon: Icons) {
    switch (icon) {
      case Icons.Gitea:
        return (
          <a href='https://git.roryhealy.dev'>
            <Image
              src='images/gitea.svg'
              alt='Gitea Logo'
              width={size ? size : defaultIconSize}
              height={size ? size : defaultIconSize}
            />
          </a>
        );
      case Icons.Github:
        return (
          <a href='https://github.com/roryhealy'>
            <Image
              src='images/github.svg'
              alt='Gitea Logo'
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
