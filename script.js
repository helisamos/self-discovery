const prompts = [
    {
        category: "Understanding Your Past",
        prompt: "Identify a moment in the past where you felt misunderstood. How did you cope with that feeling?",
        example: "Expand Your Story: Imagine a scene where you could communicate your feelings clearly. How would that moment have changed?"
    },
    {
        category: "Understanding Your Past",
        prompt: "Think of a person who had a significant impact on your early life. What did they teach you?",
        example: "Expand Your Story: Write a dialogue between you and this person, discussing how they influenced your life journey."
    },
    {
        category: "Understanding Your Past",
        prompt: "Describe a turning point in your life. How did it shape the person you are today?",
        example: "Expand Your Story: Visualize an alternate path where that turning point didn't happen. How would your life be different?"
    },
    {
        category: "Understanding Your Past",
        prompt: "Think about a situation that didn't go the way you wanted in the past, what did you learn from it?",
        example: "Expand Your Story: Now imagine if you could go back to that moment, would you do differently this time?"
    },
    {
        category: "Understanding Your Past", 
        prompt: "Reflect on a family tradition from your childhood. How did it shape you?",
        example: "Expand Your Story: Imagine creating a new tradition based on those values. What would it look like?"
    },
    {
        category: "Aspirations and Dreams",
        prompt: "Visualize an achievement that would make your younger self incredibly proud. Why would it matter to them?",
        example: "Expand Your Story: Write a conversation between you and your younger self about this achievement and its significance."
    },
    {
        category: "Aspirations and Dreams",
        prompt: "Describe your dream vacation. Where would you go and what experiences would you seek?",
        example: "Expand Your Story: Plan the itinerary for this dream trip, including activities, destinations, and who you'd share this memory with."
    },
    {
        category: "Aspirations and Dreams",
        prompt: "Reflect on a role model who embodies your dream life. What about their life inspires you?",
        example: "Expand Your Story: Imagine spending dinner with this role model. What conversations would you have?"
    },
    {
        category: "Aspirations and Dreams",
        prompt: "Think about a skill you want to learn or improve. Why is this skill important to you?",
        example: "Expand Your Story: Fast forward to a future where you’ve mastered this skill. How would it impact your life?"
    },
    {
        category: "Aspirations and Dreams",
        prompt: "Identify a goal you haven't achieved yet. What's holding you back?",
        example: "Expand Your Story: Envision yourself just having achieved this goal. Describe the steps you took to get there."
    },
    {
        category: "Personal Values and Beliefs",
        prompt: "Identify a societal expectation you consciously choose to challenge. Why do you choose to do so?",
        example: "Expand Your Story: Imagine a world where this norm is not the standard. How would things be different?"
    },
    {
        category: "Personal Values and Beliefs",
        prompt: "What is an absolute deal breaker for you in your platonic/romantic relationships?",
        example: "Expand Your Story: Share a story where you had to confront this deal breaker and what happened as a result."
    },
    {
        category: "Personal Values and Beliefs",
        prompt: "Are there any cultural values that you don't align with? Why?",
        example: "Expand Your Story: Write a story about the first time you realized that you don't align with this value."
    },
    {
        category: "Personal Values and Beliefs",
        prompt: "Think about your favorite fictional character. What are their personal values you resonate with?",
        example: "Expand Your Story: Would you want to switch places with this character for a day? Write a short story on how it would go."
    },
    {
        category: "Personal Values and Beliefs",
        prompt: "Reflect on a belief you held strongly in the past that has since changed.",
        example: "Expand Your Story: Write the journey of how this transformation in belief happened."
    },
    {
        category: "Overcoming Challenges",
        prompt: "Reflect on a time when you took a risk that didn't pay off. What did you learn from that experience?",
        example: "Expand Your Story: Expand Your Story: If you had the chance to take that risk again, how would you approach it differently?"
    },
    {
        category: "Overcoming Challenges",
        prompt: "Think of a moment when you felt overwhelmed but pushed through. What helped you overcome this feeling?",
        example: "Expand Your Story: If one of your friends was also feeling overwhelmed,  what advice would you give them?"
    },
    {
        category: "Overcoming Challenges",
        prompt: "Describe a personal limitation you come to accept. How has this acceptance impacted your life?",
        example: "Expand Your Story: Imagine a scenario where this limitation becomes an advantage."
    },
    {
        category: "Overcoming Challenges",
        prompt: "Recall a failure that ultimately led to growth or a positive change.",
        example: "Expand Your Story: Frame this failure as a chapter in a book about your life. What place does it have in your overall story?"
    },
    {
        category: "Overcoming Challenges",
        prompt: "Describe a time when you had to make a difficult decision. What did you learn from the experience?",
        example: "Expand Your Story: Rewrite the story with a different decision made, reflect on the potential outcomes."
    },
    {
        category: "General Self Discovery",
        prompt: "What's one question you wish people would ask you more often, and why?",
        example: "Expand Your Story: Write a dialogue where someone asks you this question and your honest response."
    },
    {
        category: "General Self Discovery",
        prompt: "Reflect on a moment of unexpected kindness from someone. How did it affect you?",
        example: "Expand Your Story: Imagine a situation where you have the opportunity to pay this act of kindness forward. How would you do it?"
    },
    {
        category: "General Self Discovery",
        prompt: "Reflect on a habit or routine that significantly improves your day. Why is it so effective for you?",
        example: "Expand Your Story: Imagine teaching this habit to someone else. How would you convince them of its benefits?"
    },
    {
        category: "General Self Discovery",
        prompt: "What parts of your life would you like to simplify, and why?",
        example: "Expand Your Story: Imagine a minimalist version of your life. How would it look and feel to you?"
    },
    {
        category: "General Self Discovery",
        prompt: "Identify a fear that holds you back. What steps can you take to confront it?",
        example: "Expand Your Story: Write a story where you face this fear head on and overcome it."
    },   
];

let lastPrompt = null;

document.getElementById('generate-button').addEventListener('click', function() {
    let chosenPrompt;
    do {
        chosenPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    } while (chosenPrompt === lastPrompt);

    lastPrompt = chosenPrompt;
    

    // Show the prompt display and include the category
    // Added an extra line break between the category and the prompt
    const promptDisplay = document.getElementById('prompt-display');
    promptDisplay.style.display = 'block';
    promptDisplay.innerHTML = `<strong>${chosenPrompt.category}</strong><br><br>${chosenPrompt.prompt}<div class="divider"></div>${chosenPrompt.example}`;

});
