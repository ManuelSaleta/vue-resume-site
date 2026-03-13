/**
 * Common interfaces used across the application.
 * Find it easier to put all interfaces in one place for better organization and maintainability.
 */

export interface Poem {
  number: number;
  title: string;
  body: string;
  updated_at?: Date;
}
