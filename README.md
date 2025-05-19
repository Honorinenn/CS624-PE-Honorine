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



![PE04_Part02a](https://github.com/user-attachments/assets/a5b0135d-1cd8-40bb-8887-77591ffa4454)











![PE04_Part02b](https://github.com/user-attachments/assets/69d86619-559b-4111-bf59-55e46d3db7fb)





