// Initialize a new GitHub object
const github = new Github();

// Initialize a new UI object
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listner
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {

        // Make HTTP Call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show Alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // Show profile
                    ui.showProfile(data.profile)
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // clear profile
        ui.clearProfile();

    }

});