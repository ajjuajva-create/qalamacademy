// curriculum.js - 30 Comprehensive Lessons Across 5 Units
const L = [
  ["l1", 1, "Articles — a, an, the", "Grammar", "✒", "Use 'a' before consonant sounds, 'an' before vowel sounds, and 'the' for specific, known nouns.", "He is university student.", "He is a university student.", [
    ["Which sentence uses articles correctly?", ["She bought an apple and a banana.", "She bought a apple and an banana."], 0, "'An' precedes vowel sounds ('apple'); 'a' precedes consonant sounds."],
    ["Choose the correct option:", ["He is an honest person.", "He is a honest person."], 0, "'Honest' starts with a silent 'h', making it a vowel sound."],
    ["When should you use 'the'?", ["When referring to something specific both writer and reader know.", "Before every single noun.", "Only at the start of sentences."], 0, "'The' points to a specific, identifiable noun."],
    ["Choose the correct sentence:", ["Please hand me book on table.", "Please hand me the book on the table."], 1, "Both nouns are specific and known to the reader."]
  ], 25],

  ["l2", 1, "Subject-Verb Agreement", "Grammar", "S", "Singular subjects take singular verbs (with an 's'); plural subjects take plural verbs.", "The list of errors are long.", "The list of errors is long.", [
    ["Choose the correct sentence:", ["The collection of essays is fascinating.", "The collection of essays are fascinating."], 0, "'Collection' is the singular subject, so it takes 'is'."],
    ["Identify the correct verb:", ["Each of the students submitted work.", "Each of the students submitted work."], 0, "'Each' is singular."],
    ["Why is 'The group of researchers are publishing' incorrect?", ["'Team' is a singular collective noun taking 'is'.", "There is no verb.", "It has too many words."], 0, "The group acts as a single unit."],
    ["Choose the correct sentence:", ["Neither option makes sense.", "Neither option make sense."], 0, "'Neither' is singular."]
  ], 25],

  ["l3", 1, "Verb Tenses", "Grammar", "⏳", "Keep your verb tenses consistent. Do not jump between past and present without reason.", "The author argued that text analysis reveals patterns.", "The author argued that text analysis revealed patterns.", [
    ["Which sentence maintains consistent past tense?", ["She analyzed the data and writes a report.", "She analyzed the data and wrote a report."], 1, "Both verbs ('analyzed', 'wrote') are in the past tense."],
    ["When describing established historical facts, what tense is typical?", ["Simple past tense", "Future continuous", "Present perfect continuous"], 0, "Historical events are reported in simple past."],
    ["Fix the tense shift: 'He studied hard and passes the test.'", ["He studied hard and passed the test.", "He studies hard and passed the test."], 0, "Both actions occurred in the past."],
    ["Choose the correct sentence:", ["The study demonstrated that exercise improves health.", "The study demonstrated that exercise improved health."], 0, "General truths or ongoing scientific facts remain in present tense."]
  ], 25],

  ["l4", 1, "Prepositions", "Grammar", "📍", "Use 'in' for enclosed spaces/months, 'on' for surfaces/days, and 'at' for precise locations/times.", "She arrived on Morocco.", "She arrived in Morocco.", [
    ["Choose the correct preposition:", ["The conference is on Monday.", "The conference is in Monday."], 0, "Use 'on' for days of the week."],
    ["Choose the correct preposition:", ["He works at a university.", "He works on a university."], 0, "Use 'at' with institutions."],
    ["Which sentence is correct?", ["Meet me at the station.", "Meet me on the station."], 0, "'At' denotes a precise location."],
    ["Choose the correct option:", ["Born in 1998", "Born on 1998"], 0, "Use 'in' for years."]
  ], 25],

  ["l5", 1, "Fragments and Run-Ons", "Grammar", ".", "A sentence needs a complete thought. Never join two independent clauses with just a comma.", "The data was complex, it required careful reading.", "The data was complex; it required careful reading.", [
    ["What is a sentence fragment?", ["An incomplete thought missing a subject or verb.", "A very long sentence.", "A sentence with a semicolon."], 0, "Fragments leave the thought hanging."],
    ["What is a comma splice?", ["Joining two full sentences with only a comma.", "Using a period.", "Starting with a preposition."], 0, "Commas alone cannot connect two independent clauses."],
    ["How do you fix a run-on sentence?", ["Add a period, semicolon, or conjunction.", "Delete all punctuation.", "Write shorter words."], 0, "Proper separation or connection fixes run-ons."],
    ["Choose the correctly punctuated sentence:", ["The argument is novel; however, it lacks evidence.", "The argument is novel, however it lacks evidence."], 0, "Semicolon + conjunctive adverb correctly separates independent clauses."]
  ], 25],

  ["l6", 1, "Unit 1 Review", "Grammar", "🏆", "Review mixed principles from Unit 1: articles, agreement, tenses, prepositions, and boundaries.", "Several error types mixed together.", "Controlled mastery across Unit 1 fundamentals.", [
    ["Review: Choose the correct sentence:", ["An university course is valuable.", "A university course is valuable."], 1, "'University' starts with a consonant sound ('y-oo'), so it takes 'a'."],
    ["Review: Choose the correct agreement:", ["The group of scholars is meeting today.", "The group of scholars are meeting today."], 0, "'Group' is singular."],
    ["Review: Spot the fragment:", ["Although the sample size was small.", "The sample size was small."], 0, "Starts with subordinating conjunction 'Although', making it a fragment."],
    ["Review: Choose the correct preposition:", ["Interested in research", "Interested on research"], 0, "Use 'in' with 'interested'."]
  ], 30],

  ["l7", 2, "Formal vs Informal Vocabulary", "Vocabulary", "◆", "Replace casual conversational phrases with formal, precise vocabulary in academic writing.", "The study got messed up.", "The study encountered significant methodological obstacles.", [
    ["Which word is more formal than 'show'?", ["Demonstrate", "Tell", "Show off"], 0, "'Demonstrate' is standard academic vocabulary."],
    ["Choose the formal alternative to 'lots of':", ["Substantial quantities of", "A bunch of", "Loads of"], 0, "'Substantial quantities of' suits formal writing."],
    ["Which is appropriate for a research paper?", ["The findings are pretty good.", "The findings are robust."], 1, "'Robust' is precise academic terminology."],
    ["Replace 'kids' in formal prose:", ["Children", "Youths / Juveniles / Offspring", "Both A and B depending on context"], 2, "Context determines whether 'children' or 'youths' is accurate."]
  ], 35],

  ["l8", 2, "Academic Verbs", "Vocabulary", "⚡", "Use strong academic reporting verbs like 'argue', 'suggest', 'demonstrate', and 'indicate'.", "Smith says that the policy failed.", "Smith argues that the policy failed.", [
    ["Which verb implies strong empirical proof?", ["Demonstrate", "Guess", "Mention"], 0, "'Demonstrate' signifies proof through evidence."],
    ["What does 'suggest' imply in academic writing?", ["A cautious, tentative interpretation.", "Absolute certainty.", "Complete rejection."], 0, "'Suggest' indicates a reasoned possibility."],
    ["Choose the most precise academic verb for presenting a thesis:", ["Contend / Argue", "Chat", "Yell"], 0, "'Contend' or 'argue' frames an intellectual position."],
    ["Complete: 'Data from the survey _____ a correlation.'", ["indicates", "says", "speaks"], 0, "'Indicates' is standard academic phrasing for data."]
  ], 35],

  ["l9", 2, "Precise Nouns", "Vocabulary", "🎯", "Eliminate vague nouns like 'thing', 'stuff', 'issue', or 'aspect' in favor of specific referents.", "The thing caused problems in the experiment.", "The contamination caused measurement errors in the experiment.", [
    ["Which noun is most precise?", ["The factor", "The temperature drop", "The aspect"], 1, "'Temperature drop' names the exact phenomenon."],
    ["Why avoid 'thing' in academic writing?", ["It lacks semantic content and precision.", "It is too long.", "It is grammatically illegal."], 0, "Precise nouns specify what you mean."],
    ["Choose the specific noun replacement for 'the issue':", ["The budget deficit", "The matter", "The item"], 0, "'Budget deficit' names the specific problem."],
    ["Refine: 'She studied many things.'", ["She analyzed three distinct manuscript traditions.", "She looked at various stuff."], 0, "Specific naming strengthens academic prose."]
  ], 35],

  ["l10", 2, "Connectors", "Vocabulary", "🔗", "Use logical connectors ('however', 'therefore', 'whereas', 'although') to show precise relationships.", "It rained. Therefore, we played outside.", "It rained. However, we played outside (or: Consequently, we stayed inside).", [
    ["Which connector shows contrast?", ["However", "Therefore", "Furthermore"], 0, "'However' signals a contrasting turn."],
    ["Which connector shows cause and effect?", ["Consequently / Therefore", "Meanwhile", "Whereas"], 0, "'Consequently' shows a result."],
    ["Choose the correct transition for adding supporting information:", ["Furthermore / Moreover", "In contrast", "Nevertheless"], 0, "'Furthermore' adds supporting points."],
    ["What does 'whereas' signal?", ["Direct comparison or contrast between two facts.", "Temporal sequence.", "Absolute cause."], 0, "'Whereas' highlights differences."]
  ], 35],

  ["l11", 2, "Avoiding Redundancy", "Vocabulary", "✂", "Remove repetitive word pairings that say the same thing twice (e.g., 'future forecast', 'past history').", "The author gave a brief summary in short.", "The author gave a summary.", [
    ["Which phrase is redundant?", ["Past history", "Complex problem", "Detailed analysis"], 0, "All history is past."],
    ["Identify the redundancy in 'collaborate together':", ["Collaborate already means working together.", "It has too many vowels.", "It is grammatically incomplete."], 0, "'Collaborate' inherently includes working together."],
    ["Choose the clean, non-redundant phrasing:", ["Final outcome", "Outcome"], 1, "'Outcome' is sufficient."],
    ["Fix: 'advance warning'", ["Warning", "Advance notice", "Pre-warning"], 0, "Warnings are issued in advance."]
  ], 35],

  ["l12", 2, "Unit 2 Review", "Vocabulary", "🏆", "Comprehensive review of formal register, academic verbs, precise nouns, and connectors.", "Mixed vocabulary challenges.", "Mastery of precise academic word choice.", [
    ["Review: Choose the precise academic verb:", ["The author contends that...", "The author chats that..."], 0, "'Contends' is academic."],
    ["Review: Which connector signals concession?", ["Although / Granted that", "Therefore", "Consequently"], 0, "'Although' introduces a concession."],
    ["Review: Remove redundancy from 'future plans':", ["Plans", "Future projections", "Intentions"], 0, "Plans are inherently for the future."],
    ["Review: Select the formal noun:", ["Methodology", "Way of doing stuff"], 0, "'Methodology' is formal."]
  ], 35],

  ["l13", 3, "Simple and Compound Sentences", "Structure", "⌘", "Compound sentences join two independent clauses using coordinating conjunctions (FANBOYS) and a comma.", "The theory is complex and it requires rigorous testing.", "The theory is complex, and it requires rigorous testing.", [
    ["What constitutes a compound sentence?", ["Two independent clauses joined by a comma and coordinator.", "One dependent clause.", "A sentence with no verbs."], 0, "Compound sentences combine equal clauses."],
    ["Which acronym helps remember coordinating conjunctions?", ["FANBOYS (For, And, Nor, But, Or, Yet, So)", "ABCDE", "GRAMMAR"], 0, "FANBOYS covers the 7 coordinators."],
    ["Choose the correctly punctuated compound sentence:", ["The sample was small, but the results were significant.", "The sample was small but the results were significant."], 0, "Place a comma before the coordinating conjunction joining independent clauses."],
    ["Identify the independent clauses in: 'Data was collected, and analysis began.'", ["'Data was collected' and 'analysis began'", "Only the first part", "Neither"], 0, "Both can stand alone as complete sentences."]
  ], 40],

  ["l14", 3, "Complex Sentences", "Structure", "🏛", "Complex sentences combine an independent clause with one or more dependent clauses using subordinating conjunctions.", "Because the budget was approved the project started.", "Because the budget was approved, the project started (with comma after introductory dependent clause).", [
    ["What is a dependent clause?", ["A clause that cannot stand alone as a complete sentence.", "A standalone sentence.", "A noun phrase."], 0, "Dependent clauses rely on independent clauses."],
    ["Where does a comma go when an introductory dependent clause starts a sentence?", ["After the dependent clause.", "Before it.", "Nowhere."], 0, "Introductory dependent clauses take a following comma."],
    ["Identify the subordinating conjunction in: 'Although the test was difficult, she passed.'", ["Although", "She", "Passed"], 0, "'Although' introduces the dependent clause."],
    ["Choose the correct complex sentence:", ["Since the data was incomplete, we repeated the trial.", "Since the data was incomplete we repeated the trial."], 0, "Comma separates the introductory dependent clause."]
  ], 40],

  ["l15", 3, "Relative Clauses", "Structure", "🔗", "Use relative pronouns ('who', 'which', 'whose', 'that') to embed descriptive clauses into sentences.", "The scholar which wrote the book lectured yesterday.", "The scholar who wrote the book lectured yesterday.", [
    ["Which relative pronoun refers to people?", ["Who", "Which", "What"], 0, "'Who' modifies human subjects."],
    ["Which relative pronoun refers to things or ideas?", ["Which / That", "Who", "Whose"], 0, "'Which' and 'that' modify non-human nouns."],
    ["Choose the correct sentence:", ["The professor whose research won awards spoke today.", "The professor who's research won awards spoke today."], 0, "'Whose' indicates possession."],
    ["Identify the relative clause in: 'The model that economists use is flawed.'", ["that economists use", "is flawed", "The model"], 0, "'that economists use' modifies 'model'."]
  ], 40],

  ["l16", 3, "Passive Voice in Academic Writing", "Structure", "🛡", "Use passive voice when the action's recipient is more important than the actor or when the actor is unknown/obvious.", "We conducted the experiment in 2025.", "The experiment was conducted in 2025 (or active: Researchers conducted...).", [
    ["When is passive voice appropriate in academic writing?", ["When focusing on the process or object rather than the researcher.", "In every single sentence.", "Never."], 0, "Passive voice emphasizes experimental objects."],
    ["Convert to passive: 'The lab technician measured the temperature.'", ["The temperature was measured by the lab technician.", "The temperature measured itself."], 0, "Object becomes subject; verb takes 'was + past participle'."],
    ["Which sentence is passive?", ["The samples were frozen immediately.", "The team froze the samples immediately."], 0, "Uses 'were frozen'."],
    ["Why might an author choose passive voice?", ["To maintain objective, impersonal tone.", "To make writing longer.", "To hide errors."], 0, "Objectivity is prioritized in scientific and formal prose."]
  ], 40],

  ["l17", 3, "Concision in Sentence Building", "Structure", "✂", "Trim wordy sentence structures down to crisp, direct expressions without sacrificing meaning.", "It is often the case that students struggle with syntax.", "Students often struggle with syntax.", [
    ["Which sentence is more concise?", ["There are many factors that influence academic success.", "Numerous factors influence academic success."], 1, "Eliminates dummy subjects ('There are')."],
    ["Simplify: 'In spite of the fact that it was difficult...'", ["Although it was difficult...", "Because it was difficult..."], 0, "'Although' condenses the phrase."],
    ["Eliminate wordiness from: 'give consideration to'", ["Consider", "Think about", "Ponder"], 0, "'Consider' replaces the noun-verb cluster."],
    ["Final check for concision:", ["Conduct an investigation", "Investigate"], 1, "Single strong verb beats noun cluster."]
  ], 40],

  ["l18", 3, "Unit 3 Review", "Structure", "🏆", "Review compound/complex sentences, relative clauses, passive voice, and syntactic concision.", "Mixed sentence-building challenges.", "Advanced command over sentence architecture.", [
    ["Review: Choose the correct compound punctuation:", ["The methodology was rigorous, and the conclusions followed.", "The methodology was rigorous and the conclusions followed."], 0, "Independent clauses linked with FANBOYS require a comma."],
    ["Review: Identify the relative pronoun for possession:", ["Whose", "Who", "Which"], 0, "'Whose' shows possession."],
    ["Review: Convert 'We observed an increase' to passive:", ["An increase was observed.", "We were observed."], 0, "Object becomes subject."],
    ["Review: Eliminate wordiness from 'at this point in time':", ["Now / Currently", "Then", "Later"], 0, "'Now' is concise."]
  ], 40],

  ["l19", 4, "Topic Sentences", "Clarity", "¶", "A topic sentence states the single controlling idea of a paragraph. Every subsequent sentence must support it.", "Paragraphs are fun to write and read.", "Effective paragraph structure requires a controlling topic sentence followed by supporting evidence.", [
    ["What is the primary function of a topic sentence?", ["To state the controlling idea of the paragraph.", "To list random facts.", "To conclude the essay."], 0, "It governs the paragraph's scope."],
    ["Which is a strong topic sentence?", ["Education fosters economic mobility.", "I like school."], 0, "It makes a specific, developable claim."],
    ["Where is the topic sentence usually placed?", ["At or near the beginning of the paragraph.", "Only in the conclusion.", "Nowhere."], 0, "Early placement guides the reader."],
    ["Identify the weak topic sentence:", ["There are many things to say about history.", "Historiography reflects the ideological commitments of its era."], 0, "The first is vague and non-argumentative."]
  ], 45],

  ["l20", 4, "Supporting Sentences and Evidence", "Clarity", "▦", "Support your topic sentence with concrete explanations, data, or scholarly examples.", "Reading is good because books are nice.", "Reading enhances cognitive flexibility; studies show it builds neural pathways.", [
    ["What should supporting sentences do?", ["Provide evidence, examples, or elaboration for the topic sentence.", "Introduce unrelated topics.", "Repeat the topic sentence verbatim."], 0, "Support elaborates the core claim."],
    ["Which sentence provides concrete support for 'Urbanization strains infrastructure'?", ["Cities are large places.", "Increased population density accelerates traffic congestion and water scarcity.", "Buildings are tall."], 1, "Provides specific infrastructural challenges."],
    ["How do examples function in a paragraph?", ["They illustrate and validate the abstract claim.", "They fill space.", "They replace explanations."], 0, "Examples ground claims in reality."],
    ["Select the best supporting sentence for 'Regular exercise improves focus':", ["Physical activity increases cerebral blood flow and neurogenesis.", "Gym clothes are comfortable.", "Exercise takes time."], 0, "Provides physiological rationale."]
  ], 45],

  ["l21", 4, "Concluding Sentences", "Clarity", "🏁", "A concluding sentence wraps up the paragraph, summarizes its significance, or transitions to the next idea.", "And that is my paragraph.", "Thus, robust source evaluation remains foundational to rigorous academic inquiry.", [
    ["What is the role of a concluding sentence?", ["To synthesize the paragraph's point and signal closure.", "To introduce a brand-new unrelated argument.", "To repeat the title."], 0, "It resolves the paragraph's trajectory."],
    ["Which transition words signal a conclusion?", ["Therefore, Consequently, Thus", "However, Although", "Furthermore, Moreover"], 0, "Causal/concluding transitions signal wrapping up."],
    ["Evaluate: 'In conclusion, cats are animals.'", ["Weak; obvious and uninsightful.", "Strong."], 0, "A good conclusion adds perspective, not platitudes."],
    ["Choose the effective concluding sentence for a paragraph on syntax:", ["Mastering syntax ultimately grants writers precise control over reader interpretation.", "Syntax is words.", "Goodnight."], 0, "Summarizes broader significance."]
  ], 45],

  ["l22", 4, "Paragraph Unity and Coherence", "Clarity", "→", "Unity means every sentence relates to the main idea; coherence means sentences flow logically from one to the next.", "Jumping between unrelated ideas randomly.", "Maintaining strict thematic unity and explicit transitional links between sentences.", [
    ["What is paragraph unity?", ["Every sentence adhering strictly to the paragraph's main idea.", "Using long words.", "Having five sentences exactly."], 0, "Unity prevents wandering off-topic."],
    ["What is paragraph coherence?", ["Logical, smooth transitions between sentences so ideas connect naturally.", "Correct spelling.", "Alphabetical sentence order."], 0, "Coherence builds a clear bridge between thoughts."],
    ["Which sentence violates paragraph unity in a text about sleep deprivation?", ["Insomnia impairs memory consolidation.", "Cognitive reaction times slow down significantly.", "My favorite color is blue."], 2, "The color sentence is completely unrelated."],
    ["How is coherence achieved?", ["Through pronoun links, repetition of key terms, and transitional connectors.", "By writing in all caps.", "By omitting verbs."], 0, "Connective devices create seamless flow."]
  ], 45],

  ["l23", 4, "Descriptive Paragraph", "Clarity", "👁", "Descriptive writing uses precise sensory details, spatial organization, and vivid vocabulary to recreate a scene.", "The room was nice and had a table.", "The vaulted study smelled of aged leather and ink, illuminated by a single brass lamp casting shadows over stacked manuscripts.", [
    ["What distinguishes descriptive writing?", ["Concrete sensory details and precise vocabulary.", "Abstract statistical tables.", "Legal jargon."], 0, "Sensory immersion brings scenes to life."],
    ["Which detail is most descriptive?", ["A cold breeze rustled the parchment.", "The weather was bad.", "Things happened."], 0, "Applies tactile and visual specifics."],
    ["How should a descriptive paragraph be organized spatially?", ["Logically (e.g., from foreground to background, left to right).", "Randomly.", "Alphabetically by first letter."], 0, "Spatial order helps the reader visualize."],
    ["Choose the effective descriptive sentence:", ["Sunlight filtered through stained glass, painting the stone floor in crimson and gold.", "The sun was out."], 0, "Rich visual imagery."]
  ], 45],

  ["l24", 4, "Opinion Paragraph", "Clarity", "💡", "An opinion paragraph states a clear personal or reasoned stance supported by logical arguments and evidence.", "I think things are bad.", "University curricula must incorporate interdisciplinary research methods because modern problems cross traditional academic boundaries.", [
    ["What must an opinion paragraph avoid becoming?", ["An unsupported emotional outburst without reasoning.", "A clear argument.", "A structured statement."], 0, "Opinions require logical justification."],
    ["Which sentence frames an opinion effectively?", ["In my view, digital archives democratize access to rare texts.", "Stuff is good."], 0, "Pairs stance with a clear reason."],
    ["How do you support an opinion academically?", ["With evidence, logic, and expert testimony.", "By shouting.", "By repeating the opinion louder."], 0, "Reasoning validates persuasion."],
    ["Unit 4 Review: What are the three core structural pillars of a paragraph?", ["Topic sentence, supporting evidence, concluding synthesis.", "Title, footnote, bibliography.", "Introduction, body, conclusion."], 0, "Core paragraph architecture."]
  ], 45],

  ["l25", 5, "Formal Register", "Style", "A", "Maintain formal register by avoiding slang, contractions ('don't', 'it's'), and overly casual emotional language.", "You shouldn't mess around with research methods.", "Researchers must adhere strictly to established methodological protocols.", [
    ["Why avoid contractions in formal academic writing?", ["They introduce an informal, conversational tone.", "They are illegal.", "They contain apostrophes."], 0, "Formal prose spells out auxiliary verbs."],
    ["Identify the formal alternative to 'kids':", ["Children / Juveniles", "Tots", "Bratty youth"], 0, "'Children' maintains formal tone."],
    ["Which sentence adopts a proper academic register?", ["This policy is a total disaster for everyone.", "This policy carries severe economic consequences for low-income populations."], 1, "Objective and precise."],
    ["Why is slang inappropriate in research papers?", ["It alienates readers and lacks universal precision.", "It takes too long to type.", "It uses too many vowels."], 0, "Register requires professional clarity."]
  ], 50],

  ["l26", 5, "Hedging Language", "Style", "🛡", "Use hedging ('suggests', 'may', 'tends to', 'appears') to express academic caution and avoid overstating claims.", "This study proves without doubt that reading makes everyone smarter.", "The findings suggest that regular reading may contribute to cognitive enhancement.", [
    ["What is hedging in academic writing?", ["Qualifying claims to match the strength of available evidence.", "Building a garden fence.", "Avoiding writing."], 0, "Hedging prevents overgeneralization."],
    ["Which word is a hedge?", ["Might / Suggests", "Definitely", "Always"], 0, "'Might' and 'suggests' signal caution."],
    ["Why is overstating claims dangerous?", ["One counterexample can invalidate your entire absolute assertion.", "It makes sentences shorter.", "It uses too much ink."], 0, "Absolute claims are easily refuted."],
    ["Hedge this claim: 'Social media causes depression.'", ["Social media use is associated with symptoms resembling depression in vulnerable cohorts.", "Social media is bad."], 0, "Adds necessary nuance and correlation limits."]
  ], 50],

  ["l27", 5, "Integrating Evidence and Quotes", "Style", "📜", "Integrate evidence smoothly using signal phrases rather than dropping 'orphan quotes' unannounced.", "Smith says, 'Data is vital.'", "As Smith (2024) observes, 'empirical data forms the bedrock of verification.'", [
    ["What is an orphan quote?", ["A quotation dropped into a paragraph with no introductory signal phrase or context.", "A quote with no author.", "A short sentence."], 0, "Quotes must be grammatically and contextually framed."],
    ["Which is a proper signal phrase?", ["As Al-Attas argues,", "Quote:", "Here is text:"], 0, "Smoothly embeds quotes into your syntax."],
    ["How should long quotes be introduced?", ["With explanatory context framing their relevance to your argument.", "Randomly.", "At the very end of essays."], 0, "Context tells the reader why the quote matters."],
    ["Choose the well-integrated citation:", ["Jones notes that 'theory without practice remains sterile.'", "'Theory without practice remains sterile' (Jones)."], 0, "Signal phrase integration flows naturally."]
  ], 50],

  ["l28", 5, "Paraphrasing", "Style", "↺", "Paraphrasing restates someone else's idea in your own words and sentence structure while retaining exact meaning and citation.", "Changing two words in a copied sentence.", "Completely restructuring the syntax and vocabulary while accurately preserving the original analytical concept.", [
    ["What makes a paraphrase legitimate?", ["Changing both the wording and sentence structure entirely while citing the source.", "Replacing every noun with 'thing'.", "Changing the font size."], 0, "True paraphrasing avoids plagiarism."],
    ["When should you paraphrase instead of quote?", ["When the original author's ideas matter more than their specific phrasing.", "Whenever you are lazy.", "Never."], 0, "Paraphrasing maintains essay voice consistency."],
    ["Why is swapping synonyms in a copied sentence still plagiarism?", ["Because the sentence structure and rhythm remain identical.", "It uses too many colors.", "It is too short."], 0, "Patchwriting is not true paraphrasing."],
    ["Choose the true paraphrase test:", ["Can I write the concept from memory in my own voice without looking at the text?", "Did I change three words?"], 0, "Understanding precedes authentic paraphrasing."]
  ], 50],

  ["l29", 5, "Islamic Scholarly Voice", "Style", "☪", "Integrate traditional Islamic scholarly terminology ('ijtihad', 'maqasid', 'isnad') with rigorous definition and context.", "Islam has rules about things.", "Classical Islamic jurisprudence utilizes methodological frameworks such as *maqasid al-shari'a* (objectives of law) to address contemporary contingencies.", [
    ["How should specialized scholarly terms be introduced?", ["Defined clearly on first use and contextualized within their intellectual tradition.", "Dropped without explanation assuming universal knowledge.", "Translated into slang."], 0, "Clarity ensures all readers understand."],
    ["What does *maqasid al-shari'a* refer to?", ["The higher objectives and underlying purposes of Islamic law.", "Arabic grammar rules.", "Market prices."], 0, "Refers to legal intent and welfare."],
    ["Why is precision vital when discussing heritage texts?", ["Mistranslation or anachronism distorts historical arguments.", "It sounds fancy.", "It prevents reading."], 0, "Scholarly integrity requires exact terminology."],
    ["Choose the rigorous scholarly statement:", ["Al-Ghazali argued that ethical cultivation precedes metaphysical speculation.", "Old scholars thought stuff."], 0, "Precise intellectual history."]
  ], 50],

  ["l30", 5, "Final Academic Review", "Style", "🏆", "Synthesize everything learned across all 5 units: grammar, vocabulary, sentence building, paragraphs, and academic voice.", "Scattered random sentences.", "A cohesive, fully developed, rigorous academic paragraph demonstrating complete stylistic mastery.", [
    ["Review: What distinguishes formal academic voice?", ["Objectivity, precision, hedging, and proper evidence integration.", "Slang and exclamation points.", "Emotional rants."], 0, "Academic voice combines all core competencies."],
    ["Review: How do topic sentence and evidence connect?", ["Evidence directly validates the controlling claim stated in the topic sentence.", "They are completely unrelated.", "Evidence contradicts the topic."], 0, "Structural alignment creates unity."],
    ["Review: Why is revision critical before submission?", ["It elevates clarity, concision, and logical flow beyond first drafts.", "It makes files larger.", "It changes your name."], 0, "Revision refines thought."],
    ["Final Mastery Check: You have completed all 30 lessons. Ready to write your portfolio?", ["Yes, I am equipped to write with clarity and rigor.", "No."], 0, "Congratulations on completing Qalam Academy!"]
  ], 60]
];