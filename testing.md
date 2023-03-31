Manual Testing of PetBook
Instructions to do manual testing of PetBook app, and to make sure that everything is working properly.

# Signing up 
People need to create an account with PetBook before they can use it. To test if signup/register functionality is working, following these steps:


Open PetBook
Click on register on top right hand nav corner.
Enter a name, email, and password.
Press signup.

Currently no specific requirements for signing up but email must be valid and password must match.

If the above details dare not met, there will be an error and no re-direction to user dashboard; new user does not get created.
When details are correct, page will load and user will be re-directed to his dashboard; new user created.


# Logging in
You must be logged into your account, before you can use PetBook. To test that logging in works correctly, follow these steps:

Open PetBook.
Enter your email and password.
Press sign in.
Make sure you already have an account with Petbook before testing.

The test is successful if you are redirected to your dashboard and unsuccessful if still on login page with loading spinner; there is no push into user dashboard.


# Registering your pet 
In order to test to make sure that you can register pets, follow these steps

Open Petbook.
Login/Signup.
Press the Add Pet button on the dashboard page or sidebar.
Enter pet details, upload a picture if you want by clicking choose file
Press the register button.
You should be re-directed to your dashboard where you can see pets you have registered. If not, the test failed.

# Updating pet details
Follow these steps to test update of pet information:

Open PetBook
Login/Signup
Click Update button locaked on the pet infor box on your dashboard.
Edit details, and change pictures if you want but clicking choose file button
Press the update button.
If an alert box telling you Pet had been updated followed by re-direction to dashboard, the test has passed. If not, the test failed


# Adding new pet record
Open PetBook.
Login/Signup.
Click drop down button beside name of pet you want tp add new record for; click Add Record buttom at the bottom of card.
Fill in the form; click on choose file if you want to upload a picture.
Click on the add button.
You should be re-directed back to your dashboard where you can click on Pet Records on sidebar to view the record. If not, the test had failed.

# Deleting pet record or pet

Open Petbook.
Login/Signup.

***To delete a pet***, click on the delete button located on the pet card on your dashboard.
Alert box shoulder pop-up asking for confirmation.
Click yes. If no, click cancel.
Page will reload, and pet should be removed from dashboard. If not, the test has failed,


***To delete a pet record***, click on Pet Records on the side bar.
On the pet records page, click on the delete button.
Alert box will pop up asking for confirmation. If yes is clicked, loader will appear and another laert box confirming deletion will appear.
Pet record should now be removed from pet record page. If record is still exists, test has failed.

# Updating user details
Follow these steps to test update of user information:

Open PetBook.
Login/Signup.
Click Your Profile on sidebar navigation in dashboard.
Edit details, and change pictures if you want but clicking choose file button
Press the update button.
If an alert box telling you profile had been updated followed by a push back to dashbaord, the test has passed. If not, the test failed,

Note that if you want to change password, both should match for the test to be successful. If an error message pops up, test has failed.

# Adding to calendar
Following these steps to test calendar feature:

Open PetBook.
Login/Signup.
Click Calendar on sidebar.
On the calendar page, click Add event button and add event + choose dates and time.
If successful, the even should appear on calendar on the date you have selected. If not, the test had failed.






