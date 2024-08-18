import "./Content.css";
import ProfileImg from "../../../public/images/Bitmap.png";
import LocationIcon from "../../../public/images/Shape.png";
import UrlIcon from "../../../public/images/002-url.png";
import TwitterIcon from "../../../public/images/Path.png";
import OfficeBuilding from "../../../public/images/001-office-building.png";
import LocationIconLight from "../../../public/images/locationLight.png";
import UrlIconLight from "../../../public/images/linkLight.png";
import TwitterIconLight from "../../../public/images/twitterLight.png";
import OfficeBuildingLight from "../../../public/images/officeLight.png";
import { ThemeContext } from "../../App";
import { useContext } from "react";

function Content(props) {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="user-profile">
      <div className="user-pic">
        <img className="profile-img" src={props.profileData.avatar_url || ProfileImg} />
      </div>
      <div className="profile-info">
        <div className="user-details">
          <div className="name-nickname">
            <label className="user-name">{props.profileData.login}</label>
            <label className="user-nickname">@octocat</label>
          </div>
          <label className="profile-date">{props.profileData.created_at}</label>
        </div>
        <div className="more-info">
          <p className="description">{props.profileData.bio}</p>
          <div className="profile-action">
            <div className="following">
              <label className="action-type">Repos</label>
              <label className="action-number">
                {props.profileData.public_repos}
              </label>
            </div>
            <div className="following">
              <label className="action-type">Followers</label>
              <label className="action-number">
                {props.profileData.followers}
              </label>
            </div>
            <div className="following">
              <label className="action-type">Following</label>
              <label className="action-number">
                {props.profileData.following}
              </label>
            </div>
          </div>
          <div className="profile-contact">
            <div className="profile-links">
              <div className="links">
                {themeContext.theme == "light" ? (
                  <img className="location-img" src={LocationIcon} />
                ) : (
                  <img className="location-img" src={LocationIconLight} />
                )}
                <label className="link-address">
                  {props.profileData.location || "Not Available"}
                </label>
              </div>
              <div className="links">
                {themeContext.theme == "light" ? (
                  <img className="url-img" src={UrlIcon} />
                ) : (
                  <img className="url-img" src={UrlIconLight} />
                )}
                <a
                  className="link-address"
                  href={props.profileData.blog}
                  target="_blank"
                  disabled={!props.profileData.blog}
                >
                  {props.profileData.blog ? "blog" : "Not Available"}
                </a>
              </div>
            </div>
            <div className="profile-links right">
              <div className="links">
                {themeContext.theme == "light" ? (
                  <img className="twitter-img" src={TwitterIcon} />
                ) : (
                  <img className="twitter-img" src={TwitterIconLight} />
                )}
                <label className="link-address">
                  {props.profileData.twitter_username || "Not Available"}
                </label>
              </div>
              <div className="links">
                {themeContext.theme == "light" ? (
                  <img className="office-img" src={OfficeBuilding} />
                ) : (
                  <img className="office-img" src={OfficeBuildingLight} />
                )}
                <a
                  className="link-address"
                  href={props.profileData.html_url}
                  target="_blank"
                  disabled={!props.profileData.html_url}
                >
                  {props.profileData.html_url ? "@github" : "Not Available"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
