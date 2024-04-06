import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/systemimg/1st.png",
    author: {
      name: "Samuyl Joshi",
      image: "/images/systemimg/1st.png",
      designation: "Graphic Designer",
    },
    tags: ["Minimal and Less Bloated"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "",
    paragraph:
      "",
    image: "/images/systemimg/3rd.png",
    author: {
      name: "",
      image: "",
      designation: "",
    },
    tags: ["Vast Tools Collections"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/systemimg/2nd.png",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Native Tor Integration"],
    publishDate: "2025",
  },
];
export default blogData;
