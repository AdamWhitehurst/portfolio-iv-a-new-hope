import * as React from "react";

export const LogoSVG = (props: any) => {
  return (
  <svg
    id="logo"
    height="100%"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 600 300"
    preserveAspectRatio="none"
    className={props.svgStyle}
  >
    <path
    id="background"
    className={props.backgroundStyle}
    preserveAspectRatio="none"
    d="M0,0H600V296c-13.825.718-32.757-.232-34-13-10.992,1.008-14.557,10.489-26,6-5.493-2.479-6.4-5.674-6-14l-12,11h-7c0.2-17,10.042-21.713,12-37l-5-5-13,3c-4.425,16.51-5.43,31.966-16,42l-10-1V269c-3.979,6.549-6.3,12.551-11,18H461q-0.5-8-1-16v2l-13,15-9-1c0.159-20.285,13.013-36.455,6-51h-3c-8.963,13.391-29.895,61.816-53,51q-1-5.5-2-11l-2,2c-6.153,3.267-10.671,12.235-20,9l-7-6c-2.673,6.576-9.075,8.608-16,5q1-9.5,2-19c-5.644,7.351-7.532,14.739-14,21l-10-1c0.236-16.989,14.164-36.911,7-49v-2c-6.451,2.145-11.235,9.151-17,13-2.065-2.968-5.847-2.917-10-2-3.356,11.274-11.074,25.719-19,33h-7c-0.288-31.126,3.185-58.422,6-83h-1c-3.437,25.49-10.18,71.293-27,85-5-28.768,5.455-68.444,1-96h-1v2c-21.257,27.773-21.907,76.106-47,100l-9-1c0.33-17.6,15.578-39.792,5-51h-2l-7,9h-6c-0.86-4.056-1.655-6.592-4-9l-6,5-11,12c-7,10.634-10.507,23.918-17,34h-9V265h-1c-9.834,5.038-7.908,15.622-16,21h-6c-3.855-3.093-3-8.034-5-13v2L98,289l-8-1c-0.754-7.639.113-12.588,1-20l-4,3c-2.021,6.5-5.5,11.83-11,15l-5-1-4-18v2L55,288l-10-1,3-29H15L4,295c-6.547-2.464-4-57.509-4-70V0Z"/>
    <path
      id="text"
      preserveAspectRatio="none"
      className={props.textStyle}
      d="M572,287a11.16,11.16,0,0,0,2.871,2.457c2.734,1.506,34.651-1.562,38.129-.457l-12,11c-1.211.02-34.642,0.195-35.459-.446a6.763,6.763,0,0,1-1.976-2.655,14.889,14.889,0,0,1-1.067-3.937,34.276,34.276,0,0,1-.318-4.806,61.7,61.7,0,0,1,.772-9.522q0.773-4.944,1.726-8.88,1.362-5.676,2.7-11.261t2.611-10.712h-1.953a3.687,3.687,0,0,1-3.5-1.648,7.35,7.35,0,0,1-.954-3.753,10.641,10.641,0,0,1,.3-2.244,10.823,10.823,0,0,1,.863-2.471,7.482,7.482,0,0,1,1.385-1.969,2.556,2.556,0,0,1,1.862-.824h4.9l9.582-38.36a12.343,12.343,0,0,1,2.247-4.99,3.788,3.788,0,0,1,2.793-1.511,3.2,3.2,0,0,1,2.5,1.465q1.134,1.466,1.135,4.853a16.655,16.655,0,0,1-.386,3.524q-0.387,1.786-1.022,4.166-0.408,1.558-1,3.708T587.5,212.3q-0.658,2.427-1.362,5.082t-1.385,5.127q-1.543,5.859-3.269,12.359h14.8a8.2,8.2,0,0,1,2,.229,3.225,3.225,0,0,1,1.567.916,4.629,4.629,0,0,1,1.022,1.876,11.37,11.37,0,0,1,.363,3.205,12.885,12.885,0,0,1-.159,2.014,5.91,5.91,0,0,1-.59,1.831,3.956,3.956,0,0,1-1.181,1.373,4.344,4.344,0,0,1-1.93.733l-18.89.274q-1.681,6.592-3.179,12.863t-2.816,11.582q-0.545,2.2-1.067,5.081a28.954,28.954,0,0,0-.522,5.081,11.6,11.6,0,0,0,.293,2.092A8.912,8.912,0,0,0,572,287Zm-15.337,7.61a16.547,16.547,0,0,1-5.449,4.395,13.9,13.9,0,0,1-6.2,1.51,10.633,10.633,0,0,1-4.586-1.052,12.063,12.063,0,0,1-4.064-3.251,19.671,19.671,0,0,1-3.156-5.63,30.172,30.172,0,0,1-1.489-5.606c-1.153,1.422-2.312,2.824-3.484,4.187q-2.2,2.563-4.245,4.577a29.111,29.111,0,0,1-3.838,3.251,5.783,5.783,0,0,1-3.11,1.236,5.027,5.027,0,0,1-4.7-3.022,16.864,16.864,0,0,1-1.567-7.782,9.527,9.527,0,0,1,.046-1.1,53.4,53.4,0,0,1,1.18-7.782q0.863-3.753,1.953-7.141t2.27-6.455q1.18-3.066,2.157-5.768t1.612-4.989a15.821,15.821,0,0,0,.636-4.212,4.669,4.669,0,0,0-.091-0.915,0.45,0.45,0,0,0-.408-0.458,4.08,4.08,0,0,0-1.794.824,18.37,18.37,0,0,0-2.657,2.2A23.289,23.289,0,0,0,513,254.785a11.839,11.839,0,0,0-1.816,3.8q-0.728,2.565-1.68,6.5t-1.976,8.239q-1.021,4.305-1.975,8.515t-1.635,7.232a25.5,25.5,0,0,1-1.43,4.761,18.467,18.467,0,0,1-1.93,3.571,10.474,10.474,0,0,1-2.134,2.288,3.417,3.417,0,0,1-2,.824,1.852,1.852,0,0,1-1.658-1.1,7.721,7.721,0,0,1-.613-3.571c0-.539.036-1.192,0.1-1.949a32.39,32.39,0,0,1-4.781,4.558,8.467,8.467,0,0,1-4.9,2.06q-2.181,0-3.542-2.472t-1.363-8.422a77.038,77.038,0,0,1,.727-9.8,59.6,59.6,0,0,1-2.952,7.233,40.227,40.227,0,0,1-4.041,6.683,20.858,20.858,0,0,1-5.086,4.9,10.844,10.844,0,0,1-6.131,1.876,6.8,6.8,0,0,1-2.883-.64,6.022,6.022,0,0,1-2.43-2.2,13.047,13.047,0,0,1-1.68-4.165,28.247,28.247,0,0,1-.635-6.546c0-.039.025-0.444,0.075-1.2-0.177.279-.352,0.561-0.53,0.837a67.4,67.4,0,0,1-5.222,7.141,28.275,28.275,0,0,1-5.245,4.944,8.91,8.91,0,0,1-5.108,1.831,5.944,5.944,0,0,1-5.177-2.975q-1.953-2.974-1.953-9.384a47.093,47.093,0,0,1,.8-8.835,82.146,82.146,0,0,1,1.953-8.057q1.158-3.889,2.475-7.507t2.315-7.1a25.716,25.716,0,0,0,.841-2.884,13.323,13.323,0,0,0,.295-2.884,5.885,5.885,0,0,0-.364-2.243,1.2,1.2,0,0,0-1.135-.87,6.51,6.51,0,0,0-4.949,2.655,29.34,29.34,0,0,0-4.178,6.775,87.28,87.28,0,0,0-3.542,9.018q-1.635,4.9-3.043,9.384-0.636,2.015-1.294,4.623t-1.362,5.356q-0.705,2.747-1.476,5.448a50.5,50.5,0,0,1-1.612,4.806,15.818,15.818,0,0,1-1.771,3.388,2.524,2.524,0,0,1-1.93,1.281,2.692,2.692,0,0,1-2.452-1.876,11.3,11.3,0,0,1-.863-4.715,28.953,28.953,0,0,1,.363-4.441c0.033-.208.069-0.424,0.107-0.645-0.029.032-.055,0.063-0.084,0.1a55.2,55.2,0,0,1-5.722,5.63,33.551,33.551,0,0,1-6.289,4.258,13.955,13.955,0,0,1-6.448,1.693,6.663,6.663,0,0,1-4.836-2.1,17.167,17.167,0,0,1-3.588-5.677,37.653,37.653,0,0,1-2.247-8.239c-0.04-.241-0.068-0.488-0.105-0.73l-0.054.089a88.062,88.062,0,0,1-6,8.56,34.118,34.118,0,0,1-5.88,5.9,9.414,9.414,0,0,1-5.631,2.2,4.777,4.777,0,0,1-3.042-.961,6.763,6.763,0,0,1-1.976-2.655,14.889,14.889,0,0,1-1.067-3.937,34.276,34.276,0,0,1-.318-4.806c0-.246.012-0.5,0.016-0.745a61.4,61.4,0,0,1-3.808,5.734,29.19,29.19,0,0,1-5.063,5.356,8.245,8.245,0,0,1-5.131,2.014q-3.678,0-5.79-3.8-1.845-3.32-2.078-9.893a67.271,67.271,0,0,1-5.074,6.917,28.275,28.275,0,0,1-5.245,4.944,8.91,8.91,0,0,1-5.108,1.831,5.944,5.944,0,0,1-5.177-2.975q-1.953-2.974-1.953-9.384a47.093,47.093,0,0,1,.795-8.835,82.432,82.432,0,0,1,1.952-8.057q1.158-3.889,2.475-7.507t2.316-7.1a25.488,25.488,0,0,0,.84-2.884,13.261,13.261,0,0,0,.3-2.884,5.887,5.887,0,0,0-.363-2.243,1.2,1.2,0,0,0-1.135-.87,6.512,6.512,0,0,0-4.95,2.655,29.373,29.373,0,0,0-4.177,6.775,87.055,87.055,0,0,0-3.542,9.018q-1.635,4.9-3.043,9.384-0.636,2.015-1.294,4.623t-1.362,5.356q-0.7,2.747-1.476,5.448a50.5,50.5,0,0,1-1.612,4.806,15.818,15.818,0,0,1-1.771,3.388,2.526,2.526,0,0,1-1.93,1.281,2.691,2.691,0,0,1-2.452-1.876,11.3,11.3,0,0,1-.863-4.715,28.953,28.953,0,0,1,.363-4.441q0.364-2.334,1.181-5.722,1.089-4.67,2.5-10.391t2.838-11.352q1.293-5.086,2.453-9.716-3.783,8.81-6.818,15.734-3.564,8.132-6.491,13.537c-1.952,3.6-6.687,13.236-8.034,15.189s-2.838,2.929-4.473,2.929a3.448,3.448,0,0,1-2.861-1.648q-1.181-1.647-2.043-6.362a126.342,126.342,0,0,1-1.453-13.23q-0.591-8.514-1.045-22.339L257.57,286.05q-1.362,4.031-2.566,6.821a27.007,27.007,0,0,1-2.361,4.486,8.056,8.056,0,0,1-2.384,2.426,4.973,4.973,0,0,1-2.589.732q-1.953,0-3.246-2.288a13.832,13.832,0,0,1-1.3-6.684q0-6.5.023-14.328t0.2-17.486q0.182-9.659.568-21.332t1.113-25.955c-0.275.353-.517,0.685-0.747,1.007-3.573,9.127-16.152,35-16.29,36.551-0.108,1.217-9.21,20.578-9.574,22.043a14.844,14.844,0,0,1-1.862,4.3q-2.451,4.761-5.017,9.109a71.571,71.571,0,0,1-5.177,7.69,30.152,30.152,0,0,1-5.222,5.356,8.517,8.517,0,0,1-5.2,2.014,6.229,6.229,0,0,1-5.426-3.2q-2.067-3.2-2.066-10.162a41.056,41.056,0,0,1,.862-8.606,67.117,67.117,0,0,1,2.135-7.736q1.27-3.708,2.679-7.187t2.452-6.958q0.453-1.464.727-2.793a13.433,13.433,0,0,0,.272-2.7,6.23,6.23,0,0,0-.409-2.427,1.3,1.3,0,0,0-1.18-.961,5.255,5.255,0,0,0-3.588,1.6,19.692,19.692,0,0,0-3.315,4.212,45.69,45.69,0,0,0-3.019,6q-1.431,3.389-2.68,7t-2.338,7.187q-1.09,3.57-2,6.5-0.818,3.021-1.5,6.592t-1.476,6.592a28.3,28.3,0,0,1-1.793,5.081q-1,2.059-2.5,2.06a2.205,2.205,0,0,1-1.181-.412,4.337,4.337,0,0,1-1.157-1.144,6.637,6.637,0,0,1-.863-1.74,7.737,7.737,0,0,1-.386-2.2,42.932,42.932,0,0,1,.976-8.972q0.977-4.578,2.475-9.43t3.269-9.842q1.772-4.989,3.361-10.208,0.453-1.464.726-2.793a13.362,13.362,0,0,0,.273-2.7,6.23,6.23,0,0,0-.409-2.427,1.3,1.3,0,0,0-1.181-.961,5.255,5.255,0,0,0-3.587,1.6,19.66,19.66,0,0,0-3.315,4.212,45.813,45.813,0,0,0-3.02,6q-1.429,3.389-2.679,7t-2.338,7.187q-1.09,3.57-2,6.5-0.816,3.021-1.5,6.592t-1.476,6.592a28.221,28.221,0,0,1-1.794,5.081q-1,2.059-2.5,2.06-1.635,0-2.588-2.106a12.125,12.125,0,0,1-.954-5.035,34.126,34.126,0,0,1,.59-5.127c0.119-.7.25-1.446,0.391-2.219-0.478.817-.913,1.627-1.412,2.448a62.343,62.343,0,0,1-4.042,5.905,29.141,29.141,0,0,1-4.064,4.349,6,6,0,0,1-3.769,1.693,3.427,3.427,0,0,1-2.725-1.373,11.253,11.253,0,0,1-1.884-3.57,25.763,25.763,0,0,1-1.113-4.99,44.155,44.155,0,0,1-.363-5.722q0-1.923.136-3.8a30.183,30.183,0,0,1,.454-3.524q-1.409,3.844-3.2,7.919a60.46,60.46,0,0,1-3.86,7.416,27.791,27.791,0,0,1-4.314,5.493,6.655,6.655,0,0,1-4.564,2.151,5.453,5.453,0,0,1-2.747-.961,9.81,9.81,0,0,1-2.974-3.158,20.684,20.684,0,0,1-2.362-5.677,28.817,28.817,0,0,1-.895-6.124q-1.971,3.565-3.964,6.536a36.883,36.883,0,0,1-5.7,6.821A8.443,8.443,0,0,1,92,300.515q-3.315,0-5.222-3.8t-1.907-11.4v-0.962c0-.334.015-0.655,0.045-0.961a35.385,35.385,0,0,1-2.679,7,27.262,27.262,0,0,1-3.587,5.4,16.726,16.726,0,0,1-4.041,3.479,7.939,7.939,0,0,1-4.041,1.236,5.558,5.558,0,0,1-3.088-.915,7.338,7.338,0,0,1-2.429-2.93,18.911,18.911,0,0,1-1.589-5.127,42.07,42.07,0,0,1-.564-7.274c-0.642,1.218-1.286,2.4-1.934,3.521a45.864,45.864,0,0,1-6.607,9.063q-3.315,3.387-6.584,3.388a4.615,4.615,0,0,1-3.247-1.236,8.729,8.729,0,0,1-2.157-3.388,22.633,22.633,0,0,1-1.2-4.944,43.1,43.1,0,0,1-.386-5.905q0-1.188.045-3.387t0.114-4.532q0.068-2.334.136-4.257t0.068-2.472l-16.121,2.014-7.493.183q-1.907,8.332-3.769,14.74-0.818,2.746-1.726,5.4t-1.816,4.715a17.746,17.746,0,0,1-1.816,3.3,2.423,2.423,0,0,1-1.771,1.236C5.726,301.706-7.313,302.4-8,302c-1.11-.647-1.491-4.691,1-5,0.882-.109-1.062-1.4,1-2,1.005-.29,6.462-3.259,7-4a8.452,8.452,0,0,0,1.456-2.615A32.949,32.949,0,0,0,4,284l5.358-20.38q0.409-1.281,1.657-6.134t3.224-11.948q1.975-7.094,4.564-15.7T24.412,212.4q3.02-8.833,6.4-17.166a138.353,138.353,0,0,1,6.948-14.786,52.084,52.084,0,0,1,7.2-10.345q3.632-3.891,7.22-3.891,3.36,0,6.607,4.211t6.2,13.825a9.393,9.393,0,0,1,.318,2.2,9.2,9.2,0,0,1-.318,2.38,8.833,8.833,0,0,1-.84,2.106,5.534,5.534,0,0,1-1.158,1.465,2,2,0,0,1-1.317.549,3.467,3.467,0,0,1-1.885-.732,6.841,6.841,0,0,1-2.021-3.113,15.324,15.324,0,0,0-2.929-4.807,4.377,4.377,0,0,0-3.02-1.51q-2.135,0-4.359,2.426a32.981,32.981,0,0,0-4.473,6.592,99.994,99.994,0,0,0-4.473,9.613q-2.225,5.448-4.314,11.49t-4.041,12.359q-1.953,6.318-3.678,12.085t-3.156,10.62q-1.43,4.854-2.52,8.148h8.31l14.032-2.105q0.409-1.832,1.09-4.99t1.521-7.095q0.84-3.936,1.839-8.515t2.021-9.2q1.022-4.621,2.021-9.155t1.862-8.377a11.25,11.25,0,0,1,1.748-4.944,3.223,3.223,0,0,1,2.475-1.465,2.619,2.619,0,0,1,1.362.412,4.045,4.045,0,0,1,1.249,1.282,7.82,7.82,0,0,1,.931,2.2,13.373,13.373,0,0,1,.409,3.159,39.573,39.573,0,0,1-.749,5.951q-0.749,4.212-1.907,9.887t-2.588,12.314q-1.43,6.639-2.815,13.275t-2.566,12.726q-1.181,6.09-1.816,10.666-0.228,1.74-.477,3.983a38.51,38.51,0,0,0-.25,4.257,15.221,15.221,0,0,0,.272,3.113,1.284,1.284,0,0,0,1.181,1.281q1.226,0,2.929-1.785a33.966,33.966,0,0,0,3.656-4.761q1.952-2.973,4.041-6.866t4.132-8.057c0.466-.949.915-1.9,1.367-2.857,0.355-1.276.726-2.529,1.131-3.735a65.125,65.125,0,0,1,4.473-10.437,49.036,49.036,0,0,1,5.222-7.873,24.7,24.7,0,0,1,5.381-4.99,9.217,9.217,0,0,1,4.9-1.739,6.3,6.3,0,0,1,4.45,1.739,9.492,9.492,0,0,1,1.68,2.472q0.181-.823.363-1.556,0.453-2.2.817-3.8t0.5-2.334q0.136-.823.772-3.845t1.476-7.1q0.84-4.072,1.816-8.743t1.794-8.789q0.818-4.121,1.407-7.095t0.727-3.8a40.774,40.774,0,0,1,.863-4.44,21.159,21.159,0,0,1,1.294-3.754,8.526,8.526,0,0,1,1.748-2.563,3.188,3.188,0,0,1,2.271-.961,3.448,3.448,0,0,1,2.861,1.51q1.134,1.511,1.135,5.814a29.06,29.06,0,0,1-.227,3.57q-0.228,1.833-.523,3.571T111.781,195q-0.341,1.695-.613,3.159-2.271,9.156-4.768,19.912t-4.95,21.652q-2.452,10.9-4.677,21.241t-3.905,18.676a1.937,1.937,0,0,0-.045.458,1.968,1.968,0,0,1-.046.458,15.377,15.377,0,0,0,.409,3.433q0.409,1.785,1.317,1.785a0.734,0.734,0,0,0,.545-0.183,20.181,20.181,0,0,0,5.245-4.944,76.078,76.078,0,0,0,5.109-7.415c1.09-1.792,2.1-3.621,3.078-5.467q0.425-2.643.986-5.382a101.948,101.948,0,0,1,2.951-11.124,54.458,54.458,0,0,1,4.246-9.842,26.133,26.133,0,0,1,5.586-7.049,10.449,10.449,0,0,1,6.993-2.7,6.121,6.121,0,0,1,3.5,1.007,13.041,13.041,0,0,1,2.543,2.2,19.481,19.481,0,0,1,2.089,3.2q0.772-.825,1.59-1.557a11.379,11.379,0,0,1,1.43-1.144,2.456,2.456,0,0,1,1.294-.5A3.214,3.214,0,0,1,144.5,236.8a8.4,8.4,0,0,1,1.09,4.211,8.662,8.662,0,0,1-.046,1.007q-0.228,1.74-.7,4.395t-1.067,5.905q-0.591,3.25-1.2,6.775T141.456,266q-0.5,3.389-.817,6.363a48.941,48.941,0,0,0-.318,5.081,18.806,18.806,0,0,0,.454,4.532q0.453,1.785,1.544,1.785a2.6,2.6,0,0,0,1.612-.869,17.659,17.659,0,0,0,2.021-2.335q1.089-1.464,2.248-3.342t2.247-3.8q2.541-4.572,5.4-10.424c0.221-.981.444-1.966,0.665-2.943q1.158-5.125,2.179-9.659t1.7-7.736a16.3,16.3,0,0,1,2.157-5.859q1.34-1.923,2.657-1.923,1.134,0,2.02,1.694a10.812,10.812,0,0,1,.886,4.9,27.836,27.836,0,0,1-.545,5.218q1.225-2.286,2.634-4.943a38.826,38.826,0,0,1,3.065-4.9,16.791,16.791,0,0,1,3.7-3.708,7.686,7.686,0,0,1,4.586-1.465,4.827,4.827,0,0,1,2.407.641,5.929,5.929,0,0,1,2.021,2.014,12.3,12.3,0,0,1,1.453,3.57,24.422,24.422,0,0,1,.658,5.31q1.044-2.1,2.271-4.165a25.709,25.709,0,0,1,2.656-3.708,12.962,12.962,0,0,1,3.111-2.655,7.108,7.108,0,0,1,3.724-1.007,6.641,6.641,0,0,1,2.86.641,6.3,6.3,0,0,1,2.43,2.151,11.848,11.848,0,0,1,1.68,3.891,23.876,23.876,0,0,1,.613,5.86,42.453,42.453,0,0,1-1.249,10.437,68.429,68.429,0,0,1-2.929,9.063q-0.544,1.374-1.453,3.479t-1.771,4.486a50.968,50.968,0,0,0-1.5,4.9,19.265,19.265,0,0,0-.636,4.715q0,2.016.613,2.564a2.326,2.326,0,0,0,1.612.549q1.906,0,4.132-2.289a36.219,36.219,0,0,0,4.337-5.539A40.181,40.181,0,0,0,212,269c1.055-2.838,3.273-6.412,4-8,0.182-.426,4.757-13.817,5-14,0.207-.157,18.344-49.976,25.468-60.474a49.509,49.509,0,0,1,4.563-8.416,1.538,1.538,0,0,1,1.226-.733,2.033,2.033,0,0,1,1.566,1.19,12.585,12.585,0,0,1,1.317,3.113,30.6,30.6,0,0,1,.908,4.3,32.824,32.824,0,0,1,.341,4.669q0,2.2-.136,3.662-0.228,2.016-.432,3.571t-0.431,3.754q-0.228,2.2-.5,5.722t-0.636,9.475q-0.454,7.509-.7,15.107t-0.431,15.335q-0.183,7.737-.341,15.609t-0.341,15.93q1-2.472,2.316-6.362t2.725-8.24q1.407-4.347,2.77-8.743t2.452-7.966q1.134-3.477,1.771-5.676l0.636-2.289q1.678-8.6,3.406-16.937t3.4-16.571a71.262,71.262,0,0,1,3.451-12.451q1.817-4.4,3.951-4.395a3.447,3.447,0,0,1,2.77,1.236,4.727,4.727,0,0,1,1.045,3.159,42.875,42.875,0,0,1-.8,7.553q-0.8,4.35-1.839,9.293t-2.066,10.162q-1.022,5.218-1.522,9.979-0.226,7.965-.363,13.55t-0.136,10.254q0,5.768.045,12.085t0.409,12.085c1.21-3.539,9.317-14.285,11.293-18.132s3.968-7.832,5.974-11.952,3.985-8.354,5.938-12.7,3.811-8.693,5.579-13.039,3.389-8.639,4.863-12.88,2.736-8.315,3.787-12.224l1.711-6.676a5.818,5.818,0,0,1,.165-0.715,6.022,6.022,0,0,0,.165-0.715q0.72-2.664,1.395-4.779c0.2-.613.4-1.172,0.6-1.7a9.641,9.641,0,0,1,.78-2.086,10.782,10.782,0,0,1,1.294-1.969,6.437,6.437,0,0,1,1.544-1.373,3.1,3.1,0,0,1,1.635-.5,2.834,2.834,0,0,1,2.77,1.51,8.091,8.091,0,0,1,.772,3.708,19.6,19.6,0,0,1-.5,4.257,43.046,43.046,0,0,1-1.135,4.166q-2,6.867-3.837,13.87t-3.678,14.1q-1.839,7.1-3.7,14.1t-3.9,13.87q1.27-2.47,2.7-5.126a36.33,36.33,0,0,1,3.11-4.853,17.2,17.2,0,0,1,3.678-3.616,7.51,7.51,0,0,1,4.451-1.419,7.134,7.134,0,0,1,2.77.549A5.882,5.882,0,0,1,329.408,234,9.272,9.272,0,0,1,331,237.39a20.2,20.2,0,0,1,.59,5.264,43.05,43.05,0,0,1-.613,7.553,53.614,53.614,0,0,1-1.567,6.5q-0.952,3.069-2.088,5.86t-2.157,5.676a59.745,59.745,0,0,0-1.771,6,36.607,36.607,0,0,0-.931,6.775,2.985,2.985,0,0,1-.023.366,2.832,2.832,0,0,0-.023.366q0,1.833.613,2.289a2.544,2.544,0,0,0,1.567.458,4.748,4.748,0,0,0,2.634-.962,15.885,15.885,0,0,0,2.838-2.563,41.553,41.553,0,0,0,2.861-3.616q1.429-2.013,2.724-4.12c0.454-.738.886-1.46,1.3-2.173,0.147-.758.287-1.523,0.448-2.268q0.818-3.8,1.725-7.324t1.544-6.729q0.227-1.188.795-3.662t1.2-5.035q0.726-3.023,1.544-6.409a9.723,9.723,0,0,1,1.771-3.662,2.816,2.816,0,0,1,2.044-1.1q1.725,0,2.974,2.243a11.684,11.684,0,0,1,1.249,5.722c-0.031.55-.068,1.1-0.114,1.648a8.958,8.958,0,0,1-.3,1.648q-0.636,2.382-1.044,4.028t-0.75,3.067q-0.341,1.421-.658,2.793t-0.772,3.3q-0.545,2.289-1.226,4.989t-1.294,5.539q-0.613,2.839-1.045,5.585a32.6,32.6,0,0,0-.431,5.035,5.761,5.761,0,0,0,.613,3.25,2.092,2.092,0,0,0,1.748.779,4.347,4.347,0,0,0,2.657-1.1,18.242,18.242,0,0,0,2.792-2.838,36.036,36.036,0,0,0,2.77-3.983q1.363-2.241,2.566-4.531t2.225-4.395c0.216-.444.416-0.867,0.609-1.281q0.948-3.957,1.889-7.874,1.338-5.583,2.611-10.712h-1.953a3.687,3.687,0,0,1-3.5-1.648,7.35,7.35,0,0,1-.954-3.753,10.641,10.641,0,0,1,.3-2.244,10.823,10.823,0,0,1,.863-2.471,7.482,7.482,0,0,1,1.385-1.969,2.556,2.556,0,0,1,1.862-.824h4.9l9.582-38.36a12.343,12.343,0,0,1,2.247-4.99,3.788,3.788,0,0,1,2.793-1.511,3.2,3.2,0,0,1,2.5,1.465q1.134,1.466,1.135,4.853a16.655,16.655,0,0,1-.386,3.524q-0.387,1.786-1.022,4.166-0.408,1.558-1,3.708t-1.249,4.577q-0.659,2.427-1.362,5.082l-1.385,5.127q-1.543,5.859-3.27,12.359h14.8a8.2,8.2,0,0,1,2,.229,3.226,3.226,0,0,1,1.478.834,21.7,21.7,0,0,1,2.813-2.253,11.941,11.941,0,0,1,6.744-2.106,6,6,0,0,1,5.631,3.662q1.861,3.663,1.862,10.163a34.9,34.9,0,0,1-1,8.056,32.963,32.963,0,0,1-3.451,8.561,49.8,49.8,0,0,1-6.561,8.88,70.716,70.716,0,0,1-10.286,9.11,7.7,7.7,0,0,0,1.408,4.165,3.779,3.779,0,0,0,3.133,1.511,9.775,9.775,0,0,0,4.473-1.236,27.17,27.17,0,0,0,4.723-3.159,60.608,60.608,0,0,0,4.563-4.165q2.224-2.243,4.019-4.257c0.685-.769,1.3-1.472,1.854-2.121q1.088-4.387,2.188-8.728,1.429-5.631,2.7-10.712t2.134-8.652L436.8,183.237a9.661,9.661,0,0,1,.84-2.289,10.782,10.782,0,0,1,1.294-1.969,6.456,6.456,0,0,1,1.544-1.373,3.1,3.1,0,0,1,1.635-.5,2.834,2.834,0,0,1,2.77,1.51,8.078,8.078,0,0,1,.772,3.708,19.661,19.661,0,0,1-.5,4.257q-0.5,2.245-1.136,4.166-2,6.867-3.837,13.87t-3.678,14.1q-1.839,7.1-3.7,14.1t-3.905,13.87q1.271-2.47,2.7-5.126a36.33,36.33,0,0,1,3.11-4.853,17.181,17.181,0,0,1,3.679-3.616,7.5,7.5,0,0,1,4.45-1.419,7.134,7.134,0,0,1,2.77.549A5.892,5.892,0,0,1,447.929,234a9.288,9.288,0,0,1,1.589,3.388,20.2,20.2,0,0,1,.59,5.264,43.05,43.05,0,0,1-.613,7.553,53.616,53.616,0,0,1-1.566,6.5q-0.954,3.069-2.089,5.86t-2.157,5.676a60.008,60.008,0,0,0-1.771,6,36.692,36.692,0,0,0-.931,6.775,2.985,2.985,0,0,1-.023.366,3.02,3.02,0,0,0-.022.366q0,1.833.613,2.289a2.539,2.539,0,0,0,1.566.458,4.745,4.745,0,0,0,2.634-.962,15.851,15.851,0,0,0,2.838-2.563,41.364,41.364,0,0,0,2.861-3.616q1.431-2.013,2.725-4.12t2.384-4.074c0.312-.564.6-1.091,0.873-1.593,0.438-2.135.932-4.45,1.488-6.968q2.043-9.246,5.767-22.43a13.784,13.784,0,0,1,2.2-4.99,3.531,3.531,0,0,1,2.7-1.51,3.1,3.1,0,0,1,1.317.32A3.9,3.9,0,0,1,472.178,233a5.3,5.3,0,0,1,.953,1.74,7.43,7.43,0,0,1,.364,2.426,10.645,10.645,0,0,1-.137,1.74,30.447,30.447,0,0,1-.976,4.074q-0.75,2.518-1.748,5.767t-2.112,7q-1.113,3.756-2.066,7.782t-1.635,8.194a58.692,58.692,0,0,0-.772,8.1,9.575,9.575,0,0,0,.454,3.022,1.624,1.624,0,0,0,1.5,1.373q2.95,0,5.631-3.3a38.891,38.891,0,0,0,4.949-8.194,95.472,95.472,0,0,0,4.11-10.528q1.839-5.631,3.065-10.3,0.863-3.111,1.521-6.683t1.431-6.592a25.874,25.874,0,0,1,1.771-5.036q1-2.012,2.5-2.014,1.635,0,2.589,2.106a12.138,12.138,0,0,1,.953,5.035,23.209,23.209,0,0,1-.613,4.532q-0.612,2.885-1.544,6.592t-2.02,7.919q-1.09,4.212-2.021,8.561t-1.544,8.514a53.327,53.327,0,0,0-.613,7.736q0,3.3,2,3.3a6.2,6.2,0,0,0,3.5-1.648,26.448,26.448,0,0,0,4.382-4.623q1.05-1.365,2.1-2.953c0.137-.591.275-1.191,0.418-1.808q1.089-4.714,2.52-10.8t3.383-14.054a11.194,11.194,0,0,1-1.067-2.7,15.567,15.567,0,0,1-.431-3.983,14.02,14.02,0,0,1,.454-3.8,7.715,7.715,0,0,1,1.226-2.61,5.093,5.093,0,0,1,1.794-1.51,4.823,4.823,0,0,1,2.157-.5,7.151,7.151,0,0,1,2.361.412,6.277,6.277,0,0,1,2.111,1.236,6.544,6.544,0,0,1,1.522,2.014,6.117,6.117,0,0,1,.59,2.747,4.006,4.006,0,0,1-.091.732q-0.092.459-.2,1.007t-0.2,1.007a3.94,3.94,0,0,0-.09.733c0,0.123.015,0.183,0.045,0.183h0.045l0.091-.092a45.083,45.083,0,0,1,3.656-4.028,38.13,38.13,0,0,1,3.655-3.158,20.772,20.772,0,0,1,3.383-2.106,6.775,6.775,0,0,1,2.884-.778,3.466,3.466,0,0,1,3.156,1.968q1.111,1.97,1.112,6.638,0,1.008-.045,2.151t-0.182,2.426a23.955,23.955,0,0,1-1.362,5.585q-1.135,3.206-2.656,6.683t-3.27,7l-3.224,6.5q-1.476,2.976-2.452,5.173a9.352,9.352,0,0,0-.976,3.021,7.209,7.209,0,0,0,.045,1.007,0.347,0.347,0,0,0,.409.275q2.451-2.1,5.472-5.081t6.016-6.088q3-3.112,5.677-6.089t4.541-5.172a5.7,5.7,0,0,1,.84-0.779,1.371,1.371,0,0,1,.794-0.32,1.6,1.6,0,0,1,1.363,1.1,6.645,6.645,0,0,1,.545,2.929,15.664,15.664,0,0,1-.886,4.807,21.206,21.206,0,0,1-2.974,5.63q-1.59,2.014-3.565,4.532c-0.037.047-.076,0.1-0.112,0.143a13.921,13.921,0,0,0,1.111,2.283,14.288,14.288,0,0,0,2.384,2.976A10.633,10.633,0,0,0,542.9,286a6.8,6.8,0,0,0,2.883.687,7.3,7.3,0,0,0,2.793-.549,6.192,6.192,0,0,0,2.361-1.74,8.623,8.623,0,0,0,1.612-3.021,14.741,14.741,0,0,0,.591-4.486,33.514,33.514,0,0,0-1.045-8.606,38.657,38.657,0,0,0-2.7-7.279,42.388,42.388,0,0,0-3.769-6.225q-2.111-2.885-4.2-5.539a6.744,6.744,0,0,1-.681-1.6,8.279,8.279,0,0,1-.454-2.7,4.561,4.561,0,0,1,.272-1.74q0.726-1.922,1.68-3.936a32.84,32.84,0,0,1,2.044-3.708,11.854,11.854,0,0,1,2.361-2.747,4.1,4.1,0,0,1,2.634-1.053,3.41,3.41,0,0,1,1.862.55,4.982,4.982,0,0,1,1.453,1.419,7.574,7.574,0,0,1,.931,1.922,6.426,6.426,0,0,1,.34,1.969,9.53,9.53,0,0,1-.318,2.472,13.356,13.356,0,0,1-.84,2.289q-0.522,1.1-1.18,2.2t-1.3,2.1a36.017,36.017,0,0,1,4.95,6.684,49.76,49.76,0,0,1,3.7,7.919,52.468,52.468,0,0,1,2.316,8.469,46.4,46.4,0,0,1,.8,8.423,28,28,0,0,1-1.476,9.384A23,23,0,0,1,556.663,294.61ZM85.784,246.225a22.776,22.776,0,0,0-6.312,7.095A47.867,47.867,0,0,0,74.635,264.9a64.273,64.273,0,0,0-2.248,15.747q0,3.663,1.544,3.663a5.294,5.294,0,0,0,3.633-1.6,18.469,18.469,0,0,0,3.292-4.3,44.99,44.99,0,0,0,2.929-6.179q1.362-3.479,2.52-7.233t2.089-7.462q0.93-3.707,1.612-6.912,0.227-1.006.636-2.838,0.363-1.738.863-3.937A11.1,11.1,0,0,0,85.784,246.225Zm46.273,6.454a9.036,9.036,0,0,0-1.453-2.426,6.208,6.208,0,0,0-1.839-1.511,3.858,3.858,0,0,0-1.7-.5,5.666,5.666,0,0,0-4.132,2.2,20.739,20.739,0,0,0-3.542,5.768,40.656,40.656,0,0,0-2.452,8.011,44.4,44.4,0,0,0-.908,8.926q0,1.833.113,3.8a19.74,19.74,0,0,0,.522,3.616,8.471,8.471,0,0,0,1.158,2.746,2.329,2.329,0,0,0,2.021,1.1q1,0,2.339-1.785a32.134,32.134,0,0,0,2.77-4.578q1.43-2.791,2.792-6.134t2.453-6.546q1.089-3.2,1.771-5.768a16.527,16.527,0,0,0,.681-3.753A8.167,8.167,0,0,0,132.056,252.679Zm241.536-5.356q-1.68,6.592-3.178,12.863T367.6,271.768q-0.545,2.2-1.067,5.081a28.954,28.954,0,0,0-.522,5.081,5.522,5.522,0,0,0,.295,2.014,1.01,1.01,0,0,0,.976.733,4.3,4.3,0,0,0,2.407-1.145,25.363,25.363,0,0,0,3.133-3.021q1.68-1.875,3.542-4.3t3.656-5.035c0.29-.423.548-0.845,0.833-1.267,0.125-1.243.288-2.523,0.507-3.86a72.37,72.37,0,0,1,2.225-9.476,71.19,71.19,0,0,1,3.564-9.292c0.024-.052.049-0.1,0.073-0.153Zm19.64,18.4q1.7-2.1,3.2-4.028t2.611-3.479q1.111-1.556,1.566-2.106a16.568,16.568,0,0,0,2.816-4.806,12.258,12.258,0,0,0,.772-3.891,4.747,4.747,0,0,0-.432-2.2,1.9,1.9,0,0,0-.976-1.007,1.115,1.115,0,0,0-.409-0.092h-0.408a4.7,4.7,0,0,0-3.224,1.373A14.3,14.3,0,0,0,396,249.109a31.553,31.553,0,0,0-2.225,5.081q-0.977,2.838-1.748,5.63t-1.294,5.356q-0.524,2.565-.8,4.3Q391.529,267.831,393.232,265.725Zm-34.443-44.357a9.218,9.218,0,0,1-1.771,2.976,3.4,3.4,0,0,1-2.589,1.19,4.311,4.311,0,0,1-3.95-1.785,9.534,9.534,0,0,1-1.272-4.715,25.673,25.673,0,0,1,.386-4.349,18.547,18.547,0,0,1,1.158-4.074,9.658,9.658,0,0,1,1.93-3.021,3.706,3.706,0,0,1,2.747-1.191,3.771,3.771,0,0,1,3.679,2.06,11.4,11.4,0,0,1,1.044,5.173,24.246,24.246,0,0,1-.341,3.845A19.713,19.713,0,0,1,358.789,221.368Z"
    />
  </svg>
);
}