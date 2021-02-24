export function header(body) {
    let container = document.createElement("header");
    container.id = "headerLink";
    let div = document.createElement("div");
    div.id = "divLink";

    let homeLink = document.createElement("a");
    homeLink.href = "index.html";
    homeLink.textContent = "Home";
    homeLink.id = "homeLink";

    let testLink = document.createElement("a");
    testLink.href = "test.html";
    testLink.textContent = "Test";
    testLink.id = "testLink"

    body.appendChild(container);
    container.appendChild(div);
    div.appendChild(homeLink);
    div.appendChild(testLink);
}