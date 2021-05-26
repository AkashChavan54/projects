
words=["apple",'aeroplane','sharukh','movies','televison','marvel','electricity','computer','harddrive','building','photoframe','keyboard','beer','keyboard','vegetables','mangoes','bedroom','notebook','shirt','secondary','release', 'river', 'important', 'electric', 'defective', 'spring', 'orange', 'happy', 'zealous', 'flowery', 'accurate', 'brake', 'title', 'festive', 'wrathful', 'scissors', 'peaceful', 'finicky', 'shape', 'soothe', 'spotted', 'needless', 'abundant', 'humdrum', 'mouth', 'bounce', 'thank', 'avoid', 'shocking', 'minor', 'secret', 'rabbit', 'protect', 'honey', 'business', 'worthless', 'suggest', 'splendid', 'gigantic', 'arrive', 'dinosaurs', 'machine', 'annoy', 'telephone', 'curtain', 'monkey', 'things', 'refuse', 'lunch', 'wooden', 'request', 'faded', 'didactic', 'annoying', 'finger', 'acrid', 'overt', 'paste', 'rejoice', 'ignorant', 'exist', 'madly', 'doubt', 'increase', 'measly', 'tangy', 'dislike', 'bikes', 'rambunctious', 'complete', 'motion', 'coast', 'burst', 'consist', 'yellow', 'cakes', 'close', 'teaching', 'undesirable', 'squash', 'border', 'memorize', 'scarecrow', 'present', 'meaty', 'wonderful', 'pencil', 'advice', 'apologize', 'possible', 'dreary', 'stage', 'tongue', 'puffy', 'ghost', 'quickest', 'frequent', 'efficient', 'angry', 'alleged', 'notebook', 'dream', 'spark', 'throne', 'unnatural', 'brief', 'ad hoc', 'overrated', 'house', 'messy', 'pastoral', 'afternoon', 'enchanting', 'tense', 'spotless', 'button', 'reduce', 'leather', 'spotty', 'growth', 'alert', 'statement', 'overflow', 'flame', 'disagree', 'whispering', 'lively', 'healthy', 'sedate', 'plant', 'snatch', 'combative', 'grain', 'spurious', 'fuzzy', 'large', 'exotic', 'woozy', 'unaccountable', 'courageous', 'match', 'pointless', 'languid', 'capricious', 'mammoth', 'psychedelic', 'ordinary', 'cobweb', 'determined', 'stereotyped', 'sordid', 'arrest', 'inquisitive', 'carpenter', 'small', 'vivacious', 'guard', 'funny', 'shaky', 'hilarious', 'spiders', 'abounding', 'humor', 'sticky', 'plastic', 'ratty', 'productive', 'agree', 'temper', 'prepare', 'whistle', 'responsible', 'drain', 'eight', 'loutish', 'scrub', 'volatile', 'moldy', 'attract', 'receptive', 'aberrant', 'store', 'materialistic', 'shrug', 'billowy', 'driving', 'travel', 'fairies', 'lumpy', 'assorted', 'babies', 'attend', 'dress', 'surprise', 'tranquil', 'marvelous', 'illustrious', 'plate', 'cover', 'trousers', 'superficial', 'bawdy', 'drown', 'envious', 'wasteful', 'religion', 'bells', 'announce', 'elastic', 'smoggy', 'lively', 'serious', 'start', 'lavish', 'basin', 'wrench', 'picture', 'delightful', 'trade', 'tenuous', 'scream', 'produce', 'subtract', 'industrious', 'station', 'synonymous', 'wrong', 'warlike', 'contain', 'mailbox', 'liquid', 'expensive', 'string', 'admit', 'lettuce', 'decision', 'quixotic', 'towering', 'better', 'fluffy', 'grease', 'mountainous', 'stick', 'icicle', 'succinct', 'plastic', 'acoustic', 'abrupt', 'position', 'spark', 'crook', 'kitty', 'sneaky', 'pollution', 'mundane', 'barbarous', 'delight', 'flesh', 'robin', 'party', 'milky', 'round', 'wretched', 'pleasant', 'treatment', 'winter', 'available', 'train', 'writer', 'prose', 'furtive', 'building', 'cattle', 'wealthy', 'sassy', 'sponge', 'reflective', 'wanting', 'bustling', 'tearful', 'hypnotic', 'animated', 'verdant', 'unlock', 'direful', 'obtainable', 'bleach', 'unarmed', 'happen', 'trick', 'queen', 'conscious', 'mourn', 'girls', 'frame', 'erect', 'secretary', 'field', 'helpful', 'science', 'crown', 'heady', 'grotesque', 'dress', 'degree', 'cushion', 'piquant', 'innate', 'square', 'cactus', 'tricky', 'company', 'remarkable', 'calculate', 'rinse', 'crime', 'flagrant', 'permit', 'theory', 'thoughtful', 'crate', 'yummy', 'offbeat', 'paltry', 'optimal', 'stove', 'chemical', 'shallow', 'merciful', 'abortive', 'perpetual', 'zonked', 'tired', 'regret', 'potato', 'confuse', 'childlike', 'sound', 'attack', 'exchange', 'check', 'damaged', 'grandmother', 'division', 'groovy', 'throat', 'office', 'stare', 'meddle', 'shivering', 'interfere', 'occur', 'sugar', 'blind', 'perform', 'cherries', 'flavor', 'stupendous', 'purpose', 'extend', 'fanatical', 'grubby', 'romantic', 'outrageous', 'swift', 'pocket', 'front', 'flower', 'quicksand', 'sturdy', 'resolute', 'letters', 'expert', 'hapless', 'bloody']
const btnstart = document.querySelector('.btnstart');

