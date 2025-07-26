import type { Database } from "./types";
import cog from "../assets/skills/cog.svg";
import badgeCheck from "../assets/skills/badge-check.svg";
import hammer from "../assets/skills/hammer.svg";
import mousePointer from "../assets/skills/mouse-pointer.svg";
import searchCode from "../assets/skills/search-code.svg";
import shieldCheck from "../assets/skills/shield-check.svg";

export const db: Database = {
  name: "Tedy Gabriel",
  surname: "Moisa",
  profession: "Full Stack Developer",
  phone: "+39 320 173 7624",
  email: "moisatedy@gmail.com",
  website: "tedymoisa.com",
  resume:
    "https://docs.google.com/document/d/12sNonUQmPdP3YmvmS-vBw72pzDVPkZnY2e4rOl3kHig/preview",
  letter:
    "https://docs.google.com/document/d/14QTV-BGmIZJ_joJ6RoZv7kLPp_bdo208/edit?usp=sharing&ouid=109567365768629822365&rtpof=true&sd=true",
  certification:
    "https://drive.google.com/uc?export=view&id=1um2zYrwgElEyEvgp3rcpytqmJWs16xBI",
  skills: [
    {
      image: badgeCheck,
      title: "Clean, performant code — no CMS dependencies",
    },
    {
      image: cog,
      title: "Designed for SEO, speed, and discoverability",
    },
    {
      image: searchCode,
      title: "Server-side rendering for fast, indexable pages",
    },
    {
      image: shieldCheck,
      title: "Security-first architecture by default",
    },
    {
      image: mousePointer,
      title: "Pixel-perfect UI with a focus on usability",
    },
    {
      image: hammer,
      title: "Tailored, future-proof web solutions",
    },
  ],
  projects: [
    {
      name: "IconVect",
      description:
        "An AI-powered platform that generates custom SVG icons for web projects. Built with Next.js, React, Tailwind CSS, and PostgreSQL, IconVect combines powerful server-side rendering, fast and modern UI development, and reliable relational data handling.",
      images: [
        "https://drive.google.com/uc?export=view&id=1sAPPBzc2uMzTkoioLkxQnQatHV0OCPfb",
        "https://drive.google.com/uc?export=view&id=1x7bEalXl7ldL4ddYMhXTWxp735n8VRvu",
        "https://drive.google.com/uc?export=view&id=1xbSTVXMi5bHAMt5aHbd9_qMs2G4c2N19",
      ],
      stack: [
        "Next.js",
        "React",
        "Typescript",
        "Tailwind CSS",
        "Shadcn",
        "PostgreSQL",
      ],
      host: "https://iconvect.com",
      github: "github.com/tedymoisa/iconvect",
    },
    {
      name: "useReactHook",
      description:
        "useReactHook is a developer-focused web platform that offers a large collection of custom React hooks with clear documentation and practical usage examples. Designed to help developers save time and write cleaner code, the platform features a simple, intuitive UI for discovering, understanding, and integrating custom hooks into React projects.",
      images: [
        "https://drive.google.com/uc?export=view&id=1AP4Vv5hntDF6R7z3FWwlrFpVVupMnLfo",
        "https://drive.google.com/uc?export=view&id=1KcChL8_cx-6Y8kUmOHBNhn8S6ZIi-Glf",
        "https://drive.google.com/uc?export=view&id=10vt8hSMyk130HsrkRhPybyLeCHAcj5u2",
      ],
      stack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Shadcn"],
      host: "https://usereacthook.com",
      github: "github.com/project-kt/usereacthook",
    },
    {
      name: "React Auth",
      description:
        "The Spring Boot Authentication Server is a secure authentication system built with Java, Spring Boot, and Spring Security, utilizing JWT tokens for authentication and authorization. This project deepened my understanding of authentication workflows on both the frontend and backend, covering secure token generation, validation, and user session management. To complement the backend, I also developed a React frontend to integrate and test the authentication flow, improving my ability to handle authentication in full-stack applications.",
      images: [
        "https://drive.google.com/uc?export=view&id=1EP72Vj3_BFSCl-Cv9RVvokLiXnteCgr0",
        "https://drive.google.com/uc?export=view&id=1mZqlAcoMdqKnCPYpJJLxCMoqBfvW_w9X",
        "https://drive.google.com/uc?export=view&id=1TfXsxNZb0mOAcWI4tN5yQE_2_4igK7eS",
      ],
      stack: ["Java", "Spring Boot", "Spring Security"],
      host: "http://vps-3e827d29.vps.ovh.net:3031/",
      github: "github.com/tedymoisa/authentication-server",
    },
    {
      name: "Shadstack Table",
      description:
        "The Modern React Datagrid is a high-performance, fully customizable table component built with React, Tailwind CSS, and TanStack Table. Designed for speed and efficiency, it offers advanced features like sorting, filtering, column customization, and virtualization, ensuring smooth performance even with large datasets. With a sleek design and seamless user experience, it's ideal for dashboards, admin panels, and data-heavy applications.",
      images: [
        "https://drive.google.com/uc?export=view&id=1SzGxqswtcnFcB4ZlScLKqDhGJhriAIqx",
      ],
      stack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Shadcn"],
      host: "https://shadstack-table.vercel.app",
      github: "github.com/tedymoisa/shadstack-table",
    },
    {
      name: "Portfolio",
      description:
        "A modern and responsive personal portfolio website designed and developed using Next.js and React. The platform showcases my professional journey, selected projects, and technical skills through a clean, performant, and user-friendly interface. Features include dynamic routing, SEO optimization, and a fully responsive design to provide an optimal experience across devices.",
      images: [
        "https://drive.google.com/uc?export=view&id=15F5vC0FVrJHXdu9yTIvz31IJlIT5nMwl",
        "https://drive.google.com/uc?export=view&id=1CBlsH2EHRWADwkUs01R7lJ5FjhDIRmRN",
      ],
      stack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Shadcn"],
      host: "https://tedymoisa.it",
      github: "github.com/tedymoisa/portfolio",
    },
  ],
};
