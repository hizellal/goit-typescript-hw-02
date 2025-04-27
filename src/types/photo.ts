export interface IPhoto {
    id: string;
    description: string | null;
    alt_description: string | null;
    likes: number;
    urls: {
      raw?: string;
      full?: string;
      regular?: string;
      small?: string;
      thumb?: string;
    };
    user: {
      name?: string;
      portfolio_url?: string | null;
      twitter_username?: string | null;
    };
}