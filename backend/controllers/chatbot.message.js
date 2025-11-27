import User from "../models/user.model.js";
import Bot from "../models/bot.model.js";
export const message = async(req,res)=>{

    
    try{

        const {text} = req.body;
        if(!text?.trim()){
                return res.status(400).json({error: "Text cannot be empty"});
        }
        const user = await User.create({
            sender:"user",
            text
        })
// Data to train bot

const botResponses = {
  "what is einsteins theory of relativity": "Einstein's theory consists of special and general relativity. Special relativity explains how space and time are linked for objects moving at constant speeds, including the equation E=mc². General relativity describes gravity as the curvature of spacetime caused by mass and energy.",
  "what are graphs": "Graphs are visual representations of data such as bar charts, line graphs, or pie charts. In computer science, a graph is a structure made of nodes connected by edges.",
  "what is photosynthesis": "Photosynthesis is the process by which green plants convert sunlight, water, and carbon dioxide into glucose and oxygen. It mainly occurs in chlorophyll-containing chloroplasts.",
  "define gravity": "Gravity is a natural force that pulls objects with mass toward one another. On Earth, it keeps us grounded and causes objects to fall downward.",
  "what is newtons first law": "Newton's first law states that an object remains at rest or in uniform motion unless acted upon by an external force. It is also called the law of inertia.",
  "what is newtons second law": "Newton's second law states that force equals mass times acceleration (F = ma). It explains how the motion of objects changes when force is applied.",
  "what is newtons third law": "Newton's third law states that for every action, there is an equal and opposite reaction.",
  "define atom": "An atom is the smallest unit of matter that retains the properties of an element. It consists of protons, neutrons, and electrons.",
  "what is an element": "An element is a pure substance made of only one type of atom. Examples include oxygen, carbon, and gold.",
  "define molecule": "A molecule is formed when two or more atoms bond together chemically, such as H₂O or CO₂.",
  "what is matter": "Matter is anything that has mass and occupies space.",
  "define energy": "Energy is the ability to do work or cause change. Forms include kinetic, potential, thermal, and electrical energy.",
  "what is a cell": "A cell is the basic structural and functional unit of life. All living organisms are made of cells.",
  "define dna": "DNA is the hereditary material in almost all living organisms. It contains genetic instructions used in growth and development.",
  "what is rna": "RNA is a molecule involved in protein synthesis and the transmission of genetic information.",
  "what is the pythagorean theorem": "The Pythagorean theorem states that in a right triangle, a² + b² = c², where c is the hypotenuse.",
  "define angle": "An angle is the space between two intersecting lines or surfaces, measured in degrees.",
  "what is a fraction": "A fraction represents part of a whole and is written as a/b, where a is the numerator and b is the denominator.",
  "what is algebra": "Algebra is a branch of mathematics that deals with symbols and rules for manipulating those symbols.",
  "what is a variable": "A variable is a symbol that represents an unknown value in an equation or expression.",
  "define algorithm": "An algorithm is a step-by-step procedure used to solve a problem or perform a task.",
  "what is a computer program": "A computer program is a set of instructions that a computer executes to perform specific tasks.",
  "what is a database": "A database is an organized collection of data that can be accessed, managed, and updated efficiently.",
  "what is the internet": "The Internet is a global network of interconnected computers that communicate using standard protocols.",
  "what is software": "Software is a collection of programs and data that instruct a computer on how to operate.",
  "what is hardware": "Hardware refers to the physical components of a computer, such as the CPU, RAM, and hard drive.",
  "define operating system": "An operating system is system software that manages computer hardware and provides services for applications.",
  "what is artificial intelligence": "Artificial intelligence is the ability of machines to perform tasks that typically require human intelligence, such as reasoning and learning.",
  "what is machine learning": "Machine learning is a branch of AI where systems learn from data instead of being explicitly programmed.",
  "what is deep learning": "Deep learning is a type of machine learning that uses neural networks with many layers to process complex patterns.",
  "define ecosystem": "An ecosystem is a community of living organisms interacting with each other and their physical environment.",
  "what is climate change": "Climate change refers to long-term changes in global temperature, weather patterns, and environmental conditions.",
  "what is evolution": "Evolution is the process by which species change over time through natural selection and genetic variation.",
  "define mitochondria": "Mitochondria are organelles known as the powerhouses of the cell because they produce energy in the form of ATP.",
  "what is diffusion": "Diffusion is the movement of particles from an area of high concentration to an area of low concentration.",
  "define osmosis": "Osmosis is the movement of water molecules across a semipermeable membrane from low solute concentration to high solute concentration.",
  "what is velocity": "Velocity is the speed of an object in a specific direction.",
  "define acceleration": "Acceleration is the rate of change of velocity with respect to time.",
  "what is force": "Force is a push or pull that can change an object's motion. It is measured in newtons.",
  "define mass": "Mass is the amount of matter in an object and does not change with location.",
  "what is weight": "Weight is the force exerted on an object due to gravity.",
  "what is friction": "Friction is a force that opposes the motion of objects in contact.",
  "define current": "Electric current is the flow of electric charge through a conductor, measured in amperes.",
  "what is voltage": "Voltage is the potential difference that drives the flow of electric current.",
  "power": "Power is the rate at which work is done or energy is transferred. It is measured in watts."
  
};



const normalizedText = text.toLowerCase().replace(/[^\w\s]/gi, '').trim();
const botResponse = botResponses[normalizedText ] || "Sorry, I don't understand that"; 

const bot = await Bot.create({
    text: botResponse
})

return res.status(200).json({
    userMessage:user.text,
    botMessage:bot.text,

})

    }catch(error){
        console.log("Error in message controller: ", error);
        return res.status(500).json({error: "Internal Server Error"});
    }
}