export interface Expert {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  certs: string[];
}

export type ExpertMap = Record<string, Expert>;
