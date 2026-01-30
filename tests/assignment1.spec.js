const { test, expect } = require('@playwright/test');

test.describe('Singlish to Sinhala Conversion Tests', () => {

  // -------------------------------------------------------------------------
  // STEP 1: DEFINE YOUR TEST CASES
  // -------------------------------------------------------------------------
  const testCases = [
    
    // --- POSITIVE SCENARIO ---

  {
    id: 'Pos_Fun_0001',
    input: 'mama vaeda karanavaa.',
    expected: 'මම වැඩ කරනවා.',
    description: 'Simple present tense sentence'
  },
  {
    id: 'Pos_Fun_0002',
    input: 'api heta yamu.',
    expected: 'අපි හෙට යමු.',
    description: 'Simple future tense sentence'
  },
  {
    id: 'Pos_Fun_0003',
    input: 'oyaata kohomadha?',
    expected: 'ඔයාට කොහොමද?',
    description: 'Simple interrogative greeting question'
  },
  {
    id: 'Pos_Fun_0004',
    input: 'api paasal yanavaa.',
    expected: 'අපි පාසල් යනවා.',
    description: 'Simple plural conversion'
  },
  {
    id: 'Pos_Fun_0005',
    input: 'mama enne naehae.',
    expected: 'මම එන්නෙ නැහැ.',
    description: 'Negative sentence conversion'
  },
  {
    id: 'Pos_Fun_0006',
    input: 'issarahata yanna.',
    expected: 'ඉස්සරහට යන්න.',
    description: 'Imperative command'
  },
  {
    id: 'Pos_Fun_0007',
    input: 'aayuboovan!',
    expected: 'ආයුබෝවන්!',
    description: 'Common greeting'
  },
  {
    id: 'Pos_Fun_0008',
    input: 'api heta ennee naehae.',
    expected: 'අපි හෙට එන්නේ නැහැ.',
    description: 'Negative future tense sentence'
  },
  {
    id: 'Pos_Fun_0009',
    input: 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.',
    expected: 'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නැ.',
    description: 'Compound sentence with contrast and negation'
  },
  {
    id: 'Pos_Fun_0010',
    input: 'hari hari',
    expected: 'හරි හරි',
    description: 'Repeated words for emphasis'
  },
  {
    id: 'Pos_Fun_0011',
    input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?',
    expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?',
    description: 'Polite request using formal phrasing'
  },
  {
    id: 'Pos_Fun_0012',
    input: 'api trip eka Kandy valata yamudha.',
    expected: 'අපි trip එක Kandy වලට යමුද.',
    description: 'Sentence with place name and English word'
  },
  {
    id: 'Pos_Fun_0013',
    input: 'magee email eka balanna.',
    expected: 'මගේ email එක බලන්න.',
    description: 'English technical term usage'
  },
  {
    id: 'Pos_Fun_0014',
    input: 'mata Rs. 500 oonee.',
    expected: 'මට Rs. 500 ඕනේ.',
    description: 'Currency format handling'
  },
  {
    id: 'Pos_Fun_0015',
    input: 'meeting eka 7.30 AM.',
    expected: 'meeting එක 7.30 AM.',
    description: 'Time format handling'
  },
  {
    id: 'Pos_Fun_0016',
    input: 'mama gedhara yanavaa.',
    expected: 'මම ගෙදර යනවා.',
    description: 'Multiple spaces handling'
  },
  {
    id: 'Pos_Fun_0017',
    input: 'ela machan! supiri!!',
    expected: 'එල මචන්! සුපිරි!!',
    description: 'Slang phrase conversion'
  },
  {
    id: 'Pos_Fun_0018',
    input: 'eyaalaa enavaa.',
    expected: 'එයාලා එනවා.',
    description: 'Pronoun variation they'
  },
  {
    id: 'Pos_Fun_0019',
    input: 'mama iiyee gedhara giyaa.',
    expected: 'මම ඊයේ ගෙදර ගියා.',
    description: 'Past tense sentence'
  },
  {
    id: 'Pos_Fun_0020',
    input: 'mata oona help ekak.',
    expected: 'මට ඕන help එකක්.',
    description: 'Multi-word expression'
  },
  {
    id: 'Pos_Fun_0021',
    input: '2026-05-21 event ekak.',
    expected: '2026-05-21 event එකක්.',
    description: 'Date format handling'
  },
  {
    id: 'Pos_Fun_0022',
    input: 'anee eeka dhiyan.',
    expected: 'අනේ ඒක දියන්.',
    description: 'Informal request using casual phrasing'
  },
  {
    id: 'Pos_Fun_0023',
    input: 'mata kiyanna.',
    expected: 'මට කියන්න.',
    description: 'Simple imperative instruction'
  },
  
  {
    id: 'Pos_Fun_0024',
    input: 'mata baya hithenavaa.',
    expected: 'මට බය හිතෙනවා.',
    description: 'Common day-to-day expression'
  },

    
    // --- NEGATIVE SCENARIO (Robustness Test) ---
  {
    id: 'Neg_Fun_0001',
    input: 'mamagedharayanavaa',
    expected: 'මම ගෙදර යනවා',
    description: 'Missing spaces in simple sentence'
  },
  {
    id: 'Neg_Fun_0002',
    input: 'mama https://google.com site ekata yanavaa',
    expected: 'මම https://google.com site එකට යනවා',
    description: 'URL embedded in Singlish sentence'
  },
  {
    id: 'Neg_Fun_0003',
    input: 'mama gedhara yanavaa.\noyaa enavadha maath ekka yanna?',
    expected: 'මම ගෙදර යනවා. ඔයා එනවද මාත් එක්ක යන්න?',
    description: 'Line break in middle of sentence'
  },
  {
    id: 'Neg_Fun_0004',
    input: 'mama test@gmail.com evannam',
    expected: 'මම test@gmail.com එවන්නම්',
    description: 'Email address inside sentence'
  },
  {
    id: 'Neg_Fun_0005',
    input: 'x + y = z',
    expected: 'x + y = z',
    description: 'Mathematical expression as input'
  },
  {
    id: 'Neg_Fun_0006',
    input: 'for(i=0;i<5;i++)',
    expected: 'for(i=0;i<5;i++)',
    description: 'Programming loop syntax input'
  },
  {
    id: 'Neg_Fun_0007',
    input: '{"name":"mama"}',
    expected: '{"name":"mama"}',
    description: 'JSON formatted text input should remain unchanged'
  },
  {
    id: 'Neg_Fun_0008',
    input: '{"name":"mama"}',
    expected: '{"name":"mama"}',
    description: 'Repeated JSON formatted text input'
  },
  {
    id: 'Neg_Fun_0009',
    input: 'C:\\Users\\Nimal',
    expected: 'C:\\Users\\Nimal',
    description: 'File path as input should remain unchanged'
  },
  {
    id: 'Neg_Fun_0010',
    input: 'MaMa GeDhArA YaNaVaA',
    expected: 'මම ගෙදර යනවා',
    description: 'Sentence with mixed casing'
  },

  {
    id: 'Pos_UI_0001',
    input: 'api heta enavaa',
    expected: 'අපි හෙට එනවා  ',
    description: 'Sinhala output clears correctly when input field is cleared'
  },
  

    // --- ADD YOUR REMAINING TEST CASES BELOW THIS LINE ---

  ];

  // -------------------------------------------------------------------------
  // STEP 2: FUNCTIONAL TEST AUTOMATION LOGIC
  // -------------------------------------------------------------------------
  for (const data of testCases) {
    test(`${data.id}: ${data.description}`, async ({ page }) => {
      
      // 1. Open the website
      await page.goto('https://www.swifttranslator.com/');

      // 2. Type the Singlish input
      await page.getByPlaceholder('Input Your Singlish Text Here.').fill(data.input);

      // 3. Wait for the translation to appear
      await page.waitForTimeout(3000); 

      // 4. CAPTURE ACTUAL OUTPUT
      // FIX: Targeting the Output DIV using its specific class (bg-slate-50)
      // We use .first() in case there are multiple, but this class is usually unique to the output box.
      const outputLocator = page.locator('div.bg-slate-50').first();
      
      // FIX: Using innerText() because it is a <div>, not an input box
      const actualOutput = await outputLocator.innerText();

      // 5. LOG THE RESULT (Check your VS Code Terminal for this!)
      console.log(`---------------------------------------------------`);
      console.log(`[${data.id}] Input:    "${data.input}"`);
      console.log(`           Expected: "${data.expected}"`);
      console.log(`           Actual:   "${actualOutput.trim()}"`);
      console.log(`---------------------------------------------------`);

      // 6. VERIFY
      // This will check if the text inside the box matches your expectation.
      expect(actualOutput.trim()).toBe(data.expected);
    });
  }

  // -------------------------------------------------------------------------
  // STEP 3: UI TEST SCENARIO
  // -------------------------------------------------------------------------
  test('Pos_UI_0001: Verify Real-time Output Updates', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama');
    await page.waitForTimeout(1000);

    // Using the same corrected locator
    const actualOutput = await page.locator('div.bg-slate-50').first().innerText();
    
    // Check if it contains the partial translation
    expect(actualOutput).toContain('මම');
  });

});