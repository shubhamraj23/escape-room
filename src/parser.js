const preprocess = (text) => {
  const name = localStorage.getItem("name")
  const friendList = localStorage.getItem("friends")
  if (friendList === null){
    return text
  }
  const friends = friendList.split(",")
  let randomIndex = Math.floor(Math.random()*friends.length)

  if(text.includes("@name")){
    text = text.replace("@name", name)
  }
  if(text.includes("@friend1")){
    text = text.replace("@friend1", friends[0])
  }
  if(text.includes("@friend2")){
    text = text.replace("@friend2", friends[1])
  }
  if(text.includes("@friend3")){
    text = text.replace("@friend3", friends[2])
  }
  if(text.includes("@friend4")){
    text = text.replace("@friend4", friends[3])
  }
  if(text.includes("@randomFriend")){
    text = text.replace("@randomFriend", friends[randomIndex])
  }
  if(text.includes("@wrongText")){
    const incorrectAttempts = localStorage.getItem("wrongAttempts")
    let correctText = ""
    if (incorrectAttempts === "0"){
      correctText = `You haven't made any incorrect attempts of opening the door so far. 
      You were lucky to crack them in the first attempt.`
    }
    else if (incorrectAttempts === "1"){
      correctText = "You have made 1 incorrect attempt of opening the door so far."
    }
    else {
      correctText = `You have made ${incorrectAttempts} incorrect attempts of opening the door so far.`
    }
    text = text.replace("@wrongText", correctText)
  }

  return text
}

const parser = (content) => {
  let result = []
  for (let i=0; i<content.length; i++){
    let pageContent = content[i]
    let divContent = null
    let className = pageContent["class"]
    let id = pageContent["id"]
    let oldText = pageContent["text"]
    let bullets = []
    let text = oldText

    if (typeof(oldText) === "string"){
      text = preprocess(oldText)
    }

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
        let modifiedText = preprocess(text["text"][j])
        bullets.push(
          <li className={text["class"]} id={text["id"]}>{modifiedText}</li>
        )
      }

      divContent = 
        <ul className={className} id={id}>
          {bullets}
        </ul>
    }
    else if(pageContent["tag"] === "div"){
      for(let j=0; j<text["text"].length; j++){
        let modifiedText = preprocess(text["text"][j])
        bullets.push(
          <p className={text["class"]} id={text["id"]}>{modifiedText}</p>
        )
      }
      
      divContent = 
        <div className={className} id={id}>
          {bullets}
        </div>
    }
    else if(pageContent["tag"] === "img"){
      divContent = 
        <div className={className} id={id}>
          <img src={pageContent["file"]} className="img-fluid"></img>
        </div>
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