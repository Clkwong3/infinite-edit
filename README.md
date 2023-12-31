# Infinite-Edit Documentation

## Introduction

**Welcome to Infinite-Edit**, a versatile web-based text editor designed to simplify your note-taking and code editing experience. Whether you're a beginner or an experienced developer, Infinite-Edit offers a seamless and user-friendly environment to enhance your productivity.

## Overview

**Infinite-Edit** is an innovative web application with the following features:

- **Intuitive Interface**: Start creating content effortlessly from the moment you open the app.

- **PWA Installation**: Install Infinite-Edit as a Progressive Web App (PWA) for quick access on any device.

- **Offline Access**: Your content remains accessible even when you're offline, thanks to IndexedDB.

- **Automatic Data Saving**: Forget manual saves; Infinite-Edit handles it for you.

- **Structured Data Management**: Organize your notes and code snippets efficiently with a structured database.

- **Code Editing**: A versatile code editor with syntax highlighting and more.

Explore this documentation to make the most of Infinite-Edit.

## Table of Contents

- [Introduction](#introduction)
- [Overview](#overview)
- [Description](#description)
- [Tools](#tools)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Links](#links)
- [Credits](#credits)
- [Contributing](#contributing)
- [Report Issue](#report-issue)
- [License](#license)

## Description

Infinite-Edit is a dynamic web application designed to simplify and enhance your note-taking and code editing experience. It addresses the common need for a user-friendly platform to capture thoughts and edit code effortlessly. With features like offline access, automatic data saving, and a versatile code editor, infinite-edit empowers you to work seamlessly and manage your content efficiently.

Say goodbye to the hassles of manual saving and enjoy a structured, reliable solution for your creative and productive endeavors.

[Table of Contents](#table-of-contents)

## Tools

Here are the essential tools you'll need to interact with Infinite-Edit effectively:

- **Web Browser:** Any modern web browser such as Chrome, Firefox, or Brave is suitable for using Infinite-Edit. A web browser is the gateway to accessing and using the application.

- **Internet Connection:** An internet connection is required for the initial setup and synchronization of your notes and code snippets. It enables real-time data transfer and ensures that your work is saved securely.

- **Node.js:** Node.js is a server-side JavaScript runtime that serves as the backbone for the server logic in Infinite-Edit. It enables server-side scripting and allows the application to handle requests and data processing.

[Table of Contents](#table-of-contents)

## Technology Stack

### Root Directory

- **Node.js:** A server-side JavaScript runtime, used for server logic.
- **Express.js:** A web application framework for building server-side APIs and handling routes.
- **Nodemon:** Monitors code changes and automatically restarts the server during development.
- **Concurrently:** Allows running multiple commands concurrently, simplifying the development workflow.
- **if-env:** Helps manage environment variables for the project configuration.
- **Heroku:** A cloud platform used for deploying and hosting web applications.

### Server Side

- **Node.js:** The server runtime for handling server-side logic.
- **Express.js:** A web application framework for building server-side APIs.
- **Nodemon:** Automatically restarts the server during development for seamless debugging.
- **HTML (for client-side):** Used for rendering web pages on the client side, part of the server-side rendering process.

### Client Side

- **Node.js:** Used for managing client-side build tools and development dependencies.
- **Webpack:** A module bundler for the client-side code, optimizing and organizing assets.
- **Babel:** Transpiles modern JavaScript to ensure compatibility across browsers.
- **HTML Webpack Plugin:** Simplifies HTML file creation in the client-side build process.
- **Webpack Dev Server:** Provides a development server with live reloading for efficient client-side development.
- **Workbox Webpack Plugin:** Enables service worker integration and caching strategies for Progressive Web Apps (PWAs).
- **HTTP-Server:** A simple HTTP server used for serving static client-side files during development.
- **CSS Loaders:** Handles stylesheets in the client-side code, ensuring proper rendering.
- **HtmlWebpackPlugin:** Simplifies the creation of HTML files for the client-side build, enhancing the user interface.
- **Webpack PWA Manifest:** Manages Progressive Web App (PWA) features, making the application installable.
- **IDB:** IndexedDB, a client-side database for web applications, ensuring data persistence.
- **Code Mirror Themes:** Styles for the CodeMirror text editor used in the project, enhancing code editing and syntax highlighting.

[Table of Contents](#table-of-contents)

## Installation

Follow these steps to install and set up infinite-edit on your device. Ensure you meet the prerequisites before proceeding.

### Prerequisites

Before you begin, make sure you have the following software installed on your computer:

- Web browser (e.g., Chrome, Firefox, Brave)
- Internet connection (for initial setup)
- [Node.js](https://nodejs.org/en) (for local development)

Follow these steps to set up Infinite-Edit:

1. **Clone the Repository:**

   - Open your terminal or command prompt.
   - Navigate to the directory to install Infinite-Edit.
   - Run the following command to clone the repository:

     ```
     git clone git@github.com:Clkwong3/infinite-edit.git
     ```

2. **Install Dependencies:**

   - Navigate to the project directory:

     ```
     cd infinite-edit
     ```

   - Install project dependencies:

     ```
     npm install
     ```

3. **Start the Application:**

   - To start the server, run:

     ```
     npm start
     ```

   - Infinite-Edit should now be up and running.

4. **Access in Browser:**

   - Open any web browser and type http://localhost:3000 in the address bar to access the application.

   **Note:** If you're using a browser that supports Progressive Web Apps (PWAs), you can install Infinite-Edit for quick and easy access. Look for the "Install!" button in the navigation bar and click it to enjoy a seamless experience online or offline.

That's it! Infinite-Edit has been successfully installed into your device.

[Table of Contents](#table-of-contents)

## Usage

Infinite-Edit is designed to be intuitive and user-friendly, making it easy to take notes and write code effectively.

1. **Getting Started:** Begin by opening Infinite-Edit in your web browser. The intuitive interface will greet you with an empty editor, ready for your content.
   ![Infinite-Edit landing page](./assets/images/Getting-Started.png)

2. **Creating Content:** Start by typing or pasting your notes or code snippets into the editor. You'll find that the editor is well-equipped with features like syntax highlighting, line numbering, and automatic indentation to streamline your work.
   ![Infinite-Edit Sample](./assets/images/Creating-Content.png)

3. **Automatic Saving:** You don't have to worry about saving your work manually. Infinite-Edit automatically saves your content as you go, ensuring that your progress is never lost.

4. **Offline Access:** Enjoy the flexibility of working offline. Even when you're not connected to the internet, your notes and code remain accessible.

5. **Structured Data Management:** Behind the scenes, infinite-edit uses a structured database to organize your content efficiently. This ensures a reliable and organized workspace.

6. **PWA Installation:** For quick and easy access, consider installing infinite-edit as a Progressive Web App (PWA) on your device. Look for the "Install!" button in the navigation bar and click it to enjoy a seamless experience.

   ![Install Button in NavBar](./assets/images/Install-NavBar.png)

   **Alternatively:** If you're using a browser that supports PWAs, you can also install infinite-edit as follows:

   - **Brave Browser:** Look for the PWA icon in the URL bar (as shown below) and click it to install Infinite-Edit as a PWA.

     ![Brave PWA icon in the URL](./assets/images/Brave-PWA-icon.png)

   - **Google Chrome:** Find the PWA icon in the URL bar (as shown below). Click it to install Infinite-Edit as a PWA for quick access.

     ![Chrome PWA icon in the URL](./assets/images/Chrome-PWA-icon.png)

That's all there is to it! You're now ready to make the most of Infinite-Edit on your device.

[Table of Contents](#table-of-contents)

## Links

Here are essential links that will help you explore and interact with Infinite-Edit:

- **[Live Application](https://pacific-gorge-55204-86517f95aead.herokuapp.com/):** This link takes you to the live version of the web application, which is hosted on Heroku. You can use this link to access the fully functional application and experience its features firsthand. This is the best way to see how Infinite-Edit works in action.

- **[GitHub Repository](https://github.com/Clkwong3/infinite-edit):** If you're interested in delving into the code behind Infinite-Edit, this link will take you to the project's GitHub repository. Here, you can access the source code, contribute to development, and explore the codebase to gain a deeper understanding of the application's inner workings.

- **[Starter Code Repository](https://github.com/coding-boot-camp/cautious-meme):** For developers looking to start their own projects with a solid foundation, this link leads to the GitHub repository containing the starter code for this coding project. You can use this code as a starting point to save time and effort in setting up the basic structure of your project. It's a valuable resource for kickstarting your development journey.

Explore these links to get the most out of Infinite-Edit, whether you want to use the application, examine the code, or kickstart your own projects.

[Table of Contents](#table-of-contents)

## Credits

This project was developed by [Clarice Kwong](https://github.com/Clkwong3).

**Code Attribution:**

I'd like to recognize that this project uses code and concepts introduced during class, notably Activity 25 - 26 of Module 19 PWA. The lesson and demonstrations had a impact on how I worked on this project.

**Tutoring Session Influence:**

I'm grateful for the valuable guidance and insights I received during tutoring sessions. They helped me find solutions and improvements for this project.

[Table of Contents](#table-of-contents)

## Contributing

If you'd like to contribute to the project with code or other contributions, here's how you can get started:

1. **Fork the Repository:** Start by forking the project's repository to your GitHub account.

2. **Clone the Repository:** Clone your forked repository to your local development environment.

   ```
   git clone git@github.com:Clkwong3/infinite-edit.git
   ```

3. **Create a New Branch:** Create a new branch for your contribution.

   ```
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes:** Make your desired changes or contributions.

5. **Test Your Changes:** Ensure that your changes do not introduce any new issues and pass all existing tests.

6. **Commit Your Changes:** Commit your changes with a clear and concise commit message.

   ```
   git commit -m "Add feature: your feature description"
   ```

7. **Push to Your Repository:** Push your changes to your forked repository.

   ```
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request:** Go to the project's [Pull Requests](https://github.com/Clkwong3/infinite-edit/pulls) page, and click on "New Pull Request."

9. **Select the Base Branch:** Choose the appropriate base branch, typically the main branch of the project.

10. **Review and Submit:** Review your changes, provide a clear description of your contribution, and submit the pull request.

The project creator will review your pull request and provide feedback.

Thank you for your interest in contributing to the project!

[Table of Contents](#table-of-contents)

## Report Issue

If you encounter any issues in the project, here's how you can get involved:

**Reporting Issues**

1. **GitHub Issues:** Visit the project's [GitHub Issues](https://github.com/Clkwong3/infinite-edit/issues) page.

2. **Search for Existing Issues:** Before creating a new issue, please search for existing ones to check if your concern has already been addressed.

3. **Create a New Issue:** If your issue isn't already listed, click on the "New Issue" button.

4. **Issue Title:** Use a descriptive and concise title that summarizes the problem.

5. **Issue Description:** In the issue description, provide the following details:

   - A clear and detailed explanation of the issue.
   - Steps to reproduce the problem if applicable.
   - Information about your environment, such as your operating system and any relevant software versions.

6. **Screenshots or Error Messages:** If you have visual aids, such as screenshots or error messages, please attach them to the issue.

7. **Labeling:** If you're familiar with labels or the issue tracking system on GitHub, you can add labels that best describe the issue. If not, don't worry; we'll handle that.

8. **Submit the Issue:** Click "Submit new issue," and the project creator will review it. We'll get back to you as soon as possible.

[Table of Contents](#table-of-contents)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Clkwong3/infinite-edit/blob/main/LICENSE) file for details.

[Top](#introduction)
