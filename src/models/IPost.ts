export interface IPost {
  description: string;
  ein: string;
  name: string;
  profileUrl: string;
  logoUrl: string;
  coverImageUrl: string;
  logoCloudinaryId: string;
  matchedTerms: string[];
  slug: string;
  location: string;
  tags: string[];
}

export interface NonProfitResponse {
  nonprofits: IPost[];
}
