(async () => {
  window.__iconB64 = "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";
  const bin = atob(window.__iconB64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  const file = new File([bytes], 'clopos-icon.png', { type: 'image/png' });
  const input = document.querySelector('input[name="iconImage"]') || document.querySelector('input[type=file]');
  if (!input) return { ok: false, err: 'no input' };
  const dt = new DataTransfer();
  dt.items.add(file);
  input.files = dt.files;
  input.dispatchEvent(new Event('change', { bubbles: true }));
  input.dispatchEvent(new Event('input', { bubbles: true }));
  await new Promise(r => setTimeout(r, 600));
  // country
  const countryInput = document.getElementById('react-select-country-input');
  let country = null;
  if (countryInput) {
    countryInput.focus();
    countryInput.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    const nativeSet = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
    nativeSet.call(countryInput, 'Azerbaijan');
    countryInput.dispatchEvent(new Event('input', { bubbles: true }));
    await new Promise(r => setTimeout(r, 1000));
    const opts = [...document.querySelectorAll('[id^="react-select-country-option"]')];
    const match = opts.find(o => (o.textContent||'').toLowerCase().includes('azerbaijan'));
    if (match) {
      match.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
      match.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      country = (match.textContent||'').slice(0,80);
    } else country = { err: 'no match', n: opts.length };
  }
  return {
    ok: true,
    b64len: window.__iconB64.length,
    files: input.files.length,
    hasIcon: document.querySelector('#hasIcon')?.checked,
    country,
    tags: [...document.querySelectorAll('input[name=tags]')].map(i=>i.value),
    platforms: [...document.querySelectorAll('input[name=platforms]')].map(i=>i.value),
  };
})()