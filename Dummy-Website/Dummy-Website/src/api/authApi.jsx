export async function loginUser(credentials) {
    const response = await fetch("https://dummyjson.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });
    return response.json();
}