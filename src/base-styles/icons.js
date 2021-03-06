import styled, { css } from 'styled-components'
import { defaultTransition } from '../base-styles/animations'

import COLOR from './color'

import calendar from '../../static/icons/icon_calendar.svg'
import arrowLeft from '../../static/icons/icon_arrow_left.svg'
import arrowRight from '../../static/icons/icon_arrow_right.svg'
import arrowLong from '../../static/icons/icon_arrow_long.svg'
import clock from '../../static/icons/icon_Clock.svg'
import download from '../../static/icons/icon_Download.svg'
import fish from '../../static/icons/icon_fish.svg'
import id from '../../static/icons/icon_ID.svg'
import jellyfish from '../../static/icons/icon_jellyfish.svg'
import parking from '../../static/icons/icon_parking.svg'
import pin from '../../static/icons/icon_Pin.svg'
import shop from '../../static/icons/icon_shop.svg'
import stroller from '../../static/icons/icon_stroller.svg'
import ticket from '../../static/icons/icon_ticket.svg'
import usd from '../../static/icons/icon_USD.svg'

const StyledSVG = styled.svg`
  & > * {
    ${defaultTransition}
  }

  ${({ flipped }) =>
    flipped &&
    css`
      transform: scale(-1, -1);
    `}
`

export const ArrowLeft = ({ fill, size }) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}`}
      height={`${size}`}
      viewBox={`0 0 16 16`}
    >
      <path
        fill={`${fill}`}
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        d="M2.87281046,9.10552987 L2.19140579,8.42576593 C2.06380179,8.29816193 2,8.14321466 2,7.96092329 C2,7.77863192 2.06380179,7.62368465 2.19140579,7.49608065 L7.49608065,2.19140579 C7.62368465,2.06380179 7.77863192,2 7.96092329,2 C8.14321466,2 8.29816193,2.06380179 8.42576593,2.19140579 L13.7304408,7.49608065 C13.8580448,7.62368465 13.9218466,7.77863192 13.9218466,7.96092329 C13.9218466,8.14321466 13.8580448,8.29816193 13.7304408,8.42576593 L13.1288797,9.027327 C13.0012757,9.17315984 12.8463284,9.24151905 12.6640371,9.23240463 C12.4817457,9.22329021 12.3267984,9.154931 12.1991944,9.027327 L9.05467068,5.74608482 L9.05467068,13.5937224 C9.05467068,13.7760137 8.99086889,13.930961 8.86326489,14.058565 C8.73566089,14.186169 8.58071362,14.2499708 8.39842224,14.2499708 L7.52342433,14.2499708 C7.34113296,14.2499708 7.18618569,14.186169 7.05858169,14.058565 C6.93097769,13.930961 6.8671759,13.7760137 6.8671759,13.5937224 L6.8671759,5.74608482 L3.72265214,9.027327 C3.59504814,9.154931 3.44010087,9.22329021 3.2578095,9.23240463 C3.1119764,9.23969617 2.98364353,9.19740458 2.87281046,9.10552987 Z"
        transform="translate(7.960923, 8.124985) scale(-1, 1) rotate(90.000000) translate(-7.960923, -8.124985) "
      ></path>
    </StyledSVG>
  )
}

export const ArrowRight = ({ fill, size }) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}`}
      height={`${size}`}
      viewBox={`0 0 16 16`}
    >
      <path
        fill={`${fill}`}
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        d="M2.873 9.106l-.682-.68A.633.633 0 012 7.96c0-.182.064-.337.191-.465l5.305-5.305A.633.633 0 017.961 2c.182 0 .337.064.465.191l5.304 5.305a.633.633 0 01.192.465.633.633 0 01-.192.465l-.601.601a.556.556 0 01-.465.205.684.684 0 01-.465-.205l-3.144-3.28v7.847a.633.633 0 01-.192.465.633.633 0 01-.465.191h-.875a.633.633 0 01-.464-.191.633.633 0 01-.192-.465V5.746L3.723 9.027a.684.684 0 01-.465.205.54.54 0 01-.385-.126z"
        transform="rotate(90 7.96 8.125)"
      />
    </StyledSVG>
  )
}

export const ArrowLong = ({ flipped, dark }) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="11"
      viewBox="0 0 16 11"
      flipped={flipped}
    >
      <path
        fill={dark ? '#012A3A' : '#ffffff'}
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        d="M25.528 13.977a.316.316 0 01.266-.133c.11 0 .199.044.265.133l4.383 4.382a.316.316 0 01.133.266c0 .11-.044.2-.133.266l-4.383 4.382a.316.316 0 01-.265.133c-.111 0-.2-.044-.266-.133l-.664-.63a.413.413 0 01-.133-.3c0-.11.044-.198.133-.265l2.69-2.59H16.097a.384.384 0 01-.282-.116.384.384 0 01-.116-.282v-.93c0-.11.039-.205.116-.282a.384.384 0 01.282-.116h11.455l-2.689-2.59a.316.316 0 01-.133-.266c0-.11.044-.21.133-.299l.664-.63z"
        transform="translate(-681 -4169) translate(611 4156) matrix(-1 0 0 1 105 0) matrix(-1 0 0 1 50 0)"
      />
    </StyledSVG>
  )
}

export const Hamburger = ({ fill, size }) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 16 16"
    >
      <g
        id="icon_hamburger"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M14.773407,4.50783513 C14.8710629,4.50783513 14.9540708,4.47365538 15.0224299,4.40529631 C15.090789,4.33693725 15.1249687,4.25392934 15.1249687,4.15627347 L15.1249687,3.2187757 C15.1249687,3.12111984 15.090789,3.03811192 15.0224299,2.96975286 C14.9540708,2.9013938 14.8710629,2.86721404 14.773407,2.86721404 L2.35156166,2.86721404 C2.25390579,2.86721404 2.17089788,2.9013938 2.10253882,2.96975286 C2.03417976,3.03811192 2,3.12111984 2,3.2187757 L2,4.15627347 C2,4.25392934 2.03417976,4.33693725 2.10253882,4.40529631 C2.17089788,4.47365538 2.25390579,4.50783513 2.35156166,4.50783513 L14.773407,4.50783513 Z M14.773407,9.19532396 C14.8710629,9.19532396 14.9540708,9.1611442 15.0224299,9.09278514 C15.090789,9.02442607 15.1249687,8.94141816 15.1249687,8.84376229 L15.1249687,7.90626453 C15.1249687,7.80860866 15.090789,7.72560075 15.0224299,7.65724168 C14.9540708,7.58888262 14.8710629,7.55470287 14.773407,7.55470287 L2.35156166,7.55470287 C2.25390579,7.55470287 2.17089788,7.58888262 2.10253882,7.65724168 C2.03417976,7.72560075 2,7.80860866 2,7.90626453 L2,8.84376229 C2,8.94141816 2.03417976,9.02442607 2.10253882,9.09278514 C2.17089788,9.1611442 2.25390579,9.19532396 2.35156166,9.19532396 L14.773407,9.19532396 Z M14.773407,13.8828128 L2.35156166,13.8828128 C2.25390579,13.8828128 2.17089788,13.848633 2.10253882,13.780274 C2.03417976,13.7119149 2,13.628907 2,13.5312511 L2,12.5937534 C2,12.4960975 2.03417976,12.4130896 2.10253882,12.3447305 C2.17089788,12.2763714 2.25390579,12.2421917 2.35156166,12.2421917 L14.773407,12.2421917 C14.8710629,12.2421917 14.9540708,12.2763714 15.0224299,12.3447305 C15.090789,12.4130896 15.1249687,12.4960975 15.1249687,12.5937534 L15.1249687,13.5312511 C15.1249687,13.628907 15.090789,13.7119149 15.0224299,13.780274 C14.9540708,13.848633 14.8710629,13.8828128 14.773407,13.8828128 Z"
          fill={`${fill}`}
          fillRule="nonzero"
        ></path>
      </g>
    </StyledSVG>
  )
}

export const Close = ({ fill, size }) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 170.00012 240"
    >
      <path
        fill={`${fill}`}
        d="M106.21277,120l59.39355-59.39355c5.8584-5.85791,5.8584-15.35498,0-21.21289 c-5.85742-5.8584-15.35547-5.8584-21.21289,0L84.99988,98.78711L25.60632,39.39355c-5.85742-5.8584-15.35547-5.8584-21.21289,0 c-5.85791,5.85791-5.85791,15.35498,0,21.21289L63.78699,120L4.39343,179.39355c-5.85791,5.85742-5.85791,15.35547,0,21.21289 C7.32214,203.53516,11.16101,205,14.99988,205s7.67773-1.46484,10.60645-4.39355l59.39355-59.39355l59.39355,59.39355 C147.32214,203.53516,151.16101,205,154.99988,205s7.67773-1.46484,10.60645-4.39355c5.8584-5.85742,5.8584-15.35547,0-21.21289 L106.21277,120z"
      />
    </StyledSVG>
  )
}

