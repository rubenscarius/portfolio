export default async function fetchData() {
    const url = 'https://raw.githubusercontent.com/rubenscarius/portfolio/refs/heads/main/data.json';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
