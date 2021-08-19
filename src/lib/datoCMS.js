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
    console.log('vsds')

    const data = await fetchCMSApi(`
    {
        allProjects {
          id
          _firstPublishedAt
          project {
            ... on CodeRecord {
              id
              linDoRepositorio {
                value
              }
              _modelApiKey
            }
            ... on DescriptionRecord {
              id
              descricao
              _modelApiKey
            }
            ... on ImageRecord {
              id
              _modelApiKey
              imagem {
                alt
                url
                title
              }
            }
            ... on LinguageRecord {
              id
              linguagem
              _modelApiKey
            }
            ... on NameRecord {
              id
              _modelApiKey
              nomeDoProjeto
            }
          }
        }
      }      
    `)

    return data.allProjects
}