export const Search = ({ fill, size }) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 14 14"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          transform="translate(-1384.000000, -10.000000)"
          fill={`${fill}`}
          fillRule="nonzero"
        >
          <g id="Group-Copy" transform="translate(1016.000000, 7.000000)">
            <g id="Search" transform="translate(368.000000, 3.000000)">
              <path
                d="M13.6573716,12.0028445 L10.6159433,8.96147208 C10.5997795,8.94530826 10.5808191,8.93401036 10.5639282,8.91896513 C11.1623813,8.01116207 11.5116654,6.92449423 11.5116654,5.75588865 C11.5116654,2.57698392 8.93468152,0 5.75583272,0 C2.57698392,0 0,2.57698392 0,5.75583272 C0,8.93462559 2.57692799,11.5116654 5.75577679,11.5116654 C6.9244383,11.5116654 8.01105021,11.1623813 8.91885327,10.5639282 C8.93389849,10.5807632 8.94514046,10.5997235 8.96130429,10.6158874 L12.0027885,13.6573716 C12.4596823,14.1142095 13.2004219,14.1142095 13.6573716,13.6573716 C14.1142095,13.2004778 14.1142095,12.4597382 13.6573716,12.0028445 Z M5.75583272,9.51629966 C3.67892071,9.51629966 1.99530985,7.8326888 1.99530985,5.75583272 C1.99530985,3.67892071 3.67897664,1.99530985 5.75583272,1.99530985 C7.83263287,1.99530985 9.51629966,3.67897664 9.51629966,5.75583272 C9.51629966,7.8326888 7.83263287,9.51629966 5.75583272,9.51629966 Z"
                id="Shape"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </StyledSVG>
  )
}

export const Pipe = ({ fill, size }) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width="1px"
      height="17px"
      viewBox="0 0 1 17"
    >
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      >
        <g transform="translate(-1127.000000, -9.000000)" stroke="#D4DBDF">
          <g transform="translate(1016.000000, 7.000000)">
            <path d="M111.5,2.5 L111.5,18.5"></path>
          </g>
        </g>
      </g>
    </StyledSVG>
  )
}

export const Clock = ({ fill, size }) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 16 16"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M7.99998569,2.68752459 C9.04685832,2.68752459 10.0156059,2.94924283 10.9062288,3.47267896 C11.7968516,3.9961151 12.5038813,4.70314478 13.0273175,5.59376766 C13.5507536,6.48439053 13.8124718,7.45313811 13.8124718,8.50001073 C13.8124718,9.54688335 13.5507536,10.5156309 13.0273175,11.4062538 C12.5038813,12.2968767 11.7968516,13.0039064 10.9062288,13.5273425 C10.0156059,14.0507786 9.04685832,14.3124969 7.99998569,14.3124969 C6.95311307,14.3124969 5.9843655,14.0507786 5.09374262,13.5273425 C4.20311975,13.0039064 3.49609006,12.2968767 2.97265393,11.4062538 C2.4492178,10.5156309 2.18749955,9.54688335 2.18749955,8.50001073 C2.18749955,7.45313811 2.4492178,6.48439053 2.97265393,5.59376766 C3.49609006,4.70314478 4.20311975,3.9961151 5.09374262,3.47267896 C5.9843655,2.94924283 6.95311307,2.68752459 7.99998569,2.68752459 Z M8.56248435,4.93751922 L7.43748704,4.93751922 C7.35936234,4.93751922 7.29295601,4.96486303 7.23826876,5.01955028 C7.18358151,5.07423753 7.15623771,5.14064386 7.15623771,5.21876855 L7.15623771,5.21876855 L7.15623771,9.15625916 C7.15623771,9.25000894 7.19530023,9.32813364 7.27342493,9.39063361 L7.27342493,9.39063361 L9.33592001,10.89063 C9.39841998,10.9375049 9.46873231,10.95313 9.54685701,10.9375049 C9.6249817,10.9218798 9.68748167,10.8828177 9.73435656,10.8203177 L9.73435656,10.8203177 L10.390605,9.92969482 C10.4374799,9.86719485 10.457011,9.79688252 10.4491986,9.71875782 C10.4413862,9.64063313 10.4062301,9.57813316 10.3437301,9.53125827 L10.3437301,9.53125827 L8.84373368,8.45313584 L8.84373368,5.21876855 C8.84373368,5.14064386 8.81638988,5.07423753 8.76170263,5.01955028 C8.70701538,4.96486303 8.64060905,4.93751922 8.56248435,4.93751922 L8.56248435,4.93751922 Z"
          fill={`${fill}`}
          fillRule="nonzero"
        ></path>
      </g>
    </StyledSVG>
  )
}

