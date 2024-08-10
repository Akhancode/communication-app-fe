// src/components/common/ProfileCircle.tsx
import React from "react";

interface ProfileCircleProps {
  imageUrl?: string; // URL of the profile image
  size?: string; // Optional size, e.g., 'w-24 h-24'
  borderColor?: string; // Optional border color
  userName?: string;
}
interface IDotCircle {
  size?: string; // Optional size, e.g., 'w-24 h-24'
  borderColor?: string; // Optional border color
  countMsg?: number;
}

const ProfileCircle: React.FC<ProfileCircleProps> = ({
  imageUrl,
  userName,
  size = "w-20 h-20",
  borderColor = "border-gray-300",
}) => {
  return (
    <div
      className={`relative ${size} rounded-full overflow-hidden border-[1px] border-accent bg-surface `}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Profile"
          className="object-cover w-full h-full"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-light font-sans text-4xl">
            {String(userName)[0].toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );
};
export const DotCircle: React.FC<IDotCircle> = ({
  countMsg = 0,  size = "w-6 h-6",
  borderColor = "border-gray-300",
}) => {
  if (!countMsg) return;
  return (
    <div
      className={`relative ${size} rounded-full overflow-hidden border-[1px] border-accent bg-surface `}
    >
      
      <div className="w-full h-full flex items-center justify-center">
        <span className="font-mono text-xs">{countMsg}</span>
      </div>
      
    </div>
  );
};

export default ProfileCircle;
