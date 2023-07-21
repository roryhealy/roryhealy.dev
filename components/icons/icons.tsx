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
    return (
      <Image
        src={`images/${icon}.svg`}
        alt={`${icon.toUpperCase()} Logo`}
        width={size ? size : defaultIconSize}
        height={size ? size : defaultIconSize}
      />
    );
  }

  return <div className={`flex gap-x-10 ${className}`}>{icons.map((icon) => iconToImage(icon))}</div>;
}
