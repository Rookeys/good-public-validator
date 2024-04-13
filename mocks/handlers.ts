import { delay, http, HttpResponse, StrictResponse } from "msw";
import { faker } from "@faker-js/faker";
import fs from "fs/promises";

async function writeJsonFile(filePath: string, data: any) {
  try {
    const jsonData = JSON.stringify(data, null, 2); // Pretty print JSON
    await fs.writeFile(filePath, jsonData, "utf-8");
    console.log("JSON data has been saved.");
  } catch (error) {
    console.error("Error writing JSON file:", error);
  }
}

async function updateJsonFile(filePath: string, updateFunction: any) {
  try {
    const jsonData = await fs.readFile(filePath, "utf-8");
    let data = JSON.parse(jsonData);

    // Modify data using a custom function
    data = updateFunction(data);

    await writeJsonFile(filePath, data); // Re-use the write function
  } catch (error) {
    console.error("Error updating JSON file:", error);
  }
}

async function readJsonFile(filePath: string) {
  try {
    const jsonData = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    console.log(data); // Output the data
    return data;
  } catch (error) {
    console.error("Error reading JSON file:", error);
  }
}

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}
const User = [
  { id: "elonmusk", nickname: "Elon Musk", image: "/yRsRRjGO.jpg" },
  { id: "zerohch0", nickname: "제로초", image: "/5Udwvqim.jpg" },
  { id: "leoturtle", nickname: "레오", image: faker.image.avatar() },
];

export const handlers = [
  http.get("/api/followingPosts", async ({ request }) => {
    await delay(3000);
    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} Stop following me. I'm too famous.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: `${2} Stop following me. I'm too famous.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: `${3} Stop following me. I'm too famous.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: `${4} Stop following me. I'm too famous.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[0],
        content: `${5} Stop following me. I'm too famous.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get("/api/list", async ({ request }) => {
    const data = await readJsonFile("mocks/data.json");
    await delay(3000);
    console.log(data);
    return HttpResponse.json([
      {
        id: 1,
        name: "John Doe",
        email: "clcl6084@gmail.com",
      },
    ]);
  }),
  // I want to store specific json data in the json file and return it from local
  http.post("/api/data", async ({ request }) => {
    await updateJsonFile("mocks/data.json", (data: any) => {
      data.newField = "New Value";
      return data;
    });
    return HttpResponse.json({
      id: 1,
      name: "John Doe",
      email: "test@gmail.com",
    });
  }),
];
