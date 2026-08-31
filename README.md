# FreelanceHub - Freelancing Platform Frontend

A modern, responsive frontend for a freelancing platform built with React, Tailwind CSS, and Framer Motion.

## Features

- **Browse Projects**: Browse and filter freelance projects by category and budget
- **Find Freelancers**: Search and discover talented freelancers with portfolios and ratings
- **Project Details**: View detailed project information and submit bids
- **Freelancer Profiles**: View comprehensive freelancer profiles with skills and portfolio
- **User Dashboard**: Manage projects, track earnings, and communicate with clients
- **Responsive Design**: Mobile-friendly UI that works on all devices
- **Smooth Animations**: Interactive animations powered by Framer Motion

## Tech Stack

- **React 18** - UI library
- **React Router v6** - Navigation
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Axios** - HTTP client

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Thamilarasi2006/freelance-platform-frontend.git
cd freelance-platform-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Project Structure

```
src/
├── pages/
│   ├── Home.js              # Landing page
│   ├── Projects.js          # Projects listing
│   ├── ProjectDetails.js    # Project details and bidding
│   ├── Freelancers.js       # Freelancers listing
│   ├── FreelancerProfile.js # Freelancer profile
│   ├── Dashboard.js         # User dashboard
│   ├── Login.js             # Login/Sign up
│   └── NotFound.js          # 404 page
├── components/
│   ├── Navbar.js            # Navigation
│   ├── Footer.js            # Footer
│   ├── ProjectCard.js       # Project card component
│   └── FreelancerCard.js    # Freelancer card component
├── App.js                   # Main app component
├── index.js                 # React entry point
└── index.css                # Global styles
```

## Available Pages

- `/` - Home page
- `/projects` - Browse all projects
- `/projects/:id` - Project details
- `/freelancers` - Browse freelancers
- `/freelancers/:id` - Freelancer profile
- `/dashboard` - User dashboard
- `/login` - Login/Sign up

## Features to Implement

- [ ] Backend API integration
- [ ] User authentication
- [ ] Real-time messaging
- [ ] Payment integration
- [ ] Review and rating system
- [ ] Advanced search and filtering
- [ ] Notification system
- [ ] Admin dashboard

## Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues and feature requests, please open an issue on GitHub.
