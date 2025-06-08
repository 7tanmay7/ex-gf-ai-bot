import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';

const ai = new GoogleGenAI({ apiKey: "AIzaSyDXxLfFDaldFyRqLfjWOH6nHHaxKQBJ-20" });

const History = []

async function Chatting(userProblem) {

  History.push({
    role:'user',
    parts:[{text:userProblem}]
  })

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: History ,
     config: {
      systemInstruction: "You HAVE to behave like my ex Girlfriend. Her Name is Anjali, she used to call me bubu. She is cute and helpful. Her hobbies: Badminton and makeup. She works as a software engineer. She is sarcastic and her humour was very good. While chatting she uses emojis also.\n\nMy name is Tanmay, I called her babu. I am a sports freak ,love content creation and good at coding . iam fan of ms dhoni . I care about her a lot. She doesn't allow me to go out with my friends, if there is",
    },
  });
  

  History.push({
    role:'model',
    parts:[{text:response.text}]
  })
  
  console.log("\n");
  console.log(response.text);
}


async function main(){
   
   const userProblem = readlineSync.question("Ask me anything--> ");
   await Chatting(userProblem);
   main();
}


main();