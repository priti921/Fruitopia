const sendContactFrom = async (data) => {
  //sending data to server
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => {
    //if response is not successful
    if (!res.ok) console.error('Failed to send request')
    //else
    return res.json()
  }).error((e) => console.error(e))
}

//never just export, always export default
export default sendContactFrom
