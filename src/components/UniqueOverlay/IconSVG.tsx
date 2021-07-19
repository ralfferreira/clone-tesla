import React from 'react'
import TeslaLogo from '../../assets/img/TeslaLogo.svg'

export const LogoSVG: React.FC = ({ ...props }) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    height="40px" viewBox="0 0 570.000000 141.000000"
    preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,141.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none">
    <path d="M570 851 c18 -35 52 -51 107 -51 l52 0 3 -127 3 -128 33 -3 32 -3 0
    130 0 131 60 0 c51 0 65 4 85 25 14 13 25 29 25 35 0 6 -69 10 -205 10 -201 0
    -205 0 -195 -19z"/>
    <path d="M1630 856 c0 -8 12 -24 26 -35 24 -19 40 -21 151 -21 75 0 133 5 146
    12 23 12 46 37 47 51 0 4 -83 7 -185 7 -154 0 -185 -2 -185 -14z"/>
    <path d="M2680 775 l0 -95 145 0 145 0 0 -35 0 -35 -119 0 c-114 0 -121 -1
    -150 -26 -17 -14 -31 -30 -31 -35 0 -6 74 -8 183 -7 l182 3 3 97 3 97 -148 3
    -148 3 -3 28 -3 27 119 0 c106 0 122 2 146 21 14 11 26 27 26 35 0 12 -30 14
    -175 14 l-175 0 0 -95z"/>
    <path d="M3770 706 l0 -166 149 0 c147 0 149 0 175 26 14 15 26 31 26 35 0 5
    -63 9 -140 9 l-139 0 -3 128 -3 127 -32 3 -33 3 0 -165z"/>
    <path d="M4770 856 c0 -8 12 -24 26 -35 24 -19 40 -21 153 -21 133 0 158 7
    181 51 10 19 6 19 -175 19 -154 0 -185 -2 -185 -14z"/>
    <path d="M1630 731 c0 -5 9 -19 19 -32 18 -23 26 -24 153 -27 133 -3 135 -3
    166 23 18 15 32 31 32 36 0 5 -80 9 -185 9 -102 0 -185 -4 -185 -9z"/>
    <path d="M4772 643 l3 -98 33 -3 32 -3 0 65 0 66 115 0 115 0 0 -65 0 -65 30
    0 30 0 0 100 0 100 -180 0 -181 0 3 -97z"/>
    <path d="M1630 600 c0 -6 11 -22 25 -35 23 -24 30 -25 150 -25 77 0 135 5 148
    12 23 12 46 37 47 51 0 4 -83 7 -185 7 -122 0 -185 -4 -185 -10z"/>
    </g>
    </svg>
  )
}

export const BurgerSVG: React.FC = ({ ...props }) => {
  return (
    <svg viewBox="0 0 45 30" fill="none" {...props}>
      <path fill="#000" d="M0 0h45v5H0zM0 25h45v5H0zM0 13h45v5H0z" />
    </svg>
  )
}