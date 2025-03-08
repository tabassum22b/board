document.addEventListener('DOMContentLoaded', function() {

    const completeButton1 = document.getElementById('completeBtn1');
    const completeButton2 = document.getElementById('completeBtn2');
    const completeButton3 = document.getElementById('completeBtn3');
    const completeButton4 = document.getElementById('completeBtn4');
    const completeButton5 = document.getElementById('completeBtn5');
    const completeButton6 = document.getElementById('completeBtn6');
    const taskAssignedCountElement = document.getElementById('taskAssignedCount');
    const checkpointCountElement = document.getElementById('checkpointCount');
    const activityItemsContainer = document.getElementById('activityItemsContainer');
    const clearHistoryButton = document.getElementById('clearHistoryBtn');
    const discoverBanner = document.getElementById('discoverBanner');
    const completedButtons = [completeButton1, completeButton2, completeButton3, completeButton4, completeButton5, completeButton6]; 

   
    const initialTaskAssignedCount = '05';
    const initialCheckpointCount = '23';


    completedButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log("clicked"); 

            //  button Disable 
            this.disabled = true;

            // alert message
            alert('taskmeeter.netlify.app says board updated successfully');

            //  Decreasing the 'Task Assigned' 
            const taskCard = this.closest('.task-card'); 
            const taskTitle = taskCard.querySelector('.task-title').textContent; 
            let currentTaskCount = parseInt(taskAssignedCountElement.textContent, 10);
            if (currentTaskCount > 0) {
                taskAssignedCountElement.textContent = (currentTaskCount - 1).toString().padStart(2, '0');
            }

            // Increasing the Checkpoint 
            let currentCheckpointCount = parseInt(checkpointCountElement.textContent, 10);
            checkpointCountElement.textContent = (currentCheckpointCount + 1).toString();

           
           
            //  Adding the completed task and time to  Activity Log
            const currentTime = new Date().toLocaleTimeString(); 
            const activityItem = document.createElement('div');
            activityItem.classList.add('activity-item'); 
            activityItem.innerHTML = `<p>You have Completed The Task <strong>${taskTitle}</strong> at ${currentTime}</p>`; 
            activityItemsContainer.prepend(activityItem); 
        });
    });

    //   Clear History button
    clearHistoryButton.addEventListener('click', function() {
        activityItemsContainer.innerHTML = '';         
        taskAssignedCountElement.textContent = initialTaskAssignedCount; 
        checkpointCountElement.textContent = initialCheckpointCount;    



        // enableCo mpleted buttons
        completedButtons.forEach(button => {
            button.disabled = false; 
        });
    });

    //  Navigation for the Discover  banner
    discoverBanner.addEventListener('click', function() {
        window.location.href = 'discover.html'; 
    });

});