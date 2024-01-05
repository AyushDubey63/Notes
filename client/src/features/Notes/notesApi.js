export async function fetchNotesUserById(id) {
  try {
    const response = await fetch(`http://localhost:8080/notes/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    return (data);
  } catch (error) {
    // Handle errors here
    console.error(error);
    return { error: error.message };
  }
}



export function createNote(note) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/notes',{
      method: 'POST',
      body: JSON.stringify(note),
      headers:{'content-type':'application/json'}
    })
    const data = await response.json();
    console.log(data)
    resolve( data );
  })
}

export function updateNote(update) {
  return new Promise(async(resolve)=>{
    const response = await fetch('http://localhost:8080/notes/'+update.id,{
      method: "PATCH",
      body: JSON.stringify(update),
      headers: {'content-type':'application/json'}
    });
    const data = await response.json();
    resolve({data})
  })
}

export function deleteeNote(id) {
  return new Promise(async(resolve)=>{
    const response = await fetch('http://localhost:8080/notes/'+id,{
      method: "DELETE",
      headers: {'content-type':'application/json'}
    });
    const data = await response.json();
    console.log(data)
    resolve({data})
  })
}