export const Pin = ({ fill, size }) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 16 16"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M8.03124039,13.265622 C8.14061525,13.4218717 8.29686464,13.4999964 8.49998927,13.4999964 C8.70311391,13.4999964 8.8593633,13.4218717 8.96873815,13.265622 L10.5390469,11.0156273 C11.2644915,9.97098698 11.7609029,9.24295151 12.0282812,8.83152065 L12.0859182,8.74219527 C12.4452922,8.17969661 12.6874794,7.70704137 12.812479,7.3242299 C12.9374786,6.94141843 12.9999785,6.50001299 12.9999785,6.00001431 C12.9999785,5.18751612 12.7968539,4.43751791 12.390605,3.75001967 C11.9843561,3.06252143 11.4374821,2.51564749 10.7499839,2.10939858 C10.0624857,1.70314967 9.31248745,1.50002503 8.49998927,1.50002503 C7.68749109,1.50002503 6.93749288,1.70314967 6.24999464,2.10939858 C5.56249639,2.51564749 5.01562246,3.06252143 4.60937355,3.75001967 C4.20312463,4.43751791 4,5.18751612 4,6.00001431 C4,6.50001299 4.06249997,6.94141843 4.18749955,7.3242299 C4.29464205,7.65235401 4.48788155,8.0464858 4.76721759,8.50662503 L4.91406032,8.74219527 C5.16405984,9.13281946 5.67968361,9.89063003 6.46093163,11.0156273 L7.52477189,12.5317371 C7.7100742,12.798338 7.87889705,13.0429663 8.03124039,13.265622 Z M8.49998927,7.87500983 C7.9843655,7.87500983 7.54296042,7.69141664 7.17577368,7.3242299 C6.80858693,6.95704315 6.62499374,6.51563808 6.62499374,6.00001431 C6.62499374,5.48439053 6.80858693,5.04298546 7.17577368,4.67579871 C7.54296042,4.30861197 7.9843655,4.12501878 8.49998927,4.12501878 C9.01561304,4.12501878 9.45701812,4.30861197 9.82420486,4.67579871 C10.1913916,5.04298546 10.3749848,5.48439053 10.3749848,6.00001431 C10.3749848,6.51563808 10.1913916,6.95704315 9.82420486,7.3242299 C9.45701812,7.69141664 9.01561304,7.87500983 8.49998927,7.87500983 Z"
          id="m"
          fill={`${fill}`}
          fillRule="nonzero"
        ></path>
      </g>
    </StyledSVG>
  )
}

export const CaretRight = ({ fill, size }) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}`}
      height={`${size}`}
      viewBox={`0 0 ${size} ${size}`}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          transform="translate(-328.000000, -176.000000)"
          fill={`${fill}`}
          fillRule="nonzero"
        >
          <path
            d="M333.680671,181.333001 L329.079089,185.86424 C328.895527,186.047841 328.598629,186.047841 328.415029,185.86424 L328.137701,185.586912 C327.9541,185.403311 327.9541,185.106414 328.137701,184.922851 L332.133777,181.00097 L328.141592,177.079089 C327.958029,176.895527 327.958029,176.598629 328.141592,176.415029 L328.418958,176.137701 C328.602559,175.9541 328.899418,175.9541 329.083019,176.137701 L333.684562,180.66894 C333.864234,180.852541 333.864234,181.1494 333.680671,181.333001 Z"
            id="A"
          ></path>
        </g>
      </g>
    </StyledSVG>
  )
}

const NavArrowSVG = styled.svg`
  path {
    fill: ${({ dark }) => (dark ? COLOR.impact.default : COLOR.white.default)};
  }
