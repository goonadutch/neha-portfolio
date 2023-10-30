---
title: "Meow It - Find your clowder"
date: "2022-10-07"
description: "Anonymous Location based social media - safe for children"
url: "https://meowit.pages.dev"
image: "/assets/meowit.png"
---

I've developed an application called **"Meow It - Find your clowder"**. It's a social media platform that's based on the user's location, but the catch is, it's completely anonymous. This makes it a safe space for children to interact without worrying about their personal information being exposed. 

The technical side of the project is quite interesting. I used **Express**, a popular framework in Node.js, to build APIs that follow the ReSTful architecture. This means that the server responds to standard HTTP requests such as GET, POST, and DELETE in a predictable way. For the user interface, I chose to use **Vanilla JS** instead of heavier frameworks because it loads faster and performs better, which is crucial for a smooth user experience. The data is stored in **MongoDB**, a NoSQL database that can handle large amounts of data efficiently. But what if the user loses their internet connection? No worries! I've implemented a **service worker** and used **IndexedDB** to serve content offline. This means users can still access some features of the app even when they're not connected to the internet.