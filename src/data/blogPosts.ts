
export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  publishDate: string;
  dateFormatted: string;
  category: 'product-management' | 'case-study' | 'tutorial';
  tags: string[];
  link: string;
  imageUrl?: string;
  content: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "how-i-became-a-product-manager",
    title: "How I Became a Product Manager",
    summary: "Chronicles the journey from a Unity developer to a Product Manager, highlighting challenges and strategies.",
    publishDate: "2021-07-12",
    dateFormatted: "July 12, 2021",
    category: "product-management",
    tags: ["career", "product management", "journey", "development"],
    link: "https://www.rahulohri.com/post/how-i-became-a-product-manager",
    imageUrl: "/placeholder.svg",
    featured: true,
    content: `
# How I Became a Product Manager

My journey from a Unity game developer to a Product Manager wasn't straightforward, but it was rewarding. After several years of building games and understanding player psychology, I realized my passion extended beyond code to the overall product strategy.

## Challenges Faced

The transition required learning new skills:
- Understanding business metrics
- Developing strong communication with stakeholders
- Learning data analytics and A/B testing
- Balancing technical feasibility with business goals

## Strategies That Worked

What helped me succeed:
1. **Leveraging technical knowledge**: Understanding the development process helped me create more realistic roadmaps
2. **Focusing on user needs**: My experience with player feedback in games translated well to product development
3. **Continuous learning**: Taking courses on product management and analytics
4. **Finding mentors**: Connecting with experienced PMs who guided my early decisions

This transition taught me that product management is ultimately about solving problems for users while achieving business goals - skills I had already begun developing as a game developer.
    `
  },
  {
    id: "product-requirement-document-movie-review",
    title: "Product Requirement Document for a Feature on a Movie Review Website",
    summary: "Presents a structured PRD for a 'Trending Movies' feature, aimed at improving user engagement.",
    publishDate: "2021-02-04",
    dateFormatted: "February 4, 2021",
    category: "product-management",
    tags: ["PRD", "product documentation", "feature development", "user engagement"],
    link: "https://www.rahulohri.com/post/product-requirment-document-for-a-feature-on-a-movie-review-website",
    imageUrl: "/placeholder.svg",
    content: `
# Product Requirement Document: Trending Movies Feature

## Overview
This PRD outlines the implementation of a "Trending Movies" feature for a movie review website, designed to increase user engagement and time spent on the platform.

## Problem Statement
Users currently struggle to discover popular movies that align with their interests, leading to reduced engagement and limited return visits.

## Goals
- Increase daily active users by 15%
- Increase average session duration by 20%
- Improve content discovery metrics by highlighting trending content

## User Stories
- As a movie enthusiast, I want to see which movies are currently trending so I can stay informed about popular content
- As a casual user, I want recommendations based on what's popular to help guide my viewing choices
- As a return visitor, I want to see trending content updated regularly to keep me engaged

## Feature Specifications

### Trending Algorithm
- Based on: view count, review submissions, social shares, and recency
- Weighting factors: 40% view count, 30% review activity, 20% social shares, 10% recency
- Time window: Rolling 7-day period with daily updates

### UI/UX Requirements
- Prominent placement on homepage (above the fold)
- Horizontal scrollable carousel with 5 visible items
- Movie cards showing: poster, title, trending rank, and trend direction indicator
- Visual indicator for movies that have moved up in ranking

### Technical Considerations
- Data storage for trend calculations
- Caching strategy to reduce load times
- Analytics implementation to track feature performance
    `
  },
  {
    id: "case-study-stick-cricket-live",
    title: "Case Study: Increasing Engagement & Monetization for Stick Cricket Live",
    summary: "Analyzes methods to improve engagement and revenue, including boosters, in-game currency options, and subscriptions.",
    publishDate: "2021-01-17", 
    dateFormatted: "January 17, 2021",
    category: "case-study",
    tags: ["game design", "monetization", "user engagement", "mobile gaming"],
    link: "https://www.rahulohri.com/post/case-study-increase-engagement-and-monetization-for-stick-cricket-live",
    imageUrl: "/placeholder.svg",
    content: `
# Case Study: Increasing Engagement & Monetization for Stick Cricket Live

## Game Overview
Stick Cricket Live is a popular mobile cricket game with a strong player base but opportunities for improved engagement and monetization.

## Current Metrics
- DAU: 250,000
- Retention (D1): 35%
- Retention (D7): 18%
- ARPDAU: $0.12
- Conversion rate: 2.3%

## Engagement Improvement Strategies

### 1. Tournament Mode
Implementing a tournament structure with:
- Daily qualifying rounds
- Weekend finals with premium rewards
- Leaderboards to foster competition
- Expected impact: +20% increase in session frequency

### 2. Social Features
- Friend challenges with custom rules
- Team creation and management
- Global and friend leaderboards
- Expected impact: +15% increase in D7 retention

## Monetization Strategies

### 1. Booster System
- Match boosters (power hits, slower bowling)
- Training boosters (faster skill progression)
- Limited-use items creating urgency to purchase
- Projected ARPDAU increase: +$0.03

### 2. Premium Currency Optimization
- Dual currency system (coins and premium currency)
- Dynamic bundle pricing with bonus currency
- First-time purchase incentives
- Projected conversion rate increase: +0.7%

### 3. Subscription Model
- "Cricket Pro" monthly subscription ($4.99)
- Daily currency rewards
- Exclusive player customizations
- Early access to new content
- Projected adoption rate: 1.5% of DAU

## Implementation Roadmap
1. Phase 1: Tournament mode and boosters (Q1)
2. Phase 2: Social features enhancement (Q2)
3. Phase 3: Subscription model rollout (Q3)

By implementing these strategies in stages and closely monitoring metrics, Stick Cricket Live could see a 30% increase in ARPDAU and 25% improvement in retention metrics within two quarters.
    `
  },
  {
    id: "case-study-gardenscapes",
    title: "Case Study: Increasing Engagement & Monetization for Gardenscapes",
    summary: "Hypotheses on improving player engagement and monetization, such as reward timing adjustments and ad-based coin earnings.",
    publishDate: "2020-09-16",
    dateFormatted: "September 16, 2020",
    category: "case-study",
    tags: ["game design", "monetization", "mobile gaming", "casual games"],
    link: "https://www.rahulohri.com/post/case-study-increase-engagement-and-monetization-for-gardenscapes",
    imageUrl: "/placeholder.svg",
    content: `
# Case Study: Increasing Engagement & Monetization for Gardenscapes

## Game Overview
Gardenscapes is a popular match-3 puzzle game with garden restoration elements and narrative components.

## Current Performance Analysis
- Strong initial retention (45% D1)
- Declining mid-term retention (22% D7, 8% D30)
- ARPDAU: $0.15
- IAP conversion: 3.1%

## Engagement Improvement Hypotheses

### Hypothesis 1: Reward Timing Adjustment
**Problem**: Players often quit after failing levels multiple times
**Solution**: Implement a dynamic difficulty adjustment system that:
- Analyzes player failure patterns
- Slightly reduces difficulty after consecutive failures
- Provides timely boosters when player frustration is detected
**Expected Outcome**: 15% reduction in churn at difficult level transitions

### Hypothesis 2: Social Gardening Features
**Problem**: Limited social interaction reduces long-term attachment
**Solution**: Implement garden visiting and collaboration:
- Visit friends' gardens for daily rewards
- Collaborative garden projects between friends
- Gifting system for in-game resources
**Expected Outcome**: 20% improvement in D30 retention for players who engage with social features

## Monetization Improvement Hypotheses

### Hypothesis 1: Ad-Based Coin Earnings
**Problem**: Low engagement with current ad offerings
**Solution**: Create a rewarded ad system that:
- Offers coins for watching ads with increasing rewards for consecutive days
- Implements "piggy bank" that fills with each ad watched
- Creates limited-time 2x reward events
**Expected Outcome**: 30% increase in ad revenue, 10% increase in overall ARPDAU

### Hypothesis 2: Battle Pass Implementation
**Problem**: Lack of compelling recurring purchase options
**Solution**: Create a "Garden Pass" subscription that:
- Costs $4.99 monthly
- Provides daily rewards and exclusive decorations
- Includes special character outfits and storylines
- Offers priority access to special events
**Expected Outcome**: 2% adoption rate with 70% renewal rate

## Testing & Implementation Plan
1. A/B test dynamic difficulty adjustment (4 weeks)
2. Roll out social features to 10% of users (6 weeks)
3. Test ad rewards system with cohort analysis (4 weeks)
4. Soft launch subscription in select markets (8 weeks)

By implementing and testing these hypotheses sequentially, Gardenscapes could significantly improve both retention metrics and monetization efficiency.
    `
  }
];
