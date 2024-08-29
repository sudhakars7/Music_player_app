import React from 'react';

const UserProfile = ({
  userImage = "",
  userName = "starboy",
  userAlias = "The Weekend",
  userTime = "4:16",
  ...props
}) => {
  return (
    <div {...props} className={`${props.className} flex items-center justify-between w-full`}>
      <div className='flex items-center gap-2'>
        <img
          src={userImage}
          alt="Album Art"
          className='h-[48px] w-[48px] rounded-full object-cover'
        />
        <div className='flex flex-col items-start justify-center'>
          <p className='text-white font-medium'>{userName}</p>
          <p className='text-gray-400 text-sm'>{userAlias}</p>
        </div>
      </div>
      <p className='text-white ml-20'>{userTime}</p>
    </div>
  );
};

export default UserProfile;
