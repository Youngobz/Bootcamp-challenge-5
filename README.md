# Bootcamp-challenge-5

https://github.com/Youngobz/Bootcamp-challenge-5/assets/133522178/12075011-3ae3-4fe4-8899-8b2278e253f1

The Work Day Scheduler project aimed to develop a web application using HTML, CSS, and JavaScript to assist users in planning and organizing their daily tasks within regular working hours. This README provides a comprehensive overview of the project, outlining its key components and functionalities.

Deployment
The deployed version of the Work Day Scheduler can be accessed via the following URL:
https://youngobz.github.io/Bootcamp-challenge-5/

Acceptance Criteria
The acceptance criteria for the daily planner have been successfully fulfilled in the following manner:

-Displaying the Current Day: Upon opening the planner, the current day is prominently displayed at the top of the calendar. This is achieved using the displayDateTime() function, which utilizes the Day.js library to retrieve and format the current date.

-Timeblocks for Standard Business Hours: As the user scrolls down, they are presented with timeblocks covering the standard business hours from 9 AM to 5 PM. The updated version of the project includes the additional time blocks as specified.

-Color Coding of Timeblocks: Each timeblock is color-coded to indicate whether it is in the past, present, or future. The changeColor() function dynamically adjusts the color of each time block based on the current time. This provides users with a visual indication of their schedule at a glance.

-Entering and Saving Events: By clicking into a timeblock, the user can enter an event or task. The storeValue() function is triggered when the user clicks the save button associated with a specific time block. It retrieves the entered event description and stores it in the browser's local storage, fulfilling the requirement to save the text for that event.

-Persistence of Saved Events: Upon refreshing the page, the saved events persist due to the use of local storage. The showValue() function retrieves the stored task descriptions from local storage and populates the corresponding time blocks with the retrieved data. This ensures that the user's events remain intact even after page reload.

HTML Changes
The project has been expanded to include additional time blocks from 9 AM to 5 PM. The new time blocks are as follows:

9 AM
10 AM
11 AM
12 PM
1 PM
2 PM
3 PM
4 PM
5 PM

Each time block follows the same structure as the existing blocks, featuring a unique ID indicating the hour and appropriate classes to reflect the time status (past, present, future).

JavaScript Functions
The JavaScript code played a vital role in enabling the functionality and interactivity of the Work Day Scheduler. The following are the main functions implemented in the project:

-displayDateTime(): The displayDateTime() function was responsible for displaying the current date and time in the scheduler's header. It utilized the Day.js library to format and retrieve the current date and time. By updating the corresponding HTML element, this function ensured that users had up-to-date information.

-changeColor(): The changeColor() function dynamically adjusted the color of each time block based on the current time. It iterated over each time block element using the class selector .time-block. Within the function, it extracted the hour value from the block's ID and compared it with the current hour. Based on this comparison, the function added or removed CSS classes to indicate whether the time block was in the past, present, or future.

-storeValue(): The storeValue() function was triggered when a user clicked the save button associated with a specific time block. It retrieved the entered task description from the corresponding input field using jQuery selectors and stored it in the browser's local storage. By utilizing the parent-child relationship of the elements, this function accurately identified the appropriate time block and its corresponding description.

-showValue(): The showValue() function was responsible for retrieving and displaying stored task descriptions from local storage. It iterated over each textarea element within the time blocks and retrieved the corresponding task description using the parent's ID. If a stored value was found, it populated the textarea with the retrieved description, ensuring the persistence of data even after a page reload.

Throughout the development process, great emphasis was placed on creating a seamless user experience and an intuitive interaction design. The Work Day Scheduler was meticulously designed to be user-friendly, featuring a clear and visually appealing interface. The dynamic coloring of time blocks provided users with a quick overview of their schedule, distinguishing between past, present, and future tasks. Task descriptions were stored in the browser's local storage, guaranteeing data persistence even after a page reload.

By combining HTML, CSS, and JavaScript, we successfully developed a fully functional and user-friendly Work Day Scheduler. The project's structure, styling, and functionality were thoughtfully designed to provide an efficient tool. By implementing the features and functionalities outlined above, the Work Day Scheduler meets all the specified acceptance criteria, providing users with an effective tool for creating and managing their daily schedules.
