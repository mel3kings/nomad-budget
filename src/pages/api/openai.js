const { OpenAI } = require("openai");

// Create an instance of the OpenAIApi class by passing a configuration object
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}); // defaults to process.env["OPENAI_API_KEY);

// Define a function to generate text
export const GenerateText = async (prompt) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: TweetExamples },
      { role: "user", content: TweetPrompts },
    ],
    model: "gpt-3.5-turbo-16k",
  });

  const response = chatCompletion?.choices[0]?.message?.content;
  console.log(response);

  return response;
};

const promptText = `
EDITOR CONTEXT: You are a proficient editor of new-york best selling books.
Below is an two examples of a good article I have written. Take note of the flow, the tone of the author, and how the article is structured. I will give raw text of ideas or chapter from a book, I want you to convert it to a similar structure of the articles below.

I have never met a developer who hasn’t heard of StackOverflow. This is where most of us mere mortals go when we are stuck trying to solve a programming problem. Sometimes the problem is just pure lack of documentation from an open source software we are implementing.

But from my years of experience, what I’ve learned is that not all developers know the value of a strong StackOverflow account.


Personal StackOverflow account (top 7% this year)
Above is my personal StackOverflow account. I have given 156 answers and in turn have reached around 2 million developers, putting me on a top 7% of all the users in StackOverflow.

This has not been an easy task, as of today’s writing (December 1, 2018) there are around 9.7 million users, 17 million questions and 26 million answers.

If you have tried submitting an answer in StackOverflow, you soon realize it is not a simple task — you can’t just answer random questions with half-cooked solutions. The forum works in a way where people vote for answers that are actually relevant and have helped them with the problem they are working on.

With 9.7 million users, it’s quite a challenge to ensure that your answer would be of any help to anyone, really. As soon as a question is posted dozens of developers are on the prowl to answer the question in their hopes of getting votes and in turn bolstering their respective profiles. However, this “wild west” style of answering a question can also be counterproductive, as the users have an option to downvote any answers that are of poor quality.

## What are the perks and why bother?
Imagine everyone is applying for a specific company, and everyone is on equal footing with regards to their work experience. It doesn’t have to be a large and well-known company, it could easily be just an exemplary workplace nearby. Everyone wants to apply there.

Let’s say, hypothetically, the company gives out stocks options, is flexible with work arrangements, and office facilities include the infamous pool table, bean bags, and has free food. The typical ideal tech office!

The recruiter searches for your name, and finds that you are top 10% of all the engineers in the StackOverflow forum. As most recruiters today are aware of the online communities like StackOverflow, who do you think will have their foot in the door? Having a strong online presence acts as icing on the cake, and most of the time guarantees you at least an initial interview.

Of course, I am not saying that all the developers that have a good scoring on the online forum are of high-calibre. There are some that have just answered one difficult question and gathered all their votes out of that one very specific topic. This, however, is easily spotted once you dig around the user’s profile.

I can’t speak for the other members of StackOverflow that have a strong profile, but there are instances where companies would not bother giving me an online coding exam and just proceeded with the final interview. I had several companies reach out to me, inviting me for an interview even when I wasn’t trying to look for a new job.

In actual interviews, technical panels can be more lenient, knowing that you have reached 2 million developers. This, in turn, will give you more confidence in what you do and it validates your standing in the software engineering world.

Personally, this has also helped me compete globally as well. I was born in the Philippines and now have ended up in Sydney Australia, going to the United Kingdom and Singapore in between.

I feel like I need to emphasize this as well but having just a SO account alone will not guarantee anything, but it will act as a supplement to your coding prowess.

## Paying it forward
I know what you are thinking at this point — you just want to know how can you improve your own account. My main advice for building a strong profile is to just try to genuinely help other developers.

What do I mean by that? Well, there are instances where you get stuck with a problem and, try as you might, there seems to be no solution to your problem available online. This is exactly the niche you are looking for, chances are several programmers have gotten stuck with this problem as well.

There are literally millions of questions still unanswered in the forum, and some of them you will be able to solve. It might be due to experience, others just pure happenstance, but there are definitely some questions that you will be able to fix on your own.

The common route is for you to go on with your day having solved that problem for yourself, and feeling accomplished. This neglects those numerous developers still crying in pain in trying to figure out how to solve the same problem. In essence, it will just take you a couple of minutes to compose a decent paragraph showing how the problem is solved and that’s it.

If you just think about the other developers, leaving an answer once you have already figured it out, a seed has been planted in helping you grow your online profile. Paying it forward, as you go along. Don’t go in with the sole purpose of just increasing your credibility — other developers tend to know immediately, and you will just be bombarded with downvotes.

## There are no stupid questions
This header not to be taken literally. But, when it comes down to it, as long as questions are indeed valid, the community tends to react positively.

Another way of building your profile is asking genuine questions to the community. This is usually a harder route to take. With all the questions already on the forum it’s not an easy task to ask a question where there is no answer already.

StackOverflow works in a way that the questions and answers are provided by the developers themselves, but privilege is granted to those who have reached a certain amount of idiosyncrasy credit, so to speak. Developers who have attained this privilege have it in their best interest to preserve good quality questions on the site. So newbies copying and pasting their homework/assignments on the site are easily spotted and those questions are downvoted, never seeing the light of day.


Here is the page where I get to review existing questions/answers if they are indeed worth being published. (Screenshot was taken using my personal account)
Questions can usually be broken down into two categories, theoretical and technical.

Theoretical questions, by definition, are questions that do not have concrete answers and thus these are subject to the opinion of who chooses to answer. Theoretical questions tend to have the possibility of being closed by the moderators, as nobody really wants to engage in an online debate in the forum.

A good example would be which programming language to use. Although this is a valid question, it is subject to the opinion of the person who is answering, as Java developers would definitely answer Java, and so on.

As consolation, you still do get points for people who are curious to hear the answers if there are any. Here is one of my questions, which had gathered a lot of views — around 29k views — and, in turn, got a number of votes. I wrote it a couple of years back when I couldn’t really find a solid comparison of using Java Enterprise Edition Containers versus Using Web Containers. There were already a number of documentations for Java EE Containers and Web Containers during that time, but none were about tackling the difference of each, side-by-side.

Technical Questions, on the other hand, require you to put down what you already have tried and all the technical details needed. The community immediately knows if you are just trying to find an answer without doing your proper research.

A good example would be this previous question I made about optimising some code. Although I had already had an answer I just wanted to know if there were alternatives, some sort of online code review if you will. Below is an example of a good technical question, consisting of a good title, description, and all the nitty-gritty details.


The above is an example of a question with good anatomy. The title depicts exactly what I’m trying to figure out. The description contains details about what I am trying to accomplish, and also includes what I have already tried. An example code is properly formatted.

As long as you have a good description of what you are actually trying to figure out, and what you already have tried, there is a good chance people will give you a decent answer and an upvote the question whilst they are there.

Although asking questions is a route for earning more points, I do not recommend asking just for the sake of it. A good reason to do so is genuine interest to just pretty much learn and contribute to the community. Asking questions that you know aren’t easily available online leaves crumb trails to the next developer trying to figure out the same exact problem.

## Answers, answers, answers
I won’t dive into too many details about giving a good answer to theoretical and technical questions, as they are similar in nature to the above. Instead of giving examples of what you already have tried, you give concrete examples of the answer you are providing. I will just leave examples here and here. There are other niches as well with regards to providing answers in addition to the already mentioned theoretical/technical categories.

“It works on my machine” — every developer alive

If you are a developer or just plainly have worked with the IT department you probably heard that line: “It works on my machine”.

Operating System-specific questions may be one of the biggest subcategories around. There are about 50K categories/tags in StackOverflow, and MacOS alone has around 10k OS-specific related questions, not to mention programming language + OS-specific questions.

Say your npm install is working in Linux but is not working with MacOS. That’s already a Node and OS-related question. Imagine all the permutations of all languages and OS environments. Sometimes even IDEs are thrown into the mix! No wonder there are millions and millions of questions asked.

Another niche is providing instructions with third-party integrators. We’ve all seen it before — a good API with a lack of documentation. Here is a good question on how to integrate with Google to send email using Node. You’d think that it would be a straightforward change, or that it would be well documented, right? This question alone has 80K views, meaning there were around 80K developers who did not easily figure it out based on standard documentation provided by Node and Google — they had to resort to asking the online forum.

There are more niches in the forum than I care to count. With 26 million questions present, there are bound to be niches still yet to be discovered and answered. I have only mentioned a couple to help you get started and you don’t even have to be as good as Jon Skeet to start contributing to the online community.

“Great works are performed not by strength but by perseverance” — Samuel Johnson

As in any investment, it’s not going to take effect immediately. It might take months or even years planting your seeds and leaving answers. But, before you know it, you’ll already have a solid presence in the community and all the perks that come along with it.

`;

