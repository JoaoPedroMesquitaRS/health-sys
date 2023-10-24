async function getInfoCard(path) {
    const url = `http://localhost:8000/${path}`;
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}

export default getInfoCard