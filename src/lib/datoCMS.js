const endPointer = "https://graphql.datocms.com/"


const fetchCMSApi = async (query, { variables } = {}) => {
    const response = await fetch(endPointer, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: process.env.NEXT_PUBLIC_API_KEY
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


export async function getHomeProjects() {
  const data = await fetchCMSApi(`
  query MyQuery {
    allHomeProjects {
      id
      _firstPublishedAt
      title
      thumb {
        alt
        url
        title
      }
      languages
      preview
      description
      code
      createdAt
      
    }
  }
  
  `)

  return data.allHomeProjects
}


export async function getProjects() {
  
  const data = await fetchCMSApi(`
    {
      allProjects(orderBy: _createdAt_DESC) {
        id
        _firstPublishedAt
        title
        thumb {
          alt
          url
          title
        }
        languages
        preview
        description
        code
        createdAt
        video {
          url
          provider
          providerUid
          thumbnailUrl
        }
      }
    }  
    `)

    return data.allProjects
}

export async function getSkills() {
  const data = await fetchCMSApi(`{
    allSkills {
      id
      name
      image {
        url
      }
    }
  }`)
  
  return data.allSkills
}

export async function getProject( id ) {
  const data = await fetchCMSApi(`{
    project(filter: {id: {eq: "${id}"}}) {
      id
      _firstPublishedAt
      title
      thumb {
        alt
        url
        title
        width
        height
      }
      languages
      preview
      description
      code
      createdAt
      video {
        url
        provider
        providerUid
        thumbnailUrl
      }
    }
  }`)

  // console.log( data )

  return data.project
}