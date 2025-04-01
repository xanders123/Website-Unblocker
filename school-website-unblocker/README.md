# School Website Unblocker

A simple web proxy application that helps bypass school website blocks by allowing you to access blocked websites through a proxy server.

## Features

- Easy-to-use web interface
- Support for most websites
- Two viewing modes: Link Mode and Embedded Mode
- Works with HTTP and HTTPS websites
- No installation required - just open in a browser

## Deployment Options

There are two main ways to deploy this proxy application:

### Option 1: Deploy to a Free Hosting Service (Recommended)

This is the easiest option and doesn't require you to install anything on your computer.

1. Create a free account on [Glitch](https://glitch.com/) or [Replit](https://replit.com/)
2. Create a new Node.js project
3. Upload the files from this project or copy/paste the code
4. The application will automatically start and provide you with a public URL
5. Use that URL to access your proxy from any device at school

### Option 2: Run Locally on Your Computer

If you prefer to run the proxy on your own computer:

#### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

#### Installation Steps

1. Download and extract the zip file containing the proxy application
2. Open a terminal/command prompt
3. Navigate to the extracted folder:
   ```
   cd path/to/proxy-website
   ```
4. Install the dependencies:
   ```
   npm install
   ```
5. Start the server:
   ```
   node src/index.js
   ```
6. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## How to Use

1. Enter the URL of the blocked website (with or without http/https)
2. Click "Unblock Website"
3. Choose your preferred viewing mode:
   - **Link Mode:** Opens the unblocked website in a new tab
   - **Embedded Mode:** Shows the website directly on the proxy page
4. Access your content without restrictions!

## Important Notes

- Some websites may not work perfectly due to their security settings
- This tool is for educational purposes only
- Use responsibly and in accordance with your school's acceptable use policy
- The proxy does not hide your identity - it only helps bypass content filters

## Troubleshooting

If a website doesn't load properly:

1. Try adding or removing "https://" from the URL
2. Try using Link Mode instead of Embedded Mode
3. Some complex websites with strict security policies may not work with this proxy

## Technical Details

This proxy is built using:
- Node.js and Express for the server
- http-proxy-middleware for the proxy functionality
- HTML, CSS, and JavaScript for the frontend

## License

This project is provided for educational purposes only.
