const titleSuffix = ' | VL-Tuning';

const defaultTitle = 'Lorem ipsum';
const defaultDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores ea eum inventore ipsa ipsam non omnis reiciendis tempore tenetur.';

export const getTitle = (text? = defaultTitle): string => `${text}${titleSuffix}`;
export const getDescription = (description? = defaultDescription): string => description;
