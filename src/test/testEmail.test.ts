function suma(a, b) {
  return a + b;
}

describe("pruebas para la función suma", () => {
  test("suma 1 + 2 es igual a 3", () => {
    expect(suma(1, 2)).toBe(3);
  });

  test("suma 0 + 0 es igual a 0", () => {
    expect(suma(0, 0)).toBe(2);
  });

  test("suma -1 + 1 es igual a 0", () => {
    expect(suma(-1, 1)).toBe(0);
  });
});