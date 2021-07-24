export const titleSuffix = ' | VL-Tuning';

export const defaultTitle = 'Lorem ipsum';
export const defaultDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores ea eum inventore ipsa ipsam non omnis reiciendis tempore tenetur.';

export const getTitle = (text = defaultTitle): string => `${text}${titleSuffix}`;
export const getDescription = (description = defaultDescription): string => description;
