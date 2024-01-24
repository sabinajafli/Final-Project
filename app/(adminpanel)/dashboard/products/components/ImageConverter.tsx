import { Input } from '@/components/ui/input';
import React, { useState, ChangeEvent } from 'react';
import { RxCross2 } from 'react-icons/rx';

interface ImageConverterProps {
  onImageChange: (base64Images: string[]) => void;
}

const ImageConverter: React.FC<ImageConverterProps> = ({ onImageChange }) => {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [base64Images, setBase64Images] = useState<string[]>([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const imageFilesArray = Array.from(files);

      setImageFiles(imageFilesArray);

      const promises = imageFilesArray.map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = (e) => {
            const base64 = e.target?.result as string;
            console.log('Base64 representation:', base64);
            resolve(base64);
          };

          reader.onerror = reject;

          reader.readAsDataURL(file);
        });
      });

      Promise.all(promises)
        .then((base64Array) => {
          setBase64Images(base64Array);
          onImageChange(base64Array); 
        })
        .catch((error) => console.error('Error converting images to base64:', error));
    }
  };

  const handleDeleteImage = (index: number) => {
    const updatedBase64Images = [...base64Images];
    updatedBase64Images.splice(index, 1);
    setBase64Images(updatedBase64Images);
    onImageChange(updatedBase64Images); 
  };

  return (
    <div className='w-full'>
      <Input type='file' accept='image/*' className='p-0' multiple onChange={handleImageChange} />
      {base64Images.map((base64, index) => (
        <div key={index} style={{ position: 'relative', display: 'inline-block' }}>
          <img src={base64} alt={`Uploaded Image ${index}`} className='h-16 mt-3 mr-2' />
          <button
            type='button'
            className='absolute top-3 right-2'
            onClick={() => handleDeleteImage(index)}
          >
            <RxCross2 className='text-red-500 bg-[#fff6]' />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageConverter;
