
# Rissa's Little Cafe Project
Welcome to Rissa's Little Cafe, a delightful Gatsby project designed to bring the charm of Rissa's Cafe to the digital world. This project leverages Cloudinary for efficient management of images and assets. With a focus on simplicity and ease of use, we've included environment variables for seamless Cloudinary integration. Additionally, we've incorporated Yarn for efficient package management. Utilizing Netlify CMS for the CMS

[Live Developement Site](https://rissaslittlecafecatering.netlify.app)

## Getting Started
Follow these steps to get the project up and running on your local machine:

### Clone the Repository:

```
git clone https://github.com/Jacob-Petersen-1/rissas-little-cafe.git
cd rissas-little-cafe
```
#### Install Dependencies:
`yarn install`

### Set Up Cloudinary:

Obtain your Cloudinary API key and secret.
Create a .env file in the project root and add the following:

```
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
```
### Run the Development Server:

- ```yarn start```
Open Your Browser:
Open your browser and navigate to http://localhost:8000 to see Rissa's Little Cafe in action!

### Project Structure
- src/: This directory contains the main source code for the Gatsby project.
- content/: Store your content, such as images and markdown files, here.
- static/: Static files that need to be served as-is (e.g., favicons, images).

### Custom Commands
I've included a handy custom command to streamline component initialization:

#### Initialize a New Component:
```yarn init:component```
- This command prompts you to enter the name of the new component and sets up the basic structure for you.

