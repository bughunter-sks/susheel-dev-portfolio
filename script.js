console.log("Welcome to Susheel's Portfolio");

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation clicked");
    });
});