const userPrompt = `
Convert set of ideas below to an article similar to the example provided.

# Purpose Driven Buys

**Purpose Driven Buys**

"The price of anything is the amount of life you exchange for it." - Henry David Thoreau

Do you ever find yourself tempted to buy things simply because they're on sale, only to later regret your purchase? Or do you view buying things as a way to show off your status or measure your success? Before we delve deeper into this topic, let me clarify that I'm not suggesting you become incredibly frugal or cheap. In his book *"I Will Teach You to Be Rich," Ramit Sethi* advises defining what truly brings you happiness and what you genuinely want to spend money on. Splurge on those things, but scrutinise everything else and be extra diligent.

It's interesting to note that many millionaires are frugal in some areas of their lives while being extravagant in others. For example, Warren Buffet still drives the same car he had before he became wealthy. This is because people who understand the value of purposeful spending are willing to spend without hesitation on things they know will add value and bring them happiness, while being frugal with everything else.

**80-20 Rule**

If we apply the *Pareto Principle (also known as the 80-20 rule)*, only a small portion of our belongings (about 20%) is truly worth spending money on, yet these possessions bring us most of the outcomes we desire (about 80%). When we aren't mindful about our spending choices, we end up wasting money on things that hold no real value for us. Coupled with our cognitive bias towards *Loss Aversion*, this can lead us to hoard unnecessary items and even buy larger houses just to store them. As Chuck Palahniuk wrote in *Fight Club*, “We buy things we don't need with money we don't have to impress people we don't like.”

As a software engineer myself, I don't hesitate to invest in a high-quality laptop that costs several thousand dollars because it directly impacts my craft and enables me to write code or books effectively. Similarly, I don't think twice about buying healthy food, even if it may be more expensive than regular or unhealthy options. After all, if we aren't healthy, everything else becomes meaningless.

**10 Million Dollar Question**

There is a viral video on YouTube where one person asks another, “If I give you ten million dollars, would you take it?” The obvious answer is yes. But then the follow-up question is asked, “Would you take it if you wouldn't wake up tomorrow?” This prompts us to reflect on how the ability to live and wake up each day holds more value than any amount of money in the world. Unfortunately, there are people who take this for granted. I've encountered business associates from well-known companies who are extremely frugal when it comes to food but don't hesitate to spend money on expensive clothing. They fail to invest in their personal growth.

**Things That Own You**

I have a close friend who has always been obsessed with big-name brands and constantly craved the next new thing. At one point, I was traveling the world and happened to be visiting the country he was in.

Out of nowhere, he sent me a message asking about a plain yellow shirt from a specific brand that he wanted as a gift. The shirt itself appeared ordinary and reasonably durable, but I couldn't fathom why it would cost over $500. However, my friend insisted that this was the only shirt he wanted. It didn't matter if I had bought him any other yellow shirt; he would have been utterly disappointed as if something had gone wrong. In addition to this incident, he had asked me to buy various items for him in the past—always requesting specific brands without considering any aesthetic or practical aspects of those items.

He would travel with all his belongings packed into expensive luggage and take photos of them everywhere he went, as if these material possessions had lives of their own and were traveling alongside him. He constantly stressed about leaving his possessions in hotel rooms, triple-checked that he had locked them away, and avoided staying out for too long or taking his things with him to prevent theft.

The worst part was when he flew overseas and had to check in his luggage, being far away from his belongings caused him constant distress during the flight, worrying whether his luggage would arrive safely at his destination.

My friend lies on the extreme end of the spectrum when it comes to material possessions, but it's clear that these things have ended up owning him. They have taken on a life of their own, constantly gnawing at the back of his mind.

**Let Go And Grow**

Becoming a digital nomad or preparing to become one requires a shift in mindset. It's not about being excessively frugal or buying low-cost material items while surviving on instant noodles for the rest of your life in a developing country. That is no way to truly live. Instead, it's about understanding yourself and identifying the things that bring genuine value and meaning to your life. It's about being disciplined enough to let go of things that don't add value.

**Action Point**: Take a moment to look around your home and assess your belongings. Are there items you hold onto simply because you're afraid of losing them? Take stock of all your possessions and consider what truly adds value to your life

**Chapter Summary:Purpose-Driven Buys**

- The Pareto Principle (80-20 rule) applies to spending, with only a small portion of belongings being worth spending money on.
- Hoarding unnecessary items and buying larger houses to store them is a common consequence of mindless spending.
- Investing in high-quality tools or items that directly impact one's craft or well-being is justified.
- The value of waking up each day holds more importance than any amount of money.
- Material possessions can end up owning people and causing constant stress and anxiety.
- Becoming a digital nomad requires a shift in mindset, focusing on things that bring genuine value and meaning to life.
- Letting go of things that don't add value is essential for personal growth and fulfillment.
- Take stock of all possessions and consider what truly adds value to life.

Do you get tempted to buy things that go on sale only to end up regretting a purchase? Or do you equate buying things as a status symbol or measurement of success? Before we dive in deeper, no I am not suggesting you become as frugal or as cheap as possible. If you’ve read the book “I will teach you to be rich” by Ramit Sethi, he tells you to define what makes you happy and what are the things you actually want to spend on, go splurge on it, do not be cheap on things you want to spend on, but on everything else scrutinise be extra diligent. I’ve seen and read about millionaires being really frugal on one thing but extravagant on the other, Warren Buffet for example, still owns the same car he drove before earning his money. It’s because people that understand the true value of purposeful spending, they spend nonchalantly on things they know will add value to their lives and bring them happiness and be frugal in everything else. 

The Pareto Principle (80-20), tells us that the “vital few” (20%) brings us most (80%) of the outcomes we desire. Only 20% of our things are truly worth spending money on. If we are not vigilant on the things we spend on, we end up spending on things that are not valuable to us, and you add our cognitive bias of loss aversion we end up hoarding things and buying bigger houses to act as a storage for those very things. **Chuck Palahniuk, from [Fight Club](https://www.goodreads.com/work/quotes/68729)**, puts it more eloquently: “We buy things we don't need need with money we don’t have to impress people we don’t like”.

As a Software Engineer myself,I do not have issues buying a laptop that could cost several thousands of dollars, because that is where my craft is, that is what enables me to write code or books. I don’t bat an eye on buying healthy food as well even if sometimes they could be more expensive than regular or unhealthy food options, because if we aren’t healthy then everything would be for naught. There was a viral video in youtube where a guy asked another, “if I give you ten million dollars would you take it”, the other guy said yes as it was obviously a leading question, he then asked a follow-up question, “would you take it but you wouldn’t wake up tomorrow”. He then continued on explaining, how being able to live and wake up everyday is worth more than ten million dollars and we should be thankful each day that we are able to wake up each day and that really is worth more than any amount of dollars in the world. Unfortunately, there are folks who take this for granted, I’ve met a couple of business associates from well known companies who would penny pinch on food as much as they can because they are saving up for expensive watches. People who do not bat an eye buying expensive clothing but do not could not be bothered to spend money on their personal growth.

## That Yellow Shirt - Things that own you

I have a good friend of mine who was obsessed with big brands and always had an eye for the next thing and was never content of what he had. At the time, we were scheduled to catch up and I was already traveling the world and was visiting the country he was at, he had randomly sent me a message asking about a shirt of specific brand that he wanted as gift, it was plain looking shirt nothing out of the ordinary, a plain yellow shirt. I looked at closely, I couldn’t imagine what was so special about this shirt, I mean, yes it looked durable enough and it was nice, but I couldn’t fathom why it would cost more $500, but he was adamant that this was the shirt he wanted, it could’ve been a $20 shirt if not for the brand that embedded in the shirt. If you had gotten him any other yellow shirt, he would’ve displayed outmost disappointment as if you had done him something wrong. I did not end up getting him this shirt. Though, this was not the first occurrence that he had asked me the buy things for him, there was a specific watch that he wanted, and every time it was a very specific ask of a specific brand, never any aesthetic aspect of it or any practical use of anything it always had to be a brand. Every time he travelled he would bring all his stuff in his expensive luggage, taking photos of it wherever he want it was as if the material things had a life of it’s own travelling with him. He was under constant stress about leaving his things at the hotel, triple checking if he had locked away his things, he wouldn’t stay out to long or bring things wherever he went so that they didn’t get stolen. The worst was flying overseas, as he needed to check-in and was not in close proximity of his material things, he was in constant distress during the flight if his luggage and things would arrive where he was flying to. My friend lies toward the extreme end of the spectrum, but it was obvious that the things that he owned has now ended up owning him, it took a living breathing form in his end that constantly gnaw at the back of his mind.

As a digital nomad, or preparing to be one, requires a shift in mindset, it’s not about being frugal, or buying low cost material things, and living on a cup of noodles for the rest of your life in a poorer country. That is no way to live life. It’s more having that understanding of yourself, what are the things that bring me value and I really want to spend on that will make my life much more meaningful, from there being disciplined enough to understand what are the things that do not add value and letting them go. 

> **Action Point:** Take a look around your home and your things, what are the things that you keep because of loss aversion? Take a stock check of all your possessions and start considering what to do with things that do not add value.
>`;

