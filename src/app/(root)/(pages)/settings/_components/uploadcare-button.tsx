'use client';
// import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import type {
  OutputCollectionState,
  OutputCollectionStatus,
} from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';
import type { User } from '@/lib/types';

const pubKey = process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY;

const imageTypes = ['jpeg', 'jpg', 'png', 'gif', 'svg'];

type Props = {
  onUpload: (e: string) => Promise<User>;
};

type UploadFile = {
  fileInfo: {
    imageInfo: {
      format: string;
    };
  };
  cdnUrl: string;
};

export default function UploadCareButton({ onUpload }: Props) {
  const router = useRouter();

  const checkFile = (file: UploadFile): boolean => {
    try {
      const fileType: string = file.fileInfo.imageInfo.format;
      console.log(fileType.toLowerCase());
      if (fileType && imageTypes.includes(fileType.toLowerCase())) {
        console.log('File is an image');
        return true;
      }

      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  const handleChangeEvent = async (
    e: OutputCollectionState<OutputCollectionStatus, 'maybe-has-group'>,
  ) => {
    const file: UploadFile = e.allEntries[0] as UploadFile;
    if (checkFile(file)) {
      onUpload(file.cdnUrl);
      router.refresh();
    }
  };

  return (
    <main>
      <h1>Hello from UC File Uploader</h1>
      <FileUploaderRegular pubkey={pubKey} onChange={handleChangeEvent} />
    </main>
  );
}
