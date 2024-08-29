import React, { Suspense, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import UserProfile from './UserProfile';
import Heading from './Heading';
import Img from './Img';
import Input from './Input';
import { FaStepBackward, FaPlay, FaPause, FaStepForward, FaVolumeUp, FaSearch, FaEllipsisH } from 'react-icons/fa';

const PlayerPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [songsList, setSongsList] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch('https://cms.samespace.com/items/songs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSongsList(data.data || []);
        setSelectedSong(data.data[0] || null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  const handleSongClick = (song) => {
    setSelectedSong(song);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading songs: {error}</div>;
  }

  return (
    <>
      <Helmet>
        <title>Music Player</title>
        <meta name="description" content="Explore the Music player" />
      </Helmet>

      <div className="relative flex w-full min-h-screen bg-gradient shadow-xs md:flex-col sm:px-4">
        <div className="absolute top-0 left-0 px-8 py-4 flex flex-col items-start">
          <Img
            src="/Images/Logo.png"
            alt="logo"
            className="h-[40px] w-[150px] md:w-[100px] sm:w-[80px] object-contain"
          />
          <Img
            src="/Images/profile.png"
            alt="profile image"
            className="mt-60 mb-30 h-[48px] w-[48px] rounded-[24px] object-cover hidden md:block"
          />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center md:ml-[100px] md:mt-4 md:w-full">
          <div className="flex justify-center items-center min-h-screen px-8">
            <div className="flex w-full flex-row gap-8 items-center lg:flex-row md:flex-col max-w-screen-lg mx-auto">
              {/* Song List Section */}
              <div className="flex flex-1 flex-col gap-6">
                <div className="mx-4 flex flex-col items-start gap-8 md:mx-0">
                  <div className="flex flex-wrap gap-10 self-stretch">
                    <Heading as="h1">For You</Heading>
                    <Heading as="h2" className="!text-white-a700_7f">
                      Top Tracks
                    </Heading>
                  </div>

                  <div className="relative w-[70%]">
                    <Input
                      name="search"
                      placeholder="Search Song, Artist"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="flex h-[48px] w-full items-center rounded-lg bg-white-a700_14 px-4 text-[18px] text-white-a700_99"
                    />
                    <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" size={20} />
                  </div>
                </div>

                <div className="mr-[162px] flex flex-col gap-8 py-4 md:mr-0">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {Array.isArray(songsList) && songsList
                      .filter((song) => song.name && song.artist && song.name.toLowerCase().includes(searchValue.toLowerCase()))
                      .map((d, index) => (
                        <UserProfile
                          key={'trackList' + index}
                          userImage={`/Images/${d.cover}`}
                          userName={d.name}
                          userAlias={d.artist}
                          userTime="4:00" 
                          onClick={() => handleSongClick(d)}
                          className="cursor-pointer mx-4 md:mx-0 sm:mx-0"
                        />
                      ))}
                  </Suspense>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative w-[50%] lg:w-[48%] md:w-full flex flex-col items-center ml-auto">
                {selectedSong && (
                  <>
                    <div className="flex flex-col items-center gap-4">
                      <div className="text-center">
                        <Heading size="headings" as="h2" className="text-white md:text-[26px] sm:text-[24px]">
                          {selectedSong.name || 'Unknown Song'}
                        </Heading>
                        <p className="text-white">{selectedSong.artist || 'Unknown Artist'}</p>
                      </div>
                      <Img
                        src="/Images/img_1.png"
                        alt="album cover"
                        className="h-[480px] w-full lg:w-[480px] rounded-lg object-cover"
                      />
                    </div>

                    {/* Controls Below Image */}
                    <div className="flex items-center justify-center gap-4 mt-4">
                      <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
                        <FaEllipsisH className="text-white" size={24} />
                      </button>
                      <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
                        <FaStepBackward className="text-white" size={24} />
                      </button>
                      <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700" onClick={togglePlayPause}>
                        {isPlaying ? (
                          <FaPause className="text-white" size={24} />
                        ) : (
                          <FaPlay className="text-white" size={24} />
                        )}
                      </button>
                      <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
                        <FaStepForward className="text-white" size={24} />
                      </button>
                      <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
                        <FaVolumeUp className="text-white" size={24} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerPage;
