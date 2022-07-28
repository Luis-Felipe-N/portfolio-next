import { IProject } from "../types/Projects"
import { ISkill } from "../types/Skills"

const endPointer = "https://graphql.datocms.com/"

const fetchCMSApi = async (query: string) => {
    const response = await fetch(endPointer, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: process.env.NEXT_PUBLIC_API_KEY!
        },
        body:  JSON.stringify({
            query: query,
            variables: {}
        })
        
    })
    
    const json = await response.json()

    if (json.erros) {
        return new Error('Failed to fecth API')
    }
    
    return json.data
}


export async function getHomeProjects(): Promise<IProject[]> {  
  const { allHomeProjects } = await fetchCMSApi(`{
    allHomeProjects {
      idDoProjeto
    }
  }
  `)

  const idsProjects = allHomeProjects.map((project: {idDoProjeto: number}) => {
    return project.idDoProjeto
  })

  const data = await fetchCMSApi(`
  {
    allProjects(filter: {id: {in: [${idsProjects}]}}) {
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


export async function getProjects(): Promise<IProject[]> {
  
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

export async function getSkills(): Promise<ISkill[]> {
  const data = await fetchCMSApi(`{
    allSkills(orderBy: _createdAt_ASC) {
      id
      name
      image {
        url
      }
    }
  }`)
  
  return data.allSkills
}

export async function getProject( id: string ) {
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

  return data.project
}