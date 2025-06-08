# CS624-PE-Honorine

# 1) PE01-HelloWorld

## Input
This React Native application does not require any external user input. All necessary data, such as the user's name, 
degree program, and school, is hardcoded within the code. Specifically, the input values are "Honorine Ndom Ndzah", "MSCS", and "STC", each displayed using a Text component.

## Process
The app uses a functional component to render a simple user interface. A single View component is styled using a Stylesheet to set a yellow background and center the content. 
Inside this view, three Text components are used to display static values. Styling is centralized in a single Stylesheet, adhering to the requirement of using one style object.

## Output
The final output is a mobile screen with a yellow background displaying the name, degree, and school. The text is centered and formatted using React Native components, meeting both user and system requirements effectively. This can be shown in the screenshot below:




![Hono_mobileapp02](https://github.com/user-attachments/assets/194168f6-1bce-4e38-a4b9-db924bc79204)





# 2) PE02-CoreComponents

## Input
The mobile app allows the user to input their favorite course using a TextInput field.
This input is initialized using a state variable favoriteCourse, managed via React’s useState hook.
Users can type in any course code, such as "CS624", to personalize their experience.

## Process
The core logic is handled within a functional component using arrow function syntax. 
The app imports and uses essential React Native components including ScrollView for scrollability, View for layout structure, and StyleSheet for styling. 
The user’s input is captured and stored in state, although no additional processing is done in this version. 
Static text data for core, depth, and capstone courses are rendered using the Text component.

## Output 
The output is a clean, scrollable interface displaying an icon, user input field, and a list of MSCS courses.
Headings are visually highlighted using internal styling for clear categorization. This is shown in the screenshot below:



![component](https://github.com/user-attachments/assets/02ac0746-9de6-4c38-8a13-6f8d6a99c694)





# 3) PE03-Todos


## Input

This React Native to-do application begins with user input collected through a text input field. Users type a task and tap the “Submit” button to add it to the task list.
Each task is assigned a unique index (`todoIndex`) and an initial `complete` status of false. Users can also interact with two buttons next to each task: “Done” to mark the task as complete or incomplete, and “Delete” to remove it.


## Process

Upon submitting a task, the app appends it to the `todos` array stored in component state. Tapping “Done” toggles a task’s `complete` status using the `toggleComplete` method. The “Delete” button triggers the `deleteTodo` method, filtering the task out of the list. A tab bar at the bottom allows users to filter tasks by All, Active, or Complete using the `type` state value, updating the view accordingly.

## Output

The app displays a styled, scrollable list of tasks based on the selected filter and current state. The screenshots show below show the All, Active and Complete filters based on the input tasks:

a) All


![Todo_All](https://github.com/user-attachments/assets/82362953-bedc-41f6-a8bc-4afd143dd2c8)



b) Active



![Todo_Active](https://github.com/user-attachments/assets/deae2f7c-82b1-43fd-b7b8-6086b320a28c)





c) Complete

![Todo_Complete](https://github.com/user-attachments/assets/e31ee834-5d8a-4039-9a79-d171dcce6110)



# 4) PE04-ProfileCards

# i) Part 1

## Input
The program accepts data that may include user-provided input, files, or API responses depending on the task. This input serves as the raw data that drives the logic of the application. Inputs are expected in specific formats such as text, numbers, or structured data like JSON or CSV.

## Process
Once input is received, the program processes it using a sequence of logic and functions. These tasks may involve validation, transformation, filtering, or applying algorithms. The core functionality is implemented using loops, conditionals, and data structures. Depending on the assignment, the program might include features such as sorting, searching, or interacting with external libraries or APIs.

## Output
After processing the input, the program generates output in a structured and user-readable format. This could be a visual component such as the profilecard shown below: 


![PE04_Part01](https://github.com/user-attachments/assets/4d94efbf-64a0-4130-a6d3-d7119a7562bb)







# ii) Part 2

## Input  
The application starts with a predefined dataset of user profiles. Each profile includes an image, name, occupation, and description. These values are hardcoded in a JavaScript array within the code. The user can interact with the app by tapping on individual profile cards, which is the primary form of input.

## Process  
The app uses React Native components to render each profile through the `ProfileCard` component. The state of each card (expanded or collapsed) is managed using the `immutability-helper` library, which updates the `showThumbnail` boolean for a selected card. A `TouchableHighlight` wrapper detects user presses and triggers the toggle functionality. Based on this state, the card either displays just the image (thumbnail view) or the full profile information (expanded view).

## Output  
The output is a dynamic gallery of profile cards. Cards are initially displayed in thumbnail form. Upon user interaction, a card smoothly expands to show full details, creating an interactive and user-friendly UI experience as shown below:


Before expand:
![PE04_Part02a](https://github.com/user-attachments/assets/a5b0135d-1cd8-40bb-8887-77591ffa4454)









When clicked on a thumbnail:

![PE04_Part02b](https://github.com/user-attachments/assets/69d86619-559b-4111-bf59-55e46d3db7fb)









# 5) PE05-CitiesApp

## Input
The application accepts user input through intuitive forms and navigation. In the AddCountry screen, users can enter a country name and its currency, which are then added to the app’s state-managed list of countries. Similarly, in the AddCity screen, users input a city name and its corresponding country. Each entry is validated and saved with a unique ID. Touch gestures allow users to tap on list items in the Countries and Cities tabs to view more details. This input mechanism ensures a smooth data entry experience and supports consistent navigation across different screens.


## Process
Internally, the app uses React Native state management and navigation stacks to manage and display screens. Upon adding a city or country, the application updates its state to reflect the new data. Navigation between screens (Cities, City, Countries, Country) is handled by React Navigation. The app also includes functionality to add locations to cities, creating a nested data structure and enhancing user interaction.


## Output
The application outputs a dynamic, interactive user interface that displays a list of cities and countries. Users can tap entries to view details, creating a smooth, responsive user experience. The following screens show the various displays:




Initial screen with four tabs:

![Figure01](https://github.com/user-attachments/assets/7320052c-34e8-42cd-b2cb-90136c5045b0)




The AddCountry tab:

![Figure02](https://github.com/user-attachments/assets/8516888f-583f-45e1-b9e9-26560591f5b0)





The Countries tab:

![Figure03](https://github.com/user-attachments/assets/edca750e-be7b-4230-aeba-beeba7233df4)




The AddCountry tab:

![Figure04](https://github.com/user-attachments/assets/f0158541-827c-4eb5-a292-45cb8d2b7070)





The Countries tab:

![Figure05](https://github.com/user-attachments/assets/2ecd63aa-7ca3-4e21-8e26-175527783233)













# 6) PE06 - Cities with Countries and Currency using Tab and Stack-based Navigations


## Input
The program allows users to input country and currency data through a user-friendly interface. Users enter the country name and its corresponding currency using form fields provided in the AddCountry screen. Each submission is validated to ensure both fields are filled before proceeding. This input is passed to the app’s state for storage.


## Process
Upon form submission, the app updates its internal state by appending the new country-currency pair to the countries array. The addCountry() function handles this update, ensuring the data is correctly structured. The CountriesNav tab uses screenProps to pass this updated data to the Countries.js component, where it is rendered in a scrollable list. Navigation between screens is managed using React Navigation.


## Output
The output is a visual display of the saved countries and their respective currencies. Each entry appears as a stylized list item, allowing users to view and select detailed currency information on a separate screen as shown in the screenshot below:

The "Countries" Stack:





![Image03](https://github.com/user-attachments/assets/2dd25edd-c549-4d3e-ba29-b260260013f4)




The "Country" Stack with Currency info:




![Image04](https://github.com/user-attachments/assets/e2b26289-42b8-4c5b-ac38-4fdc7255889b)
