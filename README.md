Random Password Generator
This project is a simple web application that allows users to generate random passwords with their desired length, ranging from 8 to 100 characters. The generated passwords include numbers and special characters for enhanced security.

Technologies Used

React: This project is built using React to create a dynamic and interactive user interface.
useState: React useState hook is used to manage and update the password length input and generated password.
useEffect: React useEffect hook is used to handle side effects, particularly updating the generated password when the password length changes.
useCallback: React useCallback hook is used to memoize the function that generates the password, preventing unnecessary re-renders.


How to Use
Clone the repository to your local machine using the following command:

git clone https://github.com/PankajKumarKar/copy-to-clipboard.git

Navigate to the project directory:

cd copy-to-clipboard

Install the necessary dependencies:

npm install


Run the application:

npm run dev
Open the application in your web browser and specify the desired password length (between 8 and 100).

Project Structure
src/components/PasswordGenerator.js: This file contains the main logic for generating passwords using useCallback, useEffect, and useState.
src/App.js: The main application file that renders the PasswordGenerator component.

Contributing

Contributions are welcome! If you have suggestions or found a bug, please open an issue or create a pull request.

License
This project is licensed under the MIT License. Feel free to use and modify it as needed.
