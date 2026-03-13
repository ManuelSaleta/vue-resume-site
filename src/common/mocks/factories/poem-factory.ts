import { faker } from "@faker-js/faker";
import type { Poem } from "@/common/interfaces";

const poemFactory = (count: number = 1): Array<Poem> => {
  const fakedPoems: Poem[] = [];

  for (let index = 0; index < count; index++) {
    fakedPoems.push({
      number: index + 1,
      title: faker.book.title(),
      body: faker.lorem.paragraphs({ min: 2, max: 4 }, "\n"),
    } as Poem);
  }

  return fakedPoems;
};

export default poemFactory;
