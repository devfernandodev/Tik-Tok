import React,{useState} from "react";
import "./videoSidebar.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import ChatSharpIcon from "@mui/icons-material/ChatSharp";
import ShareSharpIcon from "@mui/icons-material/ShareSharp";

function VideoSidebar({likes,messages,shares, name , description, music}) {

  const[liked,setliked] = useState(false)

  function handdleLike(){
      setliked(!liked)
  }
  return (
    <div className="VideoSidebar">
      <div className="VideoSidebar__options"
      onClick={handdleLike}>
        {liked ? <FavoriteSharpIcon fontSize="large"/>:<FavoriteBorderOutlinedIcon fontSize="large" />}
        
        <p>{liked? likes+1:likes}</p>
      </div>
      <div className="VideoSidebar__options">
        <ChatSharpIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="VideoSidebar__options">
        <ShareSharpIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