const btnSubmit = document.querySelector('.btn-primary');
inputText= document.querySelector(".input-text")

const checkingAnswer = document.querySelector(".checking")
const dashes=document.querySelector(".dash")
chances= document.querySelector(".chances")



function init(){
    i=-1;
    chancesLeft=10;
    random = words[Math.floor(Math.random() * words.length)];
    console.log(random)
    const dashes=document.querySelector(".dash")
    solution=[]
    for (var k=0;k<random.length;k++){
    solution.push("_")
    }
    newDashes=solution.join(" ")
    dashes.textContent=newDashes
    checkingAnswer.textContent="Type a letter"
    document.querySelector(".dash").style.background="#aad8d3"
    document.querySelector(".chances").style.fontSize="30px"
    chances.textContent=`You've got ${chancesLeft} chances left`

    
}   


let i=-1;
let chancesLeft=10;

while(i<chancesLeft){
    btnstart.addEventListener("click",init)
        
    btnSubmit.addEventListener("click",function(){
        var inp= document.getElementById("input-text").value;
        document.getElementById("input-text").value=""
        inp=inp.toLowerCase();
        
        if (random.includes(inp)){
            checkingAnswer.textContent="Correct Letter!"
            
            for (var j=0;j<random.length;j++){
                if (inp==random[j]){
                    solution[j]=inp
                }
            newDashes=solution.join(" ")
            dashes.textContent=newDashes
            }

            if (solution.join("")===random){
                document.querySelector(".dash").style.background="rgb(100 250 75)"
                checkingAnswer.textContent="You Won!!!"
                chances.textContent=`The secret word was ${random}!`                
            }
        }

        else{
            chancesLeft-=1;
            if (chancesLeft==0){
                document.querySelector(".dash").style.background="rgb(500 0 0)"
                document.querySelector(".chances").style.color="rgb(0 0 0)"
                document.querySelector(".chances").style.fontSize="50px"
                checkingAnswer.textContent="Game Over" ;
                chances.textContent=`The secret word was ${random}!` ;
                
                
            }
            else if (chancesLeft<0){
                checkingAnswer.textContent="you are a loser!"
                chances.textContent="go play again!"
                
            }
            else{
                
                checkingAnswer.textContent="Wrong"
                chances.textContent=`You've got ${chancesLeft} chances left`

            }
        }


        })
    
i=11;

}
