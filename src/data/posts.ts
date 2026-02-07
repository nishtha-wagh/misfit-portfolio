export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Hot Take" | "Tutorial" | "Personal";
  date: string;
  readTime: string;
  likes: number;
  comments: number;
};

export const posts: BlogPost[] = [
  {
    slug: "why-your-ml-model-doesnt-need-more-data",
    title: "Why Your ML Model Doesn’t Need More Data",
    category: "Hot Take",
    date: "Jan 2026",
    readTime: "6 min read",
    excerpt:
      "Everyone’s obsessed with bigger datasets. But in production, real gains often come from better features, constraints, and problem framing.",
    content: `
## The Data Hoarding Problem

We’ve all been there. Your model’s accuracy plateaus at 87%, and the first instinct is always the same: *“We need more data.”*

But here’s the uncomfortable truth — **more data is rarely the answer**. In my experience, teams waste months collecting and labeling data when the real issue is hiding in plain sight.

## The Feature Engineering Goldmine

Let me share a real example. We had a churn model stuck at 82% accuracy with 500K records. Instead of scraping another million users, we engineered better features:

- Session decay rate — how quickly engagement drops
- Feature adoption velocity — speed of trying new features
- Support ticket sentiment trajectory — sentiment trends over time

The result? **91% accuracy. Zero new data points.**

## Domain Expertise > Data Volume

The best data scientists aren’t the ones with the biggest datasets. They’re the ones who ask the “dumb” questions and translate domain intuition into mathematical signals.

## When You Actually Need More Data

Sometimes you genuinely do:
1. Severe class imbalance
2. New market segments
3. Temporal shifts where old data no longer applies

But these are diagnosable problems — not defaults.

## The Takeaway

Audit your features. Talk to domain experts. Check for leakage.  
**Think differently before you collect differently.**
`,
    likes: 342,
    comments: 47,
  },
];