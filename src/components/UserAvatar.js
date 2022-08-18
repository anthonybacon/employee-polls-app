/**
 * UserAvatar.js
 * 
 * Component that render the user avatar
 * 
 */

import Image from 'react-bootstrap/Image';

const UserAvatar = ({user}) => {
    
	return (
		<Image
			src={user.avatarURL}
			fluid
			width="40"
			height="40"
            className=""
            style={{marginRight: "10px"}}
			alt={`${user.id}'s avatar`}
		/>
	);
}

export default UserAvatar;
