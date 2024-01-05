// A mock function to mimic making an async request for data


export async function fetchAllUsers() {
  try {
    const response = await fetch('http://localhost:8080/users');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    // Handle errors here
    console.error(error);
    return { error: error.message };
  }
}

export async function createUser(userData) {
  try {
    const response = await fetch('http://localhost:8080/users/signup',{
      method: 'POST',
      body: JSON.stringify(userData),
      headers:{'content-type':'application/json'}
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    // Handle errors here
    console.error(error);
    return { error: error.message };
  }
}


export async function checkUser(userData) {
  try {
    const email = userData.email
    const password = userData.password
    const response = await fetch('http://localhost:8080/users/login', {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {'content-type':'application/json'}
    })
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data)
    if(data){
      if (password === data.password) {
        // console.log(data[[0]])
        console.log(data)
        return({data})
      } else {
        return({message:'wrong creadentials'})
      }
    }else {
      return({message:"user not found"})
    }
  } catch (error) {
    // Handle errors here
    console.error(error);
    return { error: error.message };
  }
}

export function updateUser(update) {
  return new Promise(async(resolve)=>{
    const response = await fetch('http://localhost:8080/users/'+update.id,{
      method: "PATCH",
      body: JSON.stringify(update),
      headers: {'content-type':'application/json'}
    });
    const data = await response.json();
    resolve({data})
  })
}

export function signOut(){
  return new Promise(async(resolve)=>{
    
    resolve({data: 'success'})
  })
}





