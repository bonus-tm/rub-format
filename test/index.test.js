const rubFormat = require('../src')

test('0 → "0"', () => {
  expect(rubFormat.rubFormatWithSpaces(0)).toBe('0')
})

// rub spaces
test('"wtf" → ""', () => {
  expect(rubFormat.rubFormatWithSpaces('wtf')).toBe('')
})
test('5 → "5"', () => {
  expect(rubFormat.rubFormatWithSpaces(5)).toBe('5')
})
test('127 → "127"', () => {
  expect(rubFormat.rubFormatWithSpaces(127)).toBe('127')
})
test('12345 → "12 345"', () => {
  expect(rubFormat.rubFormatWithSpaces(12345)).toBe('12 345')
})
test('10040 → "10 040"', () => {
  expect(rubFormat.rubFormatWithSpaces(10040)).toBe('10 040')
})
test('27000 → "27 000"', () => {
  expect(rubFormat.rubFormatWithSpaces(27000)).toBe('27 000')
})
test('7666555 → "7 666 555"', () => {
  expect(rubFormat.rubFormatWithSpaces(7666555)).toBe('7 666 555')
})
test('7000000 → "7 000 000"', () => {
  expect(rubFormat.rubFormatWithSpaces(7000000)).toBe('7 000 000')
})
test('7000008 → "7 000 008"', () => {
  expect(rubFormat.rubFormatWithSpaces(7000008)).toBe('7 000 008')
})
test('27006055 → "27 006 055"', () => {
  expect(rubFormat.rubFormatWithSpaces(27006055)).toBe('27 006 055')
})
test('90020050 → "90 020 050"', () => {
  expect(rubFormat.rubFormatWithSpaces(90020050)).toBe('90 020 050')
})
test('25090020050 → "25 090 020 050"', () => {
  expect(rubFormat.rubFormatWithSpaces(25090020050)).toBe('25 090 020 050')
})

// rub kop spaces
test('"wtf yo" → ""', () => {
  expect(rubFormat.rubKopFormatWithSpaces('wtf yo')).toBe('')
})
test('0 → "0,00"', () => {
  expect(rubFormat.rubKopFormatWithSpaces(0)).toBe('0,00')
})
test('5.48 → "5,48"', () => {
  expect(rubFormat.rubKopFormatWithSpaces(5.48)).toBe('5,48')
})
test('5.01 → "5,01"', () => {
  expect(rubFormat.rubKopFormatWithSpaces(5.01)).toBe('5,01')
})
test('5.30 → "5,30"', () => {
  expect(rubFormat.rubKopFormatWithSpaces(5.30)).toBe('5,30')
})
test('5800.4 → "5 800,40"', () => {
  expect(rubFormat.rubKopFormatWithSpaces(5800.4)).toBe('5 800,40')
})
test('10000.30 → "10 000,30"', () => {
  expect(rubFormat.rubKopFormatWithSpaces(10000.30)).toBe('10 000,30')
})
test('100000.00 → "100 000,00"', () => {
  expect(rubFormat.rubKopFormatWithSpaces(100000.00)).toBe('100 000,00')
})

// rub html
test("html 'wtf' → 'wtf'", () => {
  expect(rubFormat.rubHtml('wtf')).toBe('')
})
test("html 100 → '100'", () => {
  expect(rubFormat.rubHtml(100)).toBe('100')
})
test("html 12345 → '12 345'", () => {
  expect(rubFormat.rubHtml(12345)).toBe('12<span style="padding-left:.2em">345</span>')
})
test("html 7666555 → '7 666 555'", () => {
  expect(rubFormat.rubHtml(7666555)).toBe('7<span style="padding-left:.2em">666</span><span style="padding-left:.2em">555</span>')
})

// rub kop html
test('html "wtf" → ""', () => {
  expect(rubFormat.rubKopHtml('wtf')).toBe('')
})
test('html 0 → "0,00"', () => {
  expect(rubFormat.rubKopHtml(0)).toBe('0<span style="font-size:75%;font-weight:normal;opacity:0.8">,00</span>')
})
test('html 5.48 → "5,48"', () => {
  expect(rubFormat.rubKopHtml(5.48)).toBe('5<span style="font-size:75%;font-weight:normal;opacity:0.8">,48</span>')
})
test('html 5.01 → "5,01"', () => {
  expect(rubFormat.rubKopHtml(5.01)).toBe('5<span style="font-size:75%;font-weight:normal;opacity:0.8">,01</span>')
})
test('html 5.30 → "5,30"', () => {
  expect(rubFormat.rubKopHtml(5.30)).toBe('5<span style="font-size:75%;font-weight:normal;opacity:0.8">,30</span>')
})
test('html 5800.4 → "5 800,40"', () => {
  expect(rubFormat.rubKopHtml(5800.4)).toBe('5<span style="padding-left:.2em">800</span><span style="font-size:75%;font-weight:normal;opacity:0.8">,40</span>')
})
test('html 10000.30 → "10 000,30"', () => {
  expect(rubFormat.rubKopHtml(10000.30)).toBe('10<span style="padding-left:.2em">000</span><span style="font-size:75%;font-weight:normal;opacity:0.8">,30</span>')
})
test('html 100000.00 → "100 000,00"', () => {
  expect(rubFormat.rubKopHtml(100000.00)).toBe('100<span style="padding-left:.2em">000</span><span style="font-size:75%;font-weight:normal;opacity:0.8">,00</span>')
})
