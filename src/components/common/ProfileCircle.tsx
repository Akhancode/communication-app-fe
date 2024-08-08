// src/components/common/ProfileCircle.tsx
import React from "react";

interface ProfileCircleProps {
  imageUrl?: string; // URL of the profile image
  size?: string; // Optional size, e.g., 'w-24 h-24'
  borderColor?: string; // Optional border color
}

const ProfileCircle: React.FC<ProfileCircleProps> = ({
  imageUrl,
  size = "w-20 h-20",
  borderColor = "border-gray-300",
}) => {
  return (
    <div
      className={`relative ${size} rounded-full overflow-hidden border-[1px] border-accent bg-surface  ${borderColor} ${imageUrl&&'bg-accent'}`}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Profile"
          className="object-cover w-full h-full"
        />
      )}
    </div>
  );
};

export default ProfileCircle;
