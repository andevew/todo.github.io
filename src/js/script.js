$(document).ready(function () {

    //LOADING FINISHED TASKS

    if (localStorage.getItem("finished-tasks") === null) {
        localStorage.setItem("finished-tasks", 0);
    }
    let score = localStorage.getItem("finished-tasks");

    reloadFinishedTasks();
    


    let ul = $("ul");

    loadTasks();
    reloadTasksCount();

    //ADDING TASK

    $("button").on('click', function(){
        let inputVal = $(".input-task").val().trim();
        if(inputVal){
            $(ul).append(
                `<li>

                        <span class="task-text">${inputVal}</span>
                        <div class="task-icons">
                            <svg class="trash-icon" width="20" height="21" viewBox="0 0 20 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_101_57)">
                                    <path
                                        d="M6.875 7.375C7.04076 7.375 7.19973 7.44085 7.31694 7.55806C7.43415 7.67527 7.5 7.83424 7.5 8V15.5C7.5 15.6658 7.43415 15.8247 7.31694 15.9419C7.19973 16.0592 7.04076 16.125 6.875 16.125C6.70924 16.125 6.55027 16.0592 6.43306 15.9419C6.31585 15.8247 6.25 15.6658 6.25 15.5V8C6.25 7.83424 6.31585 7.67527 6.43306 7.55806C6.55027 7.44085 6.70924 7.375 6.875 7.375ZM10 7.375C10.1658 7.375 10.3247 7.44085 10.4419 7.55806C10.5592 7.67527 10.625 7.83424 10.625 8V15.5C10.625 15.6658 10.5592 15.8247 10.4419 15.9419C10.3247 16.0592 10.1658 16.125 10 16.125C9.83424 16.125 9.67527 16.0592 9.55806 15.9419C9.44085 15.8247 9.375 15.6658 9.375 15.5V8C9.375 7.83424 9.44085 7.67527 9.55806 7.55806C9.67527 7.44085 9.83424 7.375 10 7.375ZM13.75 8C13.75 7.83424 13.6842 7.67527 13.5669 7.55806C13.4497 7.44085 13.2908 7.375 13.125 7.375C12.9592 7.375 12.8003 7.44085 12.6831 7.55806C12.5658 7.67527 12.5 7.83424 12.5 8V15.5C12.5 15.6658 12.5658 15.8247 12.6831 15.9419C12.8003 16.0592 12.9592 16.125 13.125 16.125C13.2908 16.125 13.4497 16.0592 13.5669 15.9419C13.6842 15.8247 13.75 15.6658 13.75 15.5V8Z"
                                        fill="#FF6262" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M18.125 4.25C18.125 4.58152 17.9933 4.89946 17.7589 5.13388C17.5245 5.3683 17.2065 5.5 16.875 5.5H16.25V16.75C16.25 17.413 15.9866 18.0489 15.5178 18.5178C15.0489 18.9866 14.413 19.25 13.75 19.25H6.25C5.58696 19.25 4.95107 18.9866 4.48223 18.5178C4.01339 18.0489 3.75 17.413 3.75 16.75V5.5H3.125C2.79348 5.5 2.47554 5.3683 2.24112 5.13388C2.0067 4.89946 1.875 4.58152 1.875 4.25V3C1.875 2.66848 2.0067 2.35054 2.24112 2.11612C2.47554 1.8817 2.79348 1.75 3.125 1.75H7.5C7.5 1.41848 7.6317 1.10054 7.86612 0.866117C8.10054 0.631696 8.41848 0.5 8.75 0.5L11.25 0.5C11.5815 0.5 11.8995 0.631696 12.1339 0.866117C12.3683 1.10054 12.5 1.41848 12.5 1.75H16.875C17.2065 1.75 17.5245 1.8817 17.7589 2.11612C17.9933 2.35054 18.125 2.66848 18.125 3V4.25ZM5.1475 5.5L5 5.57375V16.75C5 17.0815 5.1317 17.3995 5.36612 17.6339C5.60054 17.8683 5.91848 18 6.25 18H13.75C14.0815 18 14.3995 17.8683 14.6339 17.6339C14.8683 17.3995 15 17.0815 15 16.75V5.57375L14.8525 5.5H5.1475ZM3.125 4.25V3H16.875V4.25H3.125Z"
                                        fill="#FF6262" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_101_57">
                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>


                            <svg class="finish-icon" width="20" height="21" viewBox="0 0 20 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_101_63)">
                                    <path
                                        d="M10 19.25C7.67936 19.25 5.45376 18.3281 3.81282 16.6872C2.17187 15.0462 1.25 12.8206 1.25 10.5C1.25 8.17936 2.17187 5.95376 3.81282 4.31282C5.45376 2.67187 7.67936 1.75 10 1.75C12.3206 1.75 14.5462 2.67187 16.1872 4.31282C17.8281 5.95376 18.75 8.17936 18.75 10.5C18.75 12.8206 17.8281 15.0462 16.1872 16.6872C14.5462 18.3281 12.3206 19.25 10 19.25ZM10 20.5C12.6522 20.5 15.1957 19.4464 17.0711 17.5711C18.9464 15.6957 20 13.1522 20 10.5C20 7.84784 18.9464 5.3043 17.0711 3.42893C15.1957 1.55357 12.6522 0.5 10 0.5C7.34784 0.5 4.8043 1.55357 2.92893 3.42893C1.05357 5.3043 0 7.84784 0 10.5C0 13.1522 1.05357 15.6957 2.92893 17.5711C4.8043 19.4464 7.34784 20.5 10 20.5Z"
                                        fill="#05FF00" />
                                    <path
                                        d="M13.7126 6.7125C13.7037 6.72113 13.6953 6.73031 13.6876 6.74L9.34631 12.2712L6.73006 9.65375C6.55234 9.48815 6.31728 9.398 6.0744 9.40228C5.83153 9.40657 5.5998 9.50496 5.42803 9.67672C5.25626 9.84849 5.15787 10.0802 5.15359 10.3231C5.1493 10.566 5.23946 10.801 5.40506 10.9788L8.71256 14.2875C8.80166 14.3764 8.90776 14.4465 9.02454 14.4936C9.14131 14.5406 9.26637 14.5637 9.39224 14.5613C9.51811 14.559 9.64223 14.5313 9.75718 14.48C9.87213 14.4286 9.97556 14.3547 10.0613 14.2625L15.0513 8.025C15.2212 7.84666 15.3141 7.60862 15.3099 7.36233C15.3057 7.11605 15.2048 6.88131 15.0289 6.70887C14.853 6.53643 14.6163 6.44014 14.37 6.44081C14.1237 6.44149 13.8875 6.53909 13.7126 6.7125Z"
                                        fill="#05FF00" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_101_63">
                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </li>`
            );
            saveTasks();
            reloadTasksCount();
            $(".input-task").val("");
        }
    })

    
    //REMOVING TASK


    $("ul").on('click', '.trash-icon', function() {
        

        $(this).closest('li').addClass("change-delete-color");

    
        setTimeout(() => {
            $(this).closest('li').remove(); 
            saveTasks();
            reloadTasksCount();
        }, 1000);

        
    });

    //FINISHING TASK

    $("ul").on('click', '.finish-icon', function() {
        incrementScore();
        reloadFinishedTasks();
        
    
        $(this).closest('li').addClass("change-finish-color");
    
        setTimeout(() => {
            $(this).closest('li').remove(); 
            saveTasks();
            reloadTasksCount();
        }, 1000);
    
        

    });

    function incrementScore(){
        score++;
        localStorage.setItem("finished-tasks", score);
    }

    function reloadFinishedTasks(){
        $(".tasks-done>span").text(`Tasks Done: ${score}`);
    }

    function saveTasks(){
        localStorage.setItem("tasks", ul.html());
    }

    function loadTasks(){
        const tasks = localStorage.getItem("tasks");
        if(tasks){
            ul.html(tasks); 
            
        }
    }

    function countTasks(){
        let count = document.querySelectorAll(".task-text").length;
        console.log(count);
        return count;

    }
    function reloadTasksCount(){
        $(".tasks-on-progress>span").text(`Tasks On Progress: ${countTasks()}`);
    }





});
