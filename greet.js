function greet(name){
    if(name==null){
        return "Hello, my friend.";
    }else if(name == name.toUpperCase()){
        return "HELLO, "+name.toUpperCase();
    }else if(Array.isArray(name)){
        var count = name.length;
        var text = "";
        
        if(count == 2 ){
            
            return "Hello, " + name[0] + " and " + name[1] +"."
        }else{
            for(i = 0; i < count; i++){
                if(i == count-1){
                    text = text + "and "
                    text = text + name[i];
                    break
                }
                text = text + name[i]+", ";
            }
            return "Hello, " + text + "."
        }
    
    
     } else{
        return "Hello, "+name;
    }
}
module.exports = greet;
