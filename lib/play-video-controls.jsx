// 'use client';

// import React, { useState, useEffect, useRef } from 'react';

// function AudioPlayer({ tracks }) {
//   const [trackIndex, setTrackIndex] = useState(0);
//   const [trackProgress, setTrackProgress] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [time, setTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);
//   const [mute, setMute] = useState(false);

//   const audioRef = useRef(new Audio()); // Create a ref for the audio element

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (audioRef.current) {
//         setTime(audioRef.current.currentTime);
//         setDuration(audioRef.current.duration);
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.volume = volume;
//       audioRef.current.muted = mute;
//     }
//   }, [volume, mute]);

//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const seconds = Math.floor(seconds % 60);
//     return `${hours ? hours + ':' : ''}${minutes
//       .toString()
//       .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   };

//   const handleVolumeChange = (event) => {
//     setVolume(event.target.value);
//   };

//   const handleMuteToggle = () => {
//     setMute(!mute);
//   };

//   if (!tracks || tracks.length === 0) {
//     return <div>No tracks available</div>;
//   }

//   const { title, artist, audioSrc, image, color } = tracks[trackIndex];

//   const currentPercentage = duration
//     ? `${(trackProgress / duration) * 100}%`
//     : '0%';

//   const trackStyling = `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, ${color}), color-stop(${currentPercentage}, #777))`;

//   const startTimer = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       if (audioRef.current.ended) {
//         toNextTrack();
//       } else {
//         setTrackProgress(audioRef.current.currentTime);
//       }
//     }, 1000);
//   };

//   const onScrub = (value) => {
//     clearInterval(intervalRef.current);
//     audioRef.current.currentTime = value;
//     setTrackProgress(audioRef.current.currentTime);
//   };

//   const onScrubEnd = () => {
//     if (!isPlaying) {
//       setIsPlaying(true);
//     }
//     startTimer();
//   };

//   const toPrevTrack = () => {
//     setTrackIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? tracks.length - 1 : prevIndex - 1
//     );
//   };

//   const toNextTrack = () => {
//     setTrackIndex((prevIndex) =>
//       prevIndex + 1 < tracks.length ? prevIndex + 1 : 0
//     );
//   };

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     } else {
//       audioRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   useEffect(() => {
//     if (isPlaying) {
//       audioRef.current.play();
//       startTimer();
//     } else {
//       audioRef.current.pause();
//     }
//   }, [isPlaying]);

//   useEffect(() => {
//     audioRef.current.pause();

//     audioRef.current = new Audio(audioSrc);
//     setTrackProgress(audioRef.current.currentTime);

//     if (isReady.current) {
//       audioRef.current.play();
//       setIsPlaying(true);
//       startTimer();
//     } else {
//       isReady.current = true;
//     }
//   }, [trackIndex]);

//   useEffect(() => {
//     return () => {
//       audioRef.current.pause();
//       clearInterval(intervalRef.current);
//     };
//   }, []);

//   return (
//     <div className='audio-player'>
//       <div className='track-info'>
//         <div className='flex justify-end'>
//           <div className='relative z-10 p-4'>
//             <div className='flex w-[41rem] rounded-lg bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10'>
//               <div className='flex items-center space-x-4 px-6 py-4'>
//                 <svg className='h-6 w-6 flex-none' fill='none'>
//                   <path
//                     d='M6.22 11.03a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM3 6.75l-.53-.53a.75.75 0 0 0 0 1.06L3 6.75Zm4.28-3.22a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM13.5 18a.75.75 0 0 0 0 1.5V18ZM7.28 9.97 3.53 6.22 2.47 7.28l3.75 3.75 1.06-1.06ZM3.53 7.28l3.75-3.75-1.06-1.06-3.75 3.75 1.06 1.06Zm16.72 5.47c0 2.9-2.35 5.25-5.25 5.25v1.5a6.75 6.75 0 0 0 6.75-6.75h-1.5ZM15 7.5c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 15 6v1.5ZM15 6H3v1.5h12V6Zm0 12h-1.5v1.5H15V18Z'
//                     fill='#64748B'
//                   ></path>
//                   {/* Add other path elements as needed */}
//                 </svg>
//                 {/* Repeat the above block for other SVG icons */}
//               </div>
//               <div className='flex items-center space-x-4 px-6 py-4'>
//                 <img
//                   className='h-12 w-12 object-cover rounded'
//                   src={image}
//                   alt={`${artist} - ${title}`}
//                 />
//                 <div>
//                   <h3 className='text-lg font-semibold'>{title}</h3>
//                   <p className='text-sm text-slate-500'>{artist}</p>
//                 </div>
//               </div>
//               <div className='flex flex-auto items-center border-l border-slate-200/60 pl-6 pr-4 text-[0.8125rem] leading-5 text-slate-700'>
//                 <div>{formatTime(trackProgress)}</div>
//                 <div className='ml-4 flex flex-auto rounded-full bg-slate-100'>
//                   <input
//                     type='range'
//                     value={trackProgress}
//                     step='1'
//                     min='0'
//                     max={duration ? duration : `${trackProgress}`}
//                     className='slider'
//                     onChange={(e) => onScrub(e.target.value)}
//                     onMouseUp={onScrubEnd}
//                     onTouchEnd={onScrubEnd}
//                   />
//                 </div>
//                 <div className='ml-4'>{formatTime(duration)}</div>
//                 <div>00:51</div>
//                 <div className='ml-4 flex flex-auto rounded-full bg-slate-100'>
//                   <div className='h-2 w-1/3 flex-none rounded-l-full rounded-r-[1px] bg-indigo-600'></div>
//                   <div className='-my-[0.3125rem] ml-0.5 h-[1.125rem] w-1 rounded-full bg-indigo-600'></div>
//                 </div>
//                 <div className='ml-4'>55:43</div>
//                 <svg class='ml-6 h-6 w-6 flex-none' fill='none'>
//                   {' '}
//                   <path
//                     d='M14 5 9 9H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3l5 4V5Z'
//                     fill='#64748B'
//                     stroke='#64748B'
//                     stroke-width='2'
//                     stroke-linecap='round'
//                     stroke-linejoin='round'
//                   ></path>
//                   <path
//                     d='M19 12c0-1.5-1-2-1-2v4s1-.5 1-2Z'
//                     stroke='#64748B'
//                     stroke-width='2'
//                     stroke-linecap='round'
//                     stroke-linejoin='round'
//                   ></path>
//                 </svg>
//                 <svg class='ml-6 h-6 w-6 flex-none' fill='none'>
//                   <path
//                     d='M12 8v1a1 1 0 0 0 1-1h-1Zm0 0h-1a1 1 0 0 0 1 1V8Zm0 0V7a1 1 0 0 0-1 1h1Zm0 0h1a1 1 0 0 0-1-1v1ZM12 12v1a1 1 0 0 0 1-1h-1Zm0 0h-1a1 1 0 0 0 1 1v-1Zm0 0v-1a1 1 0 0 0-1 1h1Zm0 0h1a1 1 0 0 0-1-1v1ZM12 16v1a1 1 0 0 0 1-1h-1Zm0 0h-1a1 1 0 0 0 1 1v-1Zm0 0v-1a1 1 0 0 0-1 1h1Zm0 0h1a1 1 0 0 0-1-1v1Z'
//                     fill='#64748B'
//                   ></path>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AudioPlayer;
