/**
 * Largest Product in a Grid
 * Computes the greatest product of four adjacent numbers in the same direction
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

/**
 * @constant
 * @type {String}
 */
const grid = '0802229738150040007504050778521250779108'
  + '4949994017811857608717409843694804566200'
  + '8149317355791429937140675388300349133665'
  + '5270952304601142692468560132567137023691'
  + '2231167151676389419236542240402866331380'
  + '2447326099034502447533537836842035171250'
  + '3298812864236710263840675954706618386470'
  + '6726206802621220956394396308409166499421'
  + '2455580566739926971778789683148834896372'
  + '2136230975007644204535140061339734313395'
  + '7817532822753167159403800462161409535692'
  + '1639054296353147555888240017542436298557'
  + '8656004835718907054444374460215851541758'
  + '1980816805944769287392138652177704895540'
  + '0452088397359916079757321626267933279866'
  + '8836688757622072034633674655123263935369'
  + '0442167338253911249472180846293240627636'
  + '2069364172302388346299698267598574043616'
  + '2073352978319001743149714886811623570554'
  + '0170547183515469169233486143520189196748'
  ;

/**
 * @function largest
 * @summary Computes the largest product of four adjacent numbers
 * @param {String} sequence - the YxY grid
 * @param {Number} [digits=2] - the number of characters per product quantity
 * @param {Number} [aperture=4] - the number of adjacent multipliers
 * @description Returns the largest product of 'aperture' integers composed of specified 'digits' digits in the grid 'sequence'
 */
const largest = function computeLargestProduct(sequence, digits = 2, aperture = 4) {

  // largest
  let product = 0;

  // grid parameters
  const offsetY = aperture - 1;
  const offsetX = offsetY * digits;

  // grid geometry
  const length = sequence.length;
  const height = Math.sqrt(length / digits);
  const width = digits * height;

  // grid section markers
  const bottom = width - offsetX;
  const collectiveX = bottom - offsetX;
  const collectiveY = height - offsetY;
  const right = width * collectiveY;
  const collectiveZ = right - offsetX;
  const left = collectiveZ - collectiveX;

  // horizontal offsets
  const x1 = 2 * digits;
  const x2 = 3 * digits;

  // vertical offsets
  const y1 = 2 * width;
  const y2 = 3 * width;

  // common centre section
  for (let marker = offsetX, chunk = marker, ceil = marker + collectiveX; marker < collectiveZ;) {

    let stage;

    // horizontally
    stage = +sequence.substr(chunk, digits) * +sequence.substr(chunk + digits, digits)
          * +sequence.substr(chunk + x1, digits) * +sequence.substr(chunk + x2, digits);

    if (stage > product) { product = stage; }

    // vertically
    stage = +sequence.substr(chunk, digits) * +sequence.substr(chunk + width, digits)
          * +sequence.substr(chunk + y1, digits) * +sequence.substr(chunk + y2, digits);

    if (stage > product) { product = stage; }

    // diagonally
    stage = +sequence.substr(chunk, digits) * +sequence.substr(chunk + digits + width, digits)
          * +sequence.substr(chunk + x1 + y1, digits) * +sequence.substr(chunk + x2 + y2, digits);

    if (stage > product) { product = stage; }

    // anti-diagonally
    stage = +sequence.substr(chunk, digits) * +sequence.substr(chunk - digits + width, digits)
          * +sequence.substr(chunk - x1 + y1, digits) * +sequence.substr(chunk - x2 + y2, digits);

    if (stage > product) { product = stage; }

    // eol
    if ((chunk += digits) === ceil) { chunk = (marker += width); ceil = marker + collectiveX; }

  }

  // left leftover
  for (let marker = 0, chunk = marker, ceil = offsetX; marker < left;) {

    let stage;

    // horizontally
    stage = +sequence.substr(chunk, digits) * +sequence.substr(chunk + digits, digits)
          * +sequence.substr(chunk + x1, digits) * +sequence.substr(chunk + x2, digits);

    if (stage > product) { product = stage; }

    // vertically
    stage = +sequence.substr(chunk, digits) * +sequence.substr(chunk + width, digits)
          * +sequence.substr(chunk + y1, digits) * +sequence.substr(chunk + y2, digits);

    if (stage > product) { product = stage; }

    // diagonally
    stage = +sequence.substr(chunk, digits) * +sequence.substr(chunk + digits + width, digits)
          * +sequence.substr(chunk + x1 + y1, digits) * +sequence.substr(chunk + x2 + y2, digits);

    if (stage > product) { product = stage; }

    // eol
    if ((chunk += digits) === ceil) { chunk = (marker += width); ceil = marker + offsetX; }

  }

  // right leftover
  for (let marker = width - offsetX, chunk = marker, ceil = width; marker < right;) {

    let stage;

    // vertically
    stage = +sequence.substr(chunk, digits) * +sequence.substr(chunk + width, digits)
          * +sequence.substr(chunk + y1, digits) * +sequence.substr(chunk + y2, digits);

    if (stage > product) { product = stage; }

    // anti-diagonally
    stage = +sequence.substr(chunk, digits) * +sequence.substr(chunk - digits + width, digits)
          * +sequence.substr(chunk - x1 + y1, digits) * +sequence.substr(chunk - x2 + y2, digits);

    if (stage > product) { product = stage; }

    // eol
    if ((chunk += digits) === ceil) { chunk = (marker += width); ceil = marker + offsetX; }

  }

  // bottom leftover
  for (let marker = right, chunk = marker, ceil = marker + bottom; marker < length;) {

    // horizontally
    let stage = +sequence.substr(chunk, digits) * +sequence.substr(chunk + digits, digits)
              * +sequence.substr(chunk + x1, digits) * +sequence.substr(chunk + x2, digits);

    if (stage > product) { product = stage; }

    // eol
    if ((chunk += digits) === ceil) { chunk = (marker += width); ceil = marker + bottom; }

  }

  return product;

};

// tests
console.assert(largest('11111111111111112222222211111111') === 234256, `expected 234256 got ${largest('11111111111111112222222211111111')}`);
console.assert(largest('11221111112211111122111111221111') === 234256, `expected 234256 got ${largest('11221111112211111122111111221111')}`);
console.assert(largest('22111111112211111111221111111122') === 234256, `expected 234256 got ${largest('22111111112211111111221111111122')}`);
console.assert(largest('11111199111199111199111199111111') === 96059601, `expected 96059601 got ${largest('11111199111199111199111199111111')}`);

// answer
console.log(largest(grid));
