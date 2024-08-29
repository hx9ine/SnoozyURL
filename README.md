# SnoozyURL

SnoozyURL is a personalized URL service where users can add all their social media handles. Users can paste their personalized SnoozyURL in their social media bios. When someone clicks on this link, they will be redirected to SnoozyURL, where they can access all the linked social media handles. If the social media app is available, the user will be redirected to the app; otherwise, the profile will open in the browser.

## Features

- **Personalized URL**: Create a unique SnoozyURL to link all your social media handles in one place.
- **Firebase Authentication**: Secure user login and registration using Firebase, including Gmail sign-in.
- **Responsive Design**: Fully responsive layout that works on all devices.
- **Social Media Redirect**: Automatically redirects to the social media app if installed; otherwise, opens the profile in a web browser.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Firebase Authentication
- **Deployment**: Digital Ocean

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hx9ine/SnoozyURL.git
   cd SnoozyURL
   ```

2. Install the dependencies:
    ```
    npm install
    ```

3. Set up Firebase:
    - Go to the Firebase Console.
    - Create a new project and add your web app.
    - Copy the Firebase config object and replace the placeholder in your project.
    - Enable Firebase Authentication and set up Gmail sign-in.

4. Start the development server:
    ```bash
    npm start
    ```
## Usage
1. Sign in using your Gmail account.
2. Add links to all your social media handles.
3. Copy your personalized SnoozyURL and paste it in your social media bio.
4. When someone clicks on your SnoozyURL, they will be redirected to your SnoozyURL page, where they can access all your social media profiles.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any inquiries, please contact info.hxn@gmail.com.

