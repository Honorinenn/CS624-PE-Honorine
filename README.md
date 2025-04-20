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