`

export const NavArrowLeft = ({ dark }) => (
  <NavArrowSVG
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="15"
    viewBox="0 0 9 15"
    dark={dark}
  >
    <path
      fillRule="nonzero"
      stroke="none"
      strokeWidth="1"
      d="M5.845 7.5L.625 2.39c-.5-.49-.5-1.29 0-1.78.491-.48 1.28-.48 1.772 0l5.872 5.75a1.593 1.593 0 010 2.28l-5.872 5.75a1.265 1.265 0 01-1.772 0c-.5-.49-.5-1.29 0-1.78l5.22-5.11zm-4.334 5.75a.235.235 0 00-.164.068l5.873-5.75a.093.093 0 000-.136l-5.873-5.75c.092.09.236.09.327 0 .101-.098.101-.266 0-.364L7.99 7.5l-6.316 6.182c.101-.098.101-.266 0-.364a.235.235 0 00-.163-.068z"
      transform="translate(-671 -663) translate(655 652) translate(16 11) matrix(-1 0 0 1 9 0)"
    />
  </NavArrowSVG>
)

export const HeroPlay = ({ dark }) => (
  <StyledSVG
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="11"
    viewBox="0 0 9 11"
    className="hero-controller-icon"
  >
    <path
      fill="#FFF"
      fillRule="nonzero"
      stroke="none"
      strokeWidth="1"
      d="M1331.281 421.45c.209.116.349.28.42.488a.936.936 0 010 .625.878.878 0 01-.42.488l-6.875 4.062a.88.88 0 01-.625.117.942.942 0 01-.556-.312.883.883 0 01-.225-.606v-8.124c0-.26.078-.472.234-.635a.959.959 0 01.567-.293.854.854 0 01.605.127l6.875 4.062z"
      transform="translate(-1323 -417)"
    ></path>
  </StyledSVG>
)

export const HeroPause = ({ dark }) => (
  <StyledSVG
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="10"
    viewBox="0 0 9 10"
    className="hero-controller-icon"
  >
    <path
      fill="#FFF"
      fillRule="nonzero"
      stroke="none"
      strokeWidth="1"
      d="M1328.938 443.605a.904.904 0 01-.665-.273.904.904 0 01-.273-.664v-6.875c0-.26.091-.482.273-.664a.904.904 0 01.665-.274h1.874c.26 0 .482.092.665.274a.904.904 0 01.273.664v6.875c0 .26-.091.482-.273.664a.904.904 0 01-.665.273h-1.874zm7.812-.937c0 .26-.091.482-.273.664a.904.904 0 01-.665.273h-1.875a.904.904 0 01-.664-.273.904.904 0 01-.273-.664v-6.875c0-.26.091-.482.273-.664a.904.904 0 01.664-.274h1.875c.26 0 .482.092.665.274a.904.904 0 01.273.664v6.875z"
      transform="translate(-1328 -434)"
    ></path>
  </StyledSVG>
)

export const NavArrowRight = ({ dark }) => (
  <NavArrowSVG
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="15"
    viewBox="0 0 9 15"
    dark={dark}
  >
    <path
      fillRule="nonzero"
      stroke="none"
      strokeWidth="1"
      d="M5.845 7.5L.625 2.39c-.5-.49-.5-1.29 0-1.78.491-.48 1.28-.48 1.772 0l5.872 5.75a1.593 1.593 0 010 2.28l-5.872 5.75a1.265 1.265 0 01-1.772 0c-.5-.49-.5-1.29 0-1.78l5.22-5.11zm-4.334 5.75a.235.235 0 00-.164.068l5.873-5.75a.093.093 0 000-.136l-5.873-5.75c.092.09.236.09.327 0 .101-.098.101-.266 0-.364L7.99 7.5l-6.316 6.182c.101-.098.101-.266 0-.364a.235.235 0 00-.163-.068z"
      transform="translate(-671 -663) translate(655 652) translate(16 11)"
    />
  </NavArrowSVG>
)

export const CenterNavArrowLeft = ({ dark }) => (
  <StyledSVG
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="28"
    viewBox="0 0 15 28"
  >
    <path
      fill={dark ? COLOR.white.default : COLOR.impact.default}
      fillRule="nonzero"
      stroke="none"
      strokeWidth="1"
      d="M2.862 1.229l10.953 11.187a2.265 2.265 0 010 3.157L2.862 26.76a1.515 1.515 0 01-2.17 0 1.562 1.562 0 010-2.18l10.365-10.585L.693 3.409a1.562 1.562 0 010-2.18c.598-.61 1.57-.61 2.169 0z"
      transform="translate(-1204 -386) translate(1204 386) matrix(-1 0 0 1 14.705 0)"
    />
  </StyledSVG>
)

export const CenterNavArrowRight = ({ dark }) => (
  <StyledSVG
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="28"
    viewBox="0 0 15 28"
  >
    <path
      fill={dark ? COLOR.white.default : COLOR.impact.default}
      fillRule="nonzero"
      stroke="none"
      strokeWidth="1"
      d="M2.862 1.229l10.953 11.187a2.265 2.265 0 010 3.157L2.862 26.76a1.515 1.515 0 01-2.17 0 1.562 1.562 0 010-2.18l10.365-10.585L.693 3.409a1.562 1.562 0 010-2.18c.598-.61 1.57-.61 2.169 0z"
      transform="translate(-1204 -386) translate(1204 386)"
    />
  </StyledSVG>
)

export const Stroller = ({ dark, size }) => (
  <StyledSVG
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={`0 0 16 16`}
  >
    <path
      fill={dark ? COLOR.white.default : COLOR.impact.default}
      fillRule="evenodd"
      stroke="none"
      strokeWidth="1"
      d="M11.051 4.683H8.365v2.146H5.146V2h-1.61a.537.537 0 000 1.073h.537v3.756h.004v1.609c0 .889.72 1.61 1.61 1.61h1.04l-1.008 1.61-.037-.001a1.073 1.073 0 10.929 1.61h3.508a1.072 1.072 0 10.928-1.61l-.036.002-1.007-1.612h1.047c.89 0 1.61-.72 1.61-1.609V6.292c0-.889-.72-1.61-1.61-1.61zm-.971 7.51H6.65l1.342-2.146h.746l1.342 2.146z"
    ></path>
  </StyledSVG>
)

export const Fish = ({ dark, size }) => (
  <StyledSVG
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={`0 0 16 16`}
  >
    <g
      fill={dark ? COLOR.white.default : COLOR.impact.default}
      fillRule="evenodd"
      stroke="none"
      strokeWidth="1"
    >
      <path d="M7.292 4H3.268a.268.268 0 000 .537l.008-.001h.797s2.146 1.61 2.146 3.756-2.146 3.755-2.146 3.755v.001h-.805a.268.268 0 000 .536h4.024s4.292-.004 6.438-4.292C11.584 4.004 7.292 4 7.292 4m4.829 4.292a.537.537 0 110-1.073.537.537 0 010 1.073"></path>
      <path d="M5.683 8.292c0 .889-1.258 1.61-2.146 1.61 0 0 .536-.721.536-1.61 0-.889-.537-1.61-.537-1.61.89 0 2.147.721 2.147 1.61"></path>
    </g>
  </StyledSVG>
)

export const Parking = ({ dark, size }) => (
  <StyledSVG
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={`0 0 16 16`}
  >
    <g
      fill={dark ? COLOR.white.default : COLOR.impact.default}
      fillRule="evenodd"
      stroke="none"
      strokeWidth="1"
    >
      <path d="M8.438 6.292H7.365v1.61h1.073a.805.805 0 000-1.61"></path>
      <path d="M7.902 2a5.901 5.901 0 100 11.803A5.901 5.901 0 007.901 2m.536 7.511H7.365v1.61h-1.61V4.681h2.683a2.414 2.414 0 110 4.829"></path>
    </g>
  </StyledSVG>
)

export const Shop = ({ dark, size }) => (
  <StyledSVG
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={`0 0 16 16`}
  >
    <path
      fill={dark ? COLOR.white.default : COLOR.impact.default}
      fillRule="evenodd"
      stroke="none"
      strokeWidth="1"
      d="M9.975 4.146a2.146 2.146 0 00-4.292 0H3v8.047c0 .89.72 1.61 1.61 1.61h6.437c.89 0 1.61-.72 1.61-1.61V4.146H9.975zm-3.22 0a1.073 1.073 0 012.147 0H6.756zm3.488 3.219a.805.805 0 110-1.61.805.805 0 010 1.61z"
    ></path>
  </StyledSVG>
)

export const ICONS = {
  parking: Parking,
  fish: Fish,
  stroller: Stroller,
  shop: Shop,
}

export default {
  calendar,
  arrowLeft,
  arrowRight,
  clock,
  download,
  fish,
  id,
  jellyfish,
  parking,
  pin,
  shop,
  stroller,
  ticket,
  usd,
  arrowLong,
}
