import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('food.db')

export const init=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS foods (id INTEGER PRIMARY KEY NOT NULL,title TEXT NOT NULL, imageURL TEXT NOT NULL, desc TEXT NOT NULL, username TEXT NOT NULL, points INTEGER NOT NULL);',
                [],
                ()=>{resolve()},(_,err)=>{reject(err)}
            )
    
        })
    })

    return promise;
}

export const insertFood = (title, desc, imageURL, username,points)=>{
    console.log(title, desc, imageURL, username,points)
    const promise=new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql(`INSERT INTO foods (title,imageURL,desc,username,points) VALUES (?,?,?,?,?);`,
                [title,imageURL,desc,username,points],
                (_,result)=>{resolve(result)},(_,err)=>{reject(err)}
            )
    
        })
    })

    return promise;
}

export const fetchAllFood = ()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql(`SELECT * FROM foods;`,
                [],
                (_,result)=>{resolve(result)},(_,err)=>{reject(err)}
            )
    
        })
    })

    return promise;
}
export const fetchUserFood = username=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql(`SELECT * FROM foods WHERE username='${username}';`,
                [],
                (_,result)=>{resolve(result)},(_,err)=>{reject(err)}
            )
    
        })
    })

    return promise;
}

export const deleteFoodItem = id=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql(`DELETE FROM foods WHERE id='${id}';`,
                [],
                (_,result)=>{resolve(result)},(_,err)=>{reject(err)}
            )
    
        })
    })

    return promise;
}

export const updateFoodDetails = (id,title,desc,imageURL)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql(`UPDATE foods SET title=${title} desc=${desc} imageURL=${imageURL} WHERE id='${id}';`,
                [],
                (_,result)=>{resolve(result)},(_,err)=>{reject(err)}
            )
    
        })
    })

    return promise;
}

export const updateFoodPoints = (id,vote)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql(`UPDATE foods SET Points=Points+${vote}  WHERE id='${id}';`,
                [],
                (_,result)=>{resolve(result)},(_,err)=>{reject(err)}
            )
    
        })
    })

    return promise;
}