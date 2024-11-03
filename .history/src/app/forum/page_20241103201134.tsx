"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Search, MessageSquare, Star, TrendingUp, Users, Clock, BookOpen, Heart, Share2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ForumPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // SEO Data
  const seoData = {
    title: "Singer Sewing Machines Forum - Join the Community | Discuss, Learn & Share",
    description: "Connect with Singer sewing enthusiasts, share projects, get machine advice, and discover techniques. Join our active community of sewists and makers.",
    keywords: "Singer sewing machines, sewing forum, sewing community, sewing tips, machine maintenance, vintage Singer, modern Singer, sewing projects",
    ogImage: "/images/forum-preview.jpg",
  };

  // Categories
  const categories = [
    { id: "all", name: "All Topics", icon: BookOpen },
    { id: "vintage", name: "Vintage Machines", icon: Camera },
    { id: "modern", name: "Modern Models", icon: Star },
    { id: "techniques", name: "Techniques", icon: TrendingUp },
    { id: "help", name: "Help & Support", icon: MessageSquare },
  ];

  // Forum posts data
  const forumPosts = [
    {
      id: 1,
      category: "vintage",
      title: "Restoring a 1947 Singer 201-2: Complete Guide",
      author: {
        name: "VintageSewer",
        avatar: "/api/placeholder/32/32",
      },
      preview: "I've just completed restoring my grandmother's Singer 201-2 and wanted to share the complete process...",
      likes: 234,
      comments: 56,
      views: 1205,
      timeAgo: "2 hours ago",
      tags: ["restoration", "vintage", "201-2"],
      pinned: true,
    },
    {
      id: 2,
      category: "modern",
      title: "Singer Quantum Stylist 9960: Hidden Features",
      author: {
        name: "ModernMaker",
        avatar: "/api/placeholder/32/32",
      },
      preview: "After using the Quantum Stylist for 6 months, I've discovered some amazing hidden features...",
      likes: 189,
      comments: 43,
      views: 890,
      timeAgo: "5 hours ago",
      tags: ["modern", "quantum-stylist", "tips"],
    },
    // Add more posts here
  ];

  // Trending topics
  const trendingTopics = [
    "Singer Heavy Duty 4452 Review",
    "Vintage vs Modern Debate",
    "Best Oil for Singer Machines",
    "Computerized Models Guide",
  ];

  // Stats component
  const ForumStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {[
        { icon: Users, label: "Members", value: "12,458" },
        { icon: MessageSquare, label: "Discussions", value: "45,789" },
        { icon: Clock, label: "Hours Shared", value: "98,234" },
        { icon: Heart, label: "Projects Shared", value: "23,456" },
      ].map((stat, index) => (
        <Card key={index} className="text-center">
          <CardContent className="pt-6">
            <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  // Post card component
  const PostCard = ({ post }) => (
    <Card className="mb-4 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={post.author.avatar} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg hover:text-blue-600 cursor-pointer">
                {post.title}
              </CardTitle>
              <CardDescription>
                Posted by {post.author.name} • {post.timeAgo}
              </CardDescription>
            </div>
          </div>
          {post.pinned && (
            <Badge variant="secondary">Pinned</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{post.preview}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-gray-500">
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm" className="flex items-center">
            <Heart className="w-4 h-4 mr-2" />
            {post.likes}
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center">
            <MessageSquare className="w-4 h-4 mr-2" />
            {post.comments}
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
        <span>{post.views} views</span>
      </CardFooter>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://example.com/forum" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Welcome to the Singer Community
          </motion.h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of sewing enthusiasts sharing knowledge, projects, and passion
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="search"
                placeholder="Search discussions..."
                className="w-full pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Forum Stats */}
        <ForumStats />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <category.icon className="w-4 h-4 mr-2" />
                      {category.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Trending Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {trendingTopics.map((topic, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <TrendingUp className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="hover:text-blue-600 cursor-pointer">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Posts Feed */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Latest Discussions</h2>
              <Button>
                Start Discussion
              </Button>
            </div>

            <Tabs defaultValue="latest">
              <TabsList>
                <TabsTrigger value="latest">Latest</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
              </TabsList>

              <TabsContent value="latest">
                <AnimatePresence>
                  {forumPosts
                    .filter(post => activeCategory === "all" || post.category === activeCategory)
                    .map((post) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <PostCard post={post} />
                      </motion.div>
                    ))}
                </AnimatePresence>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <p className="text-gray-400">
                The largest online community for Singer sewing machine enthusiasts.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/guidelines" className="hover:text-white">Community Guidelines</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                {/* Add social media icons/links here */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Singer Machines Forum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}