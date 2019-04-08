## Bootstrap Dialogs

- include in your app module

```javascript
const app = angular.module("app", ['ui.bootstrap', 'ui.bootstrap.dialogs']);
```

- inside your controller use as such

### $dialogConfirm

```javascript
app.controller("demoController", function($scope, $dialogConfirm){
    $scope.clickHandler = function() {
        // all of the options are optional
        let options = {
            title: "Please Accept", // default "Confirm" 
            alert: "alert-warning", // any of the bootstrap 3.x alerts - default 'alert-info' - applies to the modal header 
            size: "med", // 'sm', 'med', or 'lg' or any custom size you want to create the css for 
            confirmLabel: "Yep", // default "Yes" the confirm button label
            denyLabel: "Nope" // default "No" the deny button label
            button_size: "" // can pass in 'btn-lg' or any custom button size class
        };
        // the message and options.title accepts html
        $dialogConfirm("Do you <strong>agree</strong> with this?", options).then(
            function() {
                // this is the success (confirmed) handler
                // do the confirmed action
            },
            function() {
                // this is the reject (denied) handler
                // this is optional
                // reset any params or whatever
            }
        );
    };
});
```

### $dialogAlert

```javascript
app.controller("demoController", function($scope, $dialogAlert){
    let options = {
                title: "Please Accept", // default "Confirm" 
                alert: "alert-warning", // any of the bootstrap 3.x alerts - default 'alert-info' - applies to the modal header 
                size: "med", // 'sm', 'med', or 'lg' or any custom size you want to create the css for 
                confirmLabel: "Okay" // default "Ok" the confirm button label
                button_size: "" // can pass in 'btn-lg' or any custom button size class
            };
    $scope.clickHandler = function() {
        $dialogAlert(message, options);
    };
});
```

### $dialog.prompt

```javascript
$scope.clickHandler = function() {
    let options = {
                title: "Please Accept", // default "Confirm" 
                alert: "alert-warning", // any of the bootstrap 3.x alerts - default 'alert-info' - applies to the modal header 
                size: "med", // 'sm', 'med', or 'lg' or any custom size you want to create the css for 
                confirmLabel: "Entered", // default "Yes" the confirm button label 
                denyLabel: "Denied" // default "No" the deny button label
                button_size: "" // can pass in 'btn-lg' or any custom button size class
            };
    $dialogPrompt(message, options).then(
        function(result) {
            console.log(result); // `result` is the value of the input
            // this is the success (confirmed) handler
            // do the confirmed action
        },
        function() {
            // this is the reject (denied) handler
            // this is optional
            // reset any params or whatever
        }
    );
};
```