// Search Functionality
document.querySelector(".search-box button").addEventListener("click", function() {
    let query = document.querySelector(".search-box input").value.toLowerCase();
    let blogPosts = document.querySelectorAll(".blog-post");

    blogPosts.forEach(post => {
        let title = post.querySelector("h2").textContent.toLowerCase();
        if (title.includes(query)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
});

// Email Subscription Alert
document.querySelector(".subscribe-box button").addEventListener("click", function() {
    let email = document.querySelector(".subscribe-box input").value;
    if (email) {
        alert("Thank you for subscribing with: " + email);
    } else {
        alert("Please enter a valid email address.");
    }
});
