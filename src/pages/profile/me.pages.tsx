import ProfileBanner from "@/components/profile/ProfileBanner";
import ProfileBody from "@/components/profile/ProfileBody";
import { FC } from "react";


const Profile: FC = () => {
  return (
    <div className="h-full bg-inherit p-8">
      <ProfileBanner />
      <ProfileBody />
    </div>
  )
};

export default Profile;
