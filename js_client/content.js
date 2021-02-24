export function content(body) {
    let container = document.createElement("div");
    container.id = "divContent";

    let img = document.createElement("img");
    img.src = "nodeserver-logo.png";

    body.appendChild(container);
    container.appendChild(img);
}