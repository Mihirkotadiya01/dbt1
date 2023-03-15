db.collection('cafess').get().then((snapshot)=>{
    console.log(snapshot.docs);
})