import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: { data: { email: 'String', message: 'String' } },
    two: { data: { email: 'String', message: 'String' } },
  },
});

export type StandardScenario = typeof standard;
