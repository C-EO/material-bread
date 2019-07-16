import React from 'react';
import PropTypes from 'prop-types';

function IphoneX({ animated, width, height, style, children }) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 478 828"
      //   style="enable-background:new 0 0 478 828;"
      xmlSpace="preserve">
      {/* <style type="text/css">
	.st0{'fill':'url(#XMLID_2_)'}
	.st1{'fill':'#CCCCCC'}
	.st2{'fill':'none'}
	.st3{'fill':'url(#XMLID_3_)'}
	.st4{'fill':#333333;}
</style> */}
      <g id="XMLID_424_">
        <linearGradient
          id="XMLID_2_"
          gradientUnits="userSpaceOnUse"
          x1="-12.9855"
          y1="161.5145"
          x2="491.9855"
          y2="666.4855">
          <stop offset="0" stopColor={'#CCCCCC'} />
          <stop offset="1" stopColor={'#808080'} />
        </linearGradient>
        <path
          id="XMLID_428_"
          className="st0"
          fill={'url(#XMLID_2_)'}
          d="M416,107.1c0-28.8-23.3-52.1-52.1-52.1H115.1C86.3,55,63,78.3,63,107.1v613.8
		c0,28.8,23.3,52.1,52.1,52.1h248.8c28.8,0,52.1-23.3,52.1-52.1V107.1z M408,720.4c0,24.6-20,44.6-44.6,44.6H114.6
		C90,765,70,745,70,720.4V106.6C70,82,90,62,114.6,62h248.8C388,62,408,82,408,106.6V720.4z"
        />
        <polyline
          id="XMLID_271_"
          className="st1"
          points="63,149.4 59.2,149.4 59.2,176.6 63,176.6 	"
        />
        <polyline
          id="XMLID_270_"
          className="st1"
          fill={'#CCCCCC'}
          points="416,301.5 419.8,301.5 419.8,217.9 416,217.9 	"
        />
        <g id="XMLID_267_">
          <polyline
            id="XMLID_269_"
            className="st1"
            fill={'#CCCCCC'}
            points="63,201.7 59.2,201.7 59.2,252.5 63,252.5 		"
          />
          <polyline
            id="XMLID_268_"
            className="st1"
            fill={'#CCCCCC'}
            points="63,266.9 59.2,266.9 59.2,317.8 63,317.8 		"
          />
        </g>
        <path
          id="XMLID_425_"
          className="st2"
          fill={'#fff'}
          d="M364.9,74h-28.5c-6.1,0-8.3-0.1-8.7,7.6c-0.4,8-5.9,12.5-13.3,14.8c-2.5,0.8-5.3,0.6-8,0.6
		h-5.4H180.2h-5.4c-2.7,0-5.5,0.3-8-0.5c-7.4-2.3-13-7-13.3-15c-0.4-7.7-2.6-7.5-8.7-7.5h-28.8C98.4,74,85,88,85,105.5v613.3
		c0,17.5,13.4,31.2,30.9,31.2h249c17.5,0,32.1-13.8,32.1-31.2V105.5C397,88,382.4,74,364.9,74z"
        />
        {children}
        <linearGradient
          id="XMLID_3_"
          gradientUnits="userSpaceOnUse"
          x1="-8.1822"
          y1="166.3178"
          x2="486.1822"
          y2="660.6822">
          <stop offset="0" stopColor={'#666666'} />
          <stop offset="1" stopColor={'#000000'} />
        </linearGradient>
        <path
          id="XMLID_437_"
          className="st3"
          fill={'#url(#XMLID_3_)'}
          d="M408,106.6C408,82,388,62,363.4,62H114.6C90,62,70,82,70,106.6v613.8C70,745,90,765,114.6,765
		h248.8c24.6,0,44.6-20,44.6-44.6V106.6z M280.7,79.1c0,2.4-2,4.4-4.4,4.4c-2.4,0-4.4-2-4.4-4.4s2-4.4,4.4-4.4
		C278.8,74.8,280.7,76.7,280.7,79.1z M221.2,77h39c1.7,0,3,1,3,2.5s-1.3,2.5-3,2.5h-39c-1.7,0-3-1-3-2.5S219.6,77,221.2,77z
		 M397,718.8c0,17.5-14.6,31.2-32.1,31.2h-249C98.4,750,85,736.2,85,718.8V105.5C85,88,98.4,74,115.9,74h28.8c6.1,0,8.3-0.1,8.7,7.6
		c0.4,8,5.9,12.5,13.3,14.8c2.5,0.8,5.3,0.6,8,0.6h5.4h120.7h5.4c2.7,0,5.5,0.3,8-0.5c7.4-2.3,13-7,13.3-15c0.4-7.7,2.6-7.5,8.7-7.5
		h28.5c17.5,0,32.1,14,32.1,31.5V718.8z"
        />
        <circle id="XMLID_429_" className="st4" cx="276.3" cy="79.1" r="4.4" />
        <path
          id="XMLID_430_"
          className="st4"
          fill={'#333333'}
          d="M221.2,82h39c1.7,0,3-1,3-2.5s-1.3-2.5-3-2.5h-39c-1.7,0-3,1-3,2.5S219.6,82,221.2,82z"
        />
      </g>
    </svg>
  );
}

IphoneX.propTypes = {
  animated: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
};
export default IphoneX;