const TweetExamples = `
 Twittify: I have an article below, I want you to generate a social media post in twitter.
The constraint is that it needs to be discreet and not talk about the article, generate me the key lessons learned in the article, add an emoticon on each lesson related to it, No hash tags at all.
  
Generate me 5 alternative tweets for this article.

`;

const TweetPrompts = `
Convert my article to Tweets like below:

ARTICLE:
Convert set of ideas below to an article similar to the example provided.

# Purpose Driven Buys

**Purpose Driven Buys**

"The price of anything is the amount of life you exchange for it." - Henry David Thoreau

Do you ever find yourself tempted to buy things simply because they're on sale, only to later regret your purchase? Or do you view buying things as a way to show off your status or measure your success? Before we delve deeper into this topic, let me clarify that I'm not suggesting you become incredibly frugal or cheap. In his book *"I Will Teach You to Be Rich," Ramit Sethi* advises defining what truly brings you happiness and what you genuinely want to spend money on. Splurge on those things, but scrutinise everything else and be extra diligent.

It's interesting to note that many millionaires are frugal in some areas of their lives while being extravagant in others. For example, Warren Buffet still drives the same car he had before he became wealthy. This is because people who understand the value of purposeful spending are willing to spend without hesitation on things they know will add value and bring them happiness, while being frugal with everything else.

**80-20 Rule**

If we apply the *Pareto Principle (also known as the 80-20 rule)*, only a small portion of our belongings (about 20%) is truly worth spending money on, yet these possessions bring us most of the outcomes we desire (about 80%). When we aren't mindful about our spending choices, we end up wasting money on things that hold no real value for us. Coupled with our cognitive bias towards *Loss Aversion*, this can lead us to hoard unnecessary items and even buy larger houses just to store them. As Chuck Palahniuk wrote in *Fight Club*, “We buy things we don't need with money we don't have to impress people we don't like.”

As a software engineer myself, I don't hesitate to invest in a high-quality laptop that costs several thousand dollars because it directly impacts my craft and enables me to write code or books effectively. Similarly, I don't think twice about buying healthy food, even if it may be more expensive than regular or unhealthy options. After all, if we aren't healthy, everything else becomes meaningless.

**10 Million Dollar Question**

There is a viral video on YouTube where one person asks another, “If I give you ten million dollars, would you take it?” The obvious answer is yes. But then the follow-up question is asked, “Would you take it if you wouldn't wake up tomorrow?” This prompts us to reflect on how the ability to live and wake up each day holds more value than any amount of money in the world. Unfortunately, there are people who take this for granted. I've encountered business associates from well-known companies who are extremely frugal when it comes to food but don't hesitate to spend money on expensive clothing. They fail to invest in their personal growth.

**Things That Own You**

I have a close friend who has always been obsessed with big-name brands and constantly craved the next new thing. At one point, I was traveling the world and happened to be visiting the country he was in.

Out of nowhere, he sent me a message asking about a plain yellow shirt from a specific brand that he wanted as a gift. The shirt itself appeared ordinary and reasonably durable, but I couldn't fathom why it would cost over $500. However, my friend insisted that this was the only shirt he wanted. It didn't matter if I had bought him any other yellow shirt; he would have been utterly disappointed as if something had gone wrong. In addition to this incident, he had asked me to buy various items for him in the past—always requesting specific brands without considering any aesthetic or practical aspects of those items.

He would travel with all his belongings packed into expensive luggage and take photos of them everywhere he went, as if these material possessions had lives of their own and were traveling alongside him. He constantly stressed about leaving his possessions in hotel rooms, triple-checked that he had locked them away, and avoided staying out for too long or taking his things with him to prevent theft.

The worst part was when he flew overseas and had to check in his luggage, being far away from his belongings caused him constant distress during the flight, worrying whether his luggage would arrive safely at his destination.

My friend lies on the extreme end of the spectrum when it comes to material possessions, but it's clear that these things have ended up owning him. They have taken on a life of their own, constantly gnawing at the back of his mind.

**Let Go And Grow**

Becoming a digital nomad or preparing to become one requires a shift in mindset. It's not about being excessively frugal or buying low-cost material items while surviving on instant noodles for the rest of your life in a developing country. That is no way to truly live. Instead, it's about understanding yourself and identifying the things that bring genuine value and meaning to your life. It's about being disciplined enough to let go of things that don't add value.

**Action Point**: Take a moment to look around your home and assess your belongings. Are there items you hold onto simply because you're afraid of losing them? Take stock of all your possessions and consider what truly adds value to your life

**Chapter Summary:Purpose-Driven Buys**

- The Pareto Principle (80-20 rule) applies to spending, with only a small portion of belongings being worth spending money on.
- Hoarding unnecessary items and buying larger houses to store them is a common consequence of mindless spending.
- Investing in high-quality tools or items that directly impact one's craft or well-being is justified.
- The value of waking up each day holds more importance than any amount of money.
- Material possessions can end up owning people and causing constant stress and anxiety.
- Becoming a digital nomad requires a shift in mindset, focusing on things that bring genuine value and meaning to life.
- Letting go of things that don't add value is essential for personal growth and fulfillment.
- Take stock of all possessions and consider what truly adds value to life.

Do you get tempted to buy things that go on sale only to end up regretting a purchase? Or do you equate buying things as a status symbol or measurement of success? Before we dive in deeper, no I am not suggesting you become as frugal or as cheap as possible. If you’ve read the book “I will teach you to be rich” by Ramit Sethi, he tells you to define what makes you happy and what are the things you actually want to spend on, go splurge on it, do not be cheap on things you want to spend on, but on everything else scrutinise be extra diligent. I’ve seen and read about millionaires being really frugal on one thing but extravagant on the other, Warren Buffet for example, still owns the same car he drove before earning his money. It’s because people that understand the true value of purposeful spending, they spend nonchalantly on things they know will add value to their lives and bring them happiness and be frugal in everything else. 

The Pareto Principle (80-20), tells us that the “vital few” (20%) brings us most (80%) of the outcomes we desire. Only 20% of our things are truly worth spending money on. If we are not vigilant on the things we spend on, we end up spending on things that are not valuable to us, and you add our cognitive bias of loss aversion we end up hoarding things and buying bigger houses to act as a storage for those very things. **Chuck Palahniuk, from [Fight Club](https://www.goodreads.com/work/quotes/68729)**, puts it more eloquently: “We buy things we don't need need with money we don’t have to impress people we don’t like”.

As a Software Engineer myself,I do not have issues buying a laptop that could cost several thousands of dollars, because that is where my craft is, that is what enables me to write code or books. I don’t bat an eye on buying healthy food as well even if sometimes they could be more expensive than regular or unhealthy food options, because if we aren’t healthy then everything would be for naught. There was a viral video in youtube where a guy asked another, “if I give you ten million dollars would you take it”, the other guy said yes as it was obviously a leading question, he then asked a follow-up question, “would you take it but you wouldn’t wake up tomorrow”. He then continued on explaining, how being able to live and wake up everyday is worth more than ten million dollars and we should be thankful each day that we are able to wake up each day and that really is worth more than any amount of dollars in the world. Unfortunately, there are folks who take this for granted, I’ve met a couple of business associates from well known companies who would penny pinch on food as much as they can because they are saving up for expensive watches. People who do not bat an eye buying expensive clothing but do not could not be bothered to spend money on their personal growth.

## That Yellow Shirt - Things that own you

I have a good friend of mine who was obsessed with big brands and always had an eye for the next thing and was never content of what he had. At the time, we were scheduled to catch up and I was already traveling the world and was visiting the country he was at, he had randomly sent me a message asking about a shirt of specific brand that he wanted as gift, it was plain looking shirt nothing out of the ordinary, a plain yellow shirt. I looked at closely, I couldn’t imagine what was so special about this shirt, I mean, yes it looked durable enough and it was nice, but I couldn’t fathom why it would cost more $500, but he was adamant that this was the shirt he wanted, it could’ve been a $20 shirt if not for the brand that embedded in the shirt. If you had gotten him any other yellow shirt, he would’ve displayed outmost disappointment as if you had done him something wrong. I did not end up getting him this shirt. Though, this was not the first occurrence that he had asked me the buy things for him, there was a specific watch that he wanted, and every time it was a very specific ask of a specific brand, never any aesthetic aspect of it or any practical use of anything it always had to be a brand. Every time he travelled he would bring all his stuff in his expensive luggage, taking photos of it wherever he want it was as if the material things had a life of it’s own travelling with him. He was under constant stress about leaving his things at the hotel, triple checking if he had locked away his things, he wouldn’t stay out to long or bring things wherever he went so that they didn’t get stolen. The worst was flying overseas, as he needed to check-in and was not in close proximity of his material things, he was in constant distress during the flight if his luggage and things would arrive where he was flying to. My friend lies toward the extreme end of the spectrum, but it was obvious that the things that he owned has now ended up owning him, it took a living breathing form in his end that constantly gnaw at the back of his mind.

As a digital nomad, or preparing to be one, requires a shift in mindset, it’s not about being frugal, or buying low cost material things, and living on a cup of noodles for the rest of your life in a poorer country. That is no way to live life. It’s more having that understanding of yourself, what are the things that bring me value and I really want to spend on that will make my life much more meaningful, from there being disciplined enough to understand what are the things that do not add value and letting them go. 

> **Action Point:** Take a look around your home and your things, what are the things that you keep because of loss aversion? Take a stock check of all your possessions and start considering what to do with things that do not add value.


`;
