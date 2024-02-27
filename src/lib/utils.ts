export function assertIsFormFieldElement(
  element: Element
): asserts element is HTMLInputElement | HTMLSelectElement | HTMLButtonElement {
  // Customize this list as necessary −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  if (!('value' in element)) {
    throw new Error(`Element is not a form field element`);
  }
}

export const queryStringToObject = (input: string) =>
  JSON.parse(
    '{"' +
      decodeURI(input)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
