import { TaskOptions } from '../types';

export interface DefaultLogFields {
   hash: string;
   date: string;
   message: string;
   refs: string;
   body: string;
   author_name: string;
   author_email: string;
}

export type LogOptions<T = DefaultLogFields> = TaskOptions | {
   format?: T;
   file?: string;
   from?: string;
   multiLine?: boolean;
   symmetric?: boolean;
   strictDate?: boolean;
   to?: string;
};
