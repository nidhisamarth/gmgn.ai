
export interface TokenData {
  id: string;
  name: string;
  displayName: string;
  timestamp: string;
  contract: string;
  profileImage: string;
  verified: boolean;
  verificationColor: 'green' | 'blue';
  socialIcons: string[];
  stats: {
    percentage1: number;
    percentage2: number;
    users: number;
    views: number;
    runs: number;
  };
  volume: string;
  marketCap: string;
  lightning: boolean;
  communityCount: number;
  txCount: number;
  targetCount?: number;
}
