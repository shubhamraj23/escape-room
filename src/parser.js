const parser = (content) => {
  let result = []
  for (let i=0; i<content.length; i++){
    let pageContent = content[i]
    let divContent = null
    let className = pageContent["class"]
    let id = pageContent["id"]
    let text = pageContent["text"]
    let bullets = []

    if(pageContent["tag"] === "h1"){
      divContent = 
        <h1 className={className} id={id}>
          {text}
        </h1>
    }
    else if(pageContent["tag"] === "h2"){
      divContent = 
        <h2 className={className} id={id}>
          {text}
        </h2>
    }
    else if(pageContent["tag"] === "p"){
      divContent = 
        <p className={className} id={id}>
          {text}
        </p>
    }
    else if(pageContent["tag"] === "ul"){
      for(let j=0; j<text["text"].length; j++){
        bullets.push(
          <li className={text["class"]} id={text["id"]}>{text["text"][j]}</li>
        )
      }

      divContent = 
        <ul className={className} id={id}>
          {bullets}
        </ul>
    }

    result.push(
      <div>
        {divContent}
      </div>
    )
  }

  return result
}

export {parser};