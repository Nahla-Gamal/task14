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

function Content() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="user-profile">
      <div className="user-pic">
        <img className="profile-img" src={ProfileImg} />
      </div>
      <div className="profile-info">
        <div className="user-details">
          <div className="name-nickname">
            <label className="user-name">The Octocat</label>
            <label className="user-nickname">@octocat</label>
          </div>
          <label className="profile-date">Joined 25 Jan 2011</label>
        </div>
        <div className="more-info">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
          <div className="profile-action">
            <div className="following">
              <label className="action-type">Repos</label>
              <label className="action-number">8</label>
            </div>
            <div className="following">
              <label className="action-type">Followers</label>
              <label className="action-number">3938</label>
            </div>
            <div className="following">
              <label className="action-type">Following</label>
              <label className="action-number">9</label>
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
                <label className="link-address">San Francisco</label>
              </div>
              <div className="links">
                {themeContext.theme == "light" ? (
                  <img className="url-img" src={UrlIcon} />
                ) : (
                  <img className="url-img" src={UrlIconLight} />
                )}
                <a
                  className="link-address"
                  href="https://github.blog"
                  target="_blank"
                >
                  https://github.blog
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
                <label className="link-address">Not Available</label>
              </div>
              <div className="links">
                {themeContext.theme == "light" ? (
                  <img className="office-img" src={OfficeBuilding} />
                ) : (
                  <img className="office-img" src={OfficeBuildingLight} />
                )}
                <label className="link-address">@github</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
