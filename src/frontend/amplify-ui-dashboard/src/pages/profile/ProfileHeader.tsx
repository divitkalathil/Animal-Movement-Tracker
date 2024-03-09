import React from "react";
import { Flex, Text } from "@aws-amplify/ui-react";

interface ProfileHeaderProps {
  name?: string;
  email?: string;
  imageSrc?: string;
}

const ProfileHeader = (props: ProfileHeaderProps) => {
  console.log(props);
  return (
    <>
      <Flex
        direction={{ base: "column", large: "row" }}
        alignItems="flex-start"
      >
        <div className="profile-header-image">
          <img alt="avatar" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9jpBa_t33gXkN-YKEElze9vE4Z5gmH5zVoZ-ncb7Rvi3LA0JKK3fklQV-qBI4dasa94Y&usqp=CAU"}></img>
        </div>
        <div className="profile-header-text">
          <Text variation="primary" fontWeight={600} fontSize="18px">
            Divit Kalathil
          </Text>
          <Text variation="tertiary">divitkalathil@gmail.com</Text>
        </div>
      </Flex>
    </>
  );
};

export default ProfileHeader;
