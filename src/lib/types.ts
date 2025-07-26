export type Database = {
  name: string;
  surname: string;
  profession: string;
  phone: string;
  email: string;
  website: string;
  resume: string;
  letter: string;
  certifications: Certifications[];
  contacts: Contacts[];
  skills: string[];
  projects: Project[];
};

export type Certifications = {
  name: string;
  description: string;
  image: string;
  issuer: string;
  issueDate: Date;
  expirationDate: Date;
};

export type Contacts = {
  name: string;
  image: string;
  link: string;
};

export type Project = {
  name: string;
  description: string;
  images: string[];
  stack: string[];
  host: string;
  github: string;
};
