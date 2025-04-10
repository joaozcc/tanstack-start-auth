import { cn } from 'app/lib/utils';
import type React from 'react';

export type MaskedImageVariant =
  | 'shape1'
  | 'shape2'
  | 'shape3'
  | 'shape4'
  | 'shape5'
  | 'shape6';

interface MaskedImageProps {
  src: string;
  alt: string;
  variant?: MaskedImageVariant;
  className?: string;
}

const getMaskUrl = (variant: MaskedImageVariant): string => {
  const maskMap: Record<MaskedImageVariant, string> = {
    shape1: '/mask-shape-1.svg',
    shape2: '/mask-shape-2.svg',
    shape3: '/mask-shape-3.svg',
    shape4: '/mask-shape-4.svg',
    shape5: '/mask-shape-5.svg',
    shape6: '/mask-shape-6.svg',
  };

  return maskMap[variant];
};

export const MaskedImage: React.FC<MaskedImageProps> = ({
  src,
  alt,
  variant = 'shape1',
  className,
}) => {
  const maskUrl = getMaskUrl(variant);

  return (
    <img
      className={cn(
        'mask-no-repeat object-cover mask-size-[100%_100%] mask-center',
        className,
      )}
      style={{ maskImage: `url(${maskUrl})` }}
      src={src}
      alt={alt}
    />
  );
};
