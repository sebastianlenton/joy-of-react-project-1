import React from "react";

function Banner({bannerType, bannerText}) {
  return (
  <div className={"banner " + bannerType}>
    <p>
      {bannerText}
    </p>
  </div>
  )
}

export default Banner;
