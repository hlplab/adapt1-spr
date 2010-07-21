var shuffleSequence = seq("intro", "info", "practice", sepWith("sep", shuffle(randomize("filler"), rshuffle("nc","comp"))), "outtro");

var ds = "RegionedSentence"
var qs = "Question"

var defaults = [
    "Separator", {
        transfer: 1500,
        normalMessage: "Please wait for the next sentence",
        errorMessage: "Wrong. Please wait for the next sentence" },
    "RegionedSentence", {
        mode: "self-paced reading" },
    "Question", {
        as: ["Yes","No"],
        randomOrder: false,
        hasCorrect: true }
];

var items = [
    ["sep", "Separator", {}],
    ["intro", "Message", {consentRequired: true, html: {include: "intro.html"}}],
    ["info", "Form", {html: { include: "info.html" }, } ],
    [["nc",1], ds, {s: "The talented photographer accepted the money could not be spent yet."}, 
        qs, {q: "Could the money be spent? " , hasCorrect: "No", randomOrder: false}],
    [["comp",1], ds, {s: "The talented photographer accepted that the money could not be spent yet."}, 
        qs, {q: "Could the money be spent? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[2,1]], ds, {s: "The ticket agent admitted that the mistake had been careless and stupid."}, 
        qs, {q: "Did the agent err? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[2,1]], ds, {s: "The ticket agent admitted the mistake had been careless and stupid."}, 
        qs, {q: "Did the agent err? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[3,1]], ds, {s: "The newspaper editor advocated that the truth needed to be made public."}, 
        qs, {q: "Did the editor want to hide the truth? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[3,1]], ds, {s: "The newspaper editor advocated the truth needed to be made public."}, 
        qs, {q: "Did the editor want to hide the truth? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[4,1]], ds, {s: "The proud mother announced the wedding would be a big event."}, 
        qs, {q: "Would the wedding be big? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[4,1]], ds, {s: "The proud mother announced that the wedding would be a big event."}, 
        qs, {q: "Would the wedding be big? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[5,1]], ds, {s: "The divorce lawyer argued the issue was irrelevant to the case."}, 
        qs, {q: "Was the relevance of the issue unquestioned? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[5,1]], ds, {s: "The divorce lawyer argued that the issue was irrelevant to the case."}, 
        qs, {q: "Was the relevance of the issue unquestioned? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[6,1]], ds, {s: "The concerned priest asserted the belief would be hard to justify."}, 
        qs, {q: "Did a priest make the assertion? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[6,1]], ds, {s: "The concerned priest asserted that the belief would be hard to justify."}, 
        qs, {q: "Did a priest make the assertion? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[7,1]], ds, {s: "The cab driver assumed that the blame belonged to the other driver."}, 
        qs, {q: "Did the cab driver take the blame? " , hasCorrect: "No", randomOrder: false}],
    [["comp",[7,1]], ds, {s: "The cab driver assumed the blame belonged to the other driver."}, 
        qs, {q: "Did the cab driver take the blame? " , hasCorrect: "No", randomOrder: false}],
    [["comp",[8,1]], ds, {s: "The job applicant believed the intervewer had been dishonest with her."}, 
        qs, {q: "Was there a job interview? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[8,1]], ds, {s: "The job applicant believed that the intervewer had been dishonest with her."}, 
        qs, {q: "Was there a job interview? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[9,1]], ds, {s: "The weary traveler claimed that the luggage had been stolen in Rome."}, 
        qs, {q: "Was the traveler tired? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[9,1]], ds, {s: "The weary traveler claimed the luggage had been stolen in Rome."}, 
        qs, {q: "Was the traveler tired? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[10,1]], ds, {s: "The defense attorney conceded that the point might come up in court"}, 
        qs, {q: "Was it possible the point would come up? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[10,1]], ds, {s: "The defense attorney conceded the point might come up in court"}, 
        qs, {q: "Was it possible the point would come up? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[11,1]], ds, {s: "The account executive concluded the speech had not gone very well."}, 
        qs, {q: "Was the speech a huge success? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[11,1]], ds, {s: "The account executive concluded that the speech had not gone very well."}, 
        qs, {q: "Was the speech a huge success? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[12,1]], ds, {s: "The bank guard confessed that the robbery had been his own idea."}, 
        qs, {q: "Was the bank guard involved in the robbery? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[12,1]], ds, {s: "The bank guard confessed the robbery had been his own idea."}, 
        qs, {q: "Was the bank guard involved in the robbery? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[13,1]], ds, {s: "The teenage girl confided the secret had been really bothering her."}, 
        qs, {q: "Did the secret bother the girl? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[13,1]], ds, {s: "The teenage girl confided that the secret had been really bothering her."}, 
        qs, {q: "Did the secret bother the girl? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[14,1]], ds, {s: "The CIA director confirmed that the rumor should have been stopped sooner."}, 
        qs, {q: "Had the rumor been stopped? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[14,1]], ds, {s: "The CIA director confirmed the rumor should have been stopped sooner."}, 
        qs, {q: "Had the rumor been stopped? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[15,1]], ds, {s: "The experienced judge decided the appeal should be started right away."}, 
        qs, {q: "Did the judge want to delay the appeal? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[15,1]], ds, {s: "The experienced judge decided that the appeal should be started right away."}, 
        qs, {q: "Did the judge want to delay the appeal? " , hasCorrect: "No", randomOrder: false}],
    [["comp",[16,1]], ds, {s: "The new mayor declared that the holiday would be a festive occasion."}, 
        qs, {q: "Had the mayor held his office for a long time? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[16,1]], ds, {s: "The new mayor declared the holiday would be a festive occasion."}, 
        qs, {q: "Had the mayor held his office for a long time? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[17,1]], ds, {s: "The crooked politician denied the accusation would change things at all."}, 
        qs, {q: "Was someone accused? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[17,1]], ds, {s: "The crooked politician denied that the accusation would change things at all."}, 
        qs, {q: "Was someone accused? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[18,1]], ds, {s: "The scuba diver discovered the wreck was caused by a collision."}, 
        qs, {q: "Did a glacier cause the wreck? " , hasCorrect: "No", randomOrder: false}],
    [["comp",[18,1]], ds, {s: "The scuba diver discovered that the wreck was caused by a collision."}, 
        qs, {q: "Did a glacier cause the wreck? " , hasCorrect: "No", randomOrder: false}],
    [["comp",[19,1]], ds, {s: "The ice skater doubted that the judges would keep her from competing."}, 
        qs, {q: "Was there a competition? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[19,1]], ds, {s: "The ice skater doubted the judges would keep her from competing."}, 
        qs, {q: "Was there a competition? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[20,1]], ds, {s: "The angry father emphasized that the problems were continuing to get worse."}, 
        qs, {q: "Was the father pleased? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[20,1]], ds, {s: "The angry father emphasized the problems were continuing to get worse."}, 
        qs, {q: "Was the father pleased? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[21,1]], ds, {s: "The primary suspect established the alibi had been a total lie."}, 
        qs, {q: "Was the alibi false? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[21,1]], ds, {s: "The primary suspect established that the alibi had been a total lie."}, 
        qs, {q: "Was the alibi false? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[22,1]], ds, {s: "Mary Ann's mother feared the tantrums would get worse and worse."}, 
        qs, {q: "Did Mary Ann have tantrums? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[22,1]], ds, {s: "Mary Ann's mother feared that the tantrums would get worse and worse."}, 
        qs, {q: "Did Mary Ann have tantrums? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[23,1]], ds, {s: "The physical therapist felt that the pain would be easy to manage."}, 
        qs, {q: "Was the therapist completely baffled by the pain? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[23,1]], ds, {s: "The physical therapist felt the pain would be easy to manage."}, 
        qs, {q: "Was the therapist completely baffled by the pain? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[24,1]], ds, {s: "The shrewd salesman figured that the prices would be going up soon."}, 
        qs, {q: "Was it possible the prices would change? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[24,1]], ds, {s: "The shrewd salesman figured the prices would be going up soon."}, 
        qs, {q: "Was it possible the prices would change? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[25,1]], ds, {s: "The sales department guaranteed the product would go on sale soon."}, 
        qs, {q: "Was there a new product? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[25,1]], ds, {s: "The sales department guaranteed that the product would go on sale soon."}, 
        qs, {q: "Was there a new product? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[26,1]], ds, {s: "The desk clerk guessed that the name had been written very hastily."}, 
        qs, {q: "Had a name been written? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[26,1]], ds, {s: "The desk clerk guessed the name had been written very hastily."}, 
        qs, {q: "Had a name been written? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[27,1]], ds, {s: "The gossipy neighbor heard that the story had never actually been true."}, 
        qs, {q: "Was the story to be trusted? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[27,1]], ds, {s: "The gossipy neighbor heard the story had never actually been true."}, 
        qs, {q: "Was the story to be trusted? " , hasCorrect: "No", randomOrder: false}],
    [["comp",[28,1]], ds, {s: "The union leader implied the raise would keep them from striking."}, 
        qs, {q: "Would the raise cause another strike? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[28,1]], ds, {s: "The union leader implied that the raise would keep them from striking."}, 
        qs, {q: "Would the raise cause another strike? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[29,1]], ds, {s: "The office manager indicated that the problem would affect the whole office."}, 
        qs, {q: "Was there a problem? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[29,1]], ds, {s: "The office manager indicated the problem would affect the whole office."}, 
        qs, {q: "Was there a problem? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[30,1]], ds, {s: "The new owners insured the house would never get flooded again."}, 
        qs, {q: "Had the house been flooded before? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[30,1]], ds, {s: "The new owners insured that the house would never get flooded again."}, 
        qs, {q: "Had the house been flooded before? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[31,1]], ds, {s: "The famous novelist knew the material would make some people unhappy."}, 
        qs, {q: "Was the novelist obscure? " , hasCorrect: "No", randomOrder: false}],
    [["comp",[31,1]], ds, {s: "The famous novelist knew that the material would make some people unhappy."}, 
        qs, {q: "Was the novelist obscure? " , hasCorrect: "No", randomOrder: false}],
    [["comp",[32,1]], ds, {s: "The confident engineer maintained that the machinery would be hard to destroy."}, 
        qs, {q: "Was the engineer hesitant? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[32,1]], ds, {s: "The confident engineer maintained the machinery would be hard to destroy."}, 
        qs, {q: "Was the engineer hesitant? " , hasCorrect: "No", randomOrder: false}],
    [["comp",[33,1]], ds, {s: "The publicity agent predicted that the problems would make life very difficult."}, 
        qs, {q: "Were there problems? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[33,1]], ds, {s: "The publicity agent predicted the problems would make life very difficult."}, 
        qs, {q: "Were there problems? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[34,1]], ds, {s: "The journal editor printed the column had been unfair to him."}, 
        qs, {q: "Did the editor like the column? " , hasCorrect: "No", randomOrder: false}],
    [["comp",[34,1]], ds, {s: "The journal editor printed that the column had been unfair to him."}, 
        qs, {q: "Did the editor like the column? " , hasCorrect: "No", randomOrder: false}],
    [["comp",[35,1]], ds, {s: "The lab technician proposed that the idea might be worth another try."}, 
        qs, {q: "Did the technician want to try again? " , hasCorrect: "Yes", randomOrder: false}],
    [["nc",[35,1]], ds, {s: "The lab technician proposed the idea might be worth another try."}, 
        qs, {q: "Did the technician want to try again? " , hasCorrect: "Yes", randomOrder: false}],
    [["comp",[36,1]], ds, {s: "The careful scientist proved the theory had not been sufficiently tested."}, 
        qs, {q: "Was the scientist sloppy? " , hasCorrect: "No", randomOrder: false}],
    [["nc",[36,1]], ds, {s: "The careful scientist proved that the theory had not been sufficiently tested."}, 
        qs, {q: "Was the scientist sloppy? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The new student caught everyone's attention when he came into the room."}, 
        qs, {q: "Did everyone ignore the student when he came into the room? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "Each of the cab drivers had their own favorite route to get to the airport."}, 
        qs, {q: "Was there more than one way to get to the airport? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The nurses that worked in the intensive care unit all wanted to have more holidays off."}, 
        qs, {q: "Did the nurses want more time off? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The carpenter ended up with a sunburn."}, 
        qs, {q: "Was the carpenter able to avoid getting sunburn? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The valuable lamp was broken by the mischievous boy."}, 
        qs, {q: "Was the vase valuable? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The record store sold albums primarily to college students in the neighborhood."}, 
        qs, {q: "Did college kids shop at the record store? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The eccentric professor always inspired his students to think critically about their work."}, 
        qs, {q: "Did the professor encourage laziness in his students? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The police put a man in jail for robbing a liquor store."}, 
        qs, {q: "Was the man incarcerated? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The shoe salesman looked impatiently out the window while waiting for customers."}, 
        qs, {q: "Was the salesman eager for business? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The prisoners were unable to cross the field without being seen."}, 
        qs, {q: "Were the prisoners able to cross the field unseen? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The former drug addict's memoirs were met with critical acclaim."}, 
        qs, {q: "Were the memoirs despised by critics? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The girls on the basketball team trained and practiced all summer."}, 
        qs, {q: "Were the girls lazy all summer? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The power plant deserved more attention from the candidates during the election."}, 
        qs, {q: "Did the plant receive adequate attention in the election? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The library was open to all members of the community since it was supported by tax dollars."}, 
        qs, {q: "Was the library funded by taxpayers? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The guest speaker nervously cleared his throat before addressing the small audience."}, 
        qs, {q: "Was the speaker completely calm before speaking? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The children in the park could be heard three blocks away."}, 
        qs, {q: "Were the children being quiet? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The quilts were sold by the side of the road for ten dollars."}, 
        qs, {q: "Did the quilts cost twenty dollars? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The flags in the gym represented all the different countries participating in the tournament."}, 
        qs, {q: "Were the flags chosen at random? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The map's labels for the former Soviet states were out of date."}, 
        qs, {q: "Were the map's labels up to date? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The physics professor at the university was finally going to retire."}, 
        qs, {q: "Was the professor just starting his career? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The school librarian selected books that the library patrons would enjoy."}, 
        qs, {q: "Did the English teacher pick out the books? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The engineers at the plant wore helmets when they went near the machines."}, 
        qs, {q: "Did the engineers take any safety measures? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The leader of the crime ring was always suspicious of his business partners."}, 
        qs, {q: "Was the crime leader suspicious? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "Parliament members debated trivial financial issues while the protestors grew more restless."}, 
        qs, {q: "Did parliament members discuss important policy issues? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The bulldozers cleared rubble from the demolished building."}, 
        qs, {q: "Did the bulldozers clear away debris from the building? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The school principal worked constantly all summer dealing with paperwork."}, 
        qs, {q: "Was the principal busy? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "Bikes were not permitted on the town's sidewalks."}, 
        qs, {q: "Did people bike on the sidewalks? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The drill sergeant forced the men to do hundreds of push-ups and sit-ups."}, 
        qs, {q: "Did the men volunteer to do sit-ups and push-ups? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The businessmen were made sick by the rancid poultry."}, 
        qs, {q: "Did the businessmen eat poultry? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The laptops were too expensive for most of the students."}, 
        qs, {q: "Were the laptops affordable for the students? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The vacant building overlooks the river that winds through town."}, 
        qs, {q: "Do people live in the building? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The lawnmower did not always function properly when the grass was wet."}, 
        qs, {q: "Did the lawnmower work well when the grass was wet? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The corrupt politicians frequented the bars downtown."}, 
        qs, {q: "Did the politicians avoid the bars downtown? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "Many of the city cops refuse to work in the rough parts of town."}, 
        qs, {q: "Were there parts of town where cops wouldn't work? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "All the parents at the meeting strongly disagreed with the new policy."}, 
        qs, {q: "Did the parents like the new policy? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The new experiment was the source of a great deal of excitement in the lab."}, 
        qs, {q: "Was everyone bored by the experiment? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The store manager carefully cleaned both the interior and exterior of the store."}, 
        qs, {q: "Did the manager care about the appearance of the store? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "All the undergraduates in the class had trouble keeping up."}, 
        qs, {q: "Was the class easy for the undergrads? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The hotel bathroom paint was peeling after years of exposure to moisture."}, 
        qs, {q: "Was the paint in the hotel bathrooms in good shape? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The wallpaper was a perfect choice for the couple's new home."}, 
        qs, {q: "Was the wallpaper a bad choice? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The package arrived too late to be of any use."}, 
        qs, {q: "Did the package arrive on time? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The espresso machine was broken for months before finally being fixed."}, 
        qs, {q: "Was the espresso machine fixed? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The truck veered off of the road after its brakes failed."}, 
        qs, {q: "Did the truck's brakes malfunction? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The pilots flew over the city where they had just had a wonderful weekend."}, 
        qs, {q: "Did the pilots enjoy themselves in the city? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The band set up their equipment before the concert."}, 
        qs, {q: "Did the band set up their equipment? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The lifeguard watched over his part of the beach all day."}, 
        qs, {q: "Did the lifeguard have a designated portion of the beach to watch? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "Warm milk always soothed the infants in the nursery."}, 
        qs, {q: "Did the nursery use warm milk to calm the infants? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The racquetball courts were swept each morning before the racquetball club played."}, 
        qs, {q: "Did the racquetball club play after the courts were swept? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The bedframe was built years ago by the medical student's grandfather."}, 
        qs, {q: "Was the bedframe hand-built? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The frat guys hosted a party which they were sure would win them friends."}, 
        qs, {q: "Did the frat guys have people over? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The volcano was a painful reminder of the eruption in the town several years ago."}, 
        qs, {q: "Was the volcano a source of memories for the townspeople? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The artist sketched a beautiful portrait of his sister."}, 
        qs, {q: "Was the portrait ugly? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The record executive signed the band because it was getting so much attention in college towns."}, 
        qs, {q: "Did the executive refuse to sign the band? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The soccer players ran a mile each day before the season started."}, 
        qs, {q: "Did the soccer players only run once a week? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The extremely dense book was read by the middle school students."}, 
        qs, {q: "Were the students reading a book? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The university town attracted lots of tourists during the summer."}, 
        qs, {q: "Was the university town dead during the summer? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The foreign delegates arrived at the embassy surrounded by security guards."}, 
        qs, {q: "Were the delegates alone? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "Many nuts were gathered by the squirrels and then scattered by the storm."}, 
        qs, {q: "Did badgers scatter the nuts? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "Some of the university students move into the dorms as early as August."}, 
        qs, {q: "Did all the students wait till September to move in? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The storekeepers were afriaid that riots would ensue after the hometeam won the tournament."}, 
        qs, {q: "Were some people worried after the hometeam won? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The heater in the basement was so powerful that the tenants had to open their windows."}, 
        qs, {q: "Was the basement heater weak? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The old man's stamp collection was one of the world's largest."}, 
        qs, {q: "Did the old man have a big stamp collection? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "Several construction workers lost their jobs when the housing market declined."}, 
        qs, {q: "Did some of the workers lose their jobs? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "One of the spectators at the baseball game caught a stray ball."}, 
        qs, {q: "Did somebody catch the stray ball? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The well-known philanthropist had a party every summer."}, 
        qs, {q: "Did the philanthropist have parties? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The film critic wept at the end of his favorite French film."}, 
        qs, {q: "Was the film critic incapable of crying? " , hasCorrect: "No", randomOrder: false}],
    ["filler", ds, {s: "The street lamps usually came on automatically just before dark."}, 
        qs, {q: "Did the lamps come on by themselves? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The documentary did not accurately portray the events surrounding the political scandal."}, 
        qs, {q: "Was the documentary about a political scandal? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The fan cooled the tired swimmers as they rested."}, 
        qs, {q: "Were the swimmers tired? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The shoppers love to spend all day at the mall on the weekends."}, 
        qs, {q: "Did the shoppers enjoy the mall? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The zookeepers fed the giraffes in the evenings since giraffes refuse to eat when it's hot."}, 
        qs, {q: "Did the giraffes prefer to eat when it's cool? " , hasCorrect: "Yes", randomOrder: false}],
    ["filler", ds, {s: "The computer program was finished by the students in a couple of hours."}, 
        qs, {q: "Did the students complete the program? " , hasCorrect: "Yes", randomOrder: false}],
    ["outtro", "Message", {consentRequired: false, html: {include: "contacts.html"}}] 
];

