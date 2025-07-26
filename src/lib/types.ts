import type { ImageMetadata } from "astro";

export type Database = {
  name: string;
  surname: string;
  profession: string;
  phone: string;
  email: string;
  website: string;
  resume: string;
  letter: string;
  certification: string;
  skills: Skill[];
  projects: Project[];
};

export type Skill = {
  image: ImageMetadata;
  title: string;
};

export type Project = {
  name: string;
  description: string;
  images: string[];
  stack: string[];
  host: string;
  github: string;
};
