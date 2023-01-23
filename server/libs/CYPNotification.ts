/*
Notifcation class for CleanYourPlate.
A class that allows you to specify a
    Notification message
    Notification time
    Notification destination
    Frequency
*/


enum CYPDestinations {
    HOUSEHOLD,
    USER
};


class CYPNotification {

    //What notifcation
    notificationText : string;

    //Who to send the notification to
    notificationDestination: CYPDestinations;

    //When to send the notification
    notificationStartTime : number;

    //Notifications with 0 repeat time are not repeated
    notificationRepeatTime : number;

}
