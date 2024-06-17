export async function GetStrapiData(path: string) {
  const baseURL = 'http://localhost:1337';
  try {
    const response = await fetch(baseURL + path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
