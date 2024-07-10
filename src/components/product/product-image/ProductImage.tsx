import Image from 'next/image';
import {Image as Imagen} from "@nextui-org/react";

interface Props {
  src?: string;
  alt: string;
  className?: React.StyleHTMLAttributes<HTMLImageElement>['className'];
  style?: React.StyleHTMLAttributes<HTMLImageElement>['style'];
  width: number;
  height: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isZoomed?: boolean | undefined;
}

export const ProductImage = ({
  src,
  alt,
  className,
  style,
  width,
  height,
  onMouseEnter,
  onMouseLeave,
  isZoomed 
}: Props) => {

  const localSrc = ( src ) 
    ? src.startsWith('http') // https://urlcompletodelaimagen.jpg
      ? src
      : `/products/${ src }`
    : '/imgs/placeholder.jpg';

  return (
    <Imagen
      src={ localSrc }
      width={ width }
      height={ height}
      alt={ alt }
      className={ className }
      style={ style }
      onMouseEnter={ onMouseEnter }
      onMouseLeave={onMouseLeave}
      isZoomed
    />
  );
};
