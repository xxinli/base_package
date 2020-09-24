export function getEnvOrThrow(environmentVariableName: string): string {
  const envVar = process.env[environmentVariableName];
  if (!envVar) {
    throw new Error(`Environment variable ${environmentVariableName} not set`);
  }
  return envVar;
}

export const Environment = {
  getStage: (): string => getEnvOrThrow("STAGE"),
  getLogLevel: (): string => getEnvOrThrow("LOG_LEVEL"),
  getAWSRegion: (): string => getEnvOrThrow("REGION"),
  getPrimaryRegion: (): string => process.env.PRIMARY_REGION ?? "us-west-2",
  getEnvironment: (): string => getEnvOrThrow("NODE_ENV")
};
