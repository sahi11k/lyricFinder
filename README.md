# Lyrics Finder

A modern, full-stack web application that helps you discover song lyrics instantly using the Musixmatch API, built with React frontend and Express backend.

## Overview

Lyrics Finder is your go-to solution for finding song lyrics. Built with React and Express, it offers a smooth, responsive interface for searching and displaying lyrics from the vast Musixmatch database.

## Features

- Smart Search: Instantly search for any song in the Musixmatch database
- Responsive Design: Seamless experience across all devices
- Fast Performance: Optimized for quick loading and smooth interactions
- Modern UI: Clean, intuitive interface with smooth animations
- Real-time Updates: Instant lyrics display as you search

## Tech Stack

- **Frontend Framework**: React.js with Hooks
- **Backend Framework**: Express.js
- **State Management**: Context API
- **API Integration**: Axios
- **Styling**: CSS Modules/Styled Components
- **Lyrics Data**: Musixmatch API

## Installation

1. Clone both repositories:

   ```bash
   # Frontend
   git clone https://github.com/sahi11k/lyricFinder.git

   # Backend
   git clone https://github.com/sahi11k/lyricFinderBackend.git
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   # Frontend setup
   cd lyricFinder
   npm install

   # Backend setup
   cd ../lyricFinderBackend
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the backend directory
   - Add your Musixmatch API key:
     ```
     MUSIX_MATCH_API_KEY=your_api_key_here
     ```
   - Create a `.env` file in the frontend directory
   - Add your backend API URL (replace with your actual backend server URL):
     ```
     REACT_APP_API_URL=your_backend_server_url  (example: http://localhost:8080/)
     ```

4. Start the servers:

   ```bash
   # Start backend server (from lyricFinderBackend directory)
   npm start

   # Start frontend (from lyricFinder directory)
   npm start
   ```

## Configuration

To use this application, you'll need:

- A Musixmatch API key (get it from [Musixmatch Developer Portal](https://developer.musixmatch.com))
- Node.js (v14 or higher)
- npm or yarn
- Backend environment variables properly configured

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Musixmatch](https://www.musixmatch.com) for providing the lyrics API
- [React](https://reactjs.org) team for the amazing framework
