export type FixtureResponse = {
  fixtureDate: string;
  matchTime: string;
  competitionId: number;
  competitionName: string;
  location: string;
  homeTeam: {
    name: string;
    id: number;
  };
  awayTeam: {
    name: string;
    id: number;
  };
};
