//text for paragrpah
const text = [
  'The giant panda, also known as the panda bear or simply panda, is a bear species endemic to China. It is characterised by its black-and-white coat and rotund body. The name "giant panda" is sometimes used to distinguish it from the red panda, a neighboring musteloid',
  "The cat, commonly referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC",
  "The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from the extinct Pleistocene wolf; the gray wolf is the dogs closest living relative The dog was the first species to be domesticated by humans",
  "Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout most of the Northern Hemisphere and partially in the Southern Hemisphere",
  "The lion is a large cat of the genus Panthera, native to Africa and India. It has a muscular, broad-chested body; a short, rounded head; round ears; and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane",
]

//Accessing p tag from html document using DOM method as Nodelist[]
const pTag = document.querySelectorAll("p")

//Actual array of p tag
const actualPTag = [...pTag]

//manipulate using for loop 
// for(let i =0; i<pTag.length; i++)
//     {
//         pTag[i].innerHTML=text[i]
//     }

//manipulate using for_in loop
// for(const ei in pTag)
//     {
//         pTag[ei].innerHTML=text[ei]
//     }

//manipulate using for_of loop
// let num = 0
// for(const value of text)
//     {
//         pTag[num++].innerHTML=value
//     }

//forEach() method to manipulate
text.forEach((tag,index,array)=>{
    pTag[index].innerHTML=tag
})
console.log(text)