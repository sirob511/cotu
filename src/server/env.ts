import "server-only";

export type ServerEnvironment = {
  databaseUrl?: string;
  appSecret?: string;
};

let cachedEnvironment: ServerEnvironment | undefined;

function optionalValue(value: string | undefined) {
  const normalized = value?.trim();
  return normalized ? normalized : undefined;
}

export function getServerEnvironment(): ServerEnvironment {
  if (!cachedEnvironment) {
    cachedEnvironment = Object.freeze({
      databaseUrl: optionalValue(process.env.DATABASE_URL),
      appSecret: optionalValue(process.env.APP_SECRET),
    });
  }

  return cachedEnvironment;
}

export function requireServerValue(
  name: keyof ServerEnvironment,
): string {
  const value = getServerEnvironment()[name];

  if (!value) {
    throw new Error(`Missing required server environment value: ${name}`);
  }

  return value;
}
