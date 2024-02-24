import { FC } from 'react';

interface SystemAvatarProps {
  role?:
    | 'dalle-3'
    | 'dall-e-3'
    | 'sdxl'
    | 'stable-diffusion-v1.5'
    | 'stable-diffusion-v2.1'
    | 'kandinsky-v2.2'
    | 'kandinsky-v2'
    | 'deepfloyd-if'
    | 'openjourney-xl'
    | 'openjourney-v4'
    | 'dreamshaper'
    | 'majicmixsombre'
    | 'pastelMixAnime'
    | 'absoluteReality'
    | 'anything'
    | 'meinamix'
    | 'deliberate'
    | 'revAnimated'
    | 'realisticVision'
    | 'Midjourney'
    | 'Replicate';
}

const SystemAvatar: FC<
  SystemAvatarProps & React.ImgHTMLAttributes<HTMLImageElement>
> = ({ role, ...props }) => {
  let src = '/openai.webp';
  if (role === 'Midjourney') {
    src = '/midjourney.webp';
  } else if (role === 'Replicate') {
    src = '/replicate.svg';
  }
  return <img width={32} height={32} {...props} src={src} />;
};

export default SystemAvatar;
