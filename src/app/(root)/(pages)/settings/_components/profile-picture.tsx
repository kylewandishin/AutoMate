'use client';
import React from 'react';
import UploadCareButton from './uploadcare-button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import type { User } from '@/lib/types';

type Props = {
  userImage: string | null;
  onDelete: () => Promise<User>;
  onUpload: (e: string) => Promise<User>;
};

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter();

  const onRemoveProfileImage = async () => {
    const response = await onDelete();
    if (response) {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white"> Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative h-[90%] aspect-square">
              <Image
                src={userImage}
                alt="User_Image"
                fill
                loader={uploadcareLoader}
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Logo
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  );
};

export default ProfilePicture;
