import { useEffect, useState } from 'react';
import { Dimensions, Image } from 'react-native';

export const useImageDimensions = (uri: string) => {
  const { width: w, height: h } = Dimensions.get('screen');
  const [loading, setLoading] = useState(true);

  const [dimensions, setDimensions] = useState({
    width: w,
    height: h,
    aspectRatio: w / h,
  });

  useEffect(() => {
    Image.getSize(uri, (width, height) => {
      setDimensions(state => ({
        ...state,
        height,
        aspectRatio: width / height,
      }));

      setLoading(false);
    });
  }, []);

  return { ...dimensions, loading };
};
