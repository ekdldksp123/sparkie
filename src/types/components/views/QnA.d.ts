export type Profile = {
  id: number;
  messages: string[];
  name: string;
  stacks: Object[];
};

export type Stack = 'frontend' | 'backend' | 'etc';
