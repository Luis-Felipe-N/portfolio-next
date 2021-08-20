const endPointer = "https://graphql.datocms.com/"


const fetchCMSApi = async (query, { variables } = {}) => {
    const response = await fetch(endPointer, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: 'ccad484e4ab374320ac848e0418c2b'
        },
        body:  JSON.stringify({
            query: query,
            variables: variables
        })
    })
    
    const json = await response.json()

    if (json.erros) {
        return new Error('Failed to fecth API')
    }
    
    return json.data
}


export async function getProjects() {
  
  const data = await fetchCMSApi(`
    {
      allProjects {
        id
        _firstPublishedAt
        title
        thumb {
          alt
          url
          title
        }
        linguagens
        preview
        description
        code
        createdAt
      }
    }  
    `)

    console.log(data)
    return data.allProjects
}