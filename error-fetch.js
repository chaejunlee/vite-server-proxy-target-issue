export function errorFetch(element, content) {
  const set = (content) => {
    element.innerHTML = `when ${content}`;
  };
  element.addEventListener('click', () => {
    fetch(`/${content}`, {
      method: 'POST',
      body: JSON.stringify({
        message: '',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
  set(content);
}
