export interface FitFinSurface {
  name: string;
  value: string;
  usage: string;
  textColor: string;
}

export interface FitFinComponentSpec {
  name: string;
  description: string;
  anatomy: string[];
}

export interface FitFinDesignTokens {
  brand: {
    name: string;
    mission: string;
    personality: string[];
  };
  colors: Record<string, string>;
  typography: Record<string, string>;
  spacing: Record<string, number>;
  radii: Record<string, number>;
  shadows: Record<string, string>;
}
