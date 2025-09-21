const sheetId = 'AKfycbycvu-cquZ-jNKJgaIcXt8aI57J80La7cjEJ8Ask71ZVRInT31BDUeQ6cOz7Yf0NEeaXQ';
const apiKey = 'YOUR_API_KEY'; // Dapat dari Google Cloud Console

export async function getTasks() {
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Tugas?key=${apiKey}`
  );
  const data = await response.json();
  return data.values.slice(1); // Skip header row
}
