import React from 'react';
// import Applink from "./Frame 32.png";
import GooglePlayScanner from "./assets/googleplayscanner.png";
import GooglePlayStore from "./assets/googleplaystore.png";
import AppleScanner from "./assets/iosScanner.png";
import AppleStore from "./assets/Appstore.png"


const applink = () => {
  return (
    <div className="app-text">
    <div className="applink2">
    <div className='download_container'>
  <div className='download_text'>Download the <span style={{color:"#C68643",fontWeight:"700"}}>Mobile App Now</span></div>
  <div className='download_applinks_container'>
    <div className='google_playstore'>
      <div className='playstore_scanner'><img src={GooglePlayScanner} alt="" /></div>
      <div className='playstore_link'> <a
                      href="https://play.google.com/store/apps/details?id=com.rubia.user&pcampaignid=web_share "
                      target="blank"
                    >
                     <img src={GooglePlayStore} alt="" />
                    </a></div>
    </div>
    <div className='ios_store'>
    <div className='ios_scanner'><img src={AppleScanner} alt="" /></div>
    <div className='ios_link'> <a
                      href="https://apps.apple.com/in/app/rubia/id6459829353"
                      target="blank"
                    >
                      <img src={AppleStore} alt="" />
                    </a></div>
    </div>
  </div>
</div>
</div>

</div>
  )
}

export default